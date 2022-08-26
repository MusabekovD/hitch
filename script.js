// Selectors
let bag = document.getElementById('bag');
let user = document.getElementById('user');
let burger = document.getElementById('burger');
let opened = document.querySelector('.header .opened');

burger.addEventListener('click', ()=>{
  opened.classList.toggle('active');

});

