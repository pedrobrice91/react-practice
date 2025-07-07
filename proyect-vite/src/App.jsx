import "bootstrap/dist/css/bootstrap.css";
import Carta from "./components/Carta.jsx";

function App() {
  let data = [
    {
      title: "El principito",
      text: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
      imgUrl:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixtV8g-6qpssk5hsCtdj9fumrYkfCtCANo0UemdcjO8W25qtRXuwQWTKTk-6BAPhuOv4hafRMihUCZ2EhyphenhyphensihVDwKWqW3Aq9lWNKlwTk9na5p2cpCuSHkI12cKH6WtAv8ErIt0C1jJFP71/s400/9789500758802.jpg",
    },
    {
      title: "Harry Potter",
      text: "la piedra filosofal escrita por Some quick example text to build on the card title and make up the bulk of the card’s content.",
      imgUrl:
        "https://es.web.img2.acsta.net/r_1920_1080/img/98/5c/985cbf413d46df0c5ba760c8f58467c9.jpg",
    },
    {
      title: "El Hobbit",
      text: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
      imgUrl:
        "https://i.pinimg.com/originals/8a/6b/8d/8a6b8d4e3c3f4b0f1c7d2e2a5f9c0f0b.jpg",
    },
    {
      title: "Cien años de soledad",
      text: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
      imgUrl:
        "https://www.planetadelibros.com/usuaris/libros/fotos/287/m_libros/portada_cien-anos-de-soledad_gabriel-garcia-marquez_201803151125.jpg",
    },
  ];

  const mapa = data.map((elem, id) => {
    return (
      <div key={id} className="col-3">
        <Carta title={elem.title} text={elem.text} imgUrl={elem.imgUrl} />
      </div>
    );
  });

  return (
    <div>
      <div className="container-fluid">
        <h1 className="">holaa</h1>
        <div className="row">{mapa}</div>
      </div>
    </div>
  );
}
export default App;
