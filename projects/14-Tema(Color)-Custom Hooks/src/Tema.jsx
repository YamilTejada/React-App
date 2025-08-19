import { useState } from "react"
//Recomendable utilizar solo un useState Tema(claro y oscuro) , utilizar la condicional ternaria

export function useTema() {

    const[divPadre , setdivPadre] = useState("App-container")
    const[titleText , setTitleText] = useState("Tema Claro")
    const[titleBtnText , setTitleBtnText] = useState("Cambiar a oscuro")
    const[divHijo , setdivHijo] = useState("App-section")

    const Tema = () => {


        if (titleText==="Tema Claro") {

        setdivPadre("App-container Dark")
        setTitleText("Tema Oscuro")
        setTitleBtnText("Cambiar a claro")
        setdivHijo("App-section Dark")
        }

        else{

        setdivPadre("App-container")
        setTitleText("Tema Claro")
        setTitleBtnText("Cambiar a oscuro")
        setdivHijo("App-section")
        }

        console.log(titleText)

        
    }

    return {divPadre, titleText , titleBtnText , divHijo, Tema}
    
}