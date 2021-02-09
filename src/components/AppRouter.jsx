import React from "react"

import Territoriales from "./organisms/Territoriales";
import MunicipioxTerritorio from "./organisms/MunicipiosxTerritorio";
import DatosNivelSubsiguiente from "./organisms/DatosNivelSubsiguiente";
import DashboardPiragua from "./templates/DashboardPiragua";
import Formulario from './pages/Formulario'
import Datos from './pages/Datos'
import Dato from './pages/Dato'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import MainMenu from "./organisms/MainMenu"
import History from "./pages/History";
import Home from "./pages/Home";
import Users from "./pages/Users";
import RedAutomatica from "./pages/RedAutomatica";
import ListaEstacionLluvia from "./organisms/ListaEstacionLluvia";
import ReporteDatosLluvia from "./organisms/ReporteDatosLluvia";
import LineaChart from "./molecules/LineChart";



const AppRouter = () => (

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
      <Route path="/dashboard" component = { DashboardPiragua}/>
      <Route path="/municipios/:idTerritorio" component = { MunicipioxTerritorio}/>
      <Route path="/nivelsubsiguiente"  component = { DatosNivelSubsiguiente }/>
      <Route path="/redautomatica" component = {RedAutomatica}/>
      <Route path="/listaestacionlluvia" component = {ListaEstacionLluvia}/>
      <Route path="/reportedatoslluvia" component= {ReporteDatosLluvia} />
      <Route path="/lineachart" component= {LineaChart} />
     
      <Route component = { () => (
        <div className="ed-grid">
          <h1>error 400</h1>
          <span>página no encontrada</span>
        </div> 


      )}/>
    </Switch>

  </Router>


)

export default AppRouter