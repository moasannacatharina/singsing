const formContainer = document.querySelector('.form-container');
const rsvpBtn = document.querySelector('.rsvp-btn');

rsvpBtn.addEventListener('click', () => {
  formContainer.classList.toggle('form-container-visible');
  formContainer.scrollIntoView({ block: 'center' });
});

const confirmationContainer = document.querySelector('.confirmation');
const confirmationBtn = document.querySelector('.confirmation-btn');

confirmationBtn.addEventListener('click', () => {
  confirmationContainer.style.display = 'flex';
});

const programBtn = document.querySelector('.program-btn');
const program = document.querySelector('.program');

programBtn.addEventListener('click', () => {
  program.scrollIntoView();
});
