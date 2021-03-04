import React from "react"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"

const EmpresaSector = ({empresaSector}) => {
    return (
        <div className="ed-grid">
            {
            empresaSector ?
                <Autocomplete
                    id={empresaSector.id}
                    options={empresaSector}
                    getOptionLabel={(option) => option.name}
                    style={{ width: 350 }}
                    renderInput={(params) => 
                    <TextField {...params} 
                    label= "Empresa o Tipo de Sector" variant="filled" 
                    />}
                />
            :
                <h1>No existen Datos</h1>
            }
        </div>
    )
}

export default EmpresaSector