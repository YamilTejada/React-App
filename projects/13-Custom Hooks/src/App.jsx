import { useContador } from "./Contador"

//Custom Hocks

export function App() {

    //Primera Forma
    const Contador1 = useContador(12)
    const Contador2 = useContador(12)
    const Contador3 = useContador(12)
    const Contador4 = useContador(12)

    //Segunda Forma
    const{numero ,aumentar , disminuir , predeterminado} = useContador(12)


    return (

        <div className="App-container">

            {/*Primera Forma (Recomendada)*/}
            
            <button onClick={Contador1.aumentar} >+</button>
            <button onClick={Contador1.disminuir}>-</button>
            <button onClick={Contador1.predeterminado} >0</button>
            <span>{Contador1.numero}</span>

            <button onClick={Contador2.aumentar} >+</button>
            <button onClick={Contador2.disminuir}>-</button>
            <button onClick={Contador2.predeterminado} >0</button>
            <span>{Contador2.numero}</span>

            <button onClick={Contador3.aumentar} >+</button>
            <button onClick={Contador3.disminuir}>-</button>
            <button onClick={Contador3.predeterminado} >0</button>
            <span>{Contador3.numero}</span>

            <button onClick={Contador4.aumentar} >+</button>
            <button onClick={Contador4.disminuir}>-</button>
            <button onClick={Contador4.predeterminado} >0</button>
            <span>{Contador3.numero}</span>

            {/*Segunda Forma*/}

            <button onClick={aumentar} >+</button>
            <button onClick={disminuir}>-</button>
            <button onClick={predeterminado} >0</button>
            <span>{numero}</span>


        </div>



    )
    
}