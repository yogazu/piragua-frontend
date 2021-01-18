import React, { useEffect, useState } from"react"
import useFetch from "../CustomHooks/useFetch"

const Dato = ({ match }) => {
    //(const [state,setState] = useState ({})
    //const dato = useDatos(match.params.id)

    const dato = useFetch(`http://my-json-server.typicode.com/yogazu/json-db/datos/${match.params.id}`,[ ])

    console.log(dato);
    
    return (
        
      <div className = "ed-grid m-grid-3">
          {
            
            dato.data ? (
                <div key = {dato.data.id } className="ed-grid">
                    <div className="l-block">
                      <h1 className="m-cols-3">{dato.data.title}</h1>
                      <img className="m-cols-1" src={dato.data.image} alt={dato.data.title}/>
                      <p clasName = "m-cols-2">Parrafó descripción</p>
                      
                    </div>
                </div>
            ):
                <h1>El curso no existe</h1>
          
          }
      </div>
    )
}

export default Dato