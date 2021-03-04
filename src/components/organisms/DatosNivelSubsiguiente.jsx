import React, { Component } from "react"
import NivelSubsigiente from "../molecules/NivelSubsiguiente"
import axios from "axios";

class DatosNivelSubsiguiente extends Component {

    constructor (props){
       super(props)

       this.state ={ 
        datos: []
       }
    }  

    componentDidMount () {
        axios.get(`http://api-piragua.solupyme.com/api/v1/nivel-subsiguiente/`)
        .then(response => this.setState({
            datos:response.data
        }))
      }

    render(){
        const {datos} = this.state
        return (<NivelSubsigiente datosNivelSubsiguiente  = {datos}/>)
    }
}

export default DatosNivelSubsiguiente