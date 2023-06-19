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
      if(!isValidInputs()) // só aceita se os inputs forem válidos!
      return;
    },
    prev() {
      currentStep--;
    },
  };

  // pega as ações next e prev
  const action = e.target.dataset.action;
  actions[action]();

  updateActiveStep(); // atualiza os campos do form
  updateProgressStep(); // atualiza a barra de progresso
});

/* Send form */
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);
  alert(`Obrigado ${data.get('name')}!`);
});


/* Update Steps */
function updateActiveStep() {
  formSteps.forEach((step) => {
    step.classList.remove("active"); /* remove classe "active" para cada step */
  });
  formSteps[currentStep].classList.add(
    "active"
  ); /* add classe "active" para cada step */
}

const progressSteps = document.querySelectorAll(".step-progress [data-step]");
function updateProgressStep() {
  progressSteps.forEach((step, idx) => {
    step.classList.remove("active");
    step.classList.remove("done");

    if (idx < currentStep + 1) {
      /* verifica se o índice é menor que o currentStep + 1 */
      step.classList.add("active");
    }

    if (idx < currentStep) {
      /* verifica se o índice é menor que o currentStep */
      step.classList.add("done");
    }
  });
}

/* Validation */
function isValidInputs() {
  const currentFormStep = formSteps[currentStep];
  const formFields = [
    ...currentFormStep.querySelectorAll("input"),
    ...currentFormStep.querySelectorAll("textarea")
  ];
  return formFields.every((input) => input.reportValidity()) // Verifica se há problema nos inputs. Se sim, retorna TRUE* (*dúvida)!
}
