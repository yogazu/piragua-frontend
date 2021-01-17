//import { Fragment } from "react";
import React from "react";
import "../styles/styles.scss";
import Formulario from './pages/Formulario'
import Datos from './pages/Datos'
import Dato from './pages/Dato'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import MainMenu from "./organisms/MainMenu"
import History from "./pages/History";
import Home from "./pages/Home";
import Users from "./pages/Users";

import 'fontsource-roboto';
import General from "./pages/General";
import Territoriales from "./organisms/Territoriales";



const App = () => (
  
  <Router>
    <MainMenu/>
    <Switch>
      <Route path="/" exact component = { Home }/>
      <Route path="/dato/:id"  component = { Dato }/>
      <Route path="/datos"  component = { Datos }/>
      <Route path="/formulario"  component = { () => <Formulario name= "pagina de contacto"/> }/>
      <Route path="/historial/:valor"  component = { History }/>
      <Route path="/historial"  component = { History }/>
      <Route path="/usuarios"  component = { Users }/>
      <Route path="/territoriales" component = { Territoriales}/>
      <Route path="/general" component = { General}/>
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
