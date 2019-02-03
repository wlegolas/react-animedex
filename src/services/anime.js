import Anime from 'models/Anime';
import { get } from './base';

const convertResponseToAnime = ({ id, attributes }) => Anime({
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

const convertResponseToPaginationResult = response => ({
  data: response.data.map(data => convertResponseToAnime(data)),
  links: response.links,
  totalItems: response.meta.count
});

export const getAnimes = async configs => get('anime', configs).then(convertResponseToPaginationResult);

export const searchAnimes = async name => {
  const configs = {
    params: {
      'filter[text]': name
    }
  };

  return getAnimes(configs);
};

export default { getAnimes, searchAnimes };
