// variável de controle do passo a passo do form
let currentStep = 0;

// pega todos os "forms steps" da página
const formSteps = document.querySelectorAll(".form-step");

const form = document.querySelector("form");

/* Steps */

// A função é executada quando ocorre um click em qq ligar do form

form.addEventListener("click", (e) => {
  /* desconsidera cliques sem "data-action", ou seja, fora dos botões */
  if (!e.target.matches("[data-action]")) {
    return;
  }

  // exemplo object literal
  const actions = {
    next() {
      currentStep++;
    },
    prev() {
      currentStep--;
    },
  };

  // pega as ações next e prev
  const action = e.target.dataset.action;
  actions[action]();

  console.log(currentStep);
  updateActiveStep(); // atualiza os campos do form
  updateProgressStep(); // atualiza a barra de progresso
});

/* Envio do formulário */
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

/* Update Steps */
function updateActiveStep() {}
function updateProgressStep() {}
