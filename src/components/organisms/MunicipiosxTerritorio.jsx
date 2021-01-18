import React, { useEffect, useState } from"react"
import useFetch from "../CustomHooks/useFetch"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"

const MunicipioxTerritorio = ({match}) => {

    const municipios = 
         useFetch(`http://piraguacorantioquia.com.co:8020/core/municipio/find-by-territorial/${match.params.idTerritorio}/`,[ ])
    const [value, setValue] = useState(municipios[0]);

         return (
            <div className = "ed-grid">
                <h3>Municipios</h3>
                <Autocomplete
                  id={municipios.data.id}
                  options={municipios.data}
                  getOptionLabel={(option) => option.nombre}
                  style={{ width: 500 }}
                  renderInput={(params) => <TextField {...params} label= "Municipios" variant="outlined" />}
                  onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                />
            </div>
          )

}

export default MunicipioxTerritorio