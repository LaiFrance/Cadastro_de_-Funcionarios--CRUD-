import mysql from "mysql"

export const db = mysql.createConnection({
    host: process.env.DB_HOST,         // Use a variável de ambiente para o host
    user: process.env.DB_USER,         // Use a variável de ambiente para o usuário
    password: process.env.DB_PASSWORD, // Use a variável de ambiente para a senha
    database: process.env.DB_DATABASE  // Use a variável de ambiente para o nome do banco de dados
})

