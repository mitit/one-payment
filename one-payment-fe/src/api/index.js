import axios from 'axios';

axios.interceptors.response.use((response) => {
  return response;
}, (error) => {

  if (error.response) {
    let errorDetails = response.data.details ? response.data.details : response.data.message ? response.data.message : '';
    alert(errorDetails)
  }

  return error.response;
});

const config = (params) => {
  let config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  let token = store.getters['auth/token'];
  if (token) {
    Object.assign(config.headers, {Authorization: token});
  }

  if (params) {
    Object.assign(config, {params: params})
  }

  return config;
};

const restPromise = (axiosPromise, params) => {
  return new Promise((resolve, reject) => {
    axiosPromise
      .then(response => {
        if (response.status === 200) {
          if (params && params.resolveResponse)
            resolve(response);
          else
            resolve(response.data);
        } else
          reject(response.data.message);
      })
      .catch((error) => {
        reject(error);
      })
  })
};

export default {
  doGet(url, params) {
    return restPromise(
      axios.get(url, config(params)), params
    );
  },

  doPut(url, body, params) {
    return restPromise(
      axios.put(url, body ? body : {}, config(params)), params
    );
  },

  doPost(url, body, params) {
    return restPromise(
      axios.post(url, body ? body : {}, config(params)), params
    );
  },

  doDelete(url, params) {
    return restPromise(
      axios.delete(url, config(params)), params
    );
  }
}
