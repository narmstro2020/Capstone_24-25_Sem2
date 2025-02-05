const button = document.querySelector('button');

const sayHello = () => alert('Hello!');
button.addEventListener('click', sayHello);
button.removeEventListener('click', sayHello);