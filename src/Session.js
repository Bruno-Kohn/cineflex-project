import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Session() {
  const { idMovie } = useParams();
  console.log(idMovie);

  const [movieTime, setMovieTime] = useState([]);
  const [movieInfos, setMovieInfos] = useState("");
  console.log(movieTime);

  useEffect(
    () => {
      const request = axios.get(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idMovie}/showtimes`
      );

      request.then((response) => {
        console.log(response.data);
        setMovieTime(response.data.days);
        setMovieInfos(response.data);
      });
    },
    //eslint-disable-next-line
    []
  );

  return (
    <>
      <div className="message">
        <h2>Selecione o horário</h2>
      </div>
      <div className="container-movie">
        {movieTime === undefined
          ? "...Loading"
          : movieTime.map((info, index) => (
              <div className="session-infos" key={index}>
                <h1 className="session-day">
                  {info.weekday} - {info.date}
                </h1>
                <div className="session-time-box">
                  {info.showtimes.map((time, index) => (
                    <Link to={`/seats/${time.id}`} key={index}>
                      <div className="session-time">{time.name}</div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
      </div>
      <div className="container-selected-movie">
        <div className="image-info">
          <div className="selected-movie">
            <img
              className="imgMovieSelected"
              src={movieInfos.posterURL}
              alt=""
            />
          </div>
        </div>
        <div className="title-info">
          <span className="movie-title">{movieInfos.title}</span>
        </div>
      </div>
    </>
  );
}
