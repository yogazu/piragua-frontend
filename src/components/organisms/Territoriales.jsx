import React, { useEffect, useState } from"react"
import useFetch from "../CustomHooks/useFetch"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import MunicipioxTerritorio from "./MunicipiosxTerritorio"
import DatosNivelSubsiguiente from "../molecules/DatosNivelSubsiguiente"


const Territoriales = ({ }) => {

    const territorial = 
          useFetch("http://piraguacorantioquia.com.co:8020/core/territorial/get-all",[ ])
    const [valueTerritorio, setValueTerritorio] = useState(territorial[0]);
   
   

    return (
      <div className = "ed-grid m-grid-3">
          <div className="ed-grid">
            <h3><center>Nivel Subsiguiente</center></h3>
            <DatosNivelSubsiguiente></DatosNivelSubsiguiente>
            
          </div>
          <div className="ed-grid">
            <h3><center>Territoriales</center></h3>
            <Autocomplete
              id={territorial.data.id}
              options={territorial.data}
              getOptionLabel={(option) => option.nombre}
              style={{ width: 350 }}
              renderInput={(params) => <TextField {...params} label= "Territorial" variant="outlined" />}
              onChange={(event, newValue) => {
                  setValueTerritorio(newValue)
              }}
            />
          </div>
          <div className = "ed-grid">
              <h3><center>Municipios</center></h3>
              {valueTerritorio ?
                <MunicipioxTerritorio idTerritorio = {valueTerritorio ? valueTerritorio.id : ""}></MunicipioxTerritorio>
              :
                <h3/>
              }
          
          </div>
      </div>
    )
}
export default Territoriales