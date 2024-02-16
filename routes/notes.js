const router = require("express").Router();
const db = require("../db/db.json");
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

// GET request for notes
router.get("/notes", (req, res) => {
  res.status(200).json(db);
});

router.post("/notes/", (req, res) => {
    // req.body, req.params
    const { text, title } = req.body;

    const newObj = {
        text, 
        title, 
        id:uuidv4()
    }

    db.push(newObj)

    fs.writeFile('./db/db.json', JSON.stringify(db), (err, res)=> {
        if (err)throw err;
    })
    res.json('note added');

});

// Delete function
router.delete('/api/notes/:id', (req, res) => {
    let data = fs.readFileSync('db/db.json', "headers");
const dataJSON = JSON.parse(data);
const newNotes = dataJSON.filter((note)=> {
    return note.id !== req.params.id;
});

fs.writeFileSync("/db/db.json", JSON.stringify(newNotes));
res.json("Successfully deleted");
});

module.exports = router;