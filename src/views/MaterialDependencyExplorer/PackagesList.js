import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faNpm } from '@fortawesome/free-brands-svg-icons';
import PackageItem from './PackageItem';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    // backgroundColor: theme.palette.background.paper,
  }
}));

export default function PackagesList({list}) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {
        list.map((item, index) => (
          <React.Fragment key={index}>
            <PackageItem item={item}/>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))
      }
    </List>
  );
}
