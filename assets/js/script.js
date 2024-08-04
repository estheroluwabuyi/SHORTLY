"use script;"

// MENU BUTTON
const menuBtn = document.getElementById('menuBtn');
const menuBtnImg = document.querySelector('.nav--bar__menuBtn img');
const navLink = document.querySelector('.nav--links');
const form = document.querySelector('#search-form');

const btn = form.querySelector('.search--btn');
const input = form.querySelector('.search--field')

btn.addEventListener('click', function(e){
e.preventDefault();
});



const btnToggler = function () {

    menuBtn.addEventListener('click', ()=>{
        if (menuBtnImg.getAttribute('src') === './assets/img/menu-gray.png') {
            menuBtnImg.setAttribute('src', './assets/img/close-gray.png');
            navLink.classList.add('visible');

      menuBtn.classList.toggle('rotate');
      menuBtn.classList.remove('unRotate');


 

        }else{
            menuBtnImg.setAttribute('src', './assets/img/menu-gray.png');
            navLink.classList.remove('visible');
            navLink.style.transition = 'top 500ms ease';
    

      menuBtn.classList.toggle('unRotate');
      menuBtn.classList.remove('rotate');

        }
    })
}

btnToggler();