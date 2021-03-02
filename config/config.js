require('dotenv/config');


module.exports = {
  development: {
    username: process.env.USERNAME_DEV,
    password: process.env.PASSWORD_PROD,
    database: process.env.DATABASE_DEV,
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: process.env.USERNAME_TEST,
    password: process.env.PASSWORD_TEST,
    database: process.env.DATABASE_TEST,
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: process.env.USERNAME_PROD,
    password: process.env.PASSWORD_PROD,
    database: process.env.DATABASE_PROD,
    host: "127.0.0.1",
    dialect: "postgres"
  }
}
