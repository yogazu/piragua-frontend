import React from "react"
import GridItem from "../CustomHooks/GridItem.js";
import GridContainer from "../CustomHooks/GridContainer";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader"
import CardIcon from "../Card/CardIcon"
import FilterIcon from '@material-ui/icons/Exposure';
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles)

const ReporteDatosNivelCaudal = () => {
    const classes = useStyles()
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="warning" stats icon>
                        <CardIcon color="info">
                            <FilterIcon/>
                        </CardIcon>
                        <p className={classes.cardCategory}>Reporte De Datos</p>
                        <h1 className={classes.cardTitle}>
                            45 %<small></small>
                        </h1>
                    </CardHeader>
                </Card>
            </GridItem>
        </GridContainer>
    )
    
}

export default ReporteDatosNivelCaudal