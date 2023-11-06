import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import BuscarEmpresas from './BuscarEmpresas'

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #f0f0f0;
  padding: 30px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`

const Label = styled.label``

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;

`


  const EmpresaForm = ({ onEdit, setOnEdit, getEmpresas }) => {
    const ref = useRef(null)
  
    useEffect(() => {
      if (onEdit) {
        const empresas = ref.current
  
    empresas.nome_empresa.value = onEdit.nome_empresa
    empresas.cnpj.value = onEdit.cnpj
    empresas.cep.value = onEdit.cep
    empresas.endereco.value = onEdit.endereco
    empresas.numero.value = onEdit.numero
    empresas.telefone.value = onEdit.telefone
    empresas.email.value = onEdit.email

  console.log(empresas)
      }

      
    }, [onEdit])
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
        const empresas = ref.current
  
        if (
            !empresas.nome_empresa.value ||
            !empresas.cnpj.value ||
            !empresas.cep.value ||
            !empresas.endereco.value ||
            !empresas.numero.value ||
            !empresas.telefone.value ||
            !empresas.email.value
            ) {
            toast.error('Preencha todos os campos.')
            return
            }

        if (onEdit) {
            await axios
            .put('http://localhost:8800/empresas/' + onEdit.id, {
                nome_empresa: empresas.nome_empresa.value,
                cnpj: empresas.cnpj.value,
                cep: empresas.cep.value,
                endereco: empresas.endereco.value,
                numero: empresas.numero.value,
                telefone: empresas.telefone.value,
                email: empresas.email.value,
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data))
        }
        else {
            await axios
            .post('http://localhost:8800/empresas', {
                nome_empresa: empresas.nome_empresa.value,
                cnpj: empresas.cnpj.value,
                cep: empresas.cep.value,
                endereco: empresas.endereco.value,
                numero: empresas.numero.value,
                telefone: empresas.telefone.value,
                email: empresas.email.value,
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data))
          }
        empresas.nome_empresa.value = ''
        empresas.cnpj.value = ''
        empresas.cep.value = ''
        empresas.endereco.value = ''
        empresas.numero.value = ''
        empresas.telefone.value = ''
        empresas.email.value = ''
        
        setOnEdit(null)
        getEmpresas()
      }

    return (
        <><div>
        <h4>Buscar Empresa</h4>
        <BuscarEmpresas
          getEmpresas={getEmpresas} />
      </div><FormContainer ref={ref} onSubmit={handleSubmit}>

          <InputArea>
            <Label>Nome da Empresa</Label>
            <Input type="text" name="nome_empresa" />
          </InputArea>
          <InputArea>
            <Label>CNPJ</Label>
            <Input type="text" name="cnpj" />
          </InputArea>
          <InputArea>
            <Label>CEP</Label>
            <Input type="text" name="cep" />
          </InputArea>
          <InputArea>
            <Label>Endereço</Label>
            <Input type="text" name="endereco" />
          </InputArea>
          <InputArea>
            <Label>Número</Label>
            <Input type="text" name="numero" />
          </InputArea>
          <InputArea>
            <Label>Telefone</Label>
            <Input type="text" name="telefone" />
          </InputArea>
          <InputArea>
            <Label>Email</Label>
            <Input type="text" name="email" />
          </InputArea>
          <Button onSubmit={handleSubmit}>Salvar</Button>

        </FormContainer></>
    )
}

export default EmpresaForm