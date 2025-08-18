import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Guitar from "./Components/Guitar";
import { db } from "../src/data/db";

function App() {
  const datos = db;
  const [data, setData] = useState([]);
  const [card, setCard] = useState([]);

  useEffect(() => {
    setData(datos);
  }, []);

  function addToCard(params) {

    const dataUpdate = [...card]
    const buscar2 = dataUpdate.indexOf(params);
    console.log(buscar2);
    /* const buscar = card.findIndex((callback) => callback.id === params.id); */
    if (buscar2 == -1) {
      console.log("agregado");
      params.amount = 1;
      setCard([...dataUpdate, params]);
    } else {
      console.log("ya existe");
      params.amount += 1;
      setCard(dataUpdate)
    }

    console.log(card)
  }
  return (
    <>
      <Header card={card} />
      <main className="container-xl mt-5">
        <h2 className="text-center">{`Nuestra Colección`}</h2>
        <div className="row mt-5">
          {data.map((guitar, id) => {
            return (
              <Guitar
                key={id}
                guitar={guitar}
                setCard={setCard}
                card={card}
                addToCard={addToCard}
              />
            );
          })}
        </div>
      </main>
      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
