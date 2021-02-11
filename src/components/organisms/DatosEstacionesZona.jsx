import React, { Component } from "react"
import axios from "axios";
import CardPiragua from "../molecules/CardPiragua";

const datosUno = [ 
    {
        "id"    : 1,
        "name" : "3",
    }
]

class DatosEstacionesZona extends Component {
    constructor (props){
       super(props)
       this.state ={ 
        datos: []
       }
    }  
    //ese servicio no funciona por eso se esta utilizando datosUno
    componentDidMount () {
        axios.get(`http://piraguacorantioquia.com.co:8020/core/niveles-subsiguientes/get-all-nss1`)
        .then(response => this.setState({
            datos:response.data
        }))
      }
    render(){
        const {datos} = this.state
        return (<CardPiragua descripcion = {"Estaciones En La Zona"} valor  = {datosUno[0].name}/>)
    }
}

export default  DatosEstacionesZona
