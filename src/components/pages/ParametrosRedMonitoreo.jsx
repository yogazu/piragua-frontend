import React from "react"
import DatosAnnoCampana from "../organisms/DatosAnnoCampana"
import DatosFuenteHidrica from "../organisms/DatosFuenteHidrica"
import DatosTipoMonitoreo from "../organisms/DatosTipoMonitoreo"
import DatosTipoProyecto from "../organisms/DatosTipoProyecto"
import Box from '@material-ui/core/Box'


const ParametrosRedmonitoreo = () => {
    return (
        <> 
            <div className="ed-grid">
                <Box bgcolor="info.main" color="primary.contrastText" p={2}>
                    <h1>RED MONITOREO DEL RECURSO HÍDRICO</h1>
                </Box>
            </div>
            <br/>
            <div className="ed-grid m-grid-4 rows-gap s-gap-01 m-gap-1 ">
                <div className="ed-grid">
                    <h3><center>Tipo De Proyecto</center></h3>
                      <DatosTipoProyecto/>
                </div>
                <div className="ed-grid">
                    <h3><center>Tipo de Monitoreo </center></h3>
                        <DatosTipoMonitoreo/>
                </div>
                <div className="ed-grid">
                    <h3><center>Fuente Hídrica</center></h3>
                       <DatosFuenteHidrica/>
                </div>
                <div className="ed-grid">
                    <h3><center>Año-Campaña</center></h3>
                    <center><DatosAnnoCampana/></center>
                </div>
            </div>
        </>
    )
}

export default ParametrosRedmonitoreo