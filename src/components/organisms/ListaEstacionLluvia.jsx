import React , { Component } from "react";
import axios from "axios"
import Autocompletar from "../molecules/Autocompletar";

const datosUno = [ 
    {
    "id"    : 1,
    "name" : "Estación lluvia Uno",
    
    },
    {
    "id"    : 2,
    "name" : "Estación lluvia Dos",
    
    },
    {
    "id"    : 3,
    "name" : "Estación lluvia Tres",
   
    },
    {
    "id"    : 4,
    "name" : "Estación lluvia Cuatro",
    
    }
]

class ListaEstacionLluvia extends Component {

    constructor(pros){
        super(pros)
        this.state ={ 
            datos: []
        }
    }
    //se debe cambiar el servicio por el que indique el cliente
    componentDidMount () {
        axios.get(`http://api-piragua.solupyme.com/api/v1/nivel-subsiguiente/`)
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
                            labelName = {"Estación de Lluvias"} 
                            widthValue = {350}
                        />
                    :
                    <h1>No existen Datos</h1>
                }
            </div>
        )
    }
}

export default ListaEstacionLluvia