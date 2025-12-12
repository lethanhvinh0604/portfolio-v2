import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import PageLoader from './PageLoader'

function PageTransition({ children }) {
  const [loading, setLoading] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const [displayContent, setDisplayContent] = useState(true)
  const location = useLocation()

  useEffect(() => {
    // Hide content immediately
    setDisplayContent(false)
    setLoading(true)
    setFadeOut(false)
    
    // Start fade out animation before hiding loader
    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, 350)

    // Hide loader and scroll to top
    const hideTimer = setTimeout(() => {
      setLoading(false)
      setDisplayContent(true)
      window.scrollTo({ top: 0, behavior: 'auto' })
    }, 550)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [location.pathname])

  return (
    <>
      {loading && (
        <LoaderContainer fadeOut={fadeOut}>
          <PageLoader />
        </LoaderContainer>
      )}
      {displayContent && <PageWrapper key={location.pathname}>{children}</PageWrapper>}
    </>
  )
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const fadeOutAnim = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  animation: ${({ fadeOut }) => fadeOut ? fadeOutAnim : 'none'} 0.2s ease-out forwards;
`

const PageWrapper = styled.div`
  animation: ${fadeIn} 0.5s ease-out;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.bgPrimary};
`

export default PageTransition

