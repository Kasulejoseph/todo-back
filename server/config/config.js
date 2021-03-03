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
    username: "postgres",
    password: "password",
    database: "todo_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: process.env.USERNAME_PROD,
    password: process.env.PASSWORD_PROD,
    database: process.env.DATABASE_PROD,
    host: process.env.DATABASE_HOSTNAME,
    dialect: "postgres",
    logging: false,
    ssl: true
  }
}
