import React from "react"
import RedAutomatica from "../pages/RedAutomatica"
import Dashboard from "../pages/Dashboard"

const Piragua = () => {
    return (
    <>
        <div className="ed-grid">
            <Dashboard/>
        </div>
        <br/>
        <div className="ed-grid">
            <RedAutomatica/>
        </div>
    </>
    )
}
export default Piragua
