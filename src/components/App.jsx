//import { Fragment } from "react";
import React from "react";
import "../styles/styles.scss";
import Formulario from './pages/Formulario'
import DatosGrid from './organisms/DatosGrid'
import Dato from './pages/Dato'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import MainMenu from "./organisms/MainMenu"
import History from "./pages/History";
import Home from "./pages/Home";
import Users from "./pages/Users";



const App = () => (
  
  <Router>
    <MainMenu/>
    <Switch>
      <Route path="/" exact component = { Home }/>
      <Route path="/datos/:id"  component = { Dato }/>
      <Route path="/datos"  component = { DatosGrid }/>
      <Route path="/formulario"  component = { () => <Formulario name= "pagina de contacto"/> }/>
      <Route path="/historial/:valor"  component = { History }/>
      <Route path="/historial"  component = { History }/>
      <Route path="/usuarios"  component = { Users }/>
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
