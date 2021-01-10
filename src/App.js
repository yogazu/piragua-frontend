//import { Fragment } from "react";
import React from "react";
import "./styles/styles.scss";
import Banner from './Banner';
import Formulario from './Formulario'
import DatosGrid from './DatosGrid'
import Dato from './Dato'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"



const App = () => (
  
  <Router>
    <Switch>
      <Route path="/" exact component = { Banner }/>
      <Route path="/datos/:id"  component = { Dato }/>
      <Route path="/datos"  component = { DatosGrid }/>
      <Route path="/formulario"  component = { () => <Formulario name= "pagina de contacto"/> }/>
      <Route component = { () => (
        <div className="ed-grid">
          <h1>error 400</h1>
          <span>página no encontrada</span>
        </div> 


      )}/>
    </Switch>

  </Router>

/*<Fragment>
<Banner/>
    <DatosGrid/>
    <Formulario/>
  //</Fragment>
*/
)

export default App;
