import React,{Component} from "react"
import axios from "axios";
import CardNivelGrupo from "../molecules/CardNivelGrupo";
import urlNivelGrupo from "../../data/nivelGrupo.json"

class DatosNivelGrupo extends Component {
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
        return (<CardNivelGrupo descripcion = {urlNivelGrupo.name} 
                         valor  = {urlNivelGrupo.valor} 
                         color  = {urlNivelGrupo.color}
                />)
    }
}
export default DatosNivelGrupo