const knex = require('knex');

const db = knex({
  client: "mysql",
  connection:{
    host: "localhost",
    user: "root",
    database: "node-course"
  }
});

module.exports = db;
