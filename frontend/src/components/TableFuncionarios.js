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
`

const TableFuncionarios = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (user) => {
    setOnEdit(user)
  }

  const handleDelete = async (id) => {
    await axios
      .delete('http://localhost:8800/' + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id)

        setUsers(newArray)
        toast.success(data)
      })
      .catch(({ data }) => toast.error(data))

    setOnEdit(null)
  }

  return (
    <Table>
      <Thead>
        <Tr>
          {/* //nome em ordem alfabetica */}
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th onlyWeb>Fone</Th>
          <Th> Data Nascimento</Th>
          <Th>Entrada</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td width="25%">{item.nome}</Td>
            <Td width="25%">{item.email}</Td>
            <Td width="15%" onlyWeb>
              {item.fone}
            </Td>
            <Td width="20%" onlyWeb>
              {item.data_nascimento &&
                new Date(item.data_nascimento).toLocaleDateString('pt-BR')}
            </Td>
            <Td width="20%" onlyWeb>
              {item.data_entrada &&
                new Date(item.data_entrada).toLocaleDateString('pt-BR')}
            </Td>
            <Td alignCenter width="8%" onlyWeb>
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="8%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default TableFuncionarios
