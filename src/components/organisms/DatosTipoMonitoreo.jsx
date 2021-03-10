import React, { Component } from "react"
import axios from "axios";
import TipoMonitoreo from "../molecules/TipoMonitoreo";


const datosUno = [ 
    {
    "id"    : 1,
    "name" : "Tipo Monitoreo Uno",
    
    },
    {
    "id"    : 2,
    "name" : "Tipo Monitoreo Dos",
    
    },
    {
    "id"    : 3,
    "name" : "Tipo Monitoreo Tres",
   
    },
    {
    "id"    : 4,
    "name" : "Tipo Monitoreo Cuatro",
    
    }
]
class DatosTipoMonitoreo extends Component {

    constructor (props){
        super(props)
        this.state = {
            datos: []
        }
    }
    //Cambiar el Json este no es el de tipo Monitoreo
    componentDdMount (){
        axios.get(`http://api-piragua.solupyme.com/api/v1/nivel-subsiguiente/`)
        .then(response => this.setState({
            datos:response.data
        }))
    }

    render(){
        const {datos} = this.state
        return (<TipoMonitoreo datoTipoMonitoreo = {datosUno}/>)
    }
}

export default DatosTipoMonitoreo