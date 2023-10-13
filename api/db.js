import mysql from "mysql";
require("dotenv").config();

const port = process.env.PORT || 3000;

export const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
