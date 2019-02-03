import axios from 'axios';

const request = axios.create({
  baseURL: 'https://kitsu.io/api/edge/',
  timeout: 30000
});

const onRequestComplete = response => {
  return response.data;
};

const onRequestFailure = error => {
  throw new Error(
    `The server returns the status code: ${error.response.status}`
  );
};

export const get = async (urlPath, configs) => {
  return request.get(urlPath, configs)
    .then(onRequestComplete)
    .catch(onRequestFailure);
}

export default { get };
