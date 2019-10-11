import get from 'lodash/get';
import { currentApiCallStateByKeySelector } from './apiCalls';
import { REDUX_API_CALL_ID_GET_PACKAGE_DEPENDENCIES_INFORMATION, REDUX_API_CALL_ID_GET_PACKAGE_SUGGESTIONS } from '../endpoints/dependencyExplorer';

/**
 * Check whether the package is being fetched
 * @param {*} state
 */
export const isFetchingPackageInformationSelector = (state) => {
  return get(currentApiCallStateByKeySelector(state, REDUX_API_CALL_ID_GET_PACKAGE_DEPENDENCIES_INFORMATION), 'loading', true);
}

/**
 * Retrieve package information
 * @param {*} state
 */
export const packageInformationSelector = (state) => {
  return get(currentApiCallStateByKeySelector(state, REDUX_API_CALL_ID_GET_PACKAGE_DEPENDENCIES_INFORMATION), 'result.data', {});
}

/**
 * Check whether the list of suggested packages are being fetched
 * @param {*} state
 */
export const isFetchingPackageSuggestionsSelector = (state) => {
  return get(currentApiCallStateByKeySelector(state, REDUX_API_CALL_ID_GET_PACKAGE_SUGGESTIONS), 'loading', true);
}

/**
 * Retrieve package suggestions
 * @param {*} state
 */
export const packageSuggestionsSelector = (state) => {
  return get(currentApiCallStateByKeySelector(state, REDUX_API_CALL_ID_GET_PACKAGE_SUGGESTIONS), 'result.data', []);
}

export const isFetchingPackageDependenciesSelector = (state) => {
  return get(state, 'apiCalls.packageDependencies.loading', false);
}
export const packageDependenciesSelector = (state) => {
  return get(state, 'apiCalls.packageDependencies.result', []);
}
