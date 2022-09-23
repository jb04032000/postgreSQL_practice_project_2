// require("dotenv").config();

module.exports = {
  development: {
    url: "postgres://postgres:shiv@127.0.0.1:5432/dev_db",
    // url: process.env.DEV_DATABASE_URL,
    dialect: "postgres",
  },
  test: {
    url: "postgres://postgres:shiv@127.0.0.1:5432/test_db",
    // url: process.env.TEST_DATABASE_URL,
    dialect: "postgres",
  },
  production: {
    url: "postgres://postgres:shiv@127.0.0.1:5432/test_db",
    // url: process.env.DATABASE_URL,
    dialect: "postgres",
  },
};
