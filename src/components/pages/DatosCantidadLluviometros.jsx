import React,{Component} from "react"
import axios from "axios";
import urlCantidadLluviometros from "../../data/cantidadLluviometros.json"
import CardLluviometro from "../molecules/CardLluviometro";

class DatosCantidadLluviometros extends Component {
    constructor (props){
        super(props)
        this.state ={
            datos:[]
        } 
    }
    //este servicio no aplica
    componentDidMount () {
        axios.get(`http://piraguacorantioquia.com.co:8020/core/niveles-subsiguientes/get-all-nss1`)
        .then(response => this.setState({
            datos:response.data
        }))
    }

    render(){
        const {datos} = this.state
        return (<CardLluviometro descripcion = {urlCantidadLluviometros.name} 
                         valor  = {urlCantidadLluviometros.valor} 
                />)
    }
}
export default DatosCantidadLluviometros