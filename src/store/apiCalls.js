export const defaultState = {
  loading: false,
  result: null,
  hasError: false
}

export default {
  state: {
    default : {...defaultState}
  },
  packageDependencies: {
    ...defaultState,
    result: []
  }
}
