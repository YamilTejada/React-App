
import { useState } from "react"

export function useContador(num=12) {


    const[valor , setValor] = useState(num)

    function Incrementar() {
        setValor(valor+1)
    }

    function Disminuir() {
        setValor(valor-1)
    }
    function Predeterminado() {
        setValor(num)
    }

    return{Incrementar, Disminuir , Predeterminado , valor}
    
}