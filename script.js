// Selectors
let bag = document.getElementById('bag');
let user = document.getElementById('user');
let burger = document.getElementById('burger');
let opened = document.querySelector('.header .opened');
let bg = document.querySelector('.header-content .bg');
burger.addEventListener('click', ()=>{
  opened.classList.toggle('active');
});

