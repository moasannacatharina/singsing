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

// Add new animation after initial in-animation.

setTimeout(addAnimation, 1700);
setTimeout(addOpacity, 3000);

//Set session storage to keep in animation from firing again on page reload.

const setSessionStorage = () => {
  let hasVisited = sessionStorage.getItem('hasVisited');
  hasVisited = true;
  sessionStorage.setItem('hasVisited', hasVisited);
};

setTimeout(setSessionStorage, 5000);

const container = document.querySelector('.container');
const starContainerMobile = document.querySelector('.star-container');
const starContainers = document.querySelectorAll('.stars-desktop');

if (sessionStorage.getItem('hasVisited') === 'true') {
  starContainers.forEach((starContainer) => {
    starContainer.style.animationName = 'dissolve';
  });
  container.style.animationName = 'dissolve';
  starContainerMobile.style.animationName = 'dissolve';
  leftBottle.style.animation = 'left-bottle 1s infinite';
  leftBottle.style.opacity = '1';

  rightBottle.style.opacity = '1';
  rightBottle.style.animation = 'right-bottle 1s infinite';

  redMic.style.animationName = 'dissolve';
  redMic.style.opacity = '1';
}
