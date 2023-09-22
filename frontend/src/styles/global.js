import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif;
  }
  
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
  }
  
  footer {
    width: 100%;
    height: 50px;
    background-color: #2c73d2;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 14px;
  }

  header {
    width: 100%;
    height: 50px;
    background-color: #2c73d2;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 14px;
  }
`

export default Global
