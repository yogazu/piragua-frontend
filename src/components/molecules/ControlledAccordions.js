import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Opacity from "@material-ui/icons/Opacity"
import CardIcon from "../Card/CardIcon"

import {
    successColor,
    whiteColor,
    grayColor,
    hexToRgb
  } from "../../assets/jss/material-dashboard-react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  cardCategory: {
    color: grayColor[0],
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0"
  },
  cardTitle: {
    color: grayColor[2],
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1"
    }
  },
}));

export default function ControlledAccordions ( {nombre, total, datos} ) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography component={'span'} className={classes.heading}>
              <CardIcon color="info"><Opacity/>
              </CardIcon>
         </Typography>
          <Typography component={'span'}
                className={classes.secondaryHeading}> 
                <h1>
                <p className={classes.cardCategory}>
                    {nombre}
                 </p>
                </h1>
                <h1 className={classes.cardTitle}>
                    {total}
                </h1>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'} >
              { datos.map(d => (
                <h3 key = {d.valor+d.name} className={classes.cardTitle}>
                    <small>{d.valor} {d.name}</small>
                </h3>
                ))
             }
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}