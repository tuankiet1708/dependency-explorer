import get from 'lodash/get';
import { currentApiCallStateByKeySelector } from './apiCalls';

export const isFetchingChartDataSelector = (state, apiCallId) => {
  return get(currentApiCallStateByKeySelector(state, apiCallId), 'loading', true);
}
export const chartDataSelector = (state, apiCallId) => {
  return get(currentApiCallStateByKeySelector(state, apiCallId), 'result.data', []);
}
