const { Pool } = require('pg');

const pool = new Pool({
  user: 'connorhoman',
  host: 'localhost',
  database: 'listing_info',
  password: 'connorhoman',
});

const getInfo = (req, res) => {
  pool.query('SELECT * FROM listing_info', (err, results) => {
    if (err) {
      throw (err);
    } else {
      res.json(results.rows);
    }
  });
};

module.exports = { getInfo };
