import React from "react"
import DatosNivelGrupo from "../organisms/DatosNivelGrupo"
import DatosCantidadEmpresas from "./DatosCantidadEmpresas"
import DatosCantidadLluviometros from "./DatosCantidadLluviometros"

const RedSocialGeneral = () => {
    return (
        <>
            <div className="ed-grid">
                <DatosCantidadLluviometros/>
            </div>  
            <div className="ed-grid">
                <DatosNivelGrupo/>
            </div>  
            <div className="ed-grid">
                <DatosCantidadEmpresas/>
            </div>  
        </>
    )
}

export default RedSocialGeneral