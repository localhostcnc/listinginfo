const app = require('./app');

const port = 3006;

app.listen(port, (err) => {
  if (err) {
    throw err;
  }
});
