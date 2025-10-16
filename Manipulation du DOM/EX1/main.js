const div = document.querySelector('#maDiv');
const button = document.querySelector('#monBouton');

button.addEventListener('click', () => {
  div.textContent = "Nouveau texte";
});
