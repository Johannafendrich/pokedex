import './title.scss';
import { createElement } from '../lib/dom';

// export function title() {
//   const titleAttributes = {
//     innerText: 'Pokedex',
//     className: 'title'
//   };
//   const element = createElement('h1', titleAttributes);

export function title() {
  const element = createElement('h1', {
    innerText: 'Pokedex',
    className: 'title'
  });
  return element;
}
