import "bootstrap/dist/css/bootstrap.css";
import Carta from "./components/Carta.jsx";

function App() {
  return (
    <div>
      <div className="container text-center">
        <h1>holaa</h1>
        <div className="row align-items-start">
          <div className="col">
            <Carta
              title="El principito"
              text="Some quick example text to build on the card title and make up the
            bulk of the card’s content."
            />
          </div>
          <div className="col">
            <Carta title='Harry Potter' text='la piedra filosofal escrita por Some quick example text to build on the card title and make up the
            bulk of the card’s content.'/>
          </div>
          <div className="col">
            <Carta />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
