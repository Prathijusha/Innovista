document.addEventListener('DOMContentLoaded', function() {
  const navbarToggle = document.getElementById('navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');

  if (navbarToggle) {
    navbarToggle.addEventListener('click', function() {
      navbarMenu.classList.toggle('active');
    });
  }

  // Marquee-style testimonial slider
  const slider = document.querySelector('.testimonial-cards');
  if (!slider) return;

  // Duplicate the cards for seamless looping
  slider.innerHTML += slider.innerHTML;

  let scrollAmount = 0;
  const speed = 0.5; // Adjust for faster/slower scroll

  function animate() {
    scrollAmount += speed;
    // Reset when scrolled past half (original set)
    if (scrollAmount >= slider.scrollWidth / 2) {
      scrollAmount = 0;
    }
    slider.style.transform = `translateX(-${scrollAmount}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});