const container = document.querySelector('.container');
const starContainer = document.querySelector('.star-container');
const leftStarContainer = document.querySelector('.stars-left');
const rightStarContainer = document.querySelector('.stars-right');
const bottles = document.querySelectorAll('.bottle');
const redMic = document.querySelector('.microphone-red');
const startImgs = document.querySelectorAll('.start-img');

window.addEventListener('load', () => {
  // container.classList.add('show-time');
  // starContainer.classList.add('show-time');
  // bottles.forEach((bottle) => {
  //   bottle.style.opacity = '1';
  // });
  // redMic.style.opacity = '1';
  // startImgs.forEach((startImg) => {
  //   startImg.style.opacity = '1';
  // });
});

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

const VIPContainer = document.querySelector('.VIP');
console.log(VIPContainer);
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');
const VIP = urlParams.get('VIP');

const nameSpan = document.querySelector('.name');
const input = document.querySelector('#name');
console.log(name, VIP);

if (name != null) {
  document.title = `${name} | Eventinbjudan Singsing`;
  nameSpan.textContent = ` ${name}`;
  input.value = name;
}

if (VIP == 'true') {
  VIPContainer.style.display = 'flex';
}

const leftBottle = document.querySelector('.left-hand-bottle');
const rightBottle = document.querySelector('.right-hand-bottle');

const addAnimation = () => {
  leftBottle.style.animation = 'left-bottle 1s infinite';
  leftBottle.style.opacity = '1';
  rightBottle.style.opacity = '1';
  rightBottle.style.animation = 'right-bottle 1s infinite';
};
const addOpacity = () => {
  redMic.style.opacity = '1';
};

setTimeout(addAnimation, 1700);
setTimeout(addOpacity, 2900);
