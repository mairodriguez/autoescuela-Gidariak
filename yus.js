const button = document.querySelector('.Dark input');
const body = document.querySelector('body');

let isDarkMode = false;

button.addEventListener('click', () => {
  if (isDarkMode) {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    isDarkMode = false;
  } else {
    body.style.backgroundColor = 'black';
    body.style.color = 'gray';
    isDarkMode = true;
  }
});
