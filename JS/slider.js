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
// UPDATING SLIDE PAGE EVERY 3 SEONDS
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlides();
}, 3000);
updateSlides();
