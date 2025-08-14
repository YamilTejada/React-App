import { useEffect, useState } from "react"
import { Elemento } from "./Elemento"
import './App.css'


export function App() {

    const[arreglo , setArreglo] = useState([])
    const[title , setTitle] = useState("")
    const[ID , setID] = useState("")

    //Filtro

    const [filtro, setFiltro] = useState("todas"); // "todas" | "completadas" | "pendientes"




    let FunctionID = (e) => {

        setID(e.target.value)

    }

    let FunctionTitle = (e) => {

        setTitle(e.target.value)

    }

    //Buttons

    let EliminarTodo = () =>{

        setArreglo([])

    }

    let AgregarElemento = () =>{

        let elemento = {

            "userId": 1,
            "id": ID,
            "title": title,
            "completed": false
        }

        setArreglo([...arreglo , elemento])

        setTitle("")
        setID("")
 

    }

    //Buttons Elementos (Completado - Eliminado)

    let ElementoEliminado = (element) =>{

        setArreglo(

            arreglo.filter(arr => arr.id !== element)
        )
    }


    //Repasar al final (Quitas esto cuando lo hayas hecho)

    let ElementoCompletado = (id) => {

        setArreglo(
            arreglo.map( (arr) => (

                //Combianas condicional ternario y operador de propagación (Poderoso)

                arr.id === id ? { ...arr, completed: !arr.completed } : arr

            )
            )
        )

    };


    //UseEffect (API)

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then(api => api.json())
    .then(json => setArreglo(json))
 
  }, []);



  //Filtrador


        const tareasFiltradas = arreglo.filter((tarea) => {
        if (filtro === "completadas") return tarea.completed;
        if (filtro === "pendientes") return !tarea.completed;
        return true; // todas
        });


    return (




        <div className="App-container">

            <h1>Lista de Tareas con API</h1>


            <div className="App-section1">


                <label htmlFor="#">Title:</label>
                <input type="text" onChange={FunctionTitle} value={title}/>

                

                <label htmlFor="#">ID:</label>
                <input type="text" onChange={FunctionID} value={ID} />

                


                <button onClick={AgregarElemento}>Add</button>
                <button onClick={EliminarTodo}>Delete all</button>


                <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                <option value="todas">Todas</option>
                <option value="completadas">Completadas</option>
                <option value="pendientes">Pendientes</option>
                </select>


            </div>

            <div className="App-section2">

                {
                    tareasFiltradas.map((arr) => (
                        <Elemento
                        key={arr.id}
                        userId={arr.userId}
                        id={arr.id}
                        title={arr.title}
                        completed={arr.completed}  
                        onClick1={() => ElementoCompletado(arr.id)}
                        onClick2={() => ElementoEliminado(arr.id)}   
                        />        
                    ))
                }



            </div>
        </div>


    )
    
}