import { useState, useEffect } from "react";
import { Elemento } from "./Elemento";

export function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users");

  useEffect(() => {
    const obtenerUsuarios = async () => {
      setLoading(true);   // Inicia la carga
      setError(null);     // Resetea el error
      try {
        const response = await fetch(url);
        //Explicación de esta línea
        if (!response.ok) { //.ok propiedad de js 

            //Poner error 
            throw new Error("Error al conectar con la API");
        }
            
        const data = await response.json();
        setUsuarios(data);
        

      } catch (err) {
        setError(err.message); //.message : captura el error del throw
        setUsuarios([]);   // Limpiamos usuarios si hay error
      } finally {
        setLoading(false); // Siempre se termina la carga
      }
    };

    obtenerUsuarios();
  }, [url]); // Se vuelve a ejecutar si la URL cambia

  return (
    <div className="Usuarios-container">
      <h1>Usuarios Interactivos</h1>

      {/* Botones para simular URL correcta o incorrecta */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setUrl("https://jsonplaceholder.typicode.com/users")}>
          URL Correcta
        </button>
        <button onClick={() => setUrl("https://jsonplaceholder.typicode.com/usuarios-fake")}>
          URL Incorrecta (Simular error)
        </button>
      </div>

      {/* Mensajes de loading y error */}
      {loading && <p>Cargando usuarios...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {/* Mostrar elementos si no hay error y ya terminó de cargar */}
      {!loading && !error && usuarios.map(user => (
        <Elemento key={user.id} nombre={user.name} ID={user.id} />
      ))}
    </div>
  );
}
