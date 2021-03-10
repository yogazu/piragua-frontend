import React from "react"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"

const TipoAnnoCampana = ({datoAnnoCampana}) => {
    return (
        <div className="ed-grid">
            { datoAnnoCampana ?
                <Autocomplete
                    id={datoAnnoCampana.id}
                    options={datoAnnoCampana}
                    getOptionLabel={(option) => option.name}
                   
                    renderInput={(params) => 
                    <TextField {...params} 
                    label= "Año Campaña" variant="filled" 
                    />} 
                /> 
            :
                <h1>No existen Datos</h1>
            }
        </div>
    )
}
export default TipoAnnoCampana