import config from "../config/config";

const {baseUrl} = config;

/**
 * endpoint to retrieve the package dependencies information
 */
export const REDUX_API_CALL_ID_GET_PACKAGE_DEPENDENCIES_INFORMATION = 'DEPENDENCY_EXPLORER::GET_PACKAGE_DEPENDENCIES_INFORMATION';
export const endpointGetPackageDependenciesInformation = (getState, otherParams) => {
  let {name} = otherParams || {};
  return [
    {
      url: `https://npm-registry-proxy.glitch.me/${encodeURIComponent(name)}/latest`,
      method: "get",
      params: {},
      headers: {}
    },
    REDUX_API_CALL_ID_GET_PACKAGE_DEPENDENCIES_INFORMATION
  ]
}

/**
 * endpoint to retrieve the list of suggested package
 */
export const REDUX_API_CALL_ID_GET_PACKAGE_SUGGESTIONS = 'DEPENDENCY_EXPLORER::GET_PACKAGE_SUGGESTIONS';
export const endpointGetPackageSuggestions = (getState, otherParams) => {
  let {name} = otherParams || {};
  return [
    {
      url: `https://npm-registry-proxy.glitch.me/search/suggestions?q=${encodeURIComponent(name)}`,
      method: "get",
      params: {},
      headers: {}
    },
    REDUX_API_CALL_ID_GET_PACKAGE_SUGGESTIONS
  ]
}
