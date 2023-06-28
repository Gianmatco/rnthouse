const fname = document.getElementById('fname');
const email = document.getElementById('email');
const submit = document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit', (e)=>{
  e.preventDefault();
  console.log("cliccato");

})
