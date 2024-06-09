//5
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  const clickbutton = document.querySelector(".change-color");
  clickbutton.addEventListener("click", handlerClick);
     function handlerClick(evt) {
  console.log(evt.currentTarget)
  const span = document.querySelector('span')
  span.textContent = evt.currentTarget.value;
  if (evt.currentTarget.value) {
    getRandomHexColor
  }
  }
  clickbutton.insertAdjacentHTML('beforeend', getRandomHexColor())