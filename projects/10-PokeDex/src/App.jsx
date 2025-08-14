import { useState } from "react";
import { Elemento } from "./Elemento";
import './App.css'

export function App() {
  // Estado para todas las búsquedas
  const [arreglo, setArreglo] = useState([]);
  // Estado para último Pokémon buscado (opcional)
  const [elemento, setElemento] = useState({});
  // Estado del input
  const [ID, setID] = useState("");
  // Estado de error
  const [error, setError] = useState("");

  // Función para manejar input
  const FunctionID = (e) => {
    setID(e.target.value);
  };

  // Función de búsqueda
  const FunctionBusqueda = () => {
    if (!ID) return;

    fetch(`https://pokeapi.co/api/v2/pokemon/${ID}`)
      .then((res) => {
        if (!res.ok) throw new Error("Pokémon no encontrado");
        return res.json();
      })
      .then((json) => {
        const nuevoPokemon = {
          PokeID: json.id,
          Nombre: json.name,
          tipo: json.types.map((t) => t.type.name).join(", "),
          peso: json.weight,
          altura: json.height,
          imagen: json.sprites.front_default,
        };

        // Guardar en arreglo y también como elemento destacado
        setArreglo([...arreglo, nuevoPokemon]);
        setError("");
      })
      .catch((err) => {
        setElemento({});
        setError(err.message);
      });
  };

  // Función para eliminar Pokémon individualmente
  const FunctionEliminarElemento = (pokeID) => {
    setArreglo(arreglo.filter((p) => p.PokeID !== pokeID));
  };

  return (
    <div className="App-container">
      <div className="App-section1">

      </div>

      <div className="App-section2">
        <h2>Introduzca la ID o nombre del Pokémon</h2>
        <input
          type="text"
          placeholder="ID o nombre"
          value={ID}
          onChange={FunctionID}
        />
        <button onClick={FunctionBusqueda}>Buscar Pokémon</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>

      <div className="App-section3">
        {arreglo.map((poke) => (
          <Elemento
            key={poke.PokeID}
            Nombre={poke.Nombre}
            ID={poke.PokeID}
            tipo={poke.tipo}
            peso={poke.peso}
            altura={poke.altura}
            imagen={poke.imagen}
            onEliminar={() => FunctionEliminarElemento(poke.PokeID)}
          />
        ))}
      </div>
    </div>
  );
}
