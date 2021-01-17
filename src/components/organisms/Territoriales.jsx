import React from "react"
import useFetch from "../CustomHooks/useFetch"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"

const Territoriales = ({}) => {
  
    
    const territorial = useFetch("http://piraguacorantioquia.com.co:8020/core/territorial/get-all",[ ])
    const [value, setValue] = React.useState(territorial[0]);

    console.log(territorial.loading)
    console.log(territorial.data)
    console.log(territorial.error)
    console.log(value)

    return (
      <div className = "ed-grid">
          <h3>Territoriales</h3>
          <Autocomplete
            id="comboBoxTerritorial"
            options={territorial.data}
            getOptionLabel={(option) => option.nombre}
            style={{ width: 500 }}
            renderInput={(params) => <TextField {...params} label="Territorial" variant="outlined" />}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
      </div>
    )
}





export default Territoriales