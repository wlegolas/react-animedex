import { get } from './base';

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

export async function getAnimes() {
  return get('anime').then(convertResponseToPaginationResult);
}
