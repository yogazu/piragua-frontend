import React from "react"
import RedAutomatica from "../pages/RedAutomatica"
import Dashboard from "../pages/Dashboard"
import RedSocial from "../pages/RedSocial"
import RedMonitoreo from "../pages/RedMonitoreo"

const Piragua = () => {
    return (
    <>
        <div className="ed-grid">
            <Dashboard/>
        </div>
        <br/>
        <div className="ed-grid">
            <RedSocial/>
        </div>
        <br/>
        <div className="ed-grid">
            <RedAutomatica/>
        </div>
        <br/>
        <div className="ed-grid">
            <RedMonitoreo/>
        </div>
    </>
    )
}
export default Piragua
