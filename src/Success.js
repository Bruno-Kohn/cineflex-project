import { Link } from "react-router-dom";

export default function Success({ infos }) {
  const cpfFormat = infos.clientCPF;
  const cpf =
    cpfFormat[0] +
    cpfFormat[1] +
    cpfFormat[2] +
    "." +
    cpfFormat[3] +
    cpfFormat[4] +
    cpfFormat[5] +
    "." +
    cpfFormat[6] +
    cpfFormat[7] +
    cpfFormat[8] +
    "-" +
    cpfFormat[9] +
    cpfFormat[10];
  return (
    <>
      <div className="message-success">
        <h2>Pedido feito com sucesso!</h2>
      </div>
      <div className="container-success">
        <div className="movie-data">
          <div className="title">
            <h2>Filme e sessão</h2>
          </div>
          <div className="movie-success">
            <h2>{infos.movieTitle}</h2>
          </div>
          <div className="session-success">
            <h2>
              {infos.movieDay} - {infos.movieSession}
            </h2>
          </div>
        </div>
        <div className="tickets-data">
          <div className="title">
            <h2>Ingressos</h2>
          </div>
          <div className="tickets-ordered">
            {infos.seats.map((i) => (
              <h2>Assento {i.name}</h2>
            ))}
          </div>
        </div>
        <div className="client-data">
          <div className="title">
            <h2>Comprador</h2>
          </div>
          <div className="name-customer">
            <h2>Nome: {infos.clientName}</h2>
          </div>
          <div className="cpf-customer">
            <h2>CPF: {cpf}</h2>
          </div>
        </div>
        <Link to="/">
          <button className="back-to-home">
            <h2>Voltar para home</h2>
          </button>
        </Link>
      </div>
    </>
  );
}
