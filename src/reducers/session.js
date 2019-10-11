import { combineReducers } from 'redux';
import { handleAction, createAction, handleActions } from 'redux-actions';
import Store from '../store/session';
import get from 'lodash/get';

const initialState = Store;

export const ACTION_SET_ACTIVE_LANGUAGE = '@@localize/SET_ACTIVE_LANGUAGE';
export const ACTION_SET_DASHBOARD_INTERVAL = 'ROOT::SET_DASHBOARD_INTERVAL';

// ======> Basic Reducer <======
// export default function sessionReducer(state = initialState, action) {
//   switch (action.type) {
//     case '@@localize/SET_ACTIVE_LANGUAGE': {
//       return {
//         ...state,
//         locale: get(action, 'payload.languageCode')
//       }
//     }
//     default:
//       return state;
//   }
// }

const locale = handleAction(
  ACTION_SET_ACTIVE_LANGUAGE,
  (state, { payload }) => payload.languageCode,
  initialState.locale
);

const dashboardInterval = handleAction(
  ACTION_SET_DASHBOARD_INTERVAL,
  (state, { payload }) => payload.interval,
  initialState.dashboardInterval
);

const sessionReducer = combineReducers({
  locale,
  dashboardInterval
});

export default sessionReducer;
