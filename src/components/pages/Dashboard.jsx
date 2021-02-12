import React from "react"
import DashboardParteUno from "./DashboardParteUno"
import MapChart from "../molecules/MapChart"
import DashboardParteDos from "./DashboardParteDos"
import ParametrosPrincipales from "./ParametrosPrincipales"
import MapZoom from "./MapZoom"

const Dashboard = () => {

   return (
    <>
        <ParametrosPrincipales/>
        <br/>
        <div className="ed-grid m-grid-4">
            <div class="ed-grid">
                <DashboardParteUno/>
            </div>  
            <div className="ed-grid m-cols-2 m-x-2">
                <MapZoom/>
            </div>
            <div class="ed-grid">
                <DashboardParteDos/>
            </div>      
        </div>
    </>
   )
}

export default Dashboard 