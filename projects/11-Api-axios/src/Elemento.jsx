export function Elemento({nombre , ID}) {

    return(

        <div className="Elemento-container">
            <p>Nombre: {nombre} </p>
            <p>ID: {ID} </p>

            <hr />
        </div>
    )
    
}