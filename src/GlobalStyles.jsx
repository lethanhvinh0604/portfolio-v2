import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  *::selection {
    color: #ffffff;
    background: ${({ theme }) => theme.accentPrimary}66;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-behavior: smooth;
    background: ${({ theme }) => theme.bgPrimary};
  }

  body {
    font-family: 'Inter', 'M PLUS Rounded 1c', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    line-height: 1.65;
    font-weight: 400;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.textPrimary};
    background:
      radial-gradient(circle at 18% 8%, ${({ theme }) => theme.accentPrimary}1f 0, transparent 32rem),
      radial-gradient(circle at 82% 18%, ${({ theme }) => theme.accentSecondary}18 0, transparent 34rem),
      linear-gradient(135deg, ${({ theme }) => theme.bgPrimary} 0%, ${({ theme }) => theme.bgSecondary} 100%) !important;
    overflow-x: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;
    min-height: 100vh;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: -2;
    background-image:
      linear-gradient(${({ theme }) => theme.borderColor} 1px, transparent 1px),
      linear-gradient(90deg, ${({ theme }) => theme.borderColor} 1px, transparent 1px);
    background-size: 72px 72px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent 78%);
    opacity: ${({ theme }) => theme.mode === 'dark' ? 0.24 : 0.32};
  }

  #root {
    background-color: transparent;
    min-height: 100vh;
  }

  a {
    font-family: inherit;
    text-decoration: none;
    color: ${({ theme }) => theme.textAccent};
    transition: color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
  }

  p,
  span,
  button,
  input,
  textarea {
    font-family: inherit;
  }

  button {
    font: inherit;
  }

  canvas {
    width: 100%;
    height: auto;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
    }
  }
`

export default GlobalStyles

