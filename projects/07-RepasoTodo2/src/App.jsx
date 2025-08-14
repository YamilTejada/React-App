import { useState } from "react"
import { Elemento } from "./Elemento"
import "./App.css"

export function App() {

    const[arreglo , setArreglo] = useState([])
    const[nombre , setNombre] = useState("")
    const[ID , setID] = useState("")



    //1.Agregar Elemento
    let FuncionAgregarElemento = () =>{
        
        let elemento = {
            
            UsuarioNombre : nombre,
            UsuarioID : ID,
        }

        setArreglo([...arreglo , elemento])

        setNombre("")
        setID("")

    }

    //2.Eliminar Elemento (Individualmente)

    let EliminarElemento = (id) =>{
        
        setArreglo(arreglo.filter(item => item.UsuarioID !== id))

        

    }

    let FuncionEliminarTodosElementos = () =>{

        setArreglo([])
    }

    let FuncionNombre = (e) =>{

        setNombre(e.target.value)

    }

    let FuncionID = (e) =>{

        setID(e.target.value)
    }


    return(


        <div className="App-section1">

            <div className="App-article1">

                <h1>Elementos</h1>
                <h2>Funciones</h2>

                <label htmlFor="#">Nombre</label>
                <input type="text" onChange={FuncionNombre} value={nombre}/>

                <br />
                
                <label htmlFor="#">ID</label>
                <input type="text" onChange={FuncionID} value={ID} />

                <br />

                <button onClick={FuncionAgregarElemento}>Append</button>
                <button onClick={FuncionEliminarTodosElementos}>Delete all elements</button>

            </div>

            <div className="App-article2">

                {/* Si has puesto EliminarElemento(variable) lo que ocurre es que se va a ejecutar inmediatamente , a pesar de que tiene que dar click , debido a que estas pasando directamente el valor . Para evitar este problema lo que tienes que hacer es poner () => funcion(variable) de esta forma , cuando quieres poner un parámetro  */}

                {
                    arreglo.map( (arr) =>(

                     <Elemento key={arr.UsuarioID} nombre={arr.UsuarioNombre} ID={arr.UsuarioID} onClick={()=>EliminarElemento(arr.UsuarioID)}/>   


                    )

                    )
                }
                

            </div>
            




            
        </div>

        

    )
}