
import { Elemento } from "./Elemento"
import { useContador } from "./Contador"

export function App() {
    
    //Primera Forma
    const{Incrementar, Disminuir , Predeterminado , valor} = useContador(12)

    //Segunda Forma
    const Contador1 = useContador(10)
    const Contador2 = useContador(10)
    const Contador3 = useContador(10)



    return (
        <div className="App-container"> 
            <h1>Contador con Custom Hook</h1>

            <div className="App-section1">


                <Elemento
                incrementar={Contador1.Incrementar}
                disminuir={Contador1.Disminuir}
                predeterminado={Contador1.Predeterminado}
                numero={Contador1.valor}
                />

                <Elemento
                incrementar={Contador2.Incrementar}
                disminuir={Contador2.Disminuir}
                predeterminado={Contador2.Predeterminado}
                numero={Contador2.valor}
                />

                <Elemento
                incrementar={Contador3.Incrementar}
                disminuir={Contador3.Disminuir}
                predeterminado={Contador3.Predeterminado}
                numero={Contador3.valor}
                />

                
                
            </div>
        </div>

    )
}