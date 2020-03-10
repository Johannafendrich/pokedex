// function loadPokemons(time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(async () => {
//       const allPokemons = await getPokemons();
//       resolve(allPokemons);
//     }, time);
//   });
// }
function waitFor(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

async function getPokemons() {
  await waitFor(4000);
  // throw new Error('No Pokemon found – try another!');
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
  const results = await response.json();
  const pokemons = results.results;
  const pokemonNames = pokemons.map(pokemon => {
    return pokemon.name;
  });
  return pokemonNames;
}
export async function filterPokemons(searchValue) {
  const lowerCaseSearchValue = searchValue.toLowerCase();
  const allPokemons = await getPokemons();
  const filteredPokemons = allPokemons.filter(pokemon => {
    return pokemon.toLowerCase().startsWith(lowerCaseSearchValue);
  });
  return filteredPokemons;
}
