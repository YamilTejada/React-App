export function Elemento({nombre , ID , onClick}) {

    return(

     <div className="Elemento-section1">
        
        
        <h3>Nombre: {nombre}</h3>
        <h3>ID: {ID} </h3>
        <button onClick={onClick}>Eliminar Elemento</button>

     </div>   


    )
    
}