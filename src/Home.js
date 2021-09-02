import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const request = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies"
    );

    request.then((response) => {
      console.log(response.data);
      setMovies(response.data);
    });
  }, []);

  return (
    <>
      <div className="message">
        <h2>Selecione o filme</h2>
      </div>
      <ul className="container">
        {movies.map((movie, index) => (
          <li className="movies" key={index}>
            <Link to={`/session/${movie.id}`}>
              <div className="movie">
                <img className="imgMovies" src={movie.posterURL} alt="" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
