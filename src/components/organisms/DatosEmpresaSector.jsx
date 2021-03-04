import React, { Component } from "react"
import axios from "axios";
import EmpresaSector from "../molecules/EmpresaSector";

const datosUno = [ 
    {
    "id"    : 1,
    "name" : "Empresa o Tipo de Sector Uno",
    },
    {
    "id"    : 2,
    "name" : "Empresa o Tipo de Sector Dos",
    },
    {
    "id"    : 3,
    "name" : "Empresa o Tipo de Sector Tres",
    },
    {
    "id"    : 4,
    "name" : "Empresa o Tipo de Sector Cuatro",
    }
]

class DatosEmpresaSector extends Component {

    constructor (props){
        super(props)
        this.state = {
            datos: []
        }
    }
    //Este no es el json 
    componentDidMount (){
        axios.get(`http://api-piragua.solupyme.com/api/v1/nivel-subsiguiente/`)
        .then(response => this.setState({
            datos:response.data
        }))
    }
    render(){
        const {datos} = this.state
        return (<EmpresaSector empresaSector = {datosUno}/>)
    }   
}

export default DatosEmpresaSector