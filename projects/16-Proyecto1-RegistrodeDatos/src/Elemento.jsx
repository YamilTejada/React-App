import "./Elemento.css"

export function Elemento({Nombre , ID , TareaTerminada , TareaEliminada}) {

    return (
        <div className="Elemento-container">
            <h3>Nombre: {Nombre} </h3>
            <h3>ID: {ID} </h3>
            <button onClick={TareaTerminada} >Tarea Terminada</button>
            <button onClick={TareaEliminada} >Eliminar</button>
        </div>
    )
    
}