// JavaScript extracted from signup.html for signup modal and form

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.signup-form');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const address = document.getElementById('address');
    const phone = document.getElementById('phone');

    // Password rule elements
    const ruleLength = document.getElementById('rule-length');
    const ruleUppercase = document.getElementById('rule-uppercase');
    const ruleLowercase = document.getElementById('rule-lowercase');
    const ruleNumber = document.getElementById('rule-number');
    const ruleSpecial = document.getElementById('rule-special');

    password.addEventListener('input', function() {
        const value = password.value;
        ruleLength.classList.toggle('password-rule-ok', value.length >= 8);
        ruleUppercase.classList.toggle('password-rule-ok', /[A-Z]/.test(value));
        ruleLowercase.classList.toggle('password-rule-ok', /[a-z]/.test(value));
        ruleNumber.classList.toggle('password-rule-ok', /\d/.test(value));
        ruleSpecial.classList.toggle('password-rule-ok', /[^A-Za-z0-9]/.test(value));
    });

    form.addEventListener('submit', function(e) {
        if (password.value !== confirmPassword.value) {
            e.preventDefault();
            alert('Passwords do not match!');
            confirmPassword.focus();
            return;
        }
        if (!address.value.trim()) {
            e.preventDefault();
            alert('Please enter your address.');
            address.focus();
            return;
        }
        if (!/^\d{10,15}$/.test(phone.value.trim())) {
            e.preventDefault();
            alert('Please enter a valid phone number (10-15 digits).');
            phone.focus();
            return;
        }
        // Password rules check
        const value = password.value;
        if (!(value.length >= 8 && /[A-Z]/.test(value) && /[a-z]/.test(value) && /\d/.test(value) && /[^A-Za-z0-9]/.test(value))) {
            e.preventDefault();
            alert('Password does not meet all requirements.');
            password.focus();
            return;
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.onsubmit = function(e) {
            e.preventDefault();
            // Reset errors
            document.querySelectorAll('.error').forEach(el => el.textContent = '');
            let valid = true;
            const userType = document.getElementById('userType').value;
            if (userType === 'customer') {
                // Customer fields validation
                const fullname = document.getElementById('fullname').value.trim();
                if (!fullname) {
                    document.getElementById('fullnameError').textContent = 'Full name is required.';
                    valid = false;
                }
                const email = document.getElementById('email').value.trim();
                if (!email) {
                    document.getElementById('emailError').textContent = 'Email is required.';
                    valid = false;
                }
                const phone = document.getElementById('phone').value.trim();
                if (!phone) {
                    document.getElementById('phoneError').textContent = 'Phone number is required.';
                    valid = false;
                } else if (!/^\d{10}$/.test(phone)) {
                    document.getElementById('phoneError').textContent = 'Phone number must be exactly 10 digits.';
                    valid = false;
                }
            } else if (userType === 'provider') {
                // Provider fields validation
                const providerFullname = document.getElementById('providerFullname').value.trim();
                if (!providerFullname) {
                    document.getElementById('providerFullnameError').textContent = 'Full name is required.';
                    valid = false;
                }
                const providerEmail = document.getElementById('providerEmail').value.trim();
                if (!providerEmail) {
                    document.getElementById('providerEmailError').textContent = 'Email is required.';
                    valid = false;
                } else if (!providerEmail.endsWith('@gmail.com')) {
                    document.getElementById('providerEmailError').textContent = 'Email must be a @gmail.com address.';
                    valid = false;
                }
                const providerPhone = document.getElementById('providerPhone').value.trim();
                if (!providerPhone) {
                    document.getElementById('providerPhoneError').textContent = 'Phone number is required.';
                    valid = false;
                } else if (!/^\d{10}$/.test(providerPhone)) {
                    document.getElementById('providerPhoneError').textContent = 'Phone number must be exactly 10 digits.';
                    valid = false;
                }
            }
            // Password validation (common for both)
            const password = document.getElementById('password').value;
            const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
            if (!password) {
                document.getElementById('passwordError').textContent = 'Password is required.';
                valid = false;
            } else if (!passwordRules.test(password)) {
                document.getElementById('passwordError').textContent = 'Password does not meet the requirements.';
                valid = false;
            }
            if (valid) {
                // Show terms step
                const signupFormElement = document.getElementById('signupForm');
                const termsStep = document.getElementById('termsStep');
                if (signupFormElement && termsStep) {
                    signupFormElement.style.display = 'none';
                    termsStep.style.display = 'block';
                }
            }
        };
    }
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    if(navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', function() {
            navbarMenu.classList.toggle('active');
        });
    }
    // User type button logic
    const btnCustomer = document.getElementById('btnCustomer');
    const btnProvider = document.getElementById('btnProvider');
    const userTypeInput = document.getElementById('userType');
    const customerFields = document.getElementById('customerFields');
    const providerFields = document.getElementById('providerFields');
    btnCustomer.addEventListener('click', function() {
        btnCustomer.classList.add('active');
        btnProvider.classList.remove('active');
        userTypeInput.value = 'customer';
        customerFields.style.display = '';
        providerFields.style.display = 'none';
    });
    btnProvider.addEventListener('click', function() {
        btnProvider.classList.add('active');
        btnCustomer.classList.remove('active');
        userTypeInput.value = 'provider';
        customerFields.style.display = 'none';
        providerFields.style.display = '';
    });
    // Portfolio file display
    const portfolioInput = document.getElementById('portfolio');
    const portfolioFiles = document.getElementById('portfolioFiles');
    if (portfolioInput) {
        portfolioInput.addEventListener('change', function() {
            portfolioFiles.innerHTML = '';
            for (const file of portfolioInput.files) {
                const div = document.createElement('div');
                div.textContent = file.name;
                portfolioFiles.appendChild(div);
            }
        });
    }
    // Terms step logic
    const acceptTerms = document.getElementById('acceptTerms');
    const termsNextBtn = document.getElementById('termsNextBtn');
    if (acceptTerms && termsNextBtn) {
        acceptTerms.addEventListener('change', function() {
            termsNextBtn.disabled = !acceptTerms.checked;
        });
        termsNextBtn.addEventListener('click', function() {
            document.getElementById('termsStep').style.display = 'none';
            document.getElementById('verifyStep').style.display = '';
            // Focus first code input
            document.querySelector('#verifyStep .code-input').focus();
        });
    }
    // Verification code logic
    const codeInputs = document.querySelectorAll('#verifyStep .code-input');
    const verifyBtn = document.getElementById('verifyBtn');
    if (codeInputs.length > 0 && verifyBtn) {
        codeInputs.forEach((input, idx) => {
            input.addEventListener('input', function() {
                if (input.value.length === 1 && idx < codeInputs.length - 1) {
                    codeInputs[idx + 1].focus();
                }
            });
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Backspace' && input.value === '' && idx > 0) {
                    codeInputs[idx - 1].focus();
                }
            });
        });
        verifyBtn.addEventListener('click', function() {
            let code = '';
            codeInputs.forEach(input => code += input.value);
            if (code.length !== 6 || !/^[0-9]{6}$/.test(code)) {
                document.getElementById('verifyError').textContent = 'Please enter a valid 6-digit code.';
                return;
            }
            // Simulate success
            document.getElementById('verifyStep').style.display = 'none';
            document.getElementById('successStep').style.display = '';
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const signupModal = document.getElementById('signupModal');
    const openSignupBtns = document.querySelectorAll('#openSignupModal, .btn-primary[href="signup.html"]');
    const closeSignupModal = document.getElementById('closeSignupModal');
    openSignupBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            signupModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    closeSignupModal.addEventListener('click', function() {
        signupModal.classList.remove('active');
        document.body.style.overflow = '';
    });
    signupModal.addEventListener('click', function(e) {
        if (e.target === signupModal || e.target.classList.contains('signup-modal-overlay')) {
            signupModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    // Login link navigation
    const formLoginLink = document.querySelector('.signup-form-side a[href="login.html"]');
    if (formLoginLink) {
        formLoginLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'login.html';
        });
    }
    var loginLink = document.getElementById('welcomeLoginLink');
    if (loginLink) {
        loginLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Hide the signup modal
            var signupModal = document.getElementById('signupModal');
            if (signupModal) signupModal.classList.remove('active');
            // Show the login modal (use 'active' class for consistency)
            var loginModal = document.getElementById('loginModal');
            if (loginModal) loginModal.classList.add('active');
            // Prevent background scroll
            document.body.style.overflow = 'hidden';
        });
    }
}); 