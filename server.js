// Line 2: Import Express, Line 3:require path, Line 4: access port, Line 6: require routes
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;

const routes = require('./routes')

const app = express();
// Call to use JSON
app.use(express.json());
// Middleware Line 12, 13, & 15
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// API for routes
app.use('/api', routes)

// Gets files from notes.html file
app.get('/notes', (req, res)=>{
  res.sendFile(path.join(__dirname, './public/notes.html'))
})
// Gets files from index.html file
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, './public/index.html'))
})

// Listen on the defined port for the server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

