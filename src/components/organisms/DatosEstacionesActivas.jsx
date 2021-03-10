import React, { Component } from "react"
import axios from "axios";
import CardPiragua from "../molecules/CardPiragua";
import urlEstacionesActivas from "../../data/estacionesActivas.json"


class DatosNumeroPiraguero extends Component {
    constructor (props){
       super(props)
       this.state ={ 
        datos: []
       }
    }  
    //ese servicio no funciona por eso se esta utilizando datosUno
    componentDidMount () {
        axios.get(`http://api-piragua.solupyme.com/api/v1/nivel-subsiguiente/`)
        .then(response => this.setState({
            datos:response.data
        }))
      }
    render(){
        const {datos} = this.state
        return (<CardPiragua descripcion = {urlEstacionesActivas.name} 
                         valor  = {urlEstacionesActivas.valor + " " + urlEstacionesActivas.descripcion} 
                />)

               
    }
}

export default DatosNumeroPiraguero