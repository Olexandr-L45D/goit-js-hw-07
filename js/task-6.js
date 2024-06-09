//6form.reset()
const inputNumber = document.querySelector('.js-uze-number');
inputNumber.addEventListener('input', handlerinput);

function handlerinput(evt) { }

const refs = {
      body: document.body,
      btnCreate: document.querySelector('button[data-create = "create"]'),
      btnDestroy: document.querySelector('button[data-destroy = "destroy"]'),
  }
   const INTERVAL_DELAY = 1000;
  let intervalId = null;
  refs.btnCreate.addEventListener('click', changeColor);
  refs.btnDestroy.addEventListener('click', onBtnStop);
  
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
document.boxes.style.color = getRandomHexColor();  
const clickbutton = document.querySelector('.boxes');
clickbutton.addEventListener('click', handlerClick);
function handlerClick() {}
function createBoxes(amount) {
}
function destroyBoxes() {
}
