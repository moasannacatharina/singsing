const container = document.querySelector('.container');
const starContainer = document.querySelector('.star-container');

window.addEventListener('load', () => {
  container.classList.add('show-time');
  starContainer.classList.add('show-time');
});

const formContainer = document.querySelector('.form-container');
const rsvpBtn = document.querySelector('.rsvp-btn');

rsvpBtn.addEventListener('click', () => {
  formContainer.classList.toggle('form-container-visible');
  window.scroll({
    top: 1200,
    left: 0,
    behavior: 'smooth',
  });
});

const confirmationContainer = document.querySelector('.confirmation');
const confirmationBtn = document.querySelector('.confirmation-btn');

confirmationBtn.addEventListener('click', () => {
  confirmationContainer.style.display = 'flex';
});

const programBtn = document.querySelector('.program-btn');
const program = document.querySelector('.program');

programBtn.addEventListener('click', () => {
  program.scrollIntoView({ behavior: 'smooth' });
});

const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');
const VIP = urlParams.get('VIP');

console.log(name, VIP);

if (VIP == 'true') {
  window.alert(`hello, ${name}! you are vip!`);
}
