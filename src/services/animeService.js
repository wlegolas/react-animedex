const baseUrl = 'https://kitsu.io/api/edge/';

const combineUrl = urlPath => `${baseUrl}/${urlPath}`;

const convertResponseToPaginationResult = response => ({
  data: response.data.map(data => convertResponseToAnime(data)),
  links: response.links,
  totalItems: response.meta.count
});

const convertResponseToAnime = ({ id, attributes }) => ({
  id: id,
  createdAt: attributes.createdAt,
  updatedAt: attributes.updatedAt,
  synopsis: attributes.synopsis,
  title: attributes.canonicalTitle,
  startDate: attributes.startDate,
  endDate: attributes.endDate,
  ageRatingGuide: attributes.ageRatingGuide,
  status: attributes.status,
  image: attributes.posterImage.small
});

const onFinishRequest = response => {
  if (response.ok) {
    return response.json();
  }

  throw new Error(
    `The server returns the status code: ${response.statusText}`
  );
};

export const get = async (url) => {
  const options = { method: 'GET', mode: 'cors', cache: 'default' };

  return fetch(url, options).then(onFinishRequest);
}

export function getAnimes() {
  const url = combineUrl('anime');

  return get(url).then(convertResponseToPaginationResult);
}
