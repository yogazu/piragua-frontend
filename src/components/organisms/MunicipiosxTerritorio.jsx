import React, { useEffect, useState } from"react"
import useFetch from "../CustomHooks/useFetch"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"


const MunicipioxTerritorio = ({idTerritorio}) => {

    const  municipios = 
    useFetch(`http://piraguacorantioquia.com.co:8020/core/municipio/find-by-territorial/${idTerritorio}/`,[ ])
    const [value, setValue] = useState(municipios[0]);
  
    return (
        <div className = "ed-grid">
            { municipios.data ?
              <Autocomplete
                id={municipios.data.id}
                options={municipios.data}
                getOptionLabel={(option) => option.nombre}
                style={{ width: 300 }}
                renderInput={(params) => 
                  <TextField {...params} 
                  label= "Municipios" variant="outlined" 
                />}
                onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
              />
              :
              <h1>No existen Municipios para este territorio</h1>
            }
        </div>
    )

}

export default MunicipioxTerritorio