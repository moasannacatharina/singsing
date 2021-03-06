const container = document.querySelector('.container');

window.addEventListener('load', () => {
  container.classList.add('show-time');
});

const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');
const VIP = urlParams.get('VIP');

console.log(name, VIP);

if (VIP == 'true') {
  window.alert(`hello, ${name}! you are vip!`);
}
