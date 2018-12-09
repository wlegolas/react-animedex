export function get() {
  var myInit = { method: 'GET', mode: 'cors', cache: 'default' };

  fetch(`https://kitsu.io/api/edge/anime`, myInit)
    .then(res => res.json())
    .then(data => {
      // const pokemon = new Pokemon(data);
      console.log('==> Data', data);
    })
    .catch(err => console.log(err));
}
