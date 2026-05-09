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
      label: 'lethanhvinh0604'
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
    background-color: ${({ theme }) => theme.bgCard};
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 1px solid ${({ theme }) => theme.borderColor};
    box-shadow: 0 0 10px ${({ theme }) => theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)'};
    border-radius: 10px;
    padding: 20px;
    text-decoration: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
    z-index: 1;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px ${({ theme }) => theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.2)'};
      border-color: ${({ theme }) => theme.accentPrimary};
    }

    .icon {
      margin-bottom: 10px;
      color: ${({ theme }) => theme.accentPrimary}; /* Màu icon mặc định */
      transition: color 0.3s ease;

      &:hover {
        color: ${({ theme }) => theme.buttonHover}; /* Màu icon khi hover */
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
      color: ${({ theme }) => theme.textPrimary};
    }
  }

  .contact-resume {
    margin-top: 30px;
    text-align: center;

    p {
      font-size: 16px;
      margin-bottom: 10px;
      color: ${({ theme }) => theme.textPrimary};
    }

    .btn {
      padding: 10px 20px;
      font-size: 16px;
      font-weight: 500;
      color: ${({ theme }) => theme.buttonText};
      background: ${({ theme }) => theme.buttonBg};
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background: ${({ theme }) => theme.buttonHover};
      }
    }
  }

  && .title {
    margin-bottom: 24px;
  }

  && .title h2 {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 2.55rem;
    font-weight: 800;
    line-height: 1.2;
    color: ${({ theme }) => theme.textPrimary};
  }

  && .title h2::before {
    content: '';
    width: 30px;
    height: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg, ${({ theme }) => theme.accentPrimary}, ${({ theme }) => theme.accentSecondary});
  }

  && .contact-grid {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 18px;
  }

  && .contact-card {
    min-height: 148px;
    justify-content: center;
    gap: 12px;
    padding: 22px 18px;
    border-radius: 20px;
    background:
      linear-gradient(180deg, ${({ theme }) => theme.bgCard}, ${({ theme }) => theme.bgCard}),
      radial-gradient(circle at 20% 0%, ${({ theme }) => theme.accentPrimary}1f, transparent 20rem);
    border: 1px solid ${({ theme }) => theme.borderColor};
    box-shadow: ${({ theme }) => theme.mode === 'dark'
    ? '0 18px 55px rgba(0, 0, 0, 0.24)'
    : '0 16px 38px rgba(24, 59, 86, 0.12)'};
    backdrop-filter: blur(16px) saturate(130%);
    -webkit-backdrop-filter: blur(16px) saturate(130%);
    transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease, background 0.22s ease;
  }

  && .contact-card:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.accentPrimary}66;
    box-shadow: ${({ theme }) => theme.mode === 'dark'
    ? '0 24px 70px rgba(0, 0, 0, 0.32)'
    : '0 22px 50px rgba(24, 59, 86, 0.18)'};
  }

  && .contact-card .icon {
    width: 54px;
    height: 54px;
    margin-bottom: 0;
    display: grid;
    place-items: center;
    border-radius: 16px;
    color: ${({ theme }) => theme.accentPrimary};
    background: ${({ theme }) => theme.bgHover};
    border: 1px solid ${({ theme }) => theme.borderColor};
  }

  && .contact-card .icon svg {
    font-size: 3rem !important;
  }

  && .contact-card .label {
    max-width: 100%;
    font-size: 1.48rem;
    font-weight: 650;
    line-height: 1.45;
    color: ${({ theme }) => theme.textPrimary};
    overflow-wrap: anywhere;
  }

  && .contact-resume {
    margin-top: 26px;
    padding: 22px;
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 20px;
    background: ${({ theme }) => theme.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.035)'
    : 'rgba(255, 255, 255, 0.62)'};
    backdrop-filter: blur(14px);
  }

  && .contact-resume p {
    margin-bottom: 14px;
    font-size: 1.5rem;
    line-height: 1.7;
    color: ${({ theme }) => theme.textSecondary};
  }

  && .contact-resume .btn {
    padding: 11px 18px;
    border-radius: 999px;
    border: 1px solid ${({ theme }) => theme.accentPrimary}66;
    background: linear-gradient(135deg, ${({ theme }) => theme.buttonBg}, ${({ theme }) => theme.accentSecondary});
    box-shadow: 0 10px 26px ${({ theme }) => theme.accentPrimary}24;
    transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
  }

  && .contact-resume .btn:hover {
    transform: translateY(-2px);
    filter: saturate(1.08);
    box-shadow: 0 14px 32px ${({ theme }) => theme.accentPrimary}2e;
  }

  @media (max-width: 768px) {
    && .title h2 {
      font-size: 2.2rem;
    }

    && .contact-grid {
      grid-template-columns: 1fr;
    }
  }
`

export default ContactItem
