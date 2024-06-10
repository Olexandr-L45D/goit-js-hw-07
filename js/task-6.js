//6
const refs = {
  boxeses: document.querySelector('#boxes'),
  btnCreate: document.querySelector('.js-but-create'),
  btnDestroy: document.querySelector('.js-but-delete'),
  inputNumber: document.querySelector('.js-uze-number')
}
refs.btnCreate.addEventListener('click', onCreateBtnClick);
refs.btnDestroy.addEventListener('click', onDestroyBtnClick);

   function onCreateBtnClick(event) {
    const inputValue = refs.inputNumber.value.trim();
    if  (inputValue >= 1 | inputValue <= 100 ) {
      alert(`enter the correct value`)
      return inputValue;
   }
   createBoxes(inputValue);
  }

  function onDestroyBtnClick(event) {
    destroyBoxes();
  }
  
function destroyBoxes() {
  input.value = '';
}

function createBoxes(amount) {
 let sizes = 30;
 const elements = [];
 for (let i = 0; i < amount; i++) {
  const newElement = document.createElement('div');
  newElement.style.width = `${sizes}px`;
  newElement.style.height = `${sizes}px`;
  sizes += 10;
  newElement.style.backgroundColor = getRandomHexColor();
 }
 //this.elements.push(newElement);
}
this.elements.push(newElement);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



