import React, { useEffect, useState } from"react"
import useFetch from "../CustomHooks/useFetch"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"

const Territoriales = ({}) => {

    const territorial = useFetch("http://piraguacorantioquia.com.co:8020/core/territorial/get-all",[ ])
    const [value, setValue] = useState(territorial[0]);

    return (
      <div className = "ed-grid">
          <h3>Territoriales</h3>
          <Autocomplete
            id={territorial.data.id}
            options={territorial.data}
            getOptionLabel={(option) => option.nombre}
            style={{ width: 500 }}
            renderInput={(params) => <TextField {...params} label= "Territorial" variant="outlined" />}
            onChange={(event, newValue) => {
                setValue(newValue);
              }}
          />
      </div>
    )
}



export default Territoriales