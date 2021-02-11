import React, { useEffect, useState } from"react"
import useFetch from "../CustomHooks/useFetch"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import MunicipioxTerritorio from "../molecules/MunicipiosxTerritorio"

const Territorial= () => {

    const territorial = 
          useFetch("http://piraguacorantioquia.com.co:8020/core/territorial/get-all",[ ])
    const [valueTerritorio, setValueTerritorio] = useState(territorial[0]);
   
    return (
      <>
        <div className="ed-grid">
          <h3><center>Territorial</center></h3>
          <Autocomplete
              id={territorial.data.id}
              options={territorial.data}
              getOptionLabel={(option) => option.nombre}
              style={{ width: 350 }}
              renderInput={(params) => 
                <TextField {...params} 
                  label= "Territorial" 
                  variant="filled" 
                />}
              onChange={(event, newValue) => {
                  setValueTerritorio(newValue)
            }}
          />
        </div>
        <div className = "ed-grid">
            <h3><center>Municipio</center></h3>
            
              <MunicipioxTerritorio idTerritorio = {valueTerritorio ? valueTerritorio.id : ""}></MunicipioxTerritorio>
            
        </div>
      </>
    )
}
export default Territorial