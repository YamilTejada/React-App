import { useEffect, useState } from "react";
import { Elemento } from "./Elemento";
import "./App.css"

export function App() {
  const [personas, setPersonas] = useState([
    { Nombre: "Yamil", Edad: 19, ID: 1, Completado: false },
    { Nombre: "Pedro", Edad: 21, ID: 2, Completado: false },
    { Nombre: "Alejandro", Edad: 22, ID: 3, Completado: false },
    { Nombre: "Alison", Edad: 20, ID: 4, Completado: false },
    { Nombre: "Cristian", Edad: 23, ID: 5, Completado: false },
  ]);

  //Eliminar

  const onEliminar = (id) => {
    setPersonas(personas.filter((p) => p.ID !== id));
  };

  //Completado

  const onTareaCompletada = (id) => {
    const actualizadas = personas.map((p) =>
      p.ID === id ? { ...p, Completado: !p.Completado } : p
    );
    setPersonas(actualizadas);
  };

  const completadas = personas.filter(p => p.Completado).length;


  const[newNombre , setNombre] = useState("")
  const[newEdad , setEdad] = useState("")
  const[newID , setID] = useState("")

  /*Formulario*/

  const onNombre = (e) =>{

    setNombre(e.target.value)


  }

  const onEdad = (e) =>{
    setEdad(e.target.value)

  }

  const onID = (e) =>{

    setID(e.target.value)
  }


  const onAgregar = () => {
    // Validación simple opcional
    if (!newNombre || !newEdad || !newID) {
      alert("Por favor completa todos los campos.");
      return;
    }

    // Crear nueva persona
    const nuevaPersona = {
      Nombre: newNombre,
      Edad: Number(newEdad), // convierte a número
      ID: Number(newID),
      Completado: false
    };

    // Actualizar el estado con la nueva persona
    setPersonas([...personas, nuevaPersona]);

    // Limpiar inputs
    setNombre("");
    setEdad("");
    setID("");
  };


  //useEffect




  return (

    //Este value sirve para eliminar el contenido de cada input , cuando el usuario agrega un nuevo elemento

    <div className="App-Container">

        <div className="App-Form">

          <label htmlFor="#">Nombre</label>
          <input type="text" value={newNombre} onChange={onNombre} />

          <label htmlFor="#">Edad</label>
          <input type="text"value={newEdad}  onChange={onEdad}/>

          <label htmlFor="#">ID</label>
          <input type="text" value={newID} onChange={onID}/>

          <button onClick={onAgregar}>Agregar Tarea</button>

        </div>

      <h2>Tareas completadas: {completadas}</h2>

      {personas.map((persona) => (
        <Elemento
          key={persona.ID}
          Nombre={persona.Nombre}
          Edad={persona.Edad}
          ID={persona.ID}
          Completado={persona.Completado}
          onEliminar={onEliminar}
          onTareaCompletada={onTareaCompletada}
        />
      ))}
    </div>
  );
}
