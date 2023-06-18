const form = document.querySelector("form");

// Informo que ao clicar em submit não haverá o envio do form
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
