const express = require('express');
const bodyparser = require('body-parser');
const db = require('../database/queries.js');

const app = express();
const port = 3006;

app.use(bodyparser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static('client/'));

app.get('/listing_info', db.getInfo);
app.get('/', () => {
  console.log('Recieved GET request');
});

app.listen(port, (err) => {
  if (err) {
    throw err;
  } else {
    console.log('Listening to Port:', port);
  }
});
