//5
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  const clickbutton = document.querySelector('.change-color');
const backcolor = document.querySelector('.color');
clickbutton.addEventListener('click', handlerClick);
function handlerClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  backcolor.textContent = document.body.style.backgroundColor;
}