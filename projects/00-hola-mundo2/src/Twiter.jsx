import { useState } from "react";

export function Twiter({nombre , email , initialFollowing}) {

    const [isFollowing , setFollowing] = useState(initialFollowing)

    let texto = isFollowing ? "Siguiendo" : "Seguir";
    let styleButton = isFollowing ? "button-App" : "button-App isFollowing";


    const eventClick = ()=> {
        setFollowing(!isFollowing)
    }

    return (    

        <div className="div-App">

            <div className="section1-App">


                <h3>{nombre}</h3>
                <span>{email}</span>

            </div>

            <div className="section2-App">

                <button className={styleButton} onClick={eventClick}>
                    <span className="texto1">{texto}</span>
                    <span className="texto2">Dejar de seguir</span>
                    
                </button>
            </div>

        </div>

    )
}