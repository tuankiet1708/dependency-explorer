import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNpm } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles(theme => ({
  itemContainer: {
    "&:hover": {
      cursor: "pointer"
    }
  },
  inline: {
    display: 'inline',
  },
  icon: {
    fontSize: 32, color: "#000"
  }
}));

function PackageItem({item, history}) {
  const classes = useStyles();

  return (
    <ListItem alignItems="flex-start" onClick={() => history.push(`/package?name=${item.name}`)} className={classes.itemContainer}>
      <ListItemIcon>
        <FontAwesomeIcon icon={faNpm} className={classes.icon}/>
      </ListItemIcon>
      <ListItemText
        primary={<strong>{item.name}</strong>}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              <strong>{item.version}</strong>
            </Typography>
            {` — ${item.description}`}
          </React.Fragment>
        }
      />
    </ListItem>
  );
}

export default withRouter(PackageItem);
