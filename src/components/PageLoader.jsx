import styled, { keyframes } from 'styled-components'

function PageLoader() {
  return (
    <LoaderWrapper>
      <LoaderContainer>
        <SpinnerGroup>
          <Spinner />
          <SpinnerInner />
        </SpinnerGroup>
        <LoadingText>Loading...</LoadingText>
        <DotsContainer>
          <Dot delay="0s" />
          <Dot delay="0.2s" />
          <Dot delay="0.4s" />
        </DotsContainer>
      </LoaderContainer>
    </LoaderWrapper>
  )
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bgPrimary};
  z-index: 9999;
  animation: ${fadeIn} 0.3s ease-in-out;
`

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`

const SpinnerGroup = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
`

const Spinner = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  border: 2px solid ${({ theme }) => theme.borderColor};
  border-top: 2px solid ${({ theme }) => theme.accentPrimary};
  border-right: 2px solid ${({ theme }) => theme.accentSecondary};
  border-radius: 50%;
  animation: ${spin} 1.1s linear infinite;
  box-shadow: 0 0 28px ${({ theme }) => theme.accentPrimary}1f;
`

const SpinnerInner = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  width: 54px;
  height: 54px;
  border: 3px solid transparent;
  border-bottom: 2px solid ${({ theme }) => theme.accentSecondary};
  border-left: 2px solid ${({ theme }) => theme.accentPrimary};
  border-radius: 50%;
  animation: ${spin} 0.9s linear infinite reverse;
`

const LoadingText = styled.p`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 1.3rem;
  font-weight: 600;
  animation: ${pulse} 1.5s ease-in-out infinite;
  letter-spacing: 0;
  text-transform: uppercase;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.accentPrimary},
    ${({ theme }) => theme.accentSecondary},
    ${({ theme }) => theme.accentPrimary}
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const bounce = keyframes`
  0%, 80%, 100% {
    opacity: 0.35;
  }
  40% {
    opacity: 0.9;
  }
`

const DotsContainer = styled.div`
  display: flex;
  gap: 10px;
`

const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.accentPrimary};
  animation: ${bounce} 1.4s infinite ease-in-out;
  animation-delay: ${({ delay }) => delay};
  box-shadow: 0 0 10px ${({ theme }) => theme.accentPrimary}66;
`

export default PageLoader

