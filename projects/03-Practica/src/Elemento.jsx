import { useState } from "react"

//1. Crear un parámetro para eliminar
export function Elemento({Contenido , onEliminar}) {


    const[variableColor , CambiarColor] = useState("Elemento-section1")
    
    

    let Aceptar = () =>{

        CambiarColor("Elemento-section1 aceptar")

    }

    let Eliminar = () =>{


    }
    
    return (

        <div className="Elemento">

            <div className={variableColor}>

                <p>
                {Contenido}
                </p>

            </div>

            <div className="Elemento-section2">

                <button className="btnAceptar"  onClick={Aceptar}>Tarea Terminada</button>
                <button className="btnEliminar" onClick={onEliminar}>Eliminar Tarea</button>

            </div>

        </div>
    )


}