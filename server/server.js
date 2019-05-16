const express = require('express');
const app = express();
const port = 3006;

app.use(express.static('client/'));

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