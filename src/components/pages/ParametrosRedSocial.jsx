import React from "react"
import DatosEmpresaSector from "../organisms/DatosEmpresaSector"
import DatosGrupoPiraguero from "../organisms/DatosGrupoPiraguero"
import DatosTipoDeGrupo from "../organisms/DatosTipoDeGrupo"
import Box from '@material-ui/core/Box'

const ParametrosRedSocial = () => {
    return (
        <>
            <div className="ed-grid">
                <Box bgcolor="info.main" color="primary.contrastText" p={2}>
                    <h1>RED SOCIAL</h1>
                </Box>
            </div>
            <br/>
            <div className="ed-grid rows-gap s-gap-01 m-grid-3">
                <div className="ed-grid">
                    <h3><center>Tipo De Grupo</center></h3>
                        <DatosTipoDeGrupo/>
                </div>
                <div className="ed-grid">
                    <h3><center>Grupo Piragüero</center></h3>
                        <DatosGrupoPiraguero/>
                </div>
                <div className="ed-grid">
                    <h3><center>Empresa o Tipo de Sector</center></h3>
                        <DatosEmpresaSector/>
                </div>
            </div>
        </>
    )
}

export default ParametrosRedSocial