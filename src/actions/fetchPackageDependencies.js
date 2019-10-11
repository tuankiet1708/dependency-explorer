import axios from 'axios';
import { ACTION_CALL_API_START_LOADING_PACKAGE_DEPENDENCIES, ACTION_CALL_API_STOP_LOADING_PACKAGE_DEPENDENCIES } from '../reducers/apiCalls';
import isEmpty from 'lodash/isEmpty';
import merge from 'lodash/merge';
import requestApiNoRedux from './requestApiNoRedux';
import { endpointGetPackageDependenciesInformation } from '../endpoints/dependencyExplorer';

const fetchPackageDependencies = (name) => (dispatch, getState) => new Promise((resolve, reject) => {
  const buildList = (dependencies = {}) => {
    let list = [];

    Object.keys(dependencies).map(dep => list.push({
      name: dep,
      version: dependencies[dep],
      description: dep
    }));

    return list;
  }

  dispatch({type: ACTION_CALL_API_START_LOADING_PACKAGE_DEPENDENCIES});

  requestApiNoRedux(endpointGetPackageDependenciesInformation, {name}).then(
    async response => {
      const packageInfo = response.data;
      let dependencies = {};

      if (!isEmpty(packageInfo.dependencies)) {
        let promises = [];

        merge(dependencies, packageInfo.dependencies || {});

        // fetch all given dependencies
        Object.keys(packageInfo.dependencies).map(dep => {
          promises.push(requestApiNoRedux(endpointGetPackageDependenciesInformation, {name: dep}));
        });

        // wait all api callings
        promises = await Promise.all(promises)
                      .then(packages => packages.map(item => merge(dependencies, item.data.dependencies || {})))
                      .catch(err => [])

        dependencies = buildList(dependencies);

        return resolve(dispatch({type: ACTION_CALL_API_STOP_LOADING_PACKAGE_DEPENDENCIES, payload: {result: dependencies}}));
      }


      resolve(dispatch({type: ACTION_CALL_API_STOP_LOADING_PACKAGE_DEPENDENCIES, payload: {result: []}}));
    },
    reject => {
      resolve(dispatch({type: ACTION_CALL_API_STOP_LOADING_PACKAGE_DEPENDENCIES, payload: {result: [], hasError: true}}));
    }
  )
})

export default fetchPackageDependencies;
