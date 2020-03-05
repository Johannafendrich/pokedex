import './title.scss';
import { createElement } from '../lib/dom';

// export function title() {
//   const titleAttributes = {
//     innerText: 'Pokedex',
//     className: 'title'
//   };
//   const element = createElement('h1', titleAttributes);

export function title(text) {
  const element = createElement('h1', {
    innerText: text,
    className: 'title'
  });
  return element;
}
