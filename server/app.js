const express = require('express');
const bodyparser = require('body-parser');
const db = require('../database/queries.js');

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json({ extended: true }));

app.use(express.static('public/'));

app.get('/listing_info', db.getInfo);

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

module.exports = app;
