import React, { Component } from "react"
import NivelesSubsigiente from "./NivelesSubsiguiente"

const datosUno = [ 
    {
    "id"    : 1,
    "name" : "Directos R.Cauca-R.Amaga-Q.Sinifána",
    
    },
    {
    "id"    : 2,
    "name" : "Directos R.Negro-R.Rojo-Q.Verde",
    
    },
    {
    "id"    : 3,
    "name" : "Directos R.Azul-R.Amarillo-Q.Naranja",
   
    },
    {
    "id"    : 4,
    "name" : "Directos R.Atrato-R.Retrato-Q.Pequeña",
    
    }
]

class DatosNivelSubsiguiente extends Component {

    constructor (props){
       super(props)

       this.state ={ 
        datos: []
       }
    }  

    

    render(){
    
        
        return (<NivelesSubsigiente datosNivelSubsiguiente  = {datosUno}/>)
    }

   

}



export default DatosNivelSubsiguiente