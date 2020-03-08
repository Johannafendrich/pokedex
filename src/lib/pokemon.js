const allPokemons = ['Pikachu', 'Pixi', 'Glumanda', 'Bibor'];

export function filterPokemons(searchValue) {
  const lowerCaseSearchValue = searchValue.toLowerCase();

  const filteredPokemons = allPokemons.filter(pokemon => {
    return pokemon.toLowerCase().startsWith(lowerCaseSearchValue);
  });
  return filteredPokemons;
}
