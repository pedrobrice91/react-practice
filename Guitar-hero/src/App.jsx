import { useState, useEffect } from 'react'

import './App.css'
import Header from './Components/Header'
import Guitar from './Components/Guitar'
import {db} from '../src/data/db'

function App() {
const datos = db;

const [data, setData] = useState([])

useEffect(()=>{
setData(datos)
}, [])

  return (
    <>
      <Header title='Qloq' />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {data.map((elem, id)=>{
            return <Guitar nombre={elem.name} imagen={elem.image} descri={elem.description} precio={elem.price}/>
          })}
        </div>
      </main>
      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
