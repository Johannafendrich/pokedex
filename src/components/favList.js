import './favList.scss';
import { createElement } from '../lib/dom';

export function createfavList(props) {
  const container = createElement('div', {
    className: 'favList'
  });
  props.items.forEach(item => {
    const favorit = createElement('div', {
      innerText: item,
      className: 'myFavorites'
    });
    container.appendChild(favorit);
  });
  return container;
}
