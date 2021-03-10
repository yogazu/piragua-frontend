import React from "react"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"

const NivelSubsiguiente = ({datosNivelSubsiguiente}) => {
 
  return (
      <div className = "ed-grid">
          { 
            datosNivelSubsiguiente ?
            <Autocomplete
              id={datosNivelSubsiguiente.uuid}
              options={datosNivelSubsiguiente}
              getOptionLabel={(option) => option.nombre}
           
              renderInput={(params) => 
              <TextField {...params} 
              label= "Niveles Subsiguientes" variant="filled" 
              />}
            />
            :
            <h1>No existen Datos</h1>
          }
      </div>
  )
}

export default NivelSubsiguiente

