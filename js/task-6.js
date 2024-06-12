
const refs = {
  boxeses: document.querySelector('#boxes'),
  btnCreate: document.querySelector('.js-but-create'),
  btnDestroy: document.querySelector('.js-but-delete'),
  inputNumber: document.querySelector('.js-uze-number')
}
refs.btnCreate.addEventListener('click', onCreateBtnClick);
refs.btnDestroy.addEventListener('click', onDestroyBtnClick);

const boxesDiv = document.getElementById('boxes');

   function onCreateBtnClick(event) {
    const inputValue = refs.inputNumber.value.trim();
    if  (inputValue <= 1 || inputValue >= 100 ) {
      alert(`enter the correct value`)
      return ;}
      createBoxes(inputValue);
   }
   
function onDestroyBtnClick(event) {
  destroyBoxes();
 }
 
function createBoxes(amount) {
  destroyBoxes();
 let sizes = 30;
 const elements = [];
 for (let i = 0; i < amount; i++) {
  const newElement = document.createElement('div');
  const creatnewDiv = document.querySelector('#boxes');
  creatnewDiv.appendChild(newElement);
  newElement.style.width = `${sizes}px`;
  newElement.style.height = `${sizes}px`;
  sizes += 10;
  newElement.style.backgroundColor = getRandomHexColor();
 }
  elements.push('newElement');
}
 
function destroyBoxes() {
  boxesDiv.textContent = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 

