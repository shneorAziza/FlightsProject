const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'admin1234',
      database: 'airline_project',
    },
  });

  module.exports = {
    knex
  }