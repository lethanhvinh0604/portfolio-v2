import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'
import GoogleIcon from '@mui/icons-material/Google'

function ContactItem() {
  const contacts = [
    {
      href: 'https://www.linkedin.com/in/l%C3%AA-th%C3%A0nh-vinh-90a15b2ab/',
      icon: <LinkedInIcon sx={{ fontSize: 40 }} />,
      label: 'Lê Thành Vinh'
    },
    {
      href: 'https://github.com/lethanhvinh0604',
      icon: <GitHubIcon sx={{ fontSize: 40 }} />,
      label: 'Lê Thành Vinh'
    },
    {
      href: 'mailto:lethanhvinhspk@gmail.com',
      icon: <GoogleIcon sx={{ fontSize: 40 }} />,
      label: 'lethanhvinhspk@gmail.com'
    },
    {
      href: 'https://www.youtube.com/@UkieeSakae',
      icon: <YouTubeIcon sx={{ fontSize: 40 }} />,
      label: '@UkieeSakae'
    }
  ]

  return (
    <ContactItemWrapper className="container">
      <div className="title">
        <h2>Liên hệ với mình</h2>
      </div>
      <div className="contact-grid">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="icon">{contact.icon}</div>
            <span className="label">{contact.label}</span>
          </a>
        ))}
      </div>
      <div className="contact-resume">
        <p>Bạn có thể xem hồ sơ(CV) của mình lại đây</p>
        <button className="btn">Xem hồ sơ</button>
      </div>
    </ContactItemWrapper>
  )
}

const ContactItemWrapper = styled.section`
  width: 100%;
  margin: 0 auto;

  .title {
    text-align: start;
    margin-bottom: 30px;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    justify-content: center;
  }

  .contact-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 1px solid #1864ab;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
    text-decoration: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    z-index: 1;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }

    .icon {
      margin-bottom: 10px;
      color: #0073b1; /* Màu icon mặc định */
      transition: color 0.3s ease;

      &:hover {
        color: #005582; /* Màu icon khi hover */
      }

      svg {
        font-size: 50px;
      }
    }

    .label {
      font-size: 16px;
      font-weight: 500;
      text-align: center;
      word-wrap: break-word;
    }
  }

  .contact-resume {
    margin-top: 30px;
    text-align: center;

    p {
      font-size: 16px;
      margin-bottom: 10px;
    }

    .btn {
      padding: 10px 20px;
      font-size: 16px;
      font-weight: 500;
      color: #fff;
      background: #0073b1;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background: #005582;
      }
    }
  }
`

export default ContactItem
