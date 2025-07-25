import { useState } from "react";

function Carta(props) {
  let [contador, setContador] = useState(0);

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <p>{contador}</p>
          <div>
          </div>
          <a
            href="#"
            className="btn btn-primary text-light"
            onClick={() => {
              setContador(contador + 1);

              console.log(`Has pulsado ${contador} veces`);
            }}
          >
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carta;