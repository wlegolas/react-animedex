function convertResponseToPaginationResult(response) {
  return {
    data: response.data.map(data => convertResponseToAnime(data)),
    links: response.links,
    totalItems: response.meta.count
  };
}

function convertResponseToAnime(response) {
  const attributes = response.attributes;

  return {
    id: response.id,
    createdAt: attributes.createdAt,
    updatedAt: attributes.updatedAt,
    synopsis: attributes.synopsis,
    title: attributes.canonicalTitle,
    startDate: attributes.startDate,
    endDate: attributes.endDate,
    ageRatingGuide: attributes.ageRatingGuide,
    status: attributes.status,
    image: attributes.posterImage.small
  };
};

function get(url) {
  const options = { method: 'GET', mode: 'cors', cache: 'default' };

  return fetch(url, options).then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(
      `The server returns the status code: ${response.statusText}`
    );
  });
}

export function getAnimes() {
  const url = 'https://kitsu.io/api/edge/anime';

  return get(url).then(convertResponseToPaginationResult);
}
