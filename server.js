const express = require('express');
const path = require('path');
const notes = require('public/notes.html')
const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// GET request for notes
app.get('/api/notes', (req, res) => {
  res.status(200).json(notes);
});

// POST request to add a note
app.post('/api/notes', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a note`);
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
