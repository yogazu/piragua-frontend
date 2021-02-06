import React, { useEffect, useState } from"react"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"


const Autocompletar = ({id,arrayIn,labelName,widthValue}) =>{

    const [value, setValue] = useState(arrayIn[0]);
    

    return (
        <Autocomplete
            id={id}
            options={arrayIn}
            getOptionLabel={(option) => option.nombre}
            style={{ width: widthValue }}
            renderInput={(params) => <TextField {...params} label= {labelName} variant="outlined" />}
            onChange={(event, newValue) => {
                setValue(newValue);
              }}
        />
    )

}

export default Autocompletar