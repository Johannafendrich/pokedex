import './search.scss';
import { createElement } from '../lib/dom';


export function createSearchInput(searchValue) {

export function search(searchValue) {

  const element = createElement('input', {
    className: 'search',
    type: 'search',
    placeholder: 'what are you looking for?',
    value: searchValue
  });
  return element;
}
