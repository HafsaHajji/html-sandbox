
// console.log('hello world')

// Masoo bandhigayo.

// let firstname='Hafsa';
 
// Sida Loosoo bandhigo magacaga.

// firstname='hassan'

// console.log(firstname)



const button = document.querySelector('#button');
const heading = document.querySelector('h1');

button.addEventListener('click', function () {
  document.body.classList.toggle('dark');
  heading.classList.toggle('yellow');
});
