import React from "react"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"

const TipoDeGrupo = ({tipoDeGrupo}) => {

    return (
        <div className="ed-grid">
            { tipoDeGrupo ?
                <Autocomplete
                    id={tipoDeGrupo.id}
                    options={tipoDeGrupo}
                    getOptionLabel={(option) => option.name}
                    style={{ width: 350 }}
                    renderInput={(params) => 
                    <TextField {...params} 
                    label= "Tipo De grupo" variant="filled" 
                    />} 
                /> 
            :
                <h1>No existen Datos</h1>
            }

        </div>
    )
}

export default TipoDeGrupo