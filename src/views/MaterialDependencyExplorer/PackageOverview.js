import React from 'react';
import chunk from 'lodash/chunk';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { compose, withState, lifecycle } from 'recompose';
import isEmpty from 'lodash/isEmpty';
import {
  isFetchingPackageDependenciesSelector,
  packageDependenciesSelector
} from '../../selectors/dependencyExplorer';
import PackagesList from './PackagesList';
import Pagination from '../../components/Pagination/Pagination';
import fetchPackageDependencies from '../../actions/fetchPackageDependencies';
import SuspenseLoading from '../../components/SuspenseLoading/SuspenseLoading';
import NoContent from '../../components/NoContent/NoContent';

/**
 * Get params from Browser's URL
 * @param {*} location from withRouter
 */
const getParams = (location) => {
  let result = queryString.parse(location.search)
  return result
}

const useStyles = makeStyles({
  heading: {
    textAlign: "center",
    fontWeight: "700"
  },
  subHeading: {
    textAlign: "center",
    marginBottom: 15,
    fontWeight: "500"
  },
  totalResult: {
    color: "#737373"
  }
});

function PackageOverview({requestApi, loading, list, location}) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  const {name: packageName} = getParams(location);

  return <Grid container spacing={1} style={{position: "relative"}}>
    <Grid item xs={12}>
      {/* <SearchInput onSearch={keyword => requestApi(endpointGetPackageSuggestions, {name: keyword})}/> */}
      <Typography variant="h5" gutterBottom className={classes.heading}>
        PACKAGE OVERVIEW
      </Typography>
      {packageName && <Typography variant="h6" gutterBottom className={classes.subHeading}>
        {packageName}
      </Typography>}
      {(!loading && list.length) ? <Typography variant="subtitle2" gutterBottom className={classes.totalResult}>
        {`Found ${list.length} dependencies for "${packageName}"`}
      </Typography> : null}
    </Grid>

    {
      loading
      ? <Grid item xs={12}><SuspenseLoading/></Grid>
      : (list.length ? <PackagesList list={chunk(list, rowsPerPage)[page]}/> : <NoContent/>)
    }
    {(!loading && list.length) ? <Grid item xs={12}>
      <Pagination
        count={list.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Grid> : null}

  </Grid>
}

const connectToRedux = connect(
  state => {
    return {
      loading: isFetchingPackageDependenciesSelector(state),
      list: packageDependenciesSelector(state)
    }
  },
  {
    fetchPackageDependencies
  }
);

const enhance = compose(
  withRouter,
  connectToRedux,
  lifecycle({
    componentDidMount() {
      this.fetchPackageInformation(getParams(this.props.location));
    },
    componentWillReceiveProps(nextProps) {
      const {location} = this.props;
      const {location: nextLocation} = nextProps;

      if (location.search != nextLocation.search) {
        this.fetchPackageInformation(getParams(nextLocation));
      }
    },
    fetchPackageInformation(params) {
      const {fetchPackageDependencies} = this.props;

      if (isEmpty(params)) return;

      const {name} = params;
      fetchPackageDependencies(name);
    }
  })
);

export default enhance(PackageOverview);
