import './Elemento.css'

export function Elemento({Nombre , ID , tipo , peso , altura , imagen , onEliminar}) {

    return (
        <div className="Elemento-container">
            <div className="Elemento-section1">
                <img src={imagen} alt="Pokemon" title={Nombre} />
            </div>

            <div className="Elemento-section2">
                <p>Nombre: {Nombre} </p>
                <p>ID: {ID} </p>
                <p>Tipo: {tipo} </p>
                <p>Peso: {peso} </p>
                <p>Altura: {altura} </p>
                <button onClick={onEliminar}>Eliminar</button>
            </div>

        </div>

    )


    
}