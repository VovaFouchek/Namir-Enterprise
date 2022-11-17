// Header scroll
const header = document.querySelector('.header');
const first = document.querySelector('.banner');
const containHide = () => header.classList.contains('header__hide');
let lastScrollTop = 0;

// document.addEventListener('scroll', handleScrollHeader);

function handleScrollHeader() {
  let scrollDistance = window.scrollY;
  if (scrollDistance < lastScrollTop && containHide()) {
    header.classList.remove('header__hide');
  } else if (scrollDistance > lastScrollTop && !containHide()) {
    header.classList.add('header__hide');
  }

  if (scrollDistance === 0) {
    header.classList.remove('header__hide');
  }

  lastScrollTop = scrollDistance;
}
