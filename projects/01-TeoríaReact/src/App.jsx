import './App.css';
import { Twiter } from './Twiter';

//1. Crear el Arreglo

const users = [
  {
    nombre: "Yamil Tejada",
    email: "YamilTejada",
    isFollowing: true,
  },
  {
    nombre: "Pedro Quispe",
    email: "PedroQuispe",
    isFollowing: true,
  },
  {
    nombre: "Alexandro Peralta",
    email: "AlexandroPeralta",
    isFollowing: true,
  },
  
];

export function App() {
  return (
    <div className="Contenedor">
      {

        //2. Ejecutarlo mediante el .map

        users.map(({ nombre, email, isFollowing }) => (
          <Twiter
            key={email}
            nombre={nombre}
            email={`@${email}`}
            initialFollowing={isFollowing}
          ></Twiter>
        ))
      }
    </div>
  );
}
