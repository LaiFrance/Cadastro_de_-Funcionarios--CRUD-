import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  width: 100%;
  height: 50px;
  background-color: #2c73d2;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 14px;
`

const Footer = () => {
  return <FooterContainer></FooterContainer>
}

export default Footer
