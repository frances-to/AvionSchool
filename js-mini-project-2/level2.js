const secondLevel = document.querySelector('.card');
const form = secondLevel.querySelector('#form');
const displayedMessage = secondLevel.querySelector('.button');
const name = secondLevel.querySelector('.text').value;

form.addEventListener('submit', e => {
  console.log("Form submitted");
});