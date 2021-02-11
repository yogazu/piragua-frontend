import React, { Component } from "react"
import axios from "axios";
import CardPiragua from "../molecules/CardPiragua";

const datosUno = [ 
    {
        "id"    : 1,
        "name"  : "Número De Piragüeros",
        "valor" : "25",
    }
]

class DatosNumeroPiraguero extends Component {
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
        return (<CardPiragua descripcion = {datosUno[0].name} 
                         valor  = {datosUno[0].valor} 
                />)
    }
}

export default DatosNumeroPiraguero