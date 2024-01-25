document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.getElementById('burgerMenu');
  const offCanvasMenu = document.getElementById('offCanvasMenu');
  const closeIcon = document.getElementById('closeIcon');

  burgerMenu.addEventListener('click', function () {
    offCanvasMenu.style.right = '0';
  });

  closeIcon.addEventListener('click', function () {
    offCanvasMenu.style.right = '-100%';
  });

  document.addEventListener('click', function (event) {
    if (
      !offCanvasMenu.contains(event.target) &&
      !burgerMenu.contains(event.target)
    ) {
      offCanvasMenu.style.right = '-100%';
    }
  });
});
