import React from 'react';
import chunk from 'lodash/chunk';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchInput from './SearchInput';

import { connect } from 'react-redux';
import { compose, withState, lifecycle } from 'recompose';
import requestApi from '../../actions/requestApi';
import { endpointGetPackageSuggestions } from '../../endpoints/dependencyExplorer';
import { packageSuggestionsSelector, isFetchingPackageSuggestionsSelector } from '../../selectors/dependencyExplorer';
import PackagesList from './PackagesList';
import Pagination from '../../components/Pagination/Pagination';
import SuspenseLoading from '../../components/SuspenseLoading/SuspenseLoading';
import NoContent from '../../components/NoContent/NoContent';

function DependencyExplorer({requestApi, loading, list}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  return <Grid container spacing={1} style={{position: "relative"}}>
    <Grid item xs={12}>
      <SearchInput onSearch={keyword => requestApi(endpointGetPackageSuggestions, {name: keyword})}/>
    </Grid>
    {
      loading
      ? <Grid item xs={12}><SuspenseLoading/></Grid>
      : (list.length ? <PackagesList list={chunk(list, rowsPerPage)[page]}/> : <NoContent/> )
    }
    {list.length ? <Grid item xs={12}>
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
  state => ({
    loading: isFetchingPackageSuggestionsSelector(state),
    list: packageSuggestionsSelector(state)
  }),
  {
    requestApi
  }
);

const enhance = compose(
  connectToRedux,
  lifecycle({

  })
);

export default enhance(DependencyExplorer);
