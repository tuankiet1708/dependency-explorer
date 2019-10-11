import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import theme from '../../config/theme';
import MaterialAppBar from './MaterialAppBar';
import MaterialContent from './MaterialContent';

const MaterialLayout = () => {
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <div style={{display: "flex"}}>
        <CssBaseline />
        <MaterialAppBar/>
        <MaterialContent/>
      </div>
    </MuiThemeProvider>
  );
}

export default MaterialLayout;
