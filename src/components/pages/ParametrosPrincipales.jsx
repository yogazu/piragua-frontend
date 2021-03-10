import React  from"react"
import DatosNivelSubsiguiente from "../organisms/DatosNivelSubsiguiente"
import Territorial from "../organisms/Territorial"
import MunicipioxTerritorio from "../molecules/MunicipiosxTerritorio"

const ParametrosPrincipales = () => {
    return (
      <div className = "ed-grid m-grid-4 rows-gap s-gap-01 m-gap-1">
          <div className="ed-grid">
              <h3><center>Territorial</center></h3>
              <Territorial/>
          </div>
          <div className = "ed-grid">
                <h3><center>Municipio</center></h3>
              <MunicipioxTerritorio/>
          </div> 
          <div className="ed-grid m-cols-2 m-x-3">
              <h3><center>Nivel Subsiguiente</center></h3>
              <DatosNivelSubsiguiente/>
          </div> 
      </div>
    )
}
export default ParametrosPrincipales