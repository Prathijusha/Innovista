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

  // Modal logic for signup and login
  const signupModal = document.getElementById('signupModal');
  const loginModal = document.getElementById('loginModal');
  const openSignupBtns = document.querySelectorAll(".btn-sunshine[href='signup.html']");
  const openLoginBtns = document.querySelectorAll(".btn-sunshine[href='login.html']");
  const closeSignupModal = document.getElementById('closeSignupModal');
  const closeLoginModal = document.getElementById('closeLoginModal');
  const signupOverlay = document.querySelector('#signupModal .modal-overlay');
  const loginOverlay = document.querySelector('#loginModal .modal-overlay');

  openSignupBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
          e.preventDefault();
          signupModal.style.display = 'flex';
          document.body.style.overflow = 'hidden';
      });
  });
  openLoginBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
          e.preventDefault();
          loginModal.style.display = 'flex';
          document.body.style.overflow = 'hidden';
      });
  });
  if (closeSignupModal) closeSignupModal.addEventListener('click', function() {
      signupModal.style.display = 'none';
      document.body.style.overflow = '';
  });
  if (closeLoginModal) closeLoginModal.addEventListener('click', function() {
      loginModal.style.display = 'none';
      document.body.style.overflow = '';
  });
  if (signupOverlay) signupOverlay.addEventListener('click', function() {
      signupModal.style.display = 'none';
      document.body.style.overflow = '';
  });
  if (loginOverlay) loginOverlay.addEventListener('click', function() {
      loginModal.style.display = 'none';
      document.body.style.overflow = '';
  });
});