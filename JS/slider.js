const slides = document.querySelectorAll('.slide-content');
const nextButton = document.querySelector('.next-slide');
const prevButton = document.querySelector('.previous-slide');
const dots = document.querySelectorAll('.dot');

// SLIDER
let currentSlide = 0;
// FUNCTION UPDATING CURRENT SLIDE
const updateSlides = () => {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentSlide) {
      slide.classList.add('active');
    }
  });
  dots.forEach(dot => {
    dot.classList.remove('active');
  });
  dots[currentSlide].classList.add('active');
};

// NAVIGATE THROUGH SLIDE PAGES WITH ARROW ICONS
nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlides();
});
prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlides();
});

// NAVIGATE WITH DOTS
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    updateSlides();
  });
});

// UPDATING SLIDE PAGE EVERY 4 SEONDS
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlides();
}, 4000);
updateSlides();

// ADDING SWIPE FUNCTIONALITY FOR CHANGING THE SLIDE
const slider = document.querySelector('.slider');
let touchStartX = 0;
let touchEndX = 0;
slider.addEventListener(
  'touchstart',
  evt => (touchStartX = evt.touches[0].clientX),
  false
);
slider.addEventListener(
  'touchmove',
  evt => (touchEndX = evt.touches[0].clientX),
  false
);
slider.addEventListener(
  'touchend',
  () => {
    const difference = touchStartX - touchEndX;
    currentSlide =
      difference > 50
        ? (currentSlide + 1) % slides.length
        : difference < -50
        ? (currentSlide - 1 + slides.length) % slides.length
        : currentSlide;
    updateSlides();
  },
  false
);

// ADDING CLASSES THAT MODIFIES SLIDE MOVEMENT ON MOB RESPONSIVE
function adjustSliderForMobile() {
  const isMobile = window.innerWidth < 700;
  slides.forEach(slide => {
    isMobile
      ? slide.classList.add('mobile-view')
      : slide.classList.remove('mobile-view');
  });
}
adjustSliderForMobile();
window.addEventListener('resize', adjustSliderForMobile);
