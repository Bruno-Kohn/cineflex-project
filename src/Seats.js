import { Link } from "react-router-dom";

export default function Seats() {
  const seats = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  ];

  return (
    <>
      <div className="message">
        <h2>Selecione o(s) assento(s)</h2>
      </div>
      <div className="container-seats">
        <ul className="seats ">
          {seats.map((seat, index) => (
            <li className="seat" key={index}>{seat}</li>
          ))}
        </ul>
        <div className="index">
          <div className="index-item">
            <div className="index-item-top">
              <div className="index-item-colorgreen"></div>
            </div>
            <div className="index-item-bottom">Selecionado</div>
          </div>
          <div className="index-item">
            <div className="index-item-top">
              <div className="index-item-available"></div>
            </div>
            <div className="index-item-bottom">Disponível</div>
          </div>
          <div className="index-item">
            <div className="index-item-top">
              <div className="index-item-coloryellow"></div>
            </div>
            <div className="index-item-bottom">Indisponível</div>
          </div>
        </div>
        <div className="infos">
          <div className="name">
            <div className="text-name">Nome do comprador:</div>
            <input
              placeholder="Digite seu nome..."
              className="box-text-name"
            ></input>
          </div>
          <div className="cpf">
            <div className="text-cpf">CPF do comprador:</div>
            <input
              placeholder="Digite seu cpf..."
              className="box-text-cpf"
            ></input>
          </div>
          <Link to="/success">
            <button className="get-seats">Reservar Assentos</button>
          </Link>
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
        <div className="title-info-seats">
          <p className="movie-title">Coringa</p>
          <p className="movie-title">Quinta-feira - 15:00</p>
        </div>
      </div>
    </>
  );
}
