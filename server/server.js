const app = require('./app');

const port = 1234;

app.listen(port, (err) => {
  if (err) {
    throw err;
  }
});
