import React , {Component} from "react"
import axios from "axios";
import TipoProyecto from "../molecules/TipoProyecto";

const datosUno = [ 
    {
    "id"    : 1,
    "name" : "Tipo proyecto Uno",
    
    },
    {
    "id"    : 2,
    "name" : "Tipo proyecto Dos",
    
    },
    {
    "id"    : 3,
    "name" : "Tipo proyecto Tres",
   
    },
    {
    "id"    : 4,
    "name" : "Tipo proyecto Cuatro",
    
    }
]

class DatosTipoProyecto extends Component {

    constructor (props){
        super(props)
        this.state = {
            datos: []
        }
    }

    //Cambiar el Json este no es el de tipo Proyecto
    componentDdMount (){
        axios.get(`http://api-piragua.solupyme.com/api/v1/nivel-subsiguiente/`)
        .then(response => this.setState({
            datos:response.data
        }))
    }

    render () {
        const {datos} = this.state
        return (<TipoProyecto datosTipoProyecto = {datosUno}/>)
    }
    
}
export default DatosTipoProyecto