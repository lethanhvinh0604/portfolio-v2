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
  gap: 25px;
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
  border: 4px solid ${({ theme }) => theme.borderColor}40;
  border-top: 4px solid ${({ theme }) => theme.accentPrimary};
  border-right: 4px solid ${({ theme }) => theme.accentSecondary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  box-shadow: 0 0 25px ${({ theme }) => theme.accentPrimary}50;
`

const SpinnerInner = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  width: 54px;
  height: 54px;
  border: 3px solid transparent;
  border-bottom: 3px solid ${({ theme }) => theme.accentSecondary};
  border-left: 3px solid ${({ theme }) => theme.accentPrimary};
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite reverse;
`

const LoadingText = styled.p`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 1.3rem;
  font-weight: 600;
  animation: ${pulse} 1.5s ease-in-out infinite;
  letter-spacing: 2px;
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
    transform: scale(0.8);
    opacity: 0.5;
  }
  40% {
    transform: scale(1.2);
    opacity: 1;
  }
`

const DotsContainer = styled.div`
  display: flex;
  gap: 10px;
`

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ theme }) => theme.accentPrimary};
  animation: ${bounce} 1.4s infinite ease-in-out;
  animation-delay: ${({ delay }) => delay};
  box-shadow: 0 0 10px ${({ theme }) => theme.accentPrimary};
`

export default PageLoader

