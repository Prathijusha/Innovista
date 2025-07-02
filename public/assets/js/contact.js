// Contact Us page JS

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Show a simple success message (customize as needed)
      alert('Thank you for contacting us! We\'ll get back to you soon.');
      form.reset();
    });
  }
}); 