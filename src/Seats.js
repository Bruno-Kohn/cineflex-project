import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Seats() {
  const { idSession } = useParams();
  const [seats, setSeats] = useState([]);
  const [chooseSeat, setChooseSeat] = useState([]);
  console.log(idSession);
  console.log(seats);

  useEffect(
    () => {
      const request = axios.get(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSession}/seats`
      );

      request.then((response) => {
        console.log(response.data);
        setSeats(response.data.seats);
      });
    },
    //eslint-disable-next-line
    []
  );

  function toSelectSeat(e, id) {
    const choiceSeat = seats.map((seat) => {
      if (seat.isAvailable && seat.id === id) {
        seat.isSelected = !seat.isSelected;
      }
    });
    if (e.target.classList.contains("unavailable")) {
      alert("Assento indisponível");
    }
    setChooseSeat({ ...choiceSeat });
  }

  return (
    <>
      <div className="message">
        <h2>Selecione o(s) assento(s)</h2>
      </div>
      <div className="container-seats">
        <ul className="seats">
          {seats === undefined
            ? "...Loading"
            : seats.map((seat, index) => (
                <li
                  className={`seat ${
                    seat.isSelected
                      ? "selected"
                      : seat.isAvailable
                      ? "available"
                      : "unavailable"
                  }`}
                  onClick={(e) => toSelectSeat(e, seat.id)}
                  key={index}
                >
                  {seat.name}
                </li>
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
