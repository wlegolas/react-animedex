function Anime(data) {
  const modelData = { ...data };
  const get = propName => modelData[propName];

  return Object.freeze({ get });
};

export default Anime;
