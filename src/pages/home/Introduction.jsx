import styled from 'styled-components'
import profileImage from '../../assets/haruki.png'
import KeyBoard from './KeyBoard'

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'
import GoogleIcon from '@mui/icons-material/Google'

function Introduction() {
  return (
    <>
      <ThreeDScene>
        <div className="modal">
          <KeyBoard />
        </div>
      </ThreeDScene>
      <IntroductionWrapper className="container">
        {/* <div className="modal">
          <KeyBoard />
        </div> */}

        <div className="title">
          <p>
            Xin chào 👋🏻, mình là Junior Engineer tại TGL Solutions.
          </p>
        </div>

        <div className="intro">
          <div className="intro-heading">
            <h2>Lê Thành Vinh</h2>
            <p>
              Kỹ năng: Front-End Development, React.js, Next.js, .NET Framework,
              Backend (Node.js, Express, MongoDB), Database (MySQL, MongoDB, Firebase).
            </p>
          </div>
          <div className="intro-img">
            <div className="img-wrapper">
              <img src={profileImage} alt="Profile image" />
            </div>
          </div>
        </div>
        <div className="genneral">
          <h2>Giới thiệu cá nhân</h2>
          <p>
            Mình hiện đang làm việc với vị trí Junior Engineer tại TGL Solutions.
            Mình đã tốt nghiệp chuyên ngành Công nghệ Phần mềm tại Trường Đại học
            Sư Phạm Kỹ thuật TP.HCM với GPA 3.52/4.00. Với niềm đam mê với lập trình,
            mình luôn tìm kiếm những điều mới mẻ để học hỏi và cải thiện kỹ năng của mình.
          </p>
        </div>

        <div className="bio">
          <h2>Bio</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="bio-year">2003</span>
                <p>Năm sinh.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="bio-year">9/2021 - 9/2025</span>
                <p>
                  Tốt nghiệp chuyên ngành Công nghệ phần mềm thuộc khoa CNTT tại
                  Trường Đại học Sư Phạm Kỹ thuật TP.HCM với GPA 3.52/4.00.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="bio-year">6/2024 - 9/2024</span>
                <p>
                  Intern WordPress tại Internship (4 tháng), làm việc với WordPress,
                  HTML và CSS.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="bio-year">2/2025 - 6/2025</span>
                <p>
                  Node.js/C# Developer Internship tại Internship (5 tháng),
                  làm việc tại Thành phố Hồ Chí Minh.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="bio-year">10/2025 - 10/2025</span>
                <p>
                  Web Developer tại TGL Solutions (Part-time), làm việc với React.js,
                  Next.js và .NET Framework.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="bio-year">10/2025 - Hiện tại</span>
                <p>Junior Engineer tại TGL Solutions, làm việc full-time.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="love">
          <h2>Mục tiêu nghề nghệp</h2>
          <p>
            Mình đang không ngừng phát triển kỹ năng lập trình và mở rộng kiến thức
            trong lĩnh vực công nghệ phần mềm. Với kinh nghiệm làm việc với các công
            nghệ như React.js, Next.js, Node.js và .NET Framework, mình mong muốn
            đóng góp vào các dự án công nghệ sáng tạo và học hỏi từ các chuyên gia
            trong ngành để trở thành một kỹ sư phần mềm toàn diện.
          </p>
        </div>

        <div className="love">
          <h2>Sở thích</h2>
          <p>
            Lập trình, âm nhạc, cờ vua và cà phê. Mình thích tạo ra những thứ
            mới mẻ. Đôi khi, mình cũng thích chạy bộ và cầu lông.
          </p>
        </div>

        <div className="contact">
          <h2>Liên hệ</h2>
          <ul className="social-links">
            <li>
              <a
                href="https://www.linkedin.com/in/l%C3%AA-th%C3%A0nh-vinh-90a15b2ab/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon sx={{ fontSize: 40 }} />
                <span>Lê Thành Vinh</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/lethanhvinh0604"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon sx={{ fontSize: 40 }} />
                <span>lethanhvinh0604</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:lethanhvinhspk@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoogleIcon sx={{ fontSize: 40 }} />
                <span>lethanhvinhspk@gmail.com</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@UkieeSakae"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon sx={{ fontSize: 40 }} />
                <span>@UkieeSakae</span>
              </a>
            </li>
          </ul>
        </div>
      </IntroductionWrapper>
    </>
  )
}

