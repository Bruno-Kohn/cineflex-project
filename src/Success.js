import { Link } from "react-router-dom";

export default function Success() {
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
            <h2>Coringa</h2>
          </div>
          <div className="session-success">
            <h2>Quinta-feira - 15:00</h2>
          </div>
        </div>
        <div className="tickets-data">
          <div className="title">
            <h2>Ingressos</h2>
          </div>
          <div className="tickets-ordered">
            <h2>Assento 15</h2>
            <h2>Assento 16</h2>
            <h2>Assento 17</h2>
          </div>
        </div>
        <div className="client-data">
          <div className="title">
            <h2>Comprador</h2>
          </div>
          <div className="name-customer">
            <h2>Nome: Bruno Kohn</h2>
          </div>
          <div className="cpf-customer">
            <h2>CPF: 123.456.789-00</h2>
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
