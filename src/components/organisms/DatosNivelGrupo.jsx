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
        axios.get(`http://api-piragua.solupyme.com/api/v1/nivel-subsiguiente/`)
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