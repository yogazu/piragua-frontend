import React from "react"
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'
import GridItem from "../CustomHooks/GridItem.js"
import GridContainer from "../CustomHooks/GridContainer"
import Card from "../Card/Card"
import CardHeader from "../Card/CardHeader"
import CardIcon from "../Card/CardIcon"
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js"
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(styles)

const CardEmpresa = ({descripcion,valor}) => {
    const classes = useStyles()
    return (
        <div className = "ed-grid">
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="info" stats icon>
                    <CardIcon color="info">
                        <EmojiPeopleIcon/>
                    </CardIcon>
                    <h1 className={classes.cardTitle}>
                    <small>{valor}</small>
                    </h1>
                    <h1>
                        <p className={classes.cardCategory}>{descripcion}</p>
                    </h1>
                    </CardHeader>
                </Card>
            </GridItem>
        </GridContainer>  
      </div>       
    )
}

export default CardEmpresa