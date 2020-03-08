import './favList.scss';
import { createElement, appendContent } from '../lib/dom';

export function createFavList(props) {
  const container = createElement('section', {
    className: 'favList'
  });

  props.items.forEach(item => {
    const favorite = createElement('div', {
      className: 'MyFavorites',
      innerText: item
    });
    appendContent(container, favorite);
  });
  return container;
}
