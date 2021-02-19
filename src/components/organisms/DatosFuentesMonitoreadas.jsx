import React, { Component } from "react"
import axios from "axios";
import ControlledAccordions from "../molecules/ControlledAccordions"
import urlTotalFuentesMonitoreo from "../../data/totalFuentesMonitoreadas.json"
import usrlFuentesMonitoreo from "../../data/fuentesMonitoreadas.json"



class DatosFuentesMonitoreadas extends Component {
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
        return (<> 
                    
                     <ControlledAccordions 
                        nombre= {urlTotalFuentesMonitoreo.name} 
                        total = {urlTotalFuentesMonitoreo.valor} 
                        datos = {usrlFuentesMonitoreo}
                     />
                   
                </>)
    }
}

export default  DatosFuentesMonitoreadas
