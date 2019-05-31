const { Pool } = require('pg');

const pool = new Pool({
  user: 'connorhoman',
  host: 'postgres://database/listing_info',
  database: 'listing_info',
  password: 'connorhoman',
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
