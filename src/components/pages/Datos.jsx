import React, {Component} from "react"
import axios from "axios";
import DatosGrid from "../organisms/DatosGrid";

/*
const datos = [ 
    {
      "id"    : 1,
      "title" : "este es el titulo uno",
      "image" : "https://ep01.epimg.net/tecnologia/imagenes/2011/08/26/actualidad/1314349262_850215_0000000000_sumario_normal.jpg",
      "price" : "100"
    },
    {
      "id"    : 2,
      "title" : "este es el titulo dos",
      "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyASapO7PcYhBn3X_tyFoMYEMHqJlpN6I25Q&usqp=CAU",
      "price" : "200"
    },
    {
      "id"    : 3,
      "title" : "este es el titulo tre",
      "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG_7alFvLRY0HysRHmZCGd8oxF-q0FLxROyw&usqp=CAU",
      "price" : "300"
    },
    {
      "id"    : 4,
      "title" : "este es el titulo uno",
      "image" : "https://thumbs.dreamstime.com/x/animaci%C3%B3n-de-los-nombres-la-ciudad-con-sus-edificios-en-un-fondo-azul-concepto-moderno-las-ciudades-141255966.jpg",
      "price" : "400"
    }
  ]
  */


class Datos  extends Component {

    constructor (props){

      super(props)

      this.state = {
        datos:[]
      }
    }

   componentDidMount () {
     axios.get(`http://my-json-server.typicode.com/yogazu/json-db/datos`)
     .then(response => this.setState({
       datos:response.data
     }))
   }

   render() {
     const {datos} = this.state

    return (<DatosGrid datos ={datos}/>)
   }

  }

    

export default Datos