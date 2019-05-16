const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = 3006;
const db = require('./queries.js')

app.use(bodyparser());
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static('client/'));

app.get('/users', db.getUsers);
app.get('/', (req, res) => {
  console.log('Recieved GET request');
});

app.listen(port, (err) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Listening to Port:", port);
  }
});


