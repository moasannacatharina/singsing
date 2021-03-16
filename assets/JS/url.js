const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');
const VIP = urlParams.get('VIP');

const VIPContainer = document.querySelector('.VIP');
const nameSpan = document.querySelector('.name');
const input = document.querySelector('#name');

if (name != null) {
  document.title = `${name} | Eventinbjudan Singsing`;
  nameSpan.textContent = ` ${name}`;
  input.value = name;
}

if (VIP == 'true') {
  VIPContainer.style.display = 'flex';
}
