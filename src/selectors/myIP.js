import get from 'lodash/get';
import { currentApiCallStateByKeySelector } from './apiCalls';
import { REDUX_API_CALL_ID_GET_MY_IP } from '../endpoints/myIP';

export const isFetchingMyIPSelector = (state) => {
  return get(currentApiCallStateByKeySelector(state, REDUX_API_CALL_ID_GET_MY_IP), 'loading');
}
export const myIPSelector = (state) => {
  return get(currentApiCallStateByKeySelector(state, REDUX_API_CALL_ID_GET_MY_IP), 'result.data.ip', 'N/A');
}
