import React from "react"
import CalidadAire from "./CalidadAire"
import EstacionLluvia from "./Estacionlluvia"
import NivelCaudal from "./NivelCaudal"
import Box from '@material-ui/core/Box';

const RedAutomatica = () => {

   return (
    <> 
        <div className="ed-grid">
            <Box bgcolor="info.main" color="primary.contrastText" p={2}>
                <h1>RED AUTOMATICA</h1>
            </Box>
        </div>
        <br/>
        <div className="ed-grid lg-grid-3">
            <div className="ed-grid">
                <EstacionLluvia/>
            </div>
            <div className="ed-grid">
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