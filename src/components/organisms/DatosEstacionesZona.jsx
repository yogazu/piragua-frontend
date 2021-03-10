import React, { Component } from "react"
import axios from "axios";
import CardPiragua from "../molecules/CardPiragua";
import urlEstacionesEnLaZoNa from "../../data/estacionesEnlaZona.json"


class DatosEstacionesZona extends Component {
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
        return (<CardPiragua descripcion = {urlEstacionesEnLaZoNa.name} valor  = {urlEstacionesEnLaZoNa.valor}/>)
    }
}

export default  DatosEstacionesZona
