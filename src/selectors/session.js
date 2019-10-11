import get from 'lodash/get';

export const currentLocaleSelector = (state) => get(state, 'session.locale')
export const dashboardIntervalSelector = (state) => get(state, 'session.dashboardInterval')
