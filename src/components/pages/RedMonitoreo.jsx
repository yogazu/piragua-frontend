import React from "react"
import DonutChart from "../molecules/DonutChart"
import FisicoquimicosMicrobiologicos from "./FisicoquimicosMicrobiologicos"
import ParametrosRedMonitoreo from "./ParametrosRedMonitoreo"
import RedMonitoreoGraficasImpresion from "./RedMonitoreoGraficasImpresion"


const RedMonitoreo = () => {
    return (
        <>
            <ParametrosRedMonitoreo/>  
            <br/>
            <div className="ed-grid lg-grid-3">
                <div className="ed-grid lg-cols-2 ">
                    <center><h3>Físioquimicos y Microbiológicos</h3></center>
                </div>
                <div className="ed-grid">
                <center><h3>Hidrobiologico</h3></center>
                </div>
            </div>
            <br/>
            <div className="ed-grid lg-grid-3">
                <FisicoquimicosMicrobiologicos/>
                <div className="ed-grid">
                    <span className="label">Totalidad de Monitoreos presente en el índice</span>
                    <br/>
                    <DonutChart/>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="ed-grid rows-gap m-gap-05 m-grid-4">
                 <RedMonitoreoGraficasImpresion/>
            </div>   
            <br/>
            <br/>
            <br/>
        </>
    )
}
export default RedMonitoreo