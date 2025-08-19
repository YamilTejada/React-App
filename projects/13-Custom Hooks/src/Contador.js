import {useState} from "react"

export function useContador(valor=12) {

    const[numero , setNumero] = useState(valor)

    const aumentar = () => setNumero(numero+1)
    const disminuir = () => setNumero(numero-1)
    const predeterminado = () => setNumero(valor)

    return{numero , aumentar , disminuir , predeterminado}
    
}