import './app.scss';
import { createElement } from './lib/dom';
import { title } from './components/title';
import { search } from './components/search';

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

  const searchText = createElement('div', {
    className: 'searchText'
  });
  main.appendChild(searchText);

  searchElement.addEventListener('input', event => {
    console.log(event.target.value);
  });
  return [header, main];
}
