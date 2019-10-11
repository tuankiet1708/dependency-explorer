import axios from 'axios';

const requestApiNoRedux = (endpoint, otherParams) => new Promise((resolve, reject) => {
    //
    let config = endpoint({}, otherParams);

    console.log('@@ requestApiNoRedux endpoint @@', JSON.stringify(config));

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
    axios(config)
    .then(
      response => resolve(response),
      error => reject(error)
    );
  })

export default requestApiNoRedux;
