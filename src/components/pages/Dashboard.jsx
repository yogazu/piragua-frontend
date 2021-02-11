import React from "react"
import DashboardParteUno from "./DashboardParteUno"
import MapChart from "../molecules/MapChart"
import DashboardParteDos from "./DashboardParteDos"
import ParametrosPrincipales from "./ParametrosPrincipales"

const Dashboard = () => {

   return (
    <>
        <ParametrosPrincipales/>
        <div className="ed-grid m-grid-4">
            <div class="ed-grid">
                <DashboardParteUno/>
            </div>  
            <div className="m-cols-2 m-x-2">
                <MapChart/>
            </div>
            <div class="ed-grid">
                <DashboardParteDos/>
            </div>      
        </div>
    </>
   )
}

export default Dashboard 