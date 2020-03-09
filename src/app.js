import './app.scss';
import { createElement, appendContent } from './lib/dom';
import { title } from './components/title';
import { createSearchInput } from './components/search';
import { createSearchResults } from './components/pokemons';
import { filterPokemons } from './lib/pokemon';
import { createFavList } from './components/favList';
import Logo from './assets/PokeBall-black.svg';

function refreshLocalStorage(item) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  if (!favorites.includes(item)) {
    favorites.push(item);
  } else {
    const itemIndex = favorites.indexOf(item);
    favorites.splice(itemIndex, 1);
  }

  if (favorites.length > 4) {
    // favorites.splice(0, 1);
    favorites = favorites.slice(1);
  }

  const favoritesJSON = JSON.stringify(favorites);
  localStorage.setItem('favorites', favoritesJSON);
}

export function app() {
  const header = createElement('header', {
    className: 'header'
  });
  const main = createElement('main', {
    className: 'main'
  });
  const titleElement = title('Pokedex');
  const searchElement = createSearchInput({
    value: sessionStorage.getItem('searchValue')
  });

  const logo = createElement('img', {
    className: 'logo',
    src: Logo
  });

  const favoritesContainer = createElement('div');
  let favorites = createFavList({
    items: JSON.parse(localStorage.getItem('favorites')) || []
  });
  appendContent(favoritesContainer, favorites);

  function handleSearchResultClick(item) {
    refreshLocalStorage(item);
    favoritesContainer.removeChild(favorites);
    favorites = createFavList({
      items: JSON.parse(localStorage.getItem('favorites')) || []
    });
    appendContent(favoritesContainer, favorites);
  }
  let pokemons = null;
  async function setSearchResults() {
    const loadPokemons = createElement('div', {
      className: 'circle'
    });
    const load = createElement('div', {
      className: 'circle_div'
    });
    appendContent(main, loadPokemons);
    appendContent(loadPokemons, load);
    // let pokemons = null;
    // async function setSearchResults() {
    //   const loadPokemons = createElement('div', {
    //     innerText: 'Pokemon are on the way...',
    //     className: 'load'
    //   });
    appendContent(main, loadPokemons);
    const filteredPokemons = await filterPokemons(searchElement.value);
    main.removeChild(loadPokemons);
    pokemons = createSearchResults({
      items: filteredPokemons,
      onSearchResultClick: handleSearchResultClick
    });
    appendContent(main, pokemons);
  }

  setSearchResults();

  appendContent(header, [titleElement, logo]);
  appendContent(main, [searchElement]);

  searchElement.addEventListener('input', event => {
    main.removeChild(pokemons);
    setSearchResults();

    const searchValue = event.target.value;
    sessionStorage.setItem('searchValue', searchValue);
  });

  return [header, main, favoritesContainer];
}
