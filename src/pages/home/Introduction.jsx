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
            Xin chào 👋🏻, mình là sinh viên năm cuối với chuyên ngành Công nghệ
            phần mềm.
          </p>
        </div>

        <div className="intro">
          <div className="intro-heading">
            <h2>Lê Thành Vinh</h2>
            <p>
              Kỹ năng: Frontend (ReactJS), Backend (NodeJS, Java, C#), Database
              (MySQL, MongoDB, Firebase).
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
            Mình hiện là sinh viên năm cuối của Trường Đại học Sư Phạm Kỹ thuật
            TP.HCM. Chuyên ngành của mình là Công nghệ Phần mềm. Với niềm đam mê
            với lập trình, mình luôn tìm kiếm những điều mới mẻ để học hỏi và
            cài thiện kỹ năng của mình.
          </p>
        </div>

        <div className="bio">
          <h2>Bio</h2>
          <div className="bio-section">
            <p>
              <span className="bio-year">2003</span>
              Năm sinh.
            </p>
          </div>
          <div className="bio-section">
            <p>
              <span className="bio-year">2021-2025</span>
              Sinh viên học chuyên ngành Công nghệ phần mềm thuộc khoa CNTT tại
              Trường Đại học Sư Phạm Kỹ thuật TP.HCM.
            </p>
          </div>
          <div className="bio-section">
            <p>
              <span className="bio-year">6/2024-9/2024</span>
              Thực tập sinh WordPress tại Công ty Công ty TNHH Giải pháp công
              nghệ Tech247.
            </p>
          </div>
        </div>

        <div className="love">
          <h2>Mục tiêu nghề nghệp</h2>
          <p>
            Mình mong muốn được đóng góp sức trẻ ở vị trí công việc cho doanh
            nghiệp. Bằng việc tham gia vào môi trường công nghệ cao, mình sẽ
            được phát triển thêm kiến thức và kỹ năng của mình từ các chuyên gia
            trong ngành.
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
                href="https://github.com/Suzukisakae"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon sx={{ fontSize: 40 }} />
                <span>Suzukisakae</span>
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
    padding: 16px;
    text-align: center;
    color: ${({ theme }) => theme.mode === 'dark' ? theme.textPrimary : '#fff'};
    background-color: ${({ theme }) => theme.buttonBg};
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    p {
      font-size: 1.5rem;
      font-weight: 400;
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
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 8px;
      }

      p {
        font-size: 1.5rem;
        font-weight: 400;
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
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 8px;
    }

    p {
      font-size: 1.5rem;
      font-weight: 400;
    }
  }

  .bio {
    text-align: start;
    h2 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 8px;
    }
    .bio-section {
      margin-bottom: 16px;
    }
    .bio-year {
      font-weight: 700;
      margin-right: 8px;
    }
  }

  .love {
    text-align: start;
    h2 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 8px;
    }

    p {
      font-size: 1.5rem;
      font-weight: 400;
    }
  }

  .contact {
    width: 100%;
    text-align: start;

    h2 {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 16px;
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
          gap: 10px;
          padding: 10px 15px;
          border-radius: 8px;
          text-decoration: none;
          color: ${({ theme }) => theme.textPrimary};
          font-weight: 400;
          background-color: transparent;
          transition: background-color 0.3s, color 0.3s;

          &:hover {
            background-color: ${({ theme }) => theme.bgHover};
            color: ${({ theme }) => theme.textAccent};
          }
        }
      }
    }
  }
`

export default Introduction
