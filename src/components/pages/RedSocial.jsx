import React from  "react"
import TablaDinamica from "../organisms/TablaDinamica"
import ParametrosRedSocial from "./ParametrosRedSocial"
import RedSocialGeneral from "./RedSocialGeneral"
import RedSocialGraficas from "./RedSocialGraficas"

const RedSocial = () => {
    return (
        <>
            <div className="ed-grid">
                <ParametrosRedSocial/>
            </div>
            <br/>
            <div className="ed-grid rows-gap m-grid-5">
                <div className="ed-grid">
                    <RedSocialGeneral/>
                </div>
                <div className="ed-grid m-cols-4 m-x-2 ">
                    <TablaDinamica/>
                </div>
            </div>
            <div className="ed-grid rows-gap m-gap-05 m-grid-4">
                    <RedSocialGraficas/>
            </div>   
        </>
    )
}

export default RedSocial
