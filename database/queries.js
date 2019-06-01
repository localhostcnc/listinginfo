const { Pool } = require('pg');

const pool = new Pool({
  user: 'connorhoman',
  host: '0.0.0.0',
  database: 'listinginfo',
  password: 'connorhoman',
  port: 5432,
});

const getInfo = (id, callback) => {
  pool.query(`SELECT * FROM listing_info WHERE listing_id = ${id}`, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results.rows);
    }
  });
};

module.exports = { getInfo };
