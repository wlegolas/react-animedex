const baseUrl = 'https://kitsu.io/api/edge/';
const combineUrl = urlPath => `${baseUrl}/${urlPath}`;

const onRequestComplete = response => {
  if (response.ok) {
    return response.json();
  }

  throw new Error(
    `The server returns the status code: ${response.statusText}`
  );
};

const onRequestFailure = response => {
  throw new Error(
    `The server returns the status code: ${response.statusText}`
  );
};

export const get = async (urlPath) => {
  const options = { method: 'GET', mode: 'cors', cache: 'default' };
  const url = combineUrl(urlPath);

  return fetch(url, options)
    .then(onRequestComplete)
    .catch(onRequestFailure);
}

export default { combineUrl, get };
