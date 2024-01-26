// MAKE HEADER TRANSPARENT ON SCROLLING
window.addEventListener('scroll', () => {
  header.classList.toggle('header-transparent', window.scrollY > 30);
});

// BURGER MENU
document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burgerMenu');
  const burgerLayout = document.querySelector('.burger-layout');
  const body = document.body;
  // ELEMENTS THAT BLUR ON CLICK ON BURGER MENU
  const mainContent = document.querySelectorAll(
    '.main-banner, .main-program-description, .course-content, .main-slider, .main-faq, .main-footer, .header-logo'
  );
  // TOGGLE BLUR EFFECT
  const toggleBlurEffect = show => {
    mainContent.forEach(element => {
      element.classList[show ? 'add' : 'remove']('blur-effect');
    });
  };
  // TOGGLE LAYOUT
  burgerMenu.addEventListener('click', function () {
    const isOpen = burgerLayout.style.right === '0px';
    burgerLayout.style.right = isOpen ? '-100%' : '0';
    toggleBlurEffect(!isOpen);
    this.classList.toggle('toggle');
    body.classList.toggle('no-scroll', !isOpen);
  });

  // CLOSE LAYOUT WITH CLICK ON OUTSIDE ELEMENTS
  document.addEventListener('click', function (event) {
    if (
      !burgerLayout.contains(event.target) &&
      !burgerMenu.contains(event.target) &&
      burgerLayout.style.right === '0px'
    ) {
      burgerLayout.style.right = '-100%';
      toggleBlurEffect(false);
      burgerMenu.classList.remove('toggle');
      body.classList.remove('no-scroll');
    }
  });
});

// STICKY HEADER ON MOBILE RESPONSIVE
const header = document.querySelector('.main-header');
let lastScrollTop = 0;
// MANIPULETING HEADER ON SCROLL
window.addEventListener('scroll', function () {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;
  if (window.innerWidth < 600) {
    currentScroll > lastScrollTop
      ? header.classList.add('header-hidden')
      : header.classList.remove('header-hidden');
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
});
