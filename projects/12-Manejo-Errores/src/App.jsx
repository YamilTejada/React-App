import { useEffect, useState } from "react"
import { Elemento } from "./Elemento"

export function App() {

    const[arreglo , setArreglo] = useState([])
    const[error , setError] = useState(false)
    const[cargando , setCargando] = useState(true)
    const[API , setAPI] = useState("https://jsonplaceholder.typicode.com/users")

    const[text , setText] = useState("")
    const[encontrado , setEncontrado] = useState(true)


    //Use Effect=====
    useEffect(()=>{

        
        //await-async

        let functionAPI = async () => {

            try {

                setCargando(true)

                const promise = await fetch(API)

                if (!promise.ok) {

                    throw new Error("Error de API (API Desconocido)")
                    
                }

                
                const json = await promise.json()

                setArreglo(json)
                setError(false)


                console.log(json)
                console.log("Correcto")

            } 
            
            catch (error) {

                
                setError(true)
                setArreglo([])

                console.log(error.message)
                
                
                
            }

            finally {

                console.log("Cargando...")
                setCargando(false)


            }
            
        }

        functionAPI()


    } , [API])

    //Functions

    let FunctionIRLCorrect = () => {

        setAPI("https://jsonplaceholder.typicode.com/users")

    }

    let FunctionIRLIncorrect = () =>{

        setAPI("https://jsonplac23eholder.typicode.com/usersIncorrect")
    
    }


    //Functions Input - Button

    let FunctionInput =(e) => {

        setText(e.target.value)

        console.log(text)
    }

    //Encontrar Elemento =====

    let FunctionButtonBuscar = () => {

        const existe = arreglo.some(arr => arr.id === Number(text))
        setEncontrado(existe)

        console.log(existe) // esto mostrará true o false
    }



    return (

        <div className="App-container">

            <div className="App-section1">

                <h1>Página Web</h1>

                <button onClick={FunctionIRLCorrect} >API correct</button>
                <button onClick={FunctionIRLIncorrect} >API incorrect</button>

                <br />
                <br />

                <label htmlFor="#">Introduzca la ID</label>
                <input type="text" onChange={FunctionInput} value={text}/>
                <button onClick={FunctionButtonBuscar}>Buscar</button>

                {/*Frases que saldrán en la página web :D*/}

                {/*Utilizar condicional &&*/}
                {(error) && <p style={{color:"red"}}>Lo sentimos mucho . Error de API</p>}
                {(!encontrado) && <p>Elemento No Encontrado</p>}
                

            </div>

            <div className="App-section2">

                
                {(cargando) && <p style={{color:"green"}}>Cargando Información...</p> }
                {   

                arreglo.map((arr)=>(

                <Elemento key={arr.id} nombre={arr.name} ID={arr.id}/>

                ))

                }

            </div>

            

        
        </div>

        
    )
    
}

