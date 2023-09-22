import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { toast } from 'react-toastify'

const HeaderContainer = styled.header`
  width: 100%;
  height: 50px;
  background-color: #2c73d2;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 14px;
`

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Funcionários</h1>
    </HeaderContainer>
  )
}

export default Header
