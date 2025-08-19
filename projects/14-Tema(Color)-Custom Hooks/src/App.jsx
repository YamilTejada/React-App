
import "./App.css"
import { useTema } from "./Tema"

export function App() {



    const{divPadre, titleText , titleBtnText , divHijo, Tema} = useTema()

    return (

        <div className={divPadre}>

            <h1>{titleText}</h1>

            <div className={divHijo}>
                <button onClick={Tema}>{titleBtnText}</button>
            </div>

            <div className={divHijo}>
                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum aliquid molestias nemo natus necessitatibus. Libero tenetur ducimus quibusdam, nostrum, provident quam ullam incidunt esse blanditiis totam assumenda harum ex aspernatur?</h1>
            </div>

        </div>


    )
}