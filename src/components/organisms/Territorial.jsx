import React, {  useState } from"react"
import useFetch from "../CustomHooks/useFetch"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import { actToMapa, actToMunicipios } from "../../redux/actionCreators"
import {connect } from "react-redux"


const Territorial= ({actMunicipios}) => {

    const territorial = 
          useFetch("http://piraguacorantioquia.com.co:8020/core/territorial/get-all",[ ])
    
   
    return (
      <>
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
              onChange={(event, newValue) => actMunicipios(newValue  ? newValue :"")}
          />
      </>
    )
}



const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => (
  {
    actMunicipios(data){
      dispatch(actToMunicipios(data.id) )
      dispatch(actToMapa(data.nombre))
    }
  }
)

export default  connect(mapStateToProps,mapDispatchToProps) (Territorial)