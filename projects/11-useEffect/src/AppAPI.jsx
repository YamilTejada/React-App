import { useEffect, useState } from "react";

//2. API

export function AppAPI() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/movimientos?limit=10") // Lista de 10 pokémon
      .then(res => res.json())        
      .then(json => setPokemon(json.results)) // "results" es el array de pokémon
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>Pokémon</h1>
      {pokemon.map((poke, index) => (
        <h2 key={index}>{poke.name}</h2>
      ))}
    </div>
  );
}
