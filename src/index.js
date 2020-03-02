function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = 'Pokedex';

  return element;
}
const div = component();
document.body.appendChild(div);
