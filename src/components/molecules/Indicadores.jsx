import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import DoneOutlineSharpIcon from '@material-ui/icons/DoneOutlineSharp';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { Icon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Indicadores() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
            <DoneOutlineSharpIcon/>
        </ListItemAvatar>
        <ListItemText primary="ICA-NFS" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
         <CheckBoxOutlineBlankIcon/>
        </ListItemAvatar>
        <ListItemText primary="ICA-IDEAM"  />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <CheckBoxOutlineBlankIcon/>
        </ListItemAvatar>
        <ListItemText primary="ICOMI" />
      </ListItem>
    </List>
  );
}