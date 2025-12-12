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
  .modal {
    position: relative;
    ${'' /* position: absolute; */}
    width: 100%;
    height: 400px; /* Đặt chiều cao tùy ý */
    margin: 0 auto; /* Căn giữa theo chiều ngang */
    margin-bottom: 20px;
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
        letter-spacing: -0.5px;
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
            letter-spacing: 0.3px;
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
`

export default Introduction
