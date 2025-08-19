import { useEffect, useState } from "react"

export function Elemento({incrementar , disminuir , predeterminado , numero}) {

    

    return(

        <div className="Elemento-container">
            <button onClick={incrementar}>+</button>
            <button onClick={disminuir}>-</button>
            <button onClick={predeterminado}>predeterminado</button>
            <h1 style={{ color: numero > 0 ? "green" : numero < 0 ? "red" : "black" }}>
            {numero}
            </h1>
        </div>
    )
    
}