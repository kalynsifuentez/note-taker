const router = require('express').Router();

// Import our modular routers for /notes
const notesRouter = require('public/notes.html');

router.use('public/notes.html', notesRouter);

module.exports = router;
