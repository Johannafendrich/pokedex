import './pokemons.scss';
import { createElement } from '../lib/dom';

export function pokemonList(items) {
  const container = createElement('div', {
    className: 'pokemonList'
  });

  items.forEach(item => {
    const element = createElement('div', {
      innerText: item,
      className: 'pokemon'
    });
    element.addEventListener('click', () => {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      favorites.push(item);
      const favoritesJSON = JSON.stringify(favorites);
      localStorage.setItem('favorites', favoritesJSON);
    });
    container.appendChild(element);
  });
  return container;
}
