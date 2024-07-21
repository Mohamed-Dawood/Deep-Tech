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

function reviewerSwiper() {
  new Swiper('.mySwiper', {
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    rtl: document.body.style.direction === 'rtl',
    centeredSlides: true,
  });
}

// change img src when change dir

function changeDir() {
  let arrowTopLeft = document.querySelector('.arrow-top');
  let imageQuote = document.querySelectorAll('.image-quote');

  const body = document.body;

  const computedStyle = window.getComputedStyle(body);

  const direction = computedStyle.getPropertyValue('direction');

  if (direction === 'rtl') {
    arrowTopLeft.src = 'images/Arrow-Top-Right.png';
    imageQuote.forEach((image) => (image.src = 'images/Review/Left-Quote.png'));
  } else {
    arrowTopLeft.src = 'images/Arrow-Top-Left.png';
    imageQuote.forEach(
      (image) => (image.src = 'images/Review/Right-Quote.png')
    );
  }
  reviewerSwiper();
}
function toggleDirection() {
  const body = document.body;
  const currentDirection = body.style.direction;
  const rtlStylesheet = document.getElementById('rtlStylesheet');

  if (currentDirection === 'rtl') {
    body.style.direction = 'ltr';
    rtlStylesheet.disabled = true;
  } else {
    body.style.direction = 'rtl';
    rtlStylesheet.disabled = false;
  }

  changeDir();
}

document
  .getElementById('toggleDirection')
  .addEventListener('click', toggleDirection);

changeDir();
reviewerSwiper();
