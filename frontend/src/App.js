import GlobalStyle from './styles/global'
import styled from 'styled-components'
import Form from './components/Form.js'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import TableFuncionarios from './components/TableFuncionarios'
import Header from './components/Header'
import Footer from './components/Footer'

const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  /* Estilo padrão */
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 20px;
`

const Title = styled.h2``

function App() {
  const [users, setUsers] = useState([])
  const [onEdit, setOnEdit] = useState(null)

  const getUsers = async () => {
    try {
      const res = await axios.get('http://localhost:8800')
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)))
    } catch (error) {
      toast.error(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [setUsers])

  return (
    <>
      <>
        <Header />
        <Container>
          <Title>Cadastro de Funcionários</Title>
          <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
          <TableFuncionarios
            setOnEdit={setOnEdit}
            users={users}
            setUsers={setUsers}
          />
        </Container>
        <ToastContainer
          autoClose={3000}
          position={toast.POSITION.BOTTOM_LEFT}
        />
        <GlobalStyle />
        <Footer />
      </>
    </>
  )
}

export default App
