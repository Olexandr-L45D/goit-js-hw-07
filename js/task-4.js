//4
const form = document.querySelector(".login-form");
form.addEventListener("submit", handlerGetform);
function handlerGetform(evt) {
  evt.preventDefault();
  const { email, password} = evt.currentTarget.elements; 
  const datase = {
    email: email.value.trim(),
    password: password.value.trim(),
  };
  if ( email.value.trim()  === "" || password.value.trim()  === "" ) {
    alert("All form fields must be filled in") 
    return;
}
  console.log(datase);
  form.reset()
}