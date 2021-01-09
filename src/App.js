import { Fragment } from "react";
import React from "react";
import "./styles/styles.scss";
import Piragua from './Piragua'


const datos = [ 
  {
    "title" : "este es el titulo uno",
    "image" : "https://ep01.epimg.net/tecnologia/imagenes/2011/08/26/actualidad/1314349262_850215_0000000000_sumario_normal.jpg",
    "price" : "100"
  },
  {
    "title" : "este es el titulo dos",
    "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyASapO7PcYhBn3X_tyFoMYEMHqJlpN6I25Q&usqp=CAU",
    "price" : "200"
  },
  {
    "title" : "este es el titulo tre",
    "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG_7alFvLRY0HysRHmZCGd8oxF-q0FLxROyw&usqp=CAU",
    "price" : "300"
  },
  {
    "title" : "este es el titulo uno",
    "image" : "https://thumbs.dreamstime.com/x/animaci%C3%B3n-de-los-nombres-la-ciudad-con-sus-edificios-en-un-fondo-azul-concepto-moderno-las-ciudades-141255966.jpg",
    "price" : "400"
  }
]

const App = () => (
  <Fragment>
  <div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" alt = "banner"  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=60" />
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Proyecto Piragua</p>
        <p> Informes</p>
        <a href="https://ed.team/" className="button">Ingresar</a>
      </div>
    </div>
  </div>
</div>
<div className="ed-grid m-grid-3">
  {
    datos.map(d => <Piragua title={d.title} image={d.image} price={d.price}/>)
  }
</div>
</Fragment>

)

export default App;
