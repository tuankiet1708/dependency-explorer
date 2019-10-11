import { ACTION_SET_DASHBOARD_INTERVAL } from "../reducers/session";

export default (interval) => (dispatch, getState) => new Promise((resolve, reject) => {
  resolve(dispatch({
    type: ACTION_SET_DASHBOARD_INTERVAL,
    payload: {interval}
  }))
})
