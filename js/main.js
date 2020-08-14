AOS.init();

var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.arrow',
  },
  breakpoints: {
    540: {
      slidesPerView: 2,
    }
  }
});

var menuButton = document.querySelector(".page-header__mobile-menu");
var menu = document.querySelector(".page-header__wrapper");

menuButton.addEventListener('click', function() {
  menuButton.classList.toggle('page-header__mobile-menu--active');
  menu.classList.toggle('page-header__wrapper--active')
})