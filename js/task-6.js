//6
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputNumber = document.querySelector('.js-uze-number');
inputNumber.addEventListener('input', handlerinput);
let stepDiv = 0;
let createDiv = 0;
  function handlerinput(evt) { 
const refs = {
      boxeses: document.querySelector('#boxes'),
      btnCreate: document.querySelector('.js-but-create'),
      btnDestroy: document.querySelector('.js-but-delete'),
  }
   const INTERVAL_DELAY = 1000;
  let intervalId = 1;
  refs.btnCreate.addEventListener('click', onCreate);
  //refs.btnDestroy.addEventListener('click', onDelete);
  // ця додає елемент(div)
    function onCreate() {
createDiv += 1;
const newElement = document.createElement('div');
newElement.textContent = 'Новий box';
const creatnewDiv = document.querySelector('#boxes');
creatnewDiv.appendChild(newElement);
  }
}
// ця змінює кольор(та має додавати по 10рх)
let box = document.querySelector('#boxes');
const clickbutton = document.querySelector('.js-but-create');
const backcolor = document.querySelector('#boxes');
clickbutton.addEventListener('click', handlerClick);
   function handlerClick() {
    document.body.style.color = getRandomHexColor();
    backcolor.textContent = document.body.style.color;
    stepDiv += 10;
  box.style.width = ${stepDiv}px;
  box.style.height = ${stepDiv}px;
   backcolor.style = box.style.width;
   backcolor.style = box.style.height;
  }
// ця перевіряє на число
  function createBoxes(amount) {
  if  (evt.currentTarget.value <= 100 ) {
    input.textContent = evt.currentTarget.value;
}
// ця чисте input
}
function destroyBoxes() {
  input.reset()
}
