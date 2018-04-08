var burgerBtn = document.querySelector(".main-nav__burger");
var backMenuBtn = document.querySelectorAll(".main-nav__back");
var mainMenu = document.querySelector(".main-nav");
var innerMenu = document.querySelectorAll(".main-nav__block");
var menuNoNestig = document.querySelectorAll(".main-nav__item--nesting");
var externalOverlay = document.querySelector(".page-header__overlay");
var innerOverlay = document.querySelector(".main-nav__inner-overlay");


(function () { // IE NodeList Polyfill //
  if ( typeof NodeList.prototype.forEach === "function" ) return false;
  NodeList.prototype.forEach = Array.prototype.forEach;
})();

// mainNavs.forEach(function(mainNav){
//   mainNav.classList.add("main-nav__block--close");
// });

burgerBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  mainMenu.classList.toggle("main-nav--close");
  burgerBtn.classList.toggle("burger--open");
  externalOverlay.classList.toggle("page-header__overlay--open");
});

$(".main-nav__link--nesting").click(function(event) {
  event.stopImmediatePropagation();
  console.log(event.target);
  $(this).siblings().filter('.main-nav__block').toggleClass('main-nav__block--close');
  innerOverlay.classList.toggle("main-nav__inner-overlay--close");
});


// backMenuBtn.addEventListener("click", function(evt) {
//   alert('После');
// });
//
// document.addEventListener('click',function(e){
//
//   if(e.target && e.target.className == 'secondary-list__back'){
//
//     innerMenu.forEach(function(secondaryMenu){
//       secondaryMenu.classList.add("secondary-list__block--close");
//     });
//
//     innerOverlay.classList.add("main-nav__inner-overlay--close");
//   }
// });


backMenuBtn.forEach(function(backMenu) {
  backMenu.addEventListener("click", function (evt) {
    evt.preventDefault();
    innerMenu.forEach(function(secondaryMenu){
      secondaryMenu.classList.add("main-nav__block--close");
    });
    innerOverlay.classList.add("main-nav__inner-overlay--close");
  });
});

if (externalOverlay) {
  externalOverlay.addEventListener("click", function(evt) {
    evt.preventDefault();
    mainMenu.classList.add("main-nav--close");
    externalOverlay.classList.remove("page-header__overlay--open");
    burgerBtn.classList.remove("burger--open");
    innerMenu.forEach(function(secondaryMenu){
      secondaryMenu.classList.add("main-nav__block--close");
    });
    innerOverlay.classList.add("main-nav__inner-overlay--close");
  });
}

if (innerOverlay) {
  innerOverlay.addEventListener("click", function(evt) {
    evt.preventDefault();
    innerMenu.forEach(function(secondaryMenu){
      secondaryMenu.classList.add("main-nav__block--close");
    });
    innerOverlay.classList.add("main-nav__inner-overlay--close");
  });
}
