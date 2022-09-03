const dotenv = require('dotenv')
dotenv.config()

const development = {
  DATABASE: process.env.DATABASE,
  USER_NAME: process.env.USER_NAME,
  PASSWORD: process.env.PASSWORD,
  HOST: process.env.HOST,
  PORT: process.env.PORT,
};

module.exports = {development}