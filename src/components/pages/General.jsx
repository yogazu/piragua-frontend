import React from "react";
import Maps from "../CustomHooks/Maps";
import Territoriales from "../organisms/Territoriales";
import credentials from "../credentials"
import Button from "../CustomHooks/Button"
import GridItem from "../CustomHooks/GridItem.js";
import GridContainer from "../CustomHooks/GridContainer";
import SnackbarContent from "../CustomHooks/SnackbarContent"



const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`
const General = () => (

    <>
        <div className="ed-grid">
            <Territoriales/>
        </div>
        
        <br/>
        <div className= "ed-grid m-grid-3">
            
            <GridContainer>
                <GridItem xs={15} sm={15} md={15}>
                    <Button
                        size = "lg"
                            color="info"
                            >
                            25 Piragueros
                    </Button>
                </GridItem>
                <GridItem xs={15} sm={15} md={15}>
                    <SnackbarContent 
                            message={"12 Fuentes Monitoreadas"} 
                            color="success"/>
                    <SnackbarContent
                            message={"3 Fuente Abastecedora."}
                            close
                            color="success" 
                    />
                    <SnackbarContent
                            message={"2 Fuente Subterraneas."}
                            close
                            color="success" 
                    />
                    <SnackbarContent
                            message={"1 Fuente ODC."}
                            close
                            color="success" 
                    />
                    <SnackbarContent
                            message={"6 Fuente PORH."}
                            close
                            color="success" 
                    />
                </GridItem>
                <GridItem xs={15} sm={15} md={15}>
                    <Button
                            size = "lg"
                            color="#334BFF"
                            >
                            3 Estaciones de la Zona
                    </Button>
                </GridItem>
            </GridContainer>
                <div className="ed-grid">
                    < Maps
                        googleMapURL = {mapURL}
                        

                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `70vh` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>

             <div className="ed-grid">
             
                    <Button
                        size = "sm"
                            color="info"
                            >
                            2 Cantidad Grupos
                    </Button>
               
                
                    <Button
                        size = "sm"
                            color="info"
                            >
                            70.800 Cantidad<br/>
                            Usuarios Usando 
                            el recurso
                    </Button>
               
               
                    <Button
                        size = "sm"
                            color="info"
                            >
                            3- %Operación<br/>
                            Estaciones Activas
                    </Button>
               
             </div>
        </div>
    </>

)

export default General