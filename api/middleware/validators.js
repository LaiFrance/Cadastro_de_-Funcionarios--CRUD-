import express from 'express';



export const validateEmpresa = (req, res, next) => {

    const { nome_empresa, cnpj, cep, endereco, numero, telefone, email } = req.body;

    if (typeof nome_empresa !== 'string' || nome_empresa.length > 50) {
        return res.status(400).json({ error: 'Nome inválido' });
    }

    if (typeof cnpj !== 'string' || cnpj.length > 14) {
        return res.status(400).json({ error: 'CNPJ inválido' });
    }

    if (typeof cep !== 'string' || cep.length > 8) {
        return res.status(400).json({ error: 'CEP inválido' });
    }

    if (typeof endereco !== 'string' || endereco.length > 50) {
        return res.status(400).json({ error: 'Endereço inválido' });
    }

    if (typeof numero !== 'string' || numero.length > 10) {
        return res.status(400).json({ error: 'Número inválido' });
    }

    if (typeof telefone !== 'string' || telefone.length > 15) {
        return res.status(400).json({ error: 'Telefone inválido' });
    }

    if (typeof email !== 'string' || !email.includes('@') || email.length > 100) {
        return res.status(400).json({ error: 'Email inválido' });
    }

    next();
}

export const validateUser = (req, res, next) => {
    
        const { nome, email, fone, data_nascimento, data_entrada } = req.body;
    
        if (typeof nome !== 'string' || nome.length > 50) {
            return res.status(400).json({ error: 'Nome inválido' });
        }
    
        if (typeof email !== 'string' || !email.includes('@') || email.length > 100) {
            return res.status(400).json({ error: 'Email inválido' });
        }
    
        if (typeof fone !== 'string' || fone.length > 15) {
            return res.status(400).json({ error: 'Telefone inválido' });
        }
    
        if (typeof data_nascimento !== 'string' || data_nascimento.length > 10) {
            return res.status(400).json({ error: 'Data de nascimento inválida' });
        }
    
        if (typeof data_entrada !== 'string' || data_entrada.length > 10) {
            return res.status(400).json({ error: 'Data de entrada inválida' });
        }
    
        next();
    }


