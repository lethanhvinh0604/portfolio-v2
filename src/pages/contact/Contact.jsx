import styled, { keyframes } from 'styled-components'
import { Helmet } from 'react-helmet'

import ContactItem from './ContactItem'

function Contact() {
  return (
    <>
      <Helmet>
        <title>Liên hệ với Lê Thành Vinh</title>
      </Helmet>
      <ContactWrapper>
        <ContactItem />
      </ContactWrapper>
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

const ContactWrapper = styled.main`
  animation: ${fadeIn} 0.55s ease-out;
  padding: 34px 20px 44px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 24px 12px 34px;
  }
`

export default Contact
