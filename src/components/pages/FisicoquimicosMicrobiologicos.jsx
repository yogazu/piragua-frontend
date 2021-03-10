import React from "react"
import DonutChart from "../molecules/DonutChart"
import Indicadores from "../molecules/Indicadores"
import DatosCaudal from "../organisms/DatosCaudal"

const FisicoquimicosMicrobiologicos =() => {
    return(
        <>
            <div className="ed-grid">
                <Indicadores/>
                <DatosCaudal/>
            </div>
            <div className="ed-grid">
                <span className="label">Totalidad de Monitoreos presente en el índice</span>
                <br/>
                <DonutChart/>
            </div>
        </>
    )
}

export default FisicoquimicosMicrobiologicos