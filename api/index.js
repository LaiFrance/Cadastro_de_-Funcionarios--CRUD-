import express from "express";
import { db } from "./db.js";
import userRoutes from "./routes/users.js";
import cors from "cors";
require("dotenv").config();

const port = process.env.DB_PORT || 8800;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);

app.listen(port); // Porta 8800

// message conexao com o banco de dados
db.connect(err => {
  if (err) {
    console.log("Erro ao conectar ao banco de dados");
  }
  console.log("Conectado ao banco de dados");
});
