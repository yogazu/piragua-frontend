import React, { useEffect, useState } from"react"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import axios from "axios"
import { actMunicipio } from "../../redux/actionCreators"
import {connect } from "react-redux"

const MunicipioxTerritorio = ({territorioActual,actualizarxMunicipio}) => {
  
  const [municipios,setMunicipios] = useState ({})
  const [value, setValue] = useState(municipios && municipios[0]);
  const [loading, setLoading ] = useState(false)
  const [error,  setError]     = useState(null) 

  useEffect(() => {
      if (territorioActual !== "" && territorioActual !== undefined) {
        setLoading(true)
        axios.get(`http://api-piragua.solupyme.com/api/v1/municipio/find-by-territorial-uuid/${territorioActual}/`)
          .then(response => setMunicipios(response) )
          .then(response2 => setLoading(false))
          .catch (error =>{
          console.log(error)
          setLoading(false)
          setError(error)
        })
      }else {
          setMunicipios ({}) 
          setValue({}) 
        }
  },[territorioActual])
 
  return (
    <div className = "ed-grid">
        <Autocomplete
          id={municipios.data ? municipios.data.id : "0"}
          options={municipios.data ? municipios.data : []}  
          getOptionLabel={(option) => option ? option.nombre : ""}
          style={{ width: 350 }}
          renderInput={(params) => 
            <TextField {...params} 
              label= "Municipios" variant="filled" color = "primary"
            />}
            onChange={(event, newValue) => 
              actualizarxMunicipio(newValue  ? newValue :"")}
        />
    </div>
  )
}

const mapStateToProps = state => ({
      territorioActual: state.rootActTerritorio.territorioActual
     
      
})

const mapDispatchToProps = dispatch => ({
    actualizarxMunicipio(data){
     dispatch(actMunicipio(data))
  }
})

export default  connect(mapStateToProps,mapDispatchToProps) (MunicipioxTerritorio)