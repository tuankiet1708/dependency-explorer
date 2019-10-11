import axios from 'axios';
import { ACTION_CALL_API_START_LOADING, ACTION_CALL_API_STOP_LOADING } from '../reducers/apiCalls';

const requestApi = (endpoint, otherParams) => (dispatch, getState) => new Promise((resolve, reject) => {
    //
    let config = endpoint(getState, otherParams);

    console.log('@@ requestApi endpoint @@', JSON.stringify(config));

    // extract id for redux api calls
    const id = config[1] || "default";

    // extract config for axios
    config = {...config[0]};

    const mergedParams = {
      ...config.params || {},
      // some additional params
      // ...
    }

    if (config.method.toLowerCase() === "get") {
      config = {...config, "params": mergedParams};
    } else {
      config = {...config, "data": mergedParams};
    }

    // dispatch 'ACTION_CALL_API_START_LOADING'
    dispatch({type: ACTION_CALL_API_START_LOADING, payload: {id}});

    axios(config)
    .then(
      response => resolve(
        // dispatch 'ACTION_CALL_API_STOP_LOADING'
        dispatch({
          type: ACTION_CALL_API_STOP_LOADING,
          payload: {
            id,
            result: response
          }
        })
      ),
      error => reject(
        // dispatch 'ACTION_CALL_API_STOP_LOADING'
        dispatch({
          type: ACTION_CALL_API_STOP_LOADING,
          payload: {
            id,
            result: error,
            hasError: true
          }
        })
      )
    );
  })

export default requestApi;
