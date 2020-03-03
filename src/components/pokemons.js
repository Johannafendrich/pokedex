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
    container.appendChild(element);
  });
  return container;
}
