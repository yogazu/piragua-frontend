import React  from"react"
import DatosNivelSubsiguiente from "../organisms/DatosNivelSubsiguiente"
import Territorial from "../organisms/Territorial"

const ParametrosPrincipales = () => {
    return (
      <div className = "ed-grid m-grid-3">
          <div className="ed-grid">
            <h3><center>Nivel Subsiguiente</center></h3>
              <DatosNivelSubsiguiente></DatosNivelSubsiguiente>
          </div>
              <Territorial/>
      </div>
    )
}
export default ParametrosPrincipales