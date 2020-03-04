import './app.scss';
import { createElement } from './lib/dom';
import { title } from './components/title';
import { search } from './components/search';
import { pokemonList } from './components/pokemons';
import Logo from './assets/PokeBall-black.svg';

const allPokemons = ['Pikachu', 'Pixi', 'Glumanda', 'Bibor'];

export function app() {
  const header = createElement('header', {
    className: 'header'
  });
  const main = createElement('main', {
    className: 'main'
  });
  const titleElement = title('Pokedex');
  const searchElement = search(sessionStorage.getItem('searchValue'));
  const logo = createElement('img', {
    className: 'logo',
    src: Logo
  });

  header.appendChild(titleElement);
  header.appendChild(logo);
  main.appendChild(searchElement);

  const searchResults = createElement('div', {});
  main.appendChild(searchResults);

  searchElement.addEventListener('input', event => {
    searchResults.innerHTML = ''; // clear search results

    const searchValue = event.target.value;
    const LowerCaseSearchValue = searchValue.toLowerCase();

    const filteredPokemons = allPokemons.filter(pokemon => {
      return pokemon.toLowerCase().startsWith(LowerCaseSearchValue);
    });

    const pokemonsElement = pokemonList(filteredPokemons);
    searchResults.appendChild(pokemonsElement);

    sessionStorage.setItem('searchValue', searchValue);
  });

  return [header, main];
}
