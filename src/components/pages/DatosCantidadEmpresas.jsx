import React,{Component} from "react"
import axios from "axios";
import urlCantidadEmpresa from "../../data/cantidadEmpresas.json"
import CardEmpresa from "../molecules/CardEmpresa";


class DatosCantidadEmpresas extends Component {
    constructor (props){
        super(props)
        this.state ={
            datos:[]
        } 
    }
    //este servicio no aplica
    componentDidMount () {
        axios.get(`http://api-piragua.solupyme.com/api/v1/nivel-subsiguiente/`)
        .then(response => this.setState({
            datos:response.data
        }))
    }

    render(){
        const {datos} = this.state
        return (<CardEmpresa descripcion = {urlCantidadEmpresa.name} 
                         valor  = {urlCantidadEmpresa.valor} 
                />)
    }
}
export default DatosCantidadEmpresas