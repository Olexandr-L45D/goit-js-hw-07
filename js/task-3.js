//3
const inputuzertext = document.querySelector(.js-uzertext);
 inputuzertext.addEventListener('input', handlerinput);

   function handlerinput(evt) {
  const span = document.querySelector('span')
span.textContent = evt.currentTarget.value.trim();

 if (evt.currentTarget.value.trim() === "") {
     span.textContent = "Anonymous"
 }
}