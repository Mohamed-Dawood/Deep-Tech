let scrollTop = document.querySelector('.scroll-top');

window.onscroll = function () {
  if (scrollY >= 400) {
    scrollTop.style.display = `block`;
  } else {
    scrollTop.style.display = `none`;
  }
};

scrollTop.onclick = function () {
  scroll({
    left: 0,
    top: 0,
    behavior: 'smooth',
  });
};

var swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
