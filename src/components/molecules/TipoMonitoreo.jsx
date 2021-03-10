import React from "react"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"

const TipoMonitoreo = ({datoTipoMonitoreo}) => {
    return (
        <div className="ed-grid">
            { datoTipoMonitoreo ?
                <Autocomplete
                    id={datoTipoMonitoreo.id}
                    options={datoTipoMonitoreo}
                    getOptionLabel={(option) => option.name}
                    
                    renderInput={(params) => 
                    <TextField {...params} 
                    label= "Tipo De Monitoreo" variant="filled" 
                    />} 
                /> 
            :
                <h1>No existen Datos</h1>
            }
        </div>
    )
}
export default TipoMonitoreo