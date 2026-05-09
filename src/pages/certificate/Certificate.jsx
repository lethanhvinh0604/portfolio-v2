import styled, { keyframes } from 'styled-components'
import { Helmet } from 'react-helmet'
import CertificateItem from './CertificateItem'

function Certificate() {
  return (
    <>
      <Helmet>
        <title>Chứng chỉ của Lê Thành Vinh</title>
      </Helmet>
      <CertificatetWrapper>
        <CertificateItem />
      </CertificatetWrapper>
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

const CertificatetWrapper = styled.main`
  animation: ${fadeIn} 0.55s ease-out;
  padding: 34px 20px 44px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 24px 12px 34px;
  }
`

export default Certificate
