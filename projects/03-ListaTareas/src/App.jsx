import { useState } from 'react'
import './App.css'
import Menu from './Menu.jsx'
import Tarea from './Tarea.jsx'

function App() {
  const [tareas, setTareas] = useState([])

  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, nuevaTarea])
  }

  return (
    <div className="app">
      <h1>📝 Mis Tareas</h1>
      <Menu onAgregarTarea={agregarTarea} />
      <div className="lista-tareas">
        {tareas.map((tarea, index) => (
          <Tarea key={index} texto={tarea} />
        ))}
      </div>
    </div>
  )
}

export default App
