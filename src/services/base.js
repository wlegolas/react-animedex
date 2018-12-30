import axios from 'axios';

const request = axios.create({
  baseURL: 'https://kitsu.io/api/edge/',
  timeout: 1000
});

const isSuccessfully = status => status >= 200 && status < 300;

const onRequestComplete = response => {
  if (isSuccessfully(response.status)) {
    return response.data;
  }

  throw new Error(
    `The server returns the status code: ${response.statusText}`
  );
};

const onRequestFailure = error => {
  console.error(error);
  throw new Error(
    `The server returns the status code: ${error.response.status}`
  );
};

export const get = async (urlPath) => {
  return request.get(urlPath)
    .then(onRequestComplete)
    .catch(onRequestFailure);
}

export default { get };
