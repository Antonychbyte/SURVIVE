
$(document).ready(function(){
    $('.sos-slider').slick({
      dots:true,
      infinite: false,
      appendArrows: '.sos-slider__wrapper',
    });
  });

function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
    
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});

function clickOnAccord(){
    let elems = document.querySelector('.accordeon__list');
      elems.addEventListener('click', function(event){
          let target = event.target.closest('.accordeon__item');
        target.classList.toggle('active');
      
    })
    
}
clickOnAccord();


function burgerHandler(){
    let menu = document.querySelector('.header__menu');
        menu.classList.toggle('active');
        let body = document.querySelector('body');
        body.classList.toggle('lock');
}
function clickOnBurger(){
    let burger = document.querySelector('.burger');
    burger.addEventListener('click', burgerHandler);
}
clickOnBurger();


function clikOnCross(){
    let cross = document.querySelector('.cross');
    cross.addEventListener('click', burgerHandler);
}
clikOnCross();

function clickOnMenu(){
    let menuItems = document.querySelectorAll('.menu-header__item a');
    menuItems.forEach(element => {
        element.addEventListener('click', burgerHandler)
    });
}
clickOnMenu();

function showUp(){
    let buttonUp = document.querySelector('.up');
    window.addEventListener('scroll', function(){
        if(window.scrollY>300){
            buttonUp.classList.add('show');
        }else{
            buttonUp.classList.remove('show');
        }
    })
}
showUp();

