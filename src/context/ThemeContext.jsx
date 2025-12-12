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
  bgPrimary: '#f0f4f8',
  bgSecondary: '#e1e8ed',
  bgCard: '#ffffff',
  bgHover: '#d4e4f0',

  textPrimary: '#1a202c',
  textSecondary: '#4a5568',
  textAccent: '#2b6cb0',
  borderColor: '#cbd5e0',
  accentPrimary: '#3182ce',
  accentSecondary: '#38b2ac',
  buttonBg: '#3182ce',
  buttonText: '#ffffff',
  buttonHover: '#2c5282',
  navbarBg: 'rgba(26, 32, 44, 0.9)',
  navbarText: '#ffffff',
  particleColor: '#3182ce',
  particleLink: '#38b2ac'
}

const darkTheme = {
  mode: 'dark',
  bgPrimary: '#0f1419',
  bgSecondary: '#1a202c',
  bgCard: '#2d3748',
  bgHover: '#3d4757',
  textPrimary: '#f7fafc',
  textSecondary: '#e2e8f0',
  textAccent: '#63b3ed',
  borderColor: '#4a5568',
  accentPrimary: '#4299e1',
  accentSecondary: '#4fd1c5',
  buttonBg: '#3182ce',
  buttonText: '#ffffff',
  buttonHover: '#4299e1',
  navbarBg: 'rgba(15, 20, 25, 0.95)',
  navbarText: '#f7fafc',
  particleColor: '#4299e1',
  particleLink: '#4fd1c5'
}

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : true
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

