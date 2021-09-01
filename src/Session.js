import { Link } from "react-router-dom";

export default function Session() {
  const movieTime = [
    {
      diaSemana: "Quinta-feira",
      diaMes: "24/06/2021",
      hora1: "15:00",
      hora2: "17:00",
    },
    {
      diaSemana: "Sexta-feira",
      diaMes: "25/06/2021",
      hora1: "21:00",
      hora2: "22:45",
    },
    {
      diaSemana: "Domingo",
      diaMes: "27/06/2021",
      hora1: "13:45",
      hora2: "19:30",
    },
  ];
  return (
    <>
      <div className="message">
        <h2>Selecione o horário</h2>
      </div>
      <div className="container-movie">
        {movieTime.map((info, index) => (
          <div className="session-infos" key={index}>
            <h1 className="session-day">
              {info.diaSemana} - {info.diaMes}
            </h1>
            <div className="session-time-box">
              <Link to="/seats">
                <div className="session-time">{info.hora1}</div>
              </Link>
              <Link to="/seats">
                <div className="session-time">{info.hora2}</div>
              </Link>
            </div>
          </div>
        ))}
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
