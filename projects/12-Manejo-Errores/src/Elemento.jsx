export function Elemento({ID , nombre}) {

    return(

        <div className="Elemento-container">
            <p>Nombre: {nombre} </p>
            <p>ID: {ID} </p>
        </div>
    )
    
}