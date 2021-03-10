import React from "react"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"

const TipoProyecto = ({datosTipoProyecto}) => {
    return (
        <div className="ed-grid">
            {(datosTipoProyecto) ?
                <Autocomplete
                id={datosTipoProyecto.id}
                options={datosTipoProyecto}
                getOptionLabel={(option) => option.name}
             
                renderInput={(params) => 
                <TextField {...params} 
                label= "Tipo De Proyecto" variant="filled" 
                />} 
            />  
            :
                <h1>No existen Datos</h1>
            }
        </div>
    )
}
export default TipoProyecto