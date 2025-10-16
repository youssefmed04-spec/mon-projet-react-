const div = document.querySelector('#maDiv');

const p = document.createElement('p');
p.textContent = "Paragraphe ajouté dynamiquement avec JavaScript.";

div.appendChild(p);

const bouton = document.createElement('button');
bouton.textContent = "Clique ici";

document.body.appendChild(bouton);

bouton.addEventListener('click', () => {
  console.log("Le bouton a été cliqué !");
});
