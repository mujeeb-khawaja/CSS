document.querySelector('.container').classList.toggle('red');
let div = document.createElement('div');
div.textContent = 'Hello, World!';
div.setAttribute('id', 'greeting');
document.body.appendChild(div);