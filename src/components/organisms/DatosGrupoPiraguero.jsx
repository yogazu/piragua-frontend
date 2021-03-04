import React, { Component } from "react"
import axios from "axios";
import GrupoPiraguero from "../molecules/GrupoPiraguero";

const datosUno = [ 
    {
    "id"    : 1,
    "name" : "Grupo Piragüero Uno",
    },
    {
    "id"    : 2,
    "name" : "Grupo Piragüero Dos",
    },
    {
    "id"    : 3,
    "name" : "Grupo Piragüero Tres",
    },
    {
    "id"    : 4,
    "name" : "Grupo Piragüero Cuatro",
    }
]

class DatosGrupoPiraguero extends Component {

    constructor (props){
        super(props)
 
        this.state ={ 
         datos: []
        }
    }
    //este no es el json
    componentDidMount () {
        axios.get(`http://api-piragua.solupyme.com/api/v1/nivel-subsiguiente/`)
        .then(response => this.setState({
            datos:response.data
        }))
    }

    render(){
        const {datos} = this.state
        return (<GrupoPiraguero   grupoPiraguero = {datosUno}/>)
    }
}

export default DatosGrupoPiraguero
