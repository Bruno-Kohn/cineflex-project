import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Seats({setInfos}) {
  const { idSession } = useParams();
  const [session, setSession] = useState();
  const [seats, setSeats] = useState([]);
  const [chooseSeat, setChooseSeat] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const totalInfos = {};
  console.log(idSession);
  console.log(seats);
  console.log(chooseSeat);
  console.log(name);
  console.log(cpf);
  console.log(session);

  useEffect(
    () => {
      const request = axios.get(
        `https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idSession}/seats`
      );

      request.then((response) => {
        console.log(response.data);
        setSession(response.data);
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

  function toOrderSeats() {
    if (name !== "" && cpf !== "" && cpf.length === 11) {
      const objeto = {
        ids: seats.filter((i) => i.isSelected).map((i) => i.id),
        name: name,
        cpf: cpf,
      };
      totalInfos.clientName = name;
      totalInfos.clientCPF = cpf;
      totalInfos.movieTitle = session.movie.title;
      totalInfos.movieDay = session.day.date;
      totalInfos.movieSession = session.name;
      totalInfos.seats = seats.filter((i) => i.isSelected);
      setInfos({...totalInfos});
      axios.post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many",
        {
          ids: seats.filter((i) => i.isSelected).map((i) => i.id),
          name: name,
          cpf: cpf,
        }
      );
      console.log(objeto);
    } else {
      alert("Dados incorretos");
    }
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
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>
          </div>
          <div className="cpf">
            <div className="text-cpf">CPF do comprador:</div>
            <input
              placeholder="Digite seu cpf..."
              className="box-text-cpf"
              onChange={(e) => setCpf(e.target.value)}
              value={cpf}
            ></input>
          </div>
          <Link
            to={
              name !== "" && cpf !== "" && cpf.length === 11
                ? "/success"
                : `/seats/${idSession}`
            }
          >
            <button className="get-seats" onClick={() => toOrderSeats()}>
              Reservar Assentos
            </button>
          </Link>
        </div>
      </div>
      <div className="container-selected-movie">
        <div className="image-info">
          <div className="selected-movie">
            <img
              className="imgMovieSelected"
              src={session === undefined ? "" : session.movie.posterURL}
              alt=""
            />
          </div>
        </div>
        <div className="title-info-seats">
          <p className="movie-title">
            {session === undefined ? "" : session.movie.title}
          </p>
          <p className="movie-title">
            {session === undefined ? "" : session.day.weekday} -{" "}
            {session === undefined ? "" : session.day.date}
          </p>
        </div>
      </div>
    </>
  );
}
