document.querySelector('.form-btn__open').addEventListener('click', function() {
document.querySelector('.form').classList.add('form__active');
  this.classList.add('active');
})


  let form = document.querySelector('.form');
  let closeBtn = document.querySelector ('.close--block');

closeBtn.addEventListener ('click', function(){
 form.classList.remove('form__active');
 document.querySelector('.form-btn__open').classList.remove('active')
});





const heroContainer = document.querySelector('.hero__container')
const swiper = new Swiper('.hero__swiper', {

  speed: 300,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  }

});

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

new Accordion('.accordion-container');

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link')

burger.addEventListener('click',

    function () {
        burger.classList.toggle('burger--active');
        menu.classList.toggle('header__nav--active');
        document.body.classList.toggle('stop-scroll');
    })

menuLinks.forEach(function (el) {
    el.addEventListener('click', function (){
        burger.classList.remove('burger--active');
        menu.classList.remove('header__nav--active');
        document.body.classList.remove('stop-scroll');
    });
});

