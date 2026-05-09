import styled from 'styled-components'
import ProjectData from '../../data/projectdata'

function ProjectItem() {
  return (
    <ProjectItemWrapper className="container">
      <div className="title">
        <h2>Một số dự án của mình</h2>
      </div>
      <div className="list-project">
        {ProjectData.map((item) => (
          <a
            key={item.MaProject}
            href={item.DuongDan} // Liên kết đến đường dẫn ngoài
            target="_blank" // Mở trong tab mới
            rel="noopener noreferrer" // Tăng cường bảo mật khi mở tab mới
            className="project-item"
          >
            <div className="project-item__image">
              <img src={item.HinhAnh} alt={item.TenProject} loading="lazy" />
            </div>
            <div className="project-item__info">
              <h3>{item.TenProject}</h3>
              <p>{item.MoTa}</p>
              <div className="divider">
                <p>
                  <strong>Công nghệ:</strong> {item.CongNghe}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </ProjectItemWrapper>
  )
}

const ProjectItemWrapper = styled.section`
  width: 100%;
  z-index: 1;

  .title {
    text-align: start;
    margin-bottom: 20px;
  }

  .list-project {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 40px;
  }

  .project-item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-decoration: none; /* Xóa gạch chân */
    background-color: ${({ theme }) => theme.bgCard};
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 1px solid ${({ theme }) => theme.borderColor};
    box-shadow: 0 0 10px ${({ theme }) => theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)'};
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, border-color 0.3s ease; /* Hiệu ứng hover */
    color: ${({ theme }) => theme.textPrimary};

    &:hover {
      transform: translateY(-5px); /* Đẩy lên trên */
      box-shadow: 0 8px 15px ${({ theme }) => theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.2)'}; /* Hiệu ứng bóng */
      border-color: ${({ theme }) => theme.accentPrimary};
    }

    &:hover .project-item__image img {
      transform: scale(1.1); /* Zoom ảnh */
    }
  }

  .project-item__image {
    overflow: hidden; /* Đảm bảo ảnh không bị tràn */
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      transition: transform 0.3s ease; /* Thêm hiệu ứng zoom */
    }
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  }

  .project-item__info {
    padding: 10px;
    h3 {
      margin-bottom: 5px;
      color: ${({ theme }) => theme.textPrimary};
    }
    p {
      margin: 0;
      color: ${({ theme }) => theme.textSecondary};
    }

    .divider {
      margin-top: 10px;
      border-top: 1px solid ${({ theme }) => theme.borderColor};
      padding-top: 10px;
    }
  }

  @media (max-width: 768px) {
    .list-project {
      grid-template-columns: 1fr;
    }
  }

  && {
    position: relative;
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

  && .list-project {
    gap: 24px;
  }

  && .project-item {
    gap: 0;
    border-radius: 20px;
    background:
      linear-gradient(180deg, ${({ theme }) => theme.bgCard}, ${({ theme }) => theme.bgCard}),
      radial-gradient(circle at 12% 0%, ${({ theme }) => theme.accentPrimary}1f, transparent 22rem);
    border: 1px solid ${({ theme }) => theme.borderColor};
    box-shadow: ${({ theme }) => theme.mode === 'dark'
    ? '0 18px 55px rgba(0, 0, 0, 0.26)'
    : '0 16px 38px rgba(24, 59, 86, 0.12)'};
    backdrop-filter: blur(16px) saturate(130%);
    -webkit-backdrop-filter: blur(16px) saturate(130%);
    transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease, background 0.22s ease;
  }

  && .project-item:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.accentPrimary}66;
    box-shadow: ${({ theme }) => theme.mode === 'dark'
    ? '0 24px 70px rgba(0, 0, 0, 0.34), 0 0 0 1px rgba(74, 199, 230, 0.05)'
    : '0 22px 50px rgba(24, 59, 86, 0.18)'};
  }

  && .project-item__image {
    padding-bottom: 0;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    background: ${({ theme }) => theme.bgSecondary};
  }

  && .project-item__image img {
    height: 280px;
    transform-origin: center;
    transition: transform 0.45s ease, filter 0.45s ease;
  }

  && .project-item:hover .project-item__image img {
    transform: scale(1.035);
    filter: saturate(1.03) contrast(1.02);
  }

  && .project-item__info {
    padding: 22px;
  }

  && .project-item__info h3 {
    margin-bottom: 10px;
    font-size: 2rem;
    line-height: 1.32;
    font-weight: 760;
    color: ${({ theme }) => theme.textPrimary};
  }

  && .project-item__info p {
    font-size: 1.5rem;
    line-height: 1.75;
    color: ${({ theme }) => theme.textSecondary};
  }

  && .project-item__info .divider {
    margin-top: 16px;
    padding-top: 14px;
    border-top: 1px solid ${({ theme }) => theme.borderColor};
  }

  && .project-item__info strong {
    color: ${({ theme }) => theme.textPrimary};
    font-weight: 700;
  }

  @media (max-width: 768px) {
    && .title h2 {
      font-size: 2.2rem;
    }

    && .project-item__image img {
      height: 220px;
    }

    && .project-item__info {
      padding: 18px;
    }
  }
`

export default ProjectItem