const ThreeDScene = styled.div`
  width: 100%;
  margin-top: 4px;

  .modal {
    position: relative;
    ${'' /* position: absolute; */}
    width: min(100% - 3.2rem, 1040px);
    height: 400px; /* Đặt chiều cao tùy ý */
    margin: 0 auto; /* Căn giữa theo chiều ngang */
    margin-bottom: 24px;
    height: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.borderColor};
    background:
      radial-gradient(circle at 50% 20%, ${({ theme }) => theme.accentPrimary}18, transparent 34rem),
      linear-gradient(180deg, ${({ theme }) => theme.bgCard}, transparent);
    box-shadow: ${({ theme }) => theme.mode === 'dark'
    ? '0 24px 70px rgba(0, 0, 0, 0.28)'
    : '0 20px 55px rgba(24, 59, 86, 0.12)'};
    ${'' /* background-color: rgba(0, 0, 0, 0.1); */}
    border-radius: 10px; /* Làm tròn góc (nếu cần) */
    overflow: hidden; /* Đảm bảo canvas không vượt ra ngoài div */

    @media (max-width: 768px) {
      width: min(100% - 2.4rem, 1040px);
      height: 260px;
      border-radius: 18px;
    }
  }

  && .modal {
    border-radius: 22px;
  }
`

