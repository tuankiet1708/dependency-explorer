import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import * as router from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, withState, lifecycle } from 'recompose';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { withLocalize } from 'react-localize-redux';
import requestApi from '../../actions/requestApi';
import MaterialFooter from './MaterialFooter';
import SuspenseLoading from '../../components/SuspenseLoading/SuspenseLoading';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import routes from '../../routes';

const useStyles = makeStyles(theme => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    minHeight: 'calc(100vh - 100px)',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

function MaterialContent({translate}) {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="xl" className={classes.container}>
        <React.Suspense fallback={<SuspenseLoading/>}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <route.component {...props} />
                  )} />
              ) : (null);
            })}
            <Redirect from="/" to="/home"/>
          </Switch>
        </React.Suspense>
      </Container>
      <Box mb={2}>
        <MaterialFooter/>
      </Box>
    </main>
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

export default withLocalize(enhance(MaterialContent));
