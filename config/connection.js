// Import the Sequelize constructor from the library
const Sequelize = require('sequelize');
var mysql = require("mysql2");

require('dotenv').config();

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'geeks_db',
    port: 3306
  });
}

connection.connect();

module.exports = connection;