const dices = [].slice.call(document.querySelectorAll('.dice'));
const result = document.getElementById('result');
const history = document.getElementById('history');
const reset = document.getElementById('clearHistory');


reset.addEventListener('click', () => {
  while( history.firstChild ) {
    history.removeChild( history.firstChild );
  }
})

for( let i = 0, len = dices.length; i < len; i++) {
  dices[i].addEventListener('click', getRolled, false);
}

function getRolled() {
  let random = randomize(this.value);
  let newOne = newElem('li');
  let arrHistory = history.getElementsByTagName('li');
  if( arrHistory.length >= 4 ? history.removeChild(history.lastChild) : '');

  insertTextNode(newOne, `${this.innerHTML}: ${random}`);
  history.insertBefore(newOne, history.firstChild);

  return result.innerHTML = `Result from ${this.innerHTML}: ${random}`;
}

function randomize(sides) {
  return Math.floor((Math.random() * sides) +1);
}

function newElem(elemType) {
  return document.createElement(elemType);
}

function insertTextNode(mainElem, text) {
  let textNode = document.createTextNode(text);
  mainElem.appendChild(textNode);
}
