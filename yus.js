const button = document.querySelector('.Dark input');
const body = document.querySelector('body');
const formDiv = document.querySelector('form div')


let isDarkMode = false;

button.addEventListener('click', () => {
  if (isDarkMode) {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    
    isDarkMode = false;
  } else {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    formDiv.style.color= 'black';
    isDarkMode = true;
  }
});
