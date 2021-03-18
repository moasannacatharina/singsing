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
setTimeout(addOpacity, 2700);
