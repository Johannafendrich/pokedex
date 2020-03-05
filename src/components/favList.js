import './favList.scss';
import { createElement } from '../lib/dom';

export function createfavList(prop) {
  const container = createElement('div', {
    className: 'favList'
  });
  prop.items.forEach(item => {
    const favorit = createElement('div', {
      innerText: item,
      className: 'myFavorites'
    });
    container.appendChild(favorit);
  });
  return container;
}
