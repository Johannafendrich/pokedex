import './app.scss';
import { createElement } from './lib/dom';
import { title } from './components/title';
import { createSearchInput } from './components/search';
import { pokemonList } from './components/pokemons';
import Logo from './assets/PokeBall-black.svg';

const allPokemons = ['Pikachu', 'Pixi', 'Glumanda', 'Bibor'];

function filterPokemons(searchValue) {
  const lowerCaseSearchValue = searchValue.toLowerCase();

  const filteredPokemons = allPokemons.filter(pokemon => {
    return pokemon.toLowerCase().startsWith(lowerCaseSearchValue);
  });
  return filteredPokemons;
}

export function app() {
  const header = createElement('header', {
    className: 'header'
  });
  const main = createElement('main', {
    className: 'main'
  });
  const titleElement = title('Pokedex');

  const searchElement = createSearchInput(
    sessionStorage.getItem('searchValue')
  );

  const logo = createElement('img', {
    className: 'logo',
    src: Logo
  });
  const searchResults = createElement('div', {});

  let pokemons = null;
  function setSearchResults() {
    const filteredPokemons = filterPokemons(searchElement.value);
    pokemons = pokemonList(filteredPokemons);
    searchResults.appendChild(pokemons);
  }
  setSearchResults();

  header.appendChild(titleElement);
  header.appendChild(logo);
  main.appendChild(searchElement);
  main.appendChild(searchResults);

  searchElement.addEventListener('input', event => {
    searchResults.removeChild(pokemons);
    setSearchResults();

    const searchValue = event.target.value;
    sessionStorage.setItem('searchValue', searchValue);
  });

  return [header, main];
}
