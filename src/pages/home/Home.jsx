import styled, { keyframes } from 'styled-components'
import { Helmet } from 'react-helmet'

import Introduction from './Introduction'

function Home() {
  return (
    <>
      <Helmet>
        <title>Lê Thành Vinh</title>
      </Helmet>
      <HomeWrapper>
        <Introduction/>
      </HomeWrapper>
    </>
  )
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const HomeWrapper = styled.main`
  animation: ${fadeIn} 0.55s ease-out;
  padding: 28px 20px 36px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 20px 12px 30px;
  }
`

export default Home
