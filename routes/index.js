const express = require('express');
const notesRouter = require('./notes');
const app = express();
app.use('/api/tips', notesRouter);
module.exports = app;