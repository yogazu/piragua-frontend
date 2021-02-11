import React from "react"
import CalidadAire from "./CalidadAire"
import EstacionLluvia from "./Estacionlluvia"
import NivelCaudal from "./NivelCaudal"

const RedAutomatica = () => {

   return (
    <>
        <div className="ed-grid">
            <h1>RED AUTOMATICA</h1>
        </div>
        <div className="ed-grid lg-grid-3">
            <div className="ed-grid ">
                <EstacionLluvia/>
            </div>
            <div className="ed-grid ">
                <NivelCaudal/>
            </div>
            <div className="ed-grid">
                <CalidadAire/>
            </div>
        </div>
    </>
   )
}

export default RedAutomatica 