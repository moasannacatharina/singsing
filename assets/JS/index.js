const leftBottle = document.querySelector('.left-hand-bottle');
const rightBottle = document.querySelector('.right-hand-bottle');
const redMic = document.querySelector('.microphone-red');

const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

const addAnimation = () => {
  leftBottle.style.opacity = '1';
  rightBottle.style.opacity = '1';

  if (!mediaQuery || mediaQuery.matches) {
    leftBottle.style.animationName = 'dissolve';
    rightBottle.style.animationName = 'dissolve';
  } else {
    leftBottle.style.animation = 'left-bottle 1s infinite';
    rightBottle.style.animation = 'right-bottle 1s infinite';
  }
};
const addOpacity = () => {
  redMic.style.opacity = '1';
};

setTimeout(addAnimation, 1700);
setTimeout(addOpacity, 3000);

// event listeners
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

// url parameters
const VIPContainer = document.querySelector('.VIP');
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

// const container = document.querySelector('.container');
// const starContainers = document.querySelectorAll('.stars-desktop');

// let hasVisited = localStorage.getItem('hasVisited');
// hasVisited = true;
// localStorage.setItem('hasVisited', hasVisited);

// if (localStorage.getItem('hasVisited') === 'true') {
//   starContainers.forEach((starContainer) => {
//     starContainer.style.animationName = 'dissolve';
//   });
//   container.style.animationName = 'dissolve';
//   leftBottle.style.animation = 'left-bottle 1s infinite';
//   leftBottle.style.opacity = '1';

//   rightBottle.style.opacity = '1';
//   rightBottle.style.animation = 'right-bottle 1s infinite';

//   redMic.style.animationName = 'dissolve';
//   redMic.style.opacity = '1';
// }

// window.onunload = () => {
//   // Clear the local storage
//   localStorage.removeItem('hasVisited');
// };
