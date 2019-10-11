import React, { Component, Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import './NoContent.scss';

const NoContent = () => {
  return <Paper className="MuiPaperContent-unavailable">
    <img src={require("../../assets/img/background/Wireframe@2x.png")} />
    {/* <div className="text">No content</div> */}
  </Paper>
}

export default NoContent;
