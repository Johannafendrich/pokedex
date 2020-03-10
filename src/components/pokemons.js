import './pokemons.scss';
import { createElement, appendContent } from '../lib/dom';
export function createSearchResults(props) {
  const container = createElement('div', {
    className: 'pokemonList'
  });

  if (props.items.lenght === 0) {
    const notFound = createElement('div', {
      innerText: 'No Pokemon found',
      className: 'error'
    });
    appendContent(container, notFound);
  } else {
    props.items.forEach(item => {
      const element = createElement('div', {
        innerText: item,
        className: 'pokemon'
      });
      element.addEventListener('click', () => {
        props.onSearchResultClick(item);
      });
      appendContent(container, element);
    });
  }
  return container;
}
