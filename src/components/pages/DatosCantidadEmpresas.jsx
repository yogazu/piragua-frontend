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
        axios.get(`http://piraguacorantioquia.com.co:8020/core/niveles-subsiguientes/get-all-nss1`)
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