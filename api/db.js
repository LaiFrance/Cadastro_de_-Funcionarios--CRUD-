const mysql = require("mysql");
const dotenv = require("dotenv");



dotenv.config();

module.exports = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

});

console.log(process.env.DB_HOST); // Exemplo de acesso a uma variável