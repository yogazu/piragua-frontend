import React, { Component } from "react"
import axios from "axios";
import ControlledAccordions from "../molecules/ControlledAccordions"

class DatosFuentesMonitoreadas extends Component {
    constructor (props){
       super(props)
       this.state ={ 
        datos: [],
        totalFuentes: []
       }
    }  
    //ese servicio no funciona por eso se esta utilizando datosUno
    componentDidMount () {
        axios.get(`http://api-piragua.solupyme.com/api/v1/fuentes-componente/`)
        .then(response => this.setState({
            datos:response.data
        }))
        axios.get(`http://api-piragua.solupyme.com/api/v1/total-fuentes/`)
        .then(response => this.setState({
            totalFuentes:response.data
        }))
      }
    render(){
        const {datos} = this.state
        const {totalFuentes} = this.state
       
        return (<> 
                     <ControlledAccordions 
                        nombre= {totalFuentes.name} 
                        total = {totalFuentes.total} 
                        datos = {datos}
                     />
                </>)
    }
}

export default  DatosFuentesMonitoreadas
