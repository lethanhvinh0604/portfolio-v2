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
  bgPrimary: '#eef4f8',
  bgSecondary: '#dfe9f1',
  bgCard: 'rgba(255, 255, 255, 0.82)',
  bgHover: 'rgba(28, 93, 133, 0.08)',

  textPrimary: '#102033',
  textSecondary: '#506176',
  textAccent: '#176b9f',
  borderColor: 'rgba(17, 37, 62, 0.14)',
  accentPrimary: '#1687c7',
  accentSecondary: '#45c4d8',
  buttonBg: '#116fa8',
  buttonText: '#ffffff',
  buttonHover: '#0d5e90',
  navbarBg: 'rgba(242, 247, 251, 0.78)',
  navbarText: '#102033',
  particleColor: '#1687c7',
  particleLink: '#45c4d8'
}

const darkTheme = {
  mode: 'dark',
  bgPrimary: '#071018',
  bgSecondary: '#0d1a26',
  bgCard: 'rgba(13, 28, 40, 0.78)',
  bgHover: 'rgba(74, 199, 230, 0.08)',
  textPrimary: '#eef6fb',
  textSecondary: '#9fb0c1',
  textAccent: '#7dd8f7',
  borderColor: 'rgba(144, 184, 208, 0.16)',
  accentPrimary: '#4ac7e6',
  accentSecondary: '#6aa8ff',
  buttonBg: '#1782b8',
  buttonText: '#ffffff',
  buttonHover: '#23a8d4',
  navbarBg: 'rgba(7, 16, 24, 0.74)',
  navbarText: '#eef6fb',
  particleColor: '#4ac7e6',
  particleLink: '#6aa8ff'
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

