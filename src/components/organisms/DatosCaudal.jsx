import React, { Component } from "react"
import axios from "axios";
import urlCaudal from "../../data/cantidadCaudal.json"
import CardCaudal from "../molecules/CardCaudal";

class DatosCaudal extends Component {
    constructor (props){
       super(props)
       this.state ={ 
        datos: []
       }
    }  
    //este servicio no funciona por eso se esta utilizando 
    componentDidMount () {
        axios.get(`http://api-piragua.solupyme.com/api/v1/nivel-subsiguiente/`)
        .then(response => this.setState({
            datos:response.data
        }))
      }
    render(){
        const {datos} = this.state
        return (<CardCaudal descripcion = {urlCaudal.name} 
                         valor  = {urlCaudal.valor} 
                />)
    }
}

export default DatosCaudal