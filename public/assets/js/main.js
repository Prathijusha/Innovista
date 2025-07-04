document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    if (navbarToggle) {
        navbarToggle.addEventListener('click', function() {
            // Toggle the 'active' class on the menu
            navbarMenu.classList.toggle('active');
        });
    }

    // Testimonial slider logic
    const slider = document.querySelector('.testimonial-cards');
    const cards = document.querySelectorAll('.testimonial-card');
    if (!slider || cards.length === 0) return;

    // Duplicate cards for seamless infinite scroll
    slider.innerHTML += slider.innerHTML;

    let scrollAmount = 0;
    let card = cards[0];
    let cardWidth = card.offsetWidth + (parseInt(getComputedStyle(slider).gap) || 0);

    function animate() {
        scrollAmount += 1; // speed: increase for faster scroll
        if (scrollAmount >= cardWidth * cards.length) {
            scrollAmount = 0;
        }
        slider.style.transform = `translateX(-${scrollAmount}px)`;
        requestAnimationFrame(animate);
    }

    animate();

    // Responsive: recalculate cardWidth on resize
    window.addEventListener('resize', () => {
        cardWidth = card.offsetWidth + (parseInt(getComputedStyle(slider).gap) || 0);
    });
});