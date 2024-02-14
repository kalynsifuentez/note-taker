const router = require('express').Router();

// Import our modular routers for /notes
const notesRouter = require('./notes');

router.use('/', notesRouter);

module.exports = router;

//Notes for tutoring session: In this router I am trying to access the Get Started button to access the notes.html