import get from 'lodash/get';
import { defaultState } from '../store/apiCalls';

/**
 * Get all states of api calls from redux store
 * @param {*} state
 */
export const currentApiCallsStateSelector = (state) => get(state, 'apiCalls.state')

/**
 * Get directly the state of an api call from redux store
 * @param {*} state
 */
export const currentApiCallStateByKeySelector = (state, key) => {
  return get(currentApiCallsStateSelector(state), key, {...defaultState});
}
