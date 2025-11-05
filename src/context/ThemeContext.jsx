import { createContext, useContext, useState, useEffect } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

const lightTheme = {
  mode: 'light',
  bgPrimary: '#f5f3f1',
  bgSecondary: '#e8e4eb',
  bgCard: '#ffffff',
  bgHover: '#d4c9d8',

  textPrimary: '#2d2d2d',
  textSecondary: '#5a5460',
  textAccent: '#7d6b8f',
  borderColor: '#b8a9bf',
  accentPrimary: '#9b8fa5',
  accentSecondary: '#a89bac',
  buttonBg: '#9b8fa5',
  buttonText: '#ffffff',
  buttonHover: '#7d6b8f',
  navbarBg: 'rgba(93, 79, 103, 0.85)',
  navbarText: '#ffffff',
  particleColor: '#9b8fa5',
  particleLink: '#b8a9bf'
}

const darkTheme = {
  mode: 'dark',
  bgPrimary: '#1a1620',
  bgSecondary: '#2a2330',
  bgCard: '#352d42',
  bgHover: '#4a3f5c',
  textPrimary: '#e8e4eb',
  textSecondary: '#c8c0cf',
  textAccent: '#b8a9bf',
  borderColor: '#5d4f67',
  accentPrimary: '#b8a9bf',
  accentSecondary: '#9b8fa5',
  buttonBg: '#7d6b8f',
  buttonText: '#ffffff',
  buttonHover: '#9b8fa5',
  navbarBg: 'rgba(26, 22, 32, 0.9)',
  navbarText: '#e8e4eb',
  particleColor: '#b8a9bf',
  particleLink: '#7d6b8f'
}

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : false
  })

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const theme = isDarkMode ? darkTheme : lightTheme

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

