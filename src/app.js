import './app.scss';
import { createElement } from './lib/dom';
import { title } from './components/title';
import { search } from './components/search';
import { pokemonList } from './components/pokemons';

const allPokemons = ['Pikachu', 'Pixi', 'Glumanda', 'Bibor'];

export function app() {
  const header = createElement('header', {
    className: 'header'
  });
  const main = createElement('main', {
    className: 'main'
  });
  const titleElement = title('Pokedex');
  const searchElement = search();

  header.appendChild(titleElement);
  main.appendChild(searchElement);

  const searchResults = createElement('div', {});
  main.appendChild(searchResults);

  searchElement.addEventListener('input', event => {
    searchResults.innerHTML = ''; // clear search results

    const searchValue = event.target.value;
    const filteredPokemons = allPokemons.filter(pokemon => {
      return pokemon.startsWith(searchValue);
    });

    const pokemonsElement = pokemonList(filteredPokemons);
    searchResults.appendChild(pokemonsElement);
  });

  return [header, main];
}
