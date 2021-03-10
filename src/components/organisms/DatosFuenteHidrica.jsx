import React, { Component } from "react"
import axios from "axios";
import TipoFuenteHidrica from "../molecules/TipoFuenteHidrica";


const datosUno = [ 
    {
    "id"    : 1,
    "name" : "Fuente Hídrica Uno",
    
    },
    {
    "id"    : 2,
    "name" : "Fuente Hídrica Dos",
    
    },
    {
    "id"    : 3,
    "name" : "Fuente Hídrica Tres",
   
    },
    {
    "id"    : 4,
    "name" : "Fuente Hídrica Cuatro",
    
    }
]
class DatosFuenteHidrica extends Component {

    constructor (props){
        super(props)
        this.state = {
            datos: []
        }
    }
    //Cambiar el Json este no es el de tipo Grupo
    componentDdMount (){
        axios.get(`http://api-piragua.solupyme.com/api/v1/nivel-subsiguiente/`)
        .then(response => this.setState({
            datos:response.data
        }))
    }

    render(){
        const {datos} = this.state
        return (<TipoFuenteHidrica datoTipoFuenteHicrica = {datosUno}/>)
    }
}

export default DatosFuenteHidrica