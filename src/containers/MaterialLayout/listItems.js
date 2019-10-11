import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import TableChartIcon from '@material-ui/icons/TableChart';
import ErrorIcon from '@material-ui/icons/Error';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faNpm } from '@fortawesome/free-brands-svg-icons';

import "./styles.scss";

const navStyles = {textDecoration: "none", color: "#000"};
const listItemStyles = {};
const iconStyles = {fontSize: 20, color: "#000"}

export const mainListItems = (
  <div>
    <Link to="/home" style={navStyles}>
      <ListItem button style={listItemStyles}>
        <ListItemIcon>
          <FontAwesomeIcon icon={faNpm} style={iconStyles}/>
        </ListItemIcon>
        <ListItemText primary="Dependency Explorer" className="muiSideMenu"/>
      </ListItem>
    </Link>
    {/* <Link to="/home" style={navStyles}>
      <ListItem button style={listItemStyles}>
        <ListItemIcon>
          <HomeIcon style={iconStyles}/>
        </ListItemIcon>
        <ListItemText primary="Home" className="muiSideMenu"/>
      </ListItem>
    </Link>
    <Link to="/dashboard" style={navStyles}>
      <ListItem button style={listItemStyles}>
        <ListItemIcon>
          <DashboardIcon style={iconStyles}/>
        </ListItemIcon>
        <ListItemText primary="Dashboard" className="muiSideMenu"/>
      </ListItem>
    </Link>
    <Link to="/dashboard2" style={navStyles}>
      <ListItem button style={listItemStyles}>
        <ListItemIcon>
          <DashboardIcon style={iconStyles}/>
        </ListItemIcon>
        <ListItemText primary="Cloud Dashboard" className="muiSideMenu"/>
      </ListItem>
    </Link>
    <Link to="/album" style={navStyles}>
      <ListItem button style={listItemStyles}>
        <ListItemIcon>
          <CameraIcon style={iconStyles}/>
        </ListItemIcon>
        <ListItemText primary="Album" className="muiSideMenu"/>
      </ListItem>
    </Link>
    <Link to="/icons/material-icons" style={navStyles}>
      <ListItem button style={listItemStyles}>
        <ListItemIcon>
          <InsertEmoticonIcon style={iconStyles}/>
        </ListItemIcon>
        <ListItemText primary="Material Icons" className="muiSideMenu"/>
      </ListItem>
    </Link>
    <Link to="/icons/fontawesome5" style={navStyles}>
      <ListItem button style={listItemStyles}>
        <ListItemIcon>
          <InsertEmoticonIcon style={iconStyles}/>
        </ListItemIcon>
        <ListItemText primary="FontAwesome5" className="muiSideMenu"/>
      </ListItem>
    </Link>
    <Link to="/mail" style={navStyles}>
      <ListItem button style={listItemStyles}>
        <ListItemIcon>
          <EmailRoundedIcon style={iconStyles}/>
        </ListItemIcon>
        <ListItemText primary="Mail" className="muiSideMenu"/>
      </ListItem>
    </Link> */}
  </div>
);

export const secondaryListItems = (
  <div>
    {/* <ListSubheader inset>Full-screen Pages</ListSubheader>
    <Link to="/blog" style={navStyles}>
      <ListItem button style={listItemStyles}>
        <ListItemIcon>
          <ChromeReaderModeIcon style={iconStyles}/>
        </ListItemIcon>
        <ListItemText primary="Blog" className="muiSideMenu"/>
      </ListItem>
    </Link>
    <Link to="/checkout" style={navStyles}>
      <ListItem button style={listItemStyles}>
        <ListItemIcon>
          <ShoppingCartIcon style={iconStyles}/>
        </ListItemIcon>
        <ListItemText primary="Checkout" className="muiSideMenu"/>
      </ListItem>
    </Link>
    <Link to="/pricing" style={navStyles}>
      <ListItem button style={listItemStyles}>
        <ListItemIcon>
          <TableChartIcon style={iconStyles}/>
        </ListItemIcon>
        <ListItemText primary="Pricing" className="muiSideMenu"/>
      </ListItem>
    </Link>
    <Link to="/login" style={navStyles}>
      <ListItem button style={listItemStyles}>
        <ListItemIcon>
          <FontAwesomeIcon icon={faSignInAlt} style={iconStyles}/>
        </ListItemIcon>
        <ListItemText primary="Sign In Basic" className="muiSideMenu"/>
      </ListItem>
    </Link>
    <Link to="/login2" style={navStyles}>
      <ListItem button style={listItemStyles}>
        <ListItemIcon>
          <FontAwesomeIcon icon={faSignInAlt} style={iconStyles}/>
        </ListItemIcon>
        <ListItemText primary="Sign In Awesome" className="muiSideMenu"/>
      </ListItem>
    </Link>
    <Link to="/register" style={navStyles}>
      <ListItem button style={listItemStyles}>
        <ListItemIcon>
          <FontAwesomeIcon icon={faUserPlus} style={iconStyles}/>
        </ListItemIcon>
        <ListItemText primary="Sign Up" className="muiSideMenu"/>
      </ListItem>
    </Link>
    <Link to="/404" style={navStyles}>
      <ListItem button style={listItemStyles}>
        <ListItemIcon>
          <ErrorIcon style={iconStyles}/>
        </ListItemIcon>
        <ListItemText primary="Error 404" className="muiSideMenu"/>
      </ListItem>
    </Link> */}
  </div>
);
