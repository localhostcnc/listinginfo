module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgres://localhost:5432/listing_info',
    migrations: {
      directory: __dirname + '/database/migrations'
    },
    seeds: {
      directory: __dirname + '/database/seeds'
    },
  },
};
