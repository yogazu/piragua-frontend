import React from "react"
import RedAutomatica from "../pages/RedAutomatica"
import Dashboard from "../pages/Dashboard"
import RedSocial from "../pages/RedSocial"

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
    </>
    )
}
export default Piragua
