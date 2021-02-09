import React , { Component } from "react";
import axios from "axios"
import Autocompletar from "../molecules/Autocompletar";

const datosUno = [ 
    {
    "id"    : 1,
    "name" : "Caudal Uno",
    
    },
    {
    "id"    : 2,
    "name" : "Caudal Dos",
    
    },
    {
    "id"    : 3,
    "name" : "Caudal Tres",
   
    },
    {
    "id"    : 4,
    "name" : "Caudal Cuatro",
    
    }
]

class ListaNivelCaudal extends Component {

    constructor(pros){
        super(pros)
        this.state ={ 
            datos: []
        }
    }
     //se debe cambiar el servicio por el que indique el cliente
     componentDidMount () {
        axios.get(`http://piraguacorantioquia.com.co:8020/core/niveles-subsiguientes/get-all-nss1`)
        .then(response => this.setState({
            datos:response.data
        }))
    }

    render (){
        return (
            <div className = "ed-grid">
                { 
                    datosUno ?
                        <Autocompletar
                            id = {datosUno.id} arrayIn={datosUno} 
                            labelName = {"Nivel Caudal"} 
                            widthValue = {350}
                        />
                    :
                    <h1>No existen Datos</h1>
                }
            </div>
        )
    }
}

export default ListaNivelCaudal