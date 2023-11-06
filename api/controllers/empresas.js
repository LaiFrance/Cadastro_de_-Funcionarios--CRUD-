const db = require("../db");

const getEmpresas = (_, res) => {
  const q = "SELECT * FROM empresas";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

const addEmpresa = (req, res) => {
  const q =
    "INSERT INTO empresas(`nome_empresa`, `cnpj`, `cep`, `endereco`, `numero`, `telefone`, `email`) VALUES (?, ?, ?, ?, ?, ?, ?)";

  const values = [
    req.body.nome_empresa,
    req.body.cnpj,
    req.body.cep,
    req.body.endereco,
    req.body.numero,
    req.body.telefone,
    req.body.email,
  ];
  

  db.query(q, values, (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Empresa criada com sucesso.");
  });
};

const updateEmpresaId = (req, res) => {
  const q =
    "UPDATE empresas SET `nome_empresa` = ?, `cnpj` = ?, `cep` = ?, `endereco` = ?, `numero` = ?, `telefone` = ?, `email` = ? WHERE `id` = ?";

  const values = [
    req.body.nome_empresa,
    req.body.cnpj,
    req.body.cep,
    req.body.endereco,
    req.body.numero,
    req.body.telefone,
    req.body.email,
    req.params.id,
  ];

  db.query(q, values, (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Empresa atualizada com sucesso.");
  });
};

const deleteEmpresaId = (req, res) => {
  const q = "DELETE FROM empresas WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Empresa deletada com sucesso.");
  });
};

module.exports = {
  getEmpresas,
  addEmpresa,
  updateEmpresaId,
  deleteEmpresaId,
}