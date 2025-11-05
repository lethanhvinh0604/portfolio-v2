import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'M PLUS Rounded 1c', sans-serif;
    line-height: 1.5;
    font-weight: 400;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.textPrimary};
    background-color: ${({ theme }) => theme.bgPrimary};
    overflow-x: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    font-family: 'Inter', sans-serif;
    text-decoration: none;
    color: ${({ theme }) => theme.textAccent};
    transition: color 0.3s ease;
  }

  p {
    font-family: 'Inter', sans-serif;
  }

  span {
    font-family: 'Inter', sans-serif;
  }

  canvas {
    width: 100%;
    height: auto;
  }
`

export default GlobalStyles

