// Button Ripple and Scale Effect
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.style.position = 'relative';
    button.style.overflow = 'hidden';

    button.addEventListener('click', function(e) {
        // Scale effect
        button.classList.add('btn-pressed');
        setTimeout(() => button.classList.remove('btn-pressed'), 150);

        // Ripple effect
        let ripple = document.createElement('span');
        ripple.className = 'ripple';
        let rect = button.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left) + 'px';
        ripple.style.top = (e.clientY - rect.top) + 'px';
        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});