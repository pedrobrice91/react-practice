import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Guitar from "./Components/Guitar";
import { db } from "../src/data/db";

function App() {
  const datos = db;
  const [list] = useState(datos);
  const [cart, setCart] = useState([]);

  function addToCart(elem) {
    const itenSearch = cart.findIndex((item) => item.id === elem.id);
    if (itenSearch >= 0) {
      if (cart[itenSearch].acumula >= 4) return
      const updateCart = [...cart]; 
      updateCart[itenSearch].acumula += 1;
      setCart(updateCart);
    } else {
      elem.acumula = 1;
      setCart([...cart, elem]);
    }
  }

  const deleteItem = (dato) => {
    setCart(cart.filter((elemmm) => elemmm.id !== dato.id));
  };

  const aumentarCart = (dato) => {
    setCart(
      cart.map((elemento) =>
        elemento.id === dato.id && elemento.acumula < 4
          ? { ...elemento, acumula: elemento.acumula + 1 }
          : elemento
      )
    );
  };

  const disminuirCart = (dato) => {
    setCart(
      cart.map((element) =>
        element.id === dato.id && element.acumula > 1
          ? { ...element, acumula: element.acumula - 1 }
          : element
      )
    );
  };

  const limpiarCart = function(){
    setCart([])
  }
  return (
    <>
      <Header
        cart={cart}
        deleteItem={deleteItem}
        aumentarCart={aumentarCart}
        disminuirCart={disminuirCart}
        limpiarCart={limpiarCart}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">{`Nuestra Colección`}</h2>
        <div className="row mt-5">
          {list.map((guitar, id) => (
            <Guitar key={id} guitar={guitar} addToCart={addToCart} />
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
