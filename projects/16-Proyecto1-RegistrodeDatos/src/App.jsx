import { useEffect, useState } from "react"
import { Elemento } from "./Elemento"
import "./App.css"

export function App() {

    //UseState

    const[arreglo , setArreglo] = useState([])
    const[arreglo2 , setArreglo2] = useState([])
    const[nombre , setNombre] = useState("")
    const[ID , setID] = useState("")
    const[ID2 , setID2] = useState("")

    //Excepciones

    const[cargando , setCargando] = useState(false)
    const[encontrado , setEncontrado] = useState(false)
    const[invalidaID , setInvalidaID] = useState(false)

    //API

    useEffect( () => {

        const API = async () => {

            try {

                const promise = await fetch("https://jsonplaceholder.typicode.com/users")
                const json = await promise.json()

                console.log(json)
                /*Recuerda que pones ... si el arreglo contiene datos*/
                setArreglo(json)
                
            } 
            
            catch (error) {
                console.log(error)
            }
            finally {
                console.log("Finalizado...")
            }

        }

        API()

    }, [])

    //Functions

    function FunctionAppend() {

        const constante = arreglo.some(arr => Number(arr.id) === Number(ID))

        if (constante===false) {

            const elemento = {
                id: ID,
                name: nombre,
            }

            setArreglo([...arreglo , elemento])
            
        }

        else{

            setInvalidaID(true)
            setArreglo2([])

        }


        
            
    }

    function FunctionLookingFor() {

        setCargando(true)

        const Elemento = arreglo.find(arr => Number(arr.id) === Number(ID2))
        

        if (Elemento===undefined) {
            
            console.log("No existo")
            setArreglo2([])
            setEncontrado(true)

        }

        else{

            setArreglo2([Elemento])
            setEncontrado(false)
        }


        setCargando(false)
        
        console.log(Elemento)
        
    }

    function getID(e) {
        
        setID(e.target.value)
    }

    function getID2(e) {
        
        setID2(e.target.value)
    }

    

    function getNombre(e) {

        setNombre(e.target.value)
    }

    // Functions Buttons

    function TareaTerminada(id) {

        const Elemento = arreglo.find(arr => Number(arr.id) === Number(id))

        console.log( id + " Terminado")
        
    }

    function TareaEliminada(id) {

        const NewArreglo = arreglo.filter(arr => Number(arr.id) !== Number(id))
        
        setArreglo(NewArreglo)
    }


    return (

        <div className="App-container">

            <div className="App-section section1">

                <h1>Registro y Búsqueda de Datos del Usuario</h1>

            </div>

            <div className="App-section section2">

                <div className="App-article1">
                    <h3>Introduzca la ID para encontrar el elemento</h3>
                    <input type="text" onChange={getID2} value={ID2}/>
                    <button onClick={FunctionLookingFor} >Buscar</button>
                </div>

                <div className="App-article2">
                    {/*Elemento Encontrado */}

                    {encontrado && <h3 style={{color:"red"}}>Elemento no Encontrado</h3>}

                    {cargando && <h3 style={{color:"green"}}>Cargando...</h3>}

                    

                    {


                        arreglo2.map(arr => (

                            <Elemento
                            key={arr.id}
                            Nombre={arr.name}
                            ID={arr.id}
                            TareaTerminada={()=>TareaTerminada(arr.id)}
                            TareaEliminada={()=>TareaEliminada(arr.id)}
                            />

                        ))
                    }
                </div>

            </div>

            <div className="App-section section3">

                <div className="App-article1">
                    
                    <label htmlFor="#">Introduzca su Nombre</label>
                    <input type="text" value={nombre} onChange={getNombre}/>
                    <label htmlFor="#">Introduzca su ID</label>
                    <input type="text" value={ID} onChange={getID}/>
                    <button onClick={FunctionAppend}>Agregar</button>

                </div>
                
            </div>

            <div className="App-section section4">
                {/*Elementos que contiene el arreglo*/}

                {invalidaID && <h3>La ID que introdujo es repetida .Por favor , eliga uno diferente</h3>}

                {
                    
                    arreglo.map(arr=>(

                        <Elemento
                        key={arr.id}
                        Nombre={arr.name}
                        ID={arr.id}
                        TareaTerminada={()=>TareaTerminada(arr.id)}
                        TareaEliminada={()=>TareaEliminada(arr.id)}
                        />
                    ))
                }


            </div>

        </div>
    )
    
}