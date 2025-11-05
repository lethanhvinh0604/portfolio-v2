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
  padding: 10px 20px;
  background: ${({ theme }) => theme.navbarBg};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  .nav-brand {
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    img {
      width: 50px;
      margin-right: 20px;
    }

    span {
      font-size: 22px;
      font-weight: 700;
      color: ${({ theme }) => theme.navbarText};
      text-shadow: 0 0 10px ${({ theme }) => theme.mode === 'dark' ? 'rgba(184, 169, 191, 0.5)' : 'rgba(255, 255, 255, 0.8)'};
    }
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 30px;

    .link {
      font-size: 16px;
      color: ${({ theme }) => theme.navbarText};
      font-weight: 500;
      text-decoration: none;
      position: relative;
      padding: 5px 0;

      &:hover {
        color: ${({ theme }) => theme.accentPrimary};
      }

      &:hover::before {
        transform: scaleX(1);
      }

      &::before {
        content: '';
        position: absolute;
        bottom: -5px;
        width: 100%;
        height: 2px;
        background: linear-gradient(to right, ${({ theme }) => theme.accentPrimary}, ${({ theme }) => theme.accentSecondary});
        transform: scaleX(0);
        transform-origin: center;
        transition: transform 0.3s ease-in-out;
      }
    }

    .theme-toggle {
      background: transparent;
      border: 2px solid ${({ theme }) => theme.navbarText};
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      color: ${({ theme }) => theme.navbarText};

      &:hover {
        background: ${({ theme }) => theme.accentPrimary};
        border-color: ${({ theme }) => theme.accentPrimary};
        transform: rotate(180deg);
      }

      svg {
        font-size: 24px;
      }
    }

    &.open {
      display: flex;
      flex-direction: column;
      gap: 10px;
      position: absolute;
      top: 60px;
      right: 20px;
      background: ${({ theme }) => theme.navbarBg};
      padding: 15px 20px;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    }
  }

  .menu-toggle {
    display: none;
    cursor: pointer;

    span {
      display: block;
      width: 25px;
      height: 3px;
      background: ${({ theme }) => theme.navbarText};
      margin: 4px 0;
      transition: all 0.3s;
    }

    &:hover span {
      background: ${({ theme }) => theme.accentPrimary};
    }
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }

    .nav-links.open {
      display: flex;
    }

    .menu-toggle {
      display: block;
    }
  }
`

export default Navbar