const IntroductionWrapper = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;

  background-color: ${({ theme }) => theme.bgCard};
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.borderColor};
  box-shadow: 0 0 10px ${({ theme }) => theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)'};
  transition: all 0.3s ease;

  .modal {
    position: relative;
    ${'' /* position: absolute; */}
    width: 100%;
    height: 400px; /* Đặt chiều cao tùy ý */
    margin: 0 auto; /* Căn giữa theo chiều ngang */
    display: flex;
    justify-content: center;
    align-items: center;
    ${'' /* background-color: rgba(0, 0, 0, 0.1); */}
    border-radius: 10px; /* Làm tròn góc (nếu cần) */
    overflow: hidden; /* Đảm bảo canvas không vượt ra ngoài div */

    @media (max-width: 768px) {
      width: 90%;
      height: 300px;
    }
  }

  .title {
    width: 100%;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    color: ${({ theme }) => theme.mode === 'dark' ? theme.textPrimary : '#fff'};
    background-color: ${({ theme }) => theme.buttonBg};
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    p {
      font-size: 1.8rem;
      font-weight: 500;
      line-height: 1.6;
    }
  }

  .intro {
    width: 70%;
    display: flex;
    align-items: center;
    gap: 20px;

    .intro-heading {
      flex-grow: 1;
      text-align: start;

      h2 {
        font-size: 3.2rem;
        font-weight: 700;
        margin-bottom: 12px;
        letter-spacing: 0;
      }

      p {
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.7;
        color: ${({ theme }) => theme.textSecondary};
      }
    }

    .intro-img {
      flex-shrink: 0;
      margin-top: 16px;
      text-align: center;

      .img-wrapper {
        border-color: ${({ theme }) => theme.accentPrimary};
        border-width: 2px;
        border-style: solid;
        width: 100px;
        height: 100px;
        display: inline-block;
        border-radius: 50%;
        overflow: hidden;
        transition: border-color 0.3s ease;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    @media (max-width: 768px) {
      width: 90%;
    }
  }

  .genneral {
    text-align: start;
    h2 {
      font-size: 2.6rem;
      font-weight: 700;
      margin-bottom: 12px;
      color: ${({ theme }) => theme.textPrimary};
    }

    p {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1.7;
      color: ${({ theme }) => theme.textSecondary};
    }
  }

  .bio {
    text-align: start;
    width: 100%;
    
    h2 {
      font-size: 2.6rem;
      font-weight: 700;
      margin-bottom: 24px;
    }
    
    .timeline {
      position: relative;
      padding-left: 30px;
      
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 3px;
        background: linear-gradient(
          to bottom,
          ${({ theme }) => theme.accentPrimary},
          ${({ theme }) => theme.accentSecondary || theme.accentPrimary}
        );
        border-radius: 2px;
      }
      
      .timeline-item {
        position: relative;
        padding-bottom: 30px;
        
        &:last-child {
          padding-bottom: 0;
        }
        
        .timeline-dot {
          position: absolute;
          left: -37px;
          top: 4px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background-color: ${({ theme }) => theme.accentPrimary};
          border: 3px solid ${({ theme }) => theme.bgCard};
          box-shadow: 0 0 0 3px ${({ theme }) => theme.accentPrimary}40;
          transition: all 0.3s ease;
          z-index: 1;
        }
        
        &:hover .timeline-dot {
          transform: scale(1.3);
          box-shadow: 0 0 0 6px ${({ theme }) => theme.accentPrimary}40;
        }
        
        .timeline-content {
          padding: 16px 20px;
          background-color: ${({ theme }) => theme.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(0, 0, 0, 0.03)'};
          border-radius: 8px;
          border-left: 3px solid ${({ theme }) => theme.accentPrimary};
          transition: all 0.3s ease;

          &:hover {
            background-color: ${({ theme }) => theme.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.08)'
    : 'rgba(0, 0, 0, 0.05)'};
            transform: translateX(5px);
          }
          
          .bio-year {
            display: block;
            font-weight: 700;
            font-size: 1.7rem;
            color: ${({ theme }) => theme.accentPrimary};
            margin-bottom: 10px;
            letter-spacing: 0;
          }
          
          p {
            margin: 0;
            font-size: 1.5rem;
            line-height: 1.7;
            color: ${({ theme }) => theme.textPrimary};
            font-weight: 400;
          }
        }
      }
      
      @media (max-width: 768px) {
        padding-left: 25px;
        
        .timeline-item {
          .timeline-dot {
            left: -32px;
            width: 14px;
            height: 14px;
          }
          
          .timeline-content {
            padding: 14px 18px;
            
            .bio-year {
              font-size: 1.4rem;
            }
            
            p {
              font-size: 1.3rem;
              line-height: 1.6;
            }
          }
        }
      }
    }
  }

  .love {
    text-align: start;
    h2 {
      font-size: 2.6rem;
      font-weight: 700;
      margin-bottom: 12px;
      color: ${({ theme }) => theme.textPrimary};
    }

    p {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1.7;
      color: ${({ theme }) => theme.textSecondary};
    }
  }

  .contact {
    width: 100%;
    text-align: start;

    h2 {
      font-size: 2.6rem;
      font-weight: 700;
      margin-bottom: 16px;
      color: ${({ theme }) => theme.textPrimary};
    }

    .social-links {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 12px;

      li {
        a {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
          border-radius: 8px;
          text-decoration: none;
          color: ${({ theme }) => theme.textPrimary};
          font-weight: 400;
          font-size: 1.5rem;
          background-color: transparent;
          transition: all 0.3s ease;

          &:hover {
            background-color: ${({ theme }) => theme.bgHover};
            color: ${({ theme }) => theme.accentPrimary};
            transform: translateX(5px);
          }

          span {
            line-height: 1.5;
          }
        }
      }
    }
  }

  && {
    position: relative;
    padding: 30px;
    gap: 26px;
    text-align: left;
    overflow: hidden;
    border-radius: 24px;
    background:
      linear-gradient(180deg, ${({ theme }) => theme.bgCard}, ${({ theme }) => theme.bgCard}),
      radial-gradient(circle at 8% 0%, ${({ theme }) => theme.accentPrimary}24, transparent 28rem);
    backdrop-filter: blur(18px) saturate(135%);
    -webkit-backdrop-filter: blur(18px) saturate(135%);
    box-shadow: ${({ theme }) => theme.mode === 'dark'
    ? '0 24px 80px rgba(0, 0, 0, 0.32)'
    : '0 22px 60px rgba(24, 59, 86, 0.14)'};
    transition: background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  &&::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.accentPrimary}14, transparent);
    opacity: 0.55;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent 46%);
  }

  && > * {
    position: relative;
    z-index: 1;
  }

  && .title {
    border-radius: 18px;
    padding: 18px 20px;
    text-align: left;
    color: ${({ theme }) => theme.textPrimary};
    background: ${({ theme }) => theme.mode === 'dark'
    ? 'rgba(74, 199, 230, 0.08)'
    : 'rgba(22, 135, 199, 0.08)'};
    border: 1px solid ${({ theme }) => theme.borderColor};
    box-shadow: none;
  }

  && .title p {
    font-size: 1.58rem;
    font-weight: 600;
    line-height: 1.65;
    color: ${({ theme }) => theme.textPrimary};
  }

  && .intro {
    width: 100%;
    justify-content: space-between;
    gap: 28px;
  }

  && .intro .intro-heading h2 {
    font-size: clamp(3.2rem, 5vw, 5.4rem);
    font-weight: 800;
    margin-bottom: 14px;
    line-height: 1.04;
    letter-spacing: 0;
    color: ${({ theme }) => theme.textPrimary};
  }

  && .intro .intro-heading p {
    max-width: 66rem;
    font-size: 1.62rem;
    line-height: 1.78;
    color: ${({ theme }) => theme.textSecondary};
  }

  && .intro .intro-img .img-wrapper {
    width: 118px;
    height: 118px;
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 22px;
    background: ${({ theme }) => theme.bgHover};
    box-shadow: ${({ theme }) => theme.mode === 'dark'
    ? '0 18px 45px rgba(0, 0, 0, 0.28)'
    : '0 14px 34px rgba(24, 59, 86, 0.14)'};
    transition: border-color 0.2s ease, transform 0.2s ease;
  }

  && .intro .intro-img .img-wrapper:hover {
    border-color: ${({ theme }) => theme.accentPrimary};
    transform: translateY(-2px);
  }

  && .genneral,
  && .love,
  && .bio,
  && .contact {
    width: 100%;
    text-align: start;
  }

  && .genneral h2,
  && .love h2,
  && .bio h2,
  && .contact h2 {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 2.35rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 14px;
    color: ${({ theme }) => theme.textPrimary};
  }

  && .genneral h2::before,
  && .love h2::before,
  && .bio h2::before,
  && .contact h2::before {
    content: '';
    width: 28px;
    height: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg, ${({ theme }) => theme.accentPrimary}, ${({ theme }) => theme.accentSecondary});
  }

  && .genneral p,
  && .love p {
    font-size: 1.58rem;
    line-height: 1.82;
    color: ${({ theme }) => theme.textSecondary};
  }

  && .bio h2 {
    margin-bottom: 24px;
  }

  && .bio .timeline {
    padding-left: 28px;
  }

  && .bio .timeline::before {
    left: 6px;
    width: 1px;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.accentPrimary},
      ${({ theme }) => theme.accentSecondary || theme.accentPrimary},
      transparent
    );
    opacity: 0.62;
  }

  && .bio .timeline .timeline-item {
    padding-bottom: 18px;
  }

  && .bio .timeline .timeline-item .timeline-dot {
    left: -28px;
    top: 20px;
    width: 13px;
    height: 13px;
    border: 3px solid ${({ theme }) => theme.bgSecondary};
    box-shadow: 0 0 0 5px ${({ theme }) => theme.accentPrimary}18;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  && .bio .timeline .timeline-item:hover .timeline-dot {
    transform: scale(1.12);
    box-shadow: 0 0 0 7px ${({ theme }) => theme.accentPrimary}18;
  }

  && .bio .timeline .timeline-item .timeline-content {
    padding: 16px 18px;
    background: ${({ theme }) => theme.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.035)'
    : 'rgba(255, 255, 255, 0.64)'};
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-left: 1px solid ${({ theme }) => theme.borderColor};
    transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  }

  && .bio .timeline .timeline-item .timeline-content:hover {
    background: ${({ theme }) => theme.mode === 'dark'
    ? 'rgba(74, 199, 230, 0.06)'
    : 'rgba(255, 255, 255, 0.86)'};
    border-color: ${({ theme }) => theme.accentPrimary}66;
    transform: translateY(-2px);
  }

  && .bio .timeline .timeline-item .timeline-content .bio-year {
    font-size: 1.34rem;
    margin-bottom: 8px;
    letter-spacing: 0;
  }

  && .bio .timeline .timeline-item .timeline-content p {
    font-size: 1.48rem;
    line-height: 1.74;
    color: ${({ theme }) => theme.textSecondary};
  }

  && .contact .social-links li a {
    gap: 14px;
    padding: 14px 16px;
    border-radius: 16px;
    color: ${({ theme }) => theme.textPrimary};
    font-weight: 600;
    font-size: 1.48rem;
    background: ${({ theme }) => theme.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.03)'
    : 'rgba(255, 255, 255, 0.58)'};
    border: 1px solid ${({ theme }) => theme.borderColor};
    transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  }

  && .contact .social-links li a svg {
    color: ${({ theme }) => theme.accentPrimary};
    font-size: 2.8rem !important;
  }

  && .contact .social-links li a:hover {
    background: ${({ theme }) => theme.bgHover};
    color: ${({ theme }) => theme.accentPrimary};
    border-color: ${({ theme }) => theme.accentPrimary}66;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    && {
      padding: 22px;
      gap: 22px;
      border-radius: 20px;
    }

    && .title {
      padding: 16px;
    }

    && .intro {
      flex-direction: column-reverse;
      align-items: flex-start;
      gap: 20px;
    }

    && .intro .intro-img {
      margin-top: 0;
    }

    && .genneral h2,
    && .love h2,
    && .bio h2,
    && .contact h2 {
      font-size: 2.1rem;
    }

    && .genneral p,
    && .love p {
      font-size: 1.5rem;
    }
  }
`

export default Introduction
