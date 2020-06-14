// Burger menu

let wrapper = document.querySelector('.burger__button-wrapper');
let burger = document.querySelector('.burger__button');
let mobileNav = document.querySelector('.header__mobile-nav');
let mobileLink = document.querySelectorAll('.mobile-nav__link');
let body = document.querySelector('body');

wrapper.addEventListener('click', (evt) => {
  evt.preventDefault();
  burger.classList.toggle('active');
  mobileNav.classList.toggle('header__mobile-nav--active');
  body.classList.toggle('block');
});

for (var i = 0; i < mobileLink.length; i++) {
  mobileLink[i].addEventListener('click', function (event) {
    burger.classList.toggle('active');
    mobileNav.classList.remove('header__mobile-nav--active');
    body.classList.remove('block');
  });
}

// Smooth Scroll

function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  let targetPosition = target.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, distance, duration);
    window.scroll(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

let menu = document.querySelector('.nav__link-menu');
let catalog = document.querySelector('.nav__link-catalog');
let gallery = document.querySelector('.nav__link-gallery');
let subscribe = document.querySelector('.nav__link-subscribe');

let mobileMenu = document.querySelector('.mobile-nav__link-menu');
let mobileCatalog = document.querySelector('.mobile-nav__link-catalog');
let mobileGallery = document.querySelector('.mobile-nav__link-gallery');
let mobileSubscribe = document.querySelector('.mobile-nav__link-subscribe');

menu.addEventListener('click', (e) => {
  e.preventDefault();
  smoothScroll('.menu', 1000);
});

catalog.addEventListener('click', (e) => {
  e.preventDefault();
  smoothScroll('.catalog', 700);
});

gallery.addEventListener('click', (e) => {
  e.preventDefault();
  smoothScroll('.gallery', 900);
});

subscribe.addEventListener('click', (e) => {
  e.preventDefault();
  smoothScroll('.subscribe', 1200);
});

mobileMenu.addEventListener('click', (e) => {
  e.preventDefault();
  smoothScroll('.menu', 1000);
});

mobileCatalog.addEventListener('click', (e) => {
  e.preventDefault();
  smoothScroll('.catalog', 700);
});

mobileGallery.addEventListener('click', (e) => {
  e.preventDefault();
  smoothScroll('.gallery', 900);
});

mobileSubscribe.addEventListener('click', (e) => {
  e.preventDefault();
  smoothScroll('.subscribe', 1200);
});
