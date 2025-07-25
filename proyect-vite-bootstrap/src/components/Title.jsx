import { useState } from "react";

export default function Title() {
    let [valor, setValor] = useState('false')
    let [contador, setContador] = useState(0)
    let persona = {
        nombre: "Juan",
        edad: 30,
        profesion: "Desarrollador",
    };

    let persona2 = {
        nombre: "pedro",
        edad: 30,
        profesion: "Desarrollador",
    };

    return (
        <div>
            <h1>Estoy probando con un boton {contador}</h1>
            {valor === true ? <h2>Holaaa</h2> : null}
            <input type="button" value='Sigueme'onClick={()=>{
                setValor(!valor), setContador(contador + 1)
            }} className="bg-danger"></input>
        </div>
    )
}