import styled from 'styled-components'

function Footer() {
  return (
    <FooterWrapper>
      &copy; {new Date().getFullYear()} Lê Thành Vinh.
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  text-align: center;
  opacity: 0.6;
  font-size: 1.6rem; /* Equivalent to 'sm' in Chakra UI */
  padding: 20px 0;
  color: ${({ theme }) => theme.textSecondary};
  transition: color 0.3s ease;
`

export default Footer
