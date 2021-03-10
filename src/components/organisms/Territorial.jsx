import React from"react"
import useFetch from "../CustomHooks/useFetch"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import { actTerritorio } from "../../redux/actionCreators"
import {connect } from "react-redux"


const Territorial= ({actualizarxTerritorio}) => {

    const territorial = 
          useFetch("http://api-piragua.solupyme.com/api/v1/territorial/",[ ])
    return (
          <Autocomplete
              id={territorial.data.id}
              options={territorial.data}
              getOptionLabel={(option) => option.nombre}
             
              renderInput={(params) => 
                  <TextField {...params} 
                    label= "Territorial" 
                    variant="filled" 
                  />}
              onChange={(event, newValue) => actualizarxTerritorio(newValue  ? newValue :"")}
          />
    )
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => (
  {
    actualizarxTerritorio(data){
      dispatch(actTerritorio(data) )
    }
  }
)

export default  connect(mapStateToProps,mapDispatchToProps) (Territorial)