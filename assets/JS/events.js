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
const note2 = document.querySelector('.note-single-2');
const note3 = document.querySelector('.note-single-3');
const doubleNote = document.querySelector('.note-double-3');

programBtn.addEventListener('click', () => {
  program.scrollIntoView();
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 1500 && window.innerWidth > 1025) {
    note2.style.display = 'block';
    note2.style.animation = 'note-single-2 1s ease-in-out';
    note3.style.display = 'block';
    note3.style.animation = 'note-single-3 1s ease-in';
    doubleNote.style.display = 'block';
    doubleNote.style.animation = 'note-double-3 2s ease';
  }
});

window.addEventListener('resize', () => {
  note2.style.display = 'none';
  note3.style.display = 'none';
  doubleNote.style.display = 'none';
});
