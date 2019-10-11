export const REDUX_API_CALL_ID_GET_MY_IP = 'MY_IP::GET_MY_IP';

export const endpointMyIP = (getState, otherParams) => {
  return [
    {
      url: "https://api.ipify.org",
      method: "get",
      params: {
        format: "json"
      },
      headers: {

      }
    },
    REDUX_API_CALL_ID_GET_MY_IP
  ]
}
