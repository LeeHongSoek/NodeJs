const path = require('path')
require('dotenv').config({path : path.join(__dirname, 'config.env')})

const connection = {
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PASS,
    port            : process.env.DB_PORT,
    database        : process.env.DB_DATABASE,
    connectionLimit : 30
}
const mysql = require('mysql') // npm install -S mysql

module.exports = mysql.createPool(connection)