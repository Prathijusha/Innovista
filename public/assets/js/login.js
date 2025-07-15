document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.login-form');
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    form.addEventListener('submit', function(e) {
        if (!username.value.trim() || !password.value.trim()) {
            e.preventDefault();
            alert('Please enter both username/email and password.');
            username.focus();
        }
    });
}); 