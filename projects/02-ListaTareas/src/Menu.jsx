import { useState } from 'react'

function Menu({ onAgregarTarea }) {
  const [input, setInput] = useState('')

  const handleAgregar = () => {
    if (input.trim() !== '') {
      onAgregarTarea(input)
      setInput('')
    }
  }

  return (
    <div className="menu">
      <input
        type="text"
        placeholder="Escribe una tarea"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAgregar}>Agregar</button>
    </div>
  )
}

export default Menu
