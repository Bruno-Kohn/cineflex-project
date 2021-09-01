import { Link } from "react-router-dom";

export default function Session() {
  return (
    <>
      <div className="message">
        <h2>Selecione o horário</h2>
      </div>
      <div className="container-movie">
        <div className="session-infos">
          <h1 className="session-day">Quinta-feira - 24/06/2021</h1>
          <div className="session-time-box">
            <Link to="/seats">
              <div className="session-time">15:00</div>
            </Link>
            <Link to="/seats">
              <div className="session-time">15:00</div>
            </Link>
          </div>
        </div>
        <div className="session-infos">
          <h1 className="session-day">Quinta-feira - 24/06/2021</h1>
          <div className="session-time-box">
            <Link to="/seats">
              <div className="session-time">15:00</div>
            </Link>
            <Link to="/seats">
              <div className="session-time">15:00</div>
            </Link>
          </div>
        </div>
        <div className="session-infos">
          <h1 className="session-day">Quinta-feira - 24/06/2021</h1>
          <div className="session-time-box">
            <Link to="/seats">
              <div className="session-time">15:00</div>
            </Link>
            <Link to="/seats">
              <div className="session-time">15:00</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="container-selected-movie">
        <div className="image-info">
          <div className="selected-movie">
            <img
              className="imgMovieSelected"
              src="https://cdn.olivre.com.br/wp-content/uploads/2019/09/20190912-y5i92dqjh3m31.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="title-info">
          <span className="movie-title">Coringa</span>
        </div>
      </div>
    </>
  );
}
