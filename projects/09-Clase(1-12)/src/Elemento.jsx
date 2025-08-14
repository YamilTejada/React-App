import './Elemento.css'

export function Elemento({userId , id , title , completed , onClick1 , onClick2 , NombreElemento}) {

    return (
        <div className={completed ? "Completed" : "Elemento-section1"}>

            <div className="Elemento-article1">

                <h3>id: {id}</h3>
                <h3>title: {title}</h3>
                {/*No se puede mostrar en la página web , booleanos */}
                <h3>completed: {completed ? "✅ Yes" : "❌ No"}</h3>

            </div>

            <div className="Elemento-article2">

                <button onClick={onClick1}>{completed ? "No completado" : "Completado"}</button>
                <button onClick={onClick2}>Delete</button>
            </div>

        </div>

    )
    
}