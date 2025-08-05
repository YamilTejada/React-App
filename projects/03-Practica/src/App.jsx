import { useState } from "react";
import { Elemento } from "./elemento";
import './App.css';
import './main.css'


export function App() {
  const [texto, setTexto] = useState("");
  const [lista, setLista] = useState([]);

  const AccederTexto = (e) => {
    setTexto(e.target.value);
  };

  const ClickTexto = () => {
    if (texto.trim() !== "") {
      setLista([...lista, texto]);
      setTexto(""); // Limpia el input
    }
  };


  //2. Para eliminar
  const eliminarTarea = (indice) => {
  const nuevaLista = lista.filter((_, i) => i !== indice)
  setLista(nuevaLista)
    };


  return (
    <div className="App-conteiner">
      <div className="App-section1">
        <input onChange={AccederTexto} value={texto} type="text" />
        <button onClick={ClickTexto}>Aceptar</button>
      </div>

      {/* Renderizar varios componentes */}
      {/* Item : par obtener el contenido de cada elemento, index : para identificar que tipo de elemento es*/}

       <div className="App-section2">

            {lista.map((item, index) => (
                <Elemento key={index} Contenido={item}  
                onEliminar={() => eliminarTarea(index)}/>

            ))}
        
        </div> 



    </div>
  );
}



