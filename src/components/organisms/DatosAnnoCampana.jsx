import React, { Component } from "react"
import axios from "axios";
import TipoAnnoCampana from "../molecules/TipoAnnoCampana";


const datosUno = [ 
    {
    "id"    : 1,
    "name" : "2020",
    
    },
    {
    "id"    : 2,
    "name" : "2012",
    
    },
    {
    "id"    : 3,
    "name" : "2013",
   
    },
    {
    "id"    : 4,
    "name" : "2014",
    
    }
]
class DatosAnnoCampana extends Component {

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
        return (<TipoAnnoCampana datoAnnoCampana  = {datosUno}/>)
    }
}

export default DatosAnnoCampana