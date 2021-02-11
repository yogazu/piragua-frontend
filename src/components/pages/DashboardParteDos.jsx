import React from "react";
import DatosCantidadGrupos from "../organisms/DatosCantidadGrupos"
import DatosCantidadUsuarios from "../organisms/DatosCantidadUsuarios"
import DatosEstacionesActivas from "../organisms/DatosEstacionesActivas"

const DashboardParteDos = () => {
    return (
        <>
           <DatosCantidadGrupos/>
           <DatosCantidadUsuarios/>
           <DatosEstacionesActivas/>
        </>
    )
}

export default DashboardParteDos