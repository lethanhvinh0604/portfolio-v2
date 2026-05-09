import styled from 'styled-components'
import Logo from '../assets/haruki.png'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <Nav>
      <div className="nav-brand">
        <a href="/">
          <img src={Logo} alt="Personal Logo" />
          <span>Lê Thành Vinh</span>
        </a>
      </div>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="/project" className="link">
          Dự án
        </a>
        <a href="/certificate" className="link">
          Chứng chỉ
        </a>
        <a href="/contact" className="link">
          Liên hệ
        </a>
        <a
          href="https://github.com/Suzukisakae/portfolio-v2"
          className="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </button>
      </div>
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min(100% - 3.2rem, 1040px);
  min-height: 68px;
  margin: 14px auto 0;
  padding: 10px 16px;
  background: ${({ theme }) => theme.navbarBg};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 18px;
  box-shadow: ${({ theme }) => theme.mode === 'dark'
    ? '0 18px 50px rgba(0, 0, 0, 0.26)'
    : '0 18px 45px rgba(24, 59, 86, 0.12)'};
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  transition: background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

  .nav-brand {
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      gap: 12px;
    }

    img {
      width: 42px;
      height: 42px;
      object-fit: cover;
      border-radius: 12px;
      border: 1px solid ${({ theme }) => theme.borderColor};
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
    }

    span {
      font-size: 1.55rem;
      font-weight: 700;
      color: ${({ theme }) => theme.navbarText};
      letter-spacing: 0;
      white-space: nowrap;
    }
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 8px;

    .link {
      font-size: 1.42rem;
      color: ${({ theme }) => theme.navbarText};
      font-weight: 600;
      text-decoration: none;
      position: relative;
      padding: 9px 12px;
      border-radius: 999px;
      opacity: 0.78;

      &:hover {
        color: ${({ theme }) => theme.accentPrimary};
        background: ${({ theme }) => theme.bgHover};
        opacity: 1;
      }

      &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.accentPrimary};
        outline-offset: 3px;
      }

      &::before {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 4px;
        width: 16px;
        height: 1px;
        background: ${({ theme }) => theme.accentPrimary};
        opacity: 0;
        transform: translateX(-50%) scaleX(0.45);
        transition: opacity 0.2s ease, transform 0.2s ease;
      }

      &:hover::before {
        opacity: 0.75;
        transform: translateX(-50%) scaleX(1);
      }
    }

    .theme-toggle {
      background: ${({ theme }) => theme.bgHover};
      border: 1px solid ${({ theme }) => theme.borderColor};
      border-radius: 50%;
      width: 38px;
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
      color: ${({ theme }) => theme.navbarText};
      margin-left: 6px;

      &:hover {
        background: ${({ theme }) => theme.accentPrimary}1f;
        border-color: ${({ theme }) => theme.accentPrimary};
        color: ${({ theme }) => theme.accentPrimary};
        transform: translateY(-1px);
      }

      &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.accentPrimary};
        outline-offset: 3px;
      }

      svg {
        font-size: 2rem;
      }
    }

    &.open {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 8px;
      position: absolute;
      top: calc(100% + 10px);
      right: 0;
      min-width: 220px;
      background: ${({ theme }) => theme.navbarBg};
      padding: 12px;
      border: 1px solid ${({ theme }) => theme.borderColor};
      border-radius: 16px;
      box-shadow: ${({ theme }) => theme.mode === 'dark'
    ? '0 22px 60px rgba(0, 0, 0, 0.36)'
    : '0 18px 45px rgba(24, 59, 86, 0.16)'};
      backdrop-filter: blur(18px);

      .link {
        width: 100%;
      }

      .theme-toggle {
        margin: 4px 0 0;
      }
    }
  }

  .menu-toggle {
    display: none;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    background: ${({ theme }) => theme.bgHover};
    transition: border-color 0.2s ease, background 0.2s ease;

    span {
      display: block;
      width: 18px;
      height: 2px;
      background: ${({ theme }) => theme.navbarText};
      margin: 0;
      border-radius: 999px;
      transition: background 0.2s ease, transform 0.2s ease;
    }

    &:hover {
      border-color: ${({ theme }) => theme.accentPrimary};

      span {
        background: ${({ theme }) => theme.accentPrimary};
      }
    }
  }

  @media (max-width: 768px) {
    width: min(100% - 2.4rem, 1040px);
    min-height: 62px;
    margin-top: 10px;
    position: relative;

    .nav-brand {
      span {
        font-size: 1.42rem;
      }

      img {
        width: 38px;
        height: 38px;
      }
    }

    .nav-links {
      display: none;
    }

    .nav-links.open {
      display: flex;
    }

    .menu-toggle {
      display: flex;
    }
  }
`

export default Navbar
