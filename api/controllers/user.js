const db = require("../db");


const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

const addUser = (req, res) => {
    const q =
      "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`, `data_entrada`) VALUES (?, ?, ?, ?, ?)";
    
    const values = [
      req.body.nome,
      req.body.email,
      req.body.fone,
      req.body.data_nascimento,
      req.body.data_entrada,
    ];
  
    db.query(q, values, (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário criado com sucesso.");
    });
  };
  

  const updateUser = (req, res) => {
    const q =
      "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ?, `data_entrada` = ? WHERE `id` = ?";
  
    const values = [
      req.body.nome,
      req.body.email,
      req.body.fone,
      req.body.data_nascimento,
      req.body.data_entrada,
      req.params.id,
    ];
  
    db.query(q, values, (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário atualizado com sucesso.");
    });
  };
  


const deleteUser = (req, res) => {
  const q = "DELETE FROM usuarios WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};

module.exports = {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
};