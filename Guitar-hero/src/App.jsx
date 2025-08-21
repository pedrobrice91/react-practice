import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Guitar from "./Components/Guitar";
import { db } from "../src/data/db";

function App() {
  const datos = db;
  const [list, setList] = useState(datos);
  const [cart, setCart] = useState([]);

  function addToCard(elem) {
    const itenSearch = cart.findIndex((item) => item.id == elem.id);
    const updateCart = [...cart];

    if (itenSearch >= 0) {
      updateCart[itenSearch].acumula += 1;
      setCart(updateCart);
    } else {
      elem.acumula = 1;
      setCart([...cart, elem]);
    }
  }

  return (
    <>
      <Header cart={cart} />
      <main className="container-xl mt-5">
        <h2 className="text-center">{`Nuestra Colección`}</h2>
        <div className="row mt-5">
          {list.map((guitar, id) => (
            <Guitar key={id} guitar={guitar} addToCard={addToCard} />
          ))}
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
