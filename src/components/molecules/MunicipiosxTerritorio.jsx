import React, { useEffect, useState } from"react"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import axios from "axios"

const MunicipioxTerritorio = ({idTerritorio}) => {
  
  const [municipios,setMunicipios] = useState ({})
  const [value, setValue] = useState(municipios[0]);
  const [loading, setLoading ] = useState(false)
  const [error,  setError]     = useState(null) 

  useEffect(() => {
      setLoading(true)
      axios.get(`http://piraguacorantioquia.com.co:8020/core/municipio/find-by-territorial/${idTerritorio}/`)
        .then(response => setMunicipios(response) )
        .then(response2 => setLoading(false))
        .catch (error =>{
        console.log(error)
        setLoading(false)
        setError(error)
      })
  },[idTerritorio])

  return (
    <div className = "ed-grid">
        <Autocomplete
          id={municipios.data ? municipios.data.id : 0}
          options={municipios.data ? municipios.data : []}  
          getOptionLabel={(option) => option ? option.nombre : ""}
          style={{ width: 350 }}
          
          renderInput={(params) => 
            <TextField {...params} 
              label= "Municipios" variant="filled" color = "primary" 
            />}
          onChange={(event,newValue) => {
              setValue(newValue);
          }}
        />
    </div>
  )
}

export default MunicipioxTerritorio