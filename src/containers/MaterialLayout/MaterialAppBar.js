import React from 'react';
import { connect } from 'react-redux';
import { compose, withState, lifecycle } from 'recompose';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withLocalize } from 'react-localize-redux';
import requestApi from '../../actions/requestApi';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import routes from '../../routes';

const useStyles = makeStyles(theme => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  title: {
    flexGrow: 1,
  }
}));

function MaterialAppBar({translate}) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="absolute" className={clsx(classes.appBar)}>
        <Toolbar className={classes.toolbar}>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            <Breadcrumb appRoutes={routes} appBar={true}/>
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}


const connectToRedux = connect(
  state => ({

  }),
  {
    requestApi
  }
);

const enhance = compose(
  connectToRedux,
  lifecycle({
    componentDidMount() {
      //
    },
  })
);

export default withLocalize(enhance(MaterialAppBar));
