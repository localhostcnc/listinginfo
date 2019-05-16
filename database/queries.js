const { Pool } = require('pg');

const pool = new Pool({
  user: 'connorhoman',
  host: 'localhost',
  database: 'listing_info',
  password: 'connorhoman',
});

const getUsers = (req, res) => {
  pool.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.json(results.rows);
    }
  });
};

module.exports = { getUsers };
