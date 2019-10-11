import { combineReducers } from 'redux';
import { handleAction, createAction, handleActions, createActions, combineActions } from 'redux-actions';
import Store, {defaultState} from '../store/apiCalls';
import get from 'lodash/get';
import set from 'lodash/set';
import cloneDeep from 'lodash/cloneDeep';

const initialState = Store;

// define actions
export const ACTION_CALL_API_START_LOADING = 'API_CALLS::START_LOADING';
export const ACTION_CALL_API_STOP_LOADING = 'API_CALLS::STOP_LOADING';

const state = handleActions(
  {
    // start loading
    [ACTION_CALL_API_START_LOADING]: (
      state,
      { payload: { id = 'default' } }
    ) => {
      return {
        ...state,
        [id]: {
          ...get(state, id, {}),
          loading: true,
          hasError: false
        }
      };
    },

    // stop loading
    [ACTION_CALL_API_STOP_LOADING]: (
      state,
      { payload: { id = 'default', result, hasError = false } }
    ) => {
      return {
        ...state,
        [id]: {
          ...get(state, id, {}),
          loading: false,
          result,
          hasError
        }
      };
    },
  },

  initialState.state
);


export const ACTION_CALL_API_START_LOADING_PACKAGE_DEPENDENCIES = 'API_CALLS::START_LOADING_PACKAGE_DEPENDENCIES';
export const ACTION_CALL_API_STOP_LOADING_PACKAGE_DEPENDENCIES = 'API_CALLS::STOP_LOADING_PACKAGE_DEPENDENCIES';

const packageDependencies = handleActions(
  {
    // start loading
    [ACTION_CALL_API_START_LOADING_PACKAGE_DEPENDENCIES]: (
      state
    ) => {
      return {
        ...state,
        loading: true,
        hasError: false
      };
    },

    // stop loading
    [ACTION_CALL_API_STOP_LOADING_PACKAGE_DEPENDENCIES]: (
      state,
      { payload: { result, hasError = false } }
    ) => {
      return {
        ...state,
        loading: false,
        result,
        hasError
      };
    },
  },

  initialState.packageDependencies
);

const apiCallsReducer = combineReducers({
  state,
  packageDependencies
});

export default apiCallsReducer;
