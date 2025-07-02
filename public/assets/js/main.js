document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    if (navbarToggle) {
        navbarToggle.addEventListener('click', function() {
            // Toggle the 'active' class on the menu
            navbarMenu.classList.toggle('active');
        });
    }
});