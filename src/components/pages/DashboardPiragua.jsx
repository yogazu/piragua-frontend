import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";


// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Cloud from "@material-ui/icons/Cloud";
import People from "@material-ui/icons/People"
import ExposureIcon from '@material-ui/icons/Exposure';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

import Maps from "../CustomHooks/Maps";
import Territoriales from "../organisms/Territoriales";
import credentials from "../credentials"

import GridItem from "../CustomHooks/GridItem.js";
import GridContainer from "../CustomHooks/GridContainer";

import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader"
import CardIcon from "../Card/CardIcon"
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js"
import MapChart from "../molecules/MapChart"
import ControlledAccordions from "../molecules/ControlledAccordions"


const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`
const useStyles = makeStyles(styles)


export default function DashboardPiragia () {
    const classes = useStyles()
    return (
    <>
        <div className="ed-grid">
                <Territoriales/>
        </div>
        <br/>
        <div className="ed-grid lg-cols-3 lg-x-2 lg-grid-3">
           
            <div className="ede-grid ">   

                    <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                            <Card>
                                <CardHeader color="info" stats icon>
                                <CardIcon color="info">
                                <EmojiPeopleIcon/>
                                </CardIcon>
                                <h1>
                                <p className={classes.cardCategory}>Número de Piragueros</p>
                                </h1>
                                <h1 className={classes.cardTitle}>
                                    25<small></small>
                                </h1>
                                </CardHeader>
                            </Card>
                            </GridItem>
                    </GridContainer>  
                    <br/>
                    <GridContainer>     
                        <ControlledAccordions/>
                    </GridContainer>  
                    <br/>
                    <GridContainer> 
                        <GridItem xs={12} sm={12} md={12}>
                            <Card>
                                <CardHeader color="warning" stats icon>
                                    <CardIcon color="warning">
                                        <Cloud></Cloud>
                                    </CardIcon>
                                    <h1>
                                        <p className={classes.cardCategory}>Estaciones de la Zona</p>
                                    </h1>
                                    <h1 className={classes.cardTitle}>
                                        3
                                    </h1>
                                </CardHeader>
                            </Card>
                        </GridItem>
                    </GridContainer> 

            </div>
            <div className="ede-grid ">
                <MapChart></MapChart>
            </div>
            <div className="ede-grid ">
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <Card>
                                    <CardHeader color="info" stats icon>
                                        <CardIcon color="info">
                                            <People/>
                                        </CardIcon>
                                        <p className={classes.cardCategory}>Cantidad De Grupos</p>
                                        <h1 className={classes.cardTitle}>
                                            2<small></small>
                                        </h1>
                                    </CardHeader>
                                </Card>
                            </GridItem>
                        </GridContainer>
                        <br/>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <Card>
                                    <CardHeader color="warning" stats icon>
                                        <CardIcon color="warning">
                                            <Store />
                                        </CardIcon>
                                        <p className={classes.cardCategory}>Cantidad de usuarios que usan el recurso</p>
                                        <h1 className={classes.cardTitle}>
                                            70.800<small></small>
                                        </h1>
                                    </CardHeader>
                                </Card>
                            </GridItem>
                        </GridContainer>
                        <br/>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <Card>
                                    <CardHeader color="warning" stats icon>
                                        <CardIcon color="warning">
                                            <ExposureIcon/>
                                        </CardIcon>
                                        <p className={classes.cardCategory}>Estaciones Activas</p>
                                        <h1 className={classes.cardTitle}>
                                            3% Operación<small></small>
                                        </h1>
                                    </CardHeader>
                                </Card>
                            </GridItem>
                        </GridContainer>
            </div>
        </div>
       
    </>
    )
}


