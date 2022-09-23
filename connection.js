const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "shiv",
  database: "postgres_project_2",
});

module.exports = client;
