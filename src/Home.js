import { Link } from "react-router-dom";

export default function Home() {
  const movies = [
    "https://cdn.olivre.com.br/wp-content/uploads/2019/09/20190912-y5i92dqjh3m31.jpg",
    "https://fhox.com.br/wp-content/uploads/2017/11/81c2c457691753-5a059d944bf23.jpg",
    "https://br.web.img2.acsta.net/pictures/17/02/09/16/34/449299.jpg",
    "https://i2.wp.com/cloud.estacaonerd.com/wp-content/uploads/2019/02/12115715/nos_3.jpg?resize=648%2C960&ssl=1",
    "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2015/03/frank-poster-filme.jpg",
    "https://ingresso-a.akamaihd.net/img/cinema/cartaz/24099-cartaz.jpg",
    "https://img.elo7.com.br/product/zoom/2334AF3/big-poster-filme-queen-bohemian-rhapsody-tamanho-90x60-cm-quadro.jpg",
    "https://santacom.files.wordpress.com/2007/11/cartaz_filme.jpg",
    "https://i.pinimg.com/736x/82/f4/f9/82f4f9deef6a42fd45d8bbf0ceea67b6--dead-man-johnny-depp.jpg",
    "https://www.adobe.com/br/express/create/poster/media_1115ddf2429fc54057af802a80cf51ae6584a2b77.png?width=2000&format=webply&optimize=medium",
  ];

  return (
    <>
      <div className="message">
        <h2>Selecione o filme</h2>
      </div>
      <ul className="container">
        {movies.map((movie, index) => (
          <li className="movies" key={index}>
            <Link to="/session">
              <div className="movie">
                <img className="imgMovies" src={movie} alt="" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
