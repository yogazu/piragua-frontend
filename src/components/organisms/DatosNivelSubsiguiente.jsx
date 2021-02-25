import React, { Component } from "react"
import NivelSubsigiente from "../molecules/NivelSubsiguiente"
import axios from "axios";

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
    //ese servicio no funciona por eso se esta utilizando datosUno
    componentDidMount () {
        axios.get(`http://api-piragua.solupyme.com/api/v1/nivel-subsiguiente/`)
        .then(response => this.setState({
            datos:response.data
        }))
      }
   
    render(){
        const {datos} = this.state
        
        return (<NivelSubsigiente datosNivelSubsiguiente  = {datos}/>)
    }
}

export default DatosNivelSubsiguiente