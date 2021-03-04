import React from "react"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"

const GrupoPiraguero = ({grupoPiraguero}) => {
    return (
        <div className="ed-grid">
           {
            grupoPiraguero ?
               <Autocomplete
                id={grupoPiraguero.id}
                options={grupoPiraguero}
                getOptionLabel={(option) => option.name}
                style={{ width: 350 }}
                renderInput={(params) => 
                <TextField {...params} 
                        label= "Grupo Piragüero" variant="filled" 
                />}
                />
            :
                <h1>No existen Datos</h1>
           } 
        </div>
    )
}

export default GrupoPiraguero