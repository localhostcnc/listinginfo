const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const db = require('../database/queries.js');


const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json({ extended: true }));
app.use(cors());

app.use(express.static('public/'));

app.get('/listing_info/:id', (req, res) => {
  const { id } = req.params;
  db.getInfo(id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

module.exports = app;
