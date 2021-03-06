import React, { Component } from "react"
import axios from "axios";
import CardPiragua from "../molecules/CardPiragua";
import urlCantidadGrupos from "../../data/cantidadDeGrupos.json"


class DatosCantidadGrupos extends Component {
    constructor (props){
       super(props)
       this.state ={ 
        datos: []
       }
    }  
    //este servicio no funciona por eso se esta utilizando datosUno
    componentDidMount () {
        axios.get(`http://api-piragua.solupyme.com/api/v1/nivel-subsiguiente/`)
        .then(response => this.setState({
            datos:response.data
        }))
      }
    render(){
        const {datos} = this.state
        return (<CardPiragua descripcion = {urlCantidadGrupos.name} 
                         valor  = {urlCantidadGrupos.valor} 
                />)
    }
}

export default DatosCantidadGrupos