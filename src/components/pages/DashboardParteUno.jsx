import React from "react"
import DatosNumeroPiraguero from "../organisms/DatosNumeroPiraguero"
import DatosEstacionesZona from "../organisms/DatosEstacionesZona"
import DatosFuentesMonitoreadas from "../organisms/DatosFuentesMonitoreadas"
// @material-ui/icons
import GridContainer from "../CustomHooks/GridContainer"

const DashboardParteUno = () => {
    return (
        <>
            <DatosNumeroPiraguero/>
            <br/>
                <GridContainer>     
                    <DatosFuentesMonitoreadas/>
                </GridContainer>  
            <br/>
            <DatosEstacionesZona/>
        </>

    )
}

export default DashboardParteUno