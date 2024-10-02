const signUpButton = document.getElementById('signUpLink');
const loginButton = document.getElementById('loginLink');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', (event) => {
  event.preventDefault(); // Previene el comportamiento por defecto del enlace
  container.classList.add('right-panel-active');
});

loginButton.addEventListener('click', (event) => {
  event.preventDefault(); // Previene el comportamiento por defecto del enlace
  container.classList.remove('right-panel-active');
});
