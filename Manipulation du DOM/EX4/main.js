const button = document.querySelector("#monBouton");

button.addEventListener("click", function() {
  const div = document.querySelector("#maDiv");
  div.innerText = "Le texte a changé !";
});
