import React from "react"
import ControlledAccordions from "../molecules/ControlledAccordions"
import DatosNumeroPiraguero from "../organisms/DatosNumeroPiraguero"
import DatosEstacionesZona from "../organisms/DatosEstacionesZona"
// @material-ui/icons
import GridContainer from "../CustomHooks/GridContainer"

const DashboardParteUno = () => {
    return (
        <>
            <DatosNumeroPiraguero/>
            <br/>
                <GridContainer>     
                    <ControlledAccordions/>
                </GridContainer>  
            <br/>
            <DatosEstacionesZona/>
        </>

    )
}

export default DashboardParteUno