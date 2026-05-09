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
  opacity: 0.78;
  font-size: 1.35rem;
  font-weight: 500;
  padding: 28px 16px 34px;
  color: ${({ theme }) => theme.textSecondary};
  transition: color 0.3s ease;
  border-top: 1px solid ${({ theme }) => theme.borderColor};
  width: min(100% - 3.2rem, 1040px);
  margin: 0 auto;
`

export default Footer
