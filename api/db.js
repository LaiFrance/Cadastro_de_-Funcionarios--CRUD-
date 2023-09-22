import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "851514",
    database: "cadastro_de_funcionarios",
})