import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

function ProgressBar() {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsLoading(true)
    setProgress(0)

    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 200)
          return 100
        }
        return prev + 10
      })
    }, 50)

    return () => {
      clearInterval(interval)
      setIsLoading(false)
    }
  }, [location.pathname])

  if (!isLoading) return null

  return (
    <ProgressBarWrapper>
      <ProgressBarFill style={{ width: `${progress}%` }} />
    </ProgressBarWrapper>
  )
}

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`

const ProgressBarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: transparent;
  z-index: 10000;
  overflow: hidden;
`

const ProgressBarFill = styled.div`
  height: 100%;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.accentPrimary},
    ${({ theme }) => theme.accentSecondary}
  );
  transition: width 0.3s ease;
  box-shadow: 0 0 14px ${({ theme }) => theme.accentPrimary}66;
`

export default ProgressBar

