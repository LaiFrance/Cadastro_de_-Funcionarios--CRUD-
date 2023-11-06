import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { toast } from 'react-toastify'

const Table = styled.table`
  width: 100%;
  max-width: 100%; /* Use 100% da largura disponível */
  background-color: #fff;
  padding: 20px; /* Reduzi o padding para melhorar o espaçamento */
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  overflow-x: auto; /* Adiciona rolagem horizontal para tabelas largas */
  margin: 20px auto; /* Reduzi a margem para melhorar a centralização */
  word-break: break-all;
`

export const Thead = styled.thead``

export const Tbody = styled.tbody``

export const Tr = styled.tr``

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && 'display: none'}
  }
`

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? 'center' : 'start')};
  width: ${(props) => (props.width ? props.width : 'auto')};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && 'display: none'}
  }

    @media (max-width: 500px) {
    ${(props) => props.onlyWeb && 'display: none'}

    }
`



const TableEmpresas = ({ empresas, setEmpresas, setOnEdit }) => {
  const handleEdit = (empresas) => {
    setOnEdit(empresas)
  }

  
  const handleDelete = async (id) => {
    await axios
      .delete('http://localhost:8800/empresas/' + id)
      .then(({ data }) => {
        const newArray = empresas.filter((empresas) => empresas.id !== id)

        setEmpresas(newArray)
        toast.success(data)
      })
      .catch(({ data }) => toast.error(data))
  }

  return (
    <Table>
      <Thead>
        <Tr>
          {/* //nome em ordem alfabetica */}
          <Th>Nome</Th>
          <Th>CNPJ</Th>
          <Th onlyWeb>CEP</Th>
          <Th onlyWeb>Endereço</Th>
          <Th onlyWeb>Número</Th>
          <Th onlyWeb>Telefone</Th>
          <Th>Email</Th>
          <Th onlyWeb>Editar</Th>
          <Th onlyWeb>Excluir</Th>
        </Tr>
      </Thead>
      <Tbody>
        {empresas.map((item, i) => (
          <Tr key={i}>
            <Td>{item.nome_empresa}</Td>
            <Td>{item.cnpj}</Td>
            <Td onlyWeb>{item.cep}</Td>
            <Td onlyWeb>{item.endereco}</Td>
            <Td onlyWeb>{item.numero}</Td>
            <Td onlyWeb>{item.telefone}</Td>
            <Td>{item.email}</Td>
            <Td onlyWeb>
              <button onClick={() => handleEdit(item)}>
                <FaEdit />
              </button>
            </Td>
            <Td onlyWeb>
              <button onClick={() => handleDelete(item.id)}>
                <FaTrash />
              </button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )

}

export default TableEmpresas