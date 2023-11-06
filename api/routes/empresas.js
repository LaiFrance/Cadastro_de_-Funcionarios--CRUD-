const express = require('express');


const {
    getEmpresas,
    addEmpresa,
    updateEmpresaId,
    deleteEmpresaId,
    
    } = require('../controllers/empresas');

const router = express.Router();

router.get('/empresas', getEmpresas);
router.post('/empresas', addEmpresa);
router.put('/empresas/:id', updateEmpresaId);
router.delete('/empresas/:id', deleteEmpresaId);



module.exports = router;



