import React, { Component } from "react"
import axios from "axios";
import CardPiragua from "../molecules/CardPiragua";
import urlCantidadUsuarios from "../../data/cantidadUsuarios.json"

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
        .catch (error =>{
            console.log(error)
            
        })
      }

    render(){
        const {datos} = this.state
    
        return (<CardPiragua descripcion = {urlCantidadUsuarios.name} 
                         valor  = {urlCantidadUsuarios.valor} 
                />)

               
    }
}

export default DatosNumeroPiraguero