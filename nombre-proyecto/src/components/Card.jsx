export default function Card() {
  const usuarios = [
  { id: 1, nombre: "Ana", edad: 25 },
  { id: 2, nombre: "Carlos", edad: 30 },
  { id: 3, nombre: "María", edad: 28 }
];

const usuarioConMap = usuarios.map((elem)=>{})
  
    return (
    <div>
      {usuarios.forEach(usuario => (
        <div key={usuario.id}>
          <h3>{usuario.nombre}</h3>
          <p>Edad: {usuario.edad}</p>
        </div>
      ))}
    </div>
  );
}