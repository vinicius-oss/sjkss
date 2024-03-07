document.addEventListener('DOMContentLoaded', function () {
  const slider = document.getElementById('slider');
  let isOpen = false;

  document.addEventListener('touchstart', handleTouchStart, false);
  document.addEventListener('touchmove', handleTouchMove, false);

  let xDown = null;

  function handleTouchStart(event) {
    xDown = event.touches[0].clientX;
  }

  function handleTouchMove(event) {
    if (!xDown) {
      return;
    }

    const xUp = event.touches[0].clientX;
    const xDiff = xDown - xUp;

    if (xDiff > 0 && !isOpen) {
      openSlider();
    } else if (xDiff < 0 && isOpen) {
      closeSlider();
    }

    xDown = null;
  }

  function openSlider() {
    slider.style.left = '0';
    isOpen = true;
  }

  function closeSlider() {
    slider.style.left = '-300px';
    isOpen = false;
  }
});


