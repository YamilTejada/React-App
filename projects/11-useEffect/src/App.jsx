import { useEffect, useState } from "react"

//No importa si el renderizado se ve o no en la página . Esta acción funciona INTERNAMENTE
//1.Valores


export function App() {


    //1.Valores

    const[valor , setValor] = useState(0)

    useEffect( () => {

        console.log("Hola mundo")

    } , [valor])


    let Click = () => {

        setValor(valor+1)
    }




    return (

        <div className="section-App">

            <h1>Use Effect</h1>

            <button onClick={Click}>Dale click</button>

            <h1>{valor}</h1>


        </div>
        

        

    )
}