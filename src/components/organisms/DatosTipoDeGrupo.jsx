import React, { Component } from "react"
import axios from "axios";
import TipoDeGrupo from "../molecules/TipoDeGrupo";

const datosUno = [ 
    {
    "id"    : 1,
    "name" : "Tipo grupo Uno",
    
    },
    {
    "id"    : 2,
    "name" : "Tipo grupo Dos",
    
    },
    {
    "id"    : 3,
    "name" : "Tipo grupo Tres",
   
    },
    {
    "id"    : 4,
    "name" : "Tipo grupo Cuatro",
    
    }
]
class DatosTipoDeGrupo extends Component {

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
        return (<TipoDeGrupo tipoDeGrupo = {datosUno}></TipoDeGrupo>)
    }
}

export default DatosTipoDeGrupo