import React from "react"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"

const TipoFuenteHidrica = ({datoTipoFuenteHicrica}) => {
    return (
        <div className="ed-grid">
            { datoTipoFuenteHicrica ?
                <Autocomplete
                    id={datoTipoFuenteHicrica.id}
                    options={datoTipoFuenteHicrica}
                    getOptionLabel={(option) => option.name}
                    
                    renderInput={(params) => 
                    <TextField {...params} 
                    label= "Fuente Hídrica" variant="filled" 
                    />} 
                /> 
            :
                <h1>No existen Datos</h1>
            }
        </div>
    )
}
export default TipoFuenteHidrica