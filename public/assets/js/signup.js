// JavaScript extracted from signup.html for signup modal and form

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.signup-form');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const address = document.getElementById('address');
    const phone = document.getElementById('phone');
    const btnCustomer = document.getElementById('btnCustomer');
    const btnProvider = document.getElementById('btnProvider');
    const userTypeInput = document.getElementById('userType');
    const customerFields = document.getElementById('customerFields');
    const providerFields = document.getElementById('providerFields');
    const providerName = document.getElementById('providerName');
    const providerEmail = document.getElementById('providerEmail');
    const providerAddress = document.getElementById('providerAddress');
    const portfolio = document.getElementById('portfolio');

    // User type toggle logic
    btnCustomer.addEventListener('click', function() {
        btnCustomer.classList.add('active');
        btnProvider.classList.remove('active');
        userTypeInput.value = 'customer';
        customerFields.style.display = '';
        providerFields.style.display = 'none';
        // Remove required from provider fields
        providerName.required = false;
        providerEmail.required = false;
        providerAddress.required = false;
        portfolio.required = false;
        // Add required to customer fields
        address.required = true;
        phone.required = true;
    });
    btnProvider.addEventListener('click', function() {
        btnProvider.classList.add('active');
        btnCustomer.classList.remove('active');
        userTypeInput.value = 'provider';
        customerFields.style.display = 'none';
        providerFields.style.display = '';
        // Add required to provider fields
        providerName.required = true;
        providerEmail.required = true;
        providerAddress.required = true;
        portfolio.required = true;
        // Remove required from customer fields
        address.required = false;
        phone.required = false;
    });

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

    const signupForm = document.getElementById('signupForm');
    const formStep = document.getElementById('formStep');
    const termsStep = document.getElementById('termsStep');
    const customerTerms = document.getElementById('customerTerms');
    const providerTerms = document.getElementById('providerTerms');
    const acceptTerms = document.getElementById('acceptTerms');
    const termsNextBtn = document.getElementById('termsNextBtn');
    const verifyStep = document.getElementById('verifyStep');
    const codeInputs = document.getElementById('codeInputs');
    const verifyBtn = document.getElementById('verifyBtn');
    const verifyError = document.getElementById('verifyError');
    const successStep = document.getElementById('successStep');

    // Show correct terms on step
    function showTermsStep() {
        formStep.style.display = 'none';
        termsStep.style.display = '';
        if (userTypeInput.value === 'customer') {
            customerTerms.style.display = '';
            providerTerms.style.display = 'none';
        } else {
            customerTerms.style.display = 'none';
            providerTerms.style.display = '';
        }
        acceptTerms.checked = false;
        termsNextBtn.disabled = true;
    }

    // Show verification step
    function showVerifyStep() {
        termsStep.style.display = 'none';
        verifyStep.style.display = '';
        verifyError.textContent = '';
        codeInputs.innerHTML = '';
        // Create 6 input boxes
        for (let i = 0; i < 6; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1;
            input.style.width = '2.2em';
            input.style.height = '2.2em';
            input.style.fontSize = '1.3em';
            input.style.textAlign = 'center';
            input.style.borderRadius = '6px';
            input.style.border = '1.5px solid #B1AB86';
            input.style.background = '#fff';
            input.style.margin = '0 0.1em';
            input.addEventListener('input', function() {
                if (this.value.length === 1 && i < 5) {
                    codeInputs.children[i+1].focus();
                }
                checkCodeFilled();
            });
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Backspace' && this.value === '' && i > 0) {
                    codeInputs.children[i-1].focus();
                }
            });
            codeInputs.appendChild(input);
        }
        codeInputs.children[0].focus();
        verifyBtn.disabled = true;
    }

    // Show success step
    function showSuccessStep() {
        verifyStep.style.display = 'none';
        successStep.style.display = '';
    }

    // Enable Next on terms accept
    acceptTerms.addEventListener('change', function() {
        termsNextBtn.disabled = !acceptTerms.checked;
    });

    // Next from terms to verify
    termsNextBtn.addEventListener('click', function() {
        showVerifyStep();
    });

    // Check if code is filled
    function checkCodeFilled() {
        const code = Array.from(codeInputs.children).map(inp => inp.value).join('');
        verifyBtn.disabled = !(code.length === 6 && /^\d{6}$/.test(code));
    }

    // Verify code
    verifyBtn.addEventListener('click', function() {
        const code = Array.from(codeInputs.children).map(inp => inp.value).join('');
        if (code.length === 6 && /^\d{6}$/.test(code)) {
            showSuccessStep();
        } else {
            verifyError.textContent = 'Please enter the 6-digit code.';
        }
    });

    // Hijack form submit for multi-step
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (password.value !== confirmPassword.value) {
            alert('Passwords do not match!');
            confirmPassword.focus();
            return;
        }
        if (userTypeInput.value === 'customer') {
            if (!address.value.trim()) {
                alert('Please enter your address.');
                address.focus();
                return;
            }
            if (!/^\d{10,15}$/.test(phone.value.trim())) {
                alert('Please enter a valid phone number (10-15 digits).');
                phone.focus();
                return;
            }
        } else if (userTypeInput.value === 'provider') {
            if (!providerName.value.trim()) {
                alert('Please enter your name.');
                providerName.focus();
                return;
            }
            if (!providerEmail.value.trim()) {
                alert('Please enter your email.');
                providerEmail.focus();
                return;
            }
            if (!providerAddress.value.trim()) {
                alert('Please enter your address.');
                providerAddress.focus();
                return;
            }
            if (portfolio.files.length === 0) {
                alert('Please upload at least one portfolio image.');
                portfolio.focus();
                return;
            }
        }
        // Password rules check
        const value = password.value;
        if (!(value.length >= 8 && /[A-Z]/.test(value) && /[a-z]/.test(value) && /\d/.test(value) && /[^A-Za-z0-9]/.test(value))) {
            alert('Password does not meet all requirements.');
            password.focus();
            return;
        }
        // If all validation passes, go to terms step
        showTermsStep();
    });
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
document.querySelector(".signup-form").addEventListener("submit", async function (e) {
    e.preventDefault();
    const form = new FormData(this);
  
    const res = await fetch("signup.php", {
      method: "POST",
      body: form
    });
  
    const text = await res.text();
    document.getElementById("response").innerText = text;
  
    if (text.includes("OTP sent")) {
      document.getElementById("otp-section").style.display = "block";
    }
  });
  
  async function verifyOTP() {
    const email = document.getElementById("email").value;
    const otp = document.getElementById("otp").value;
  
    const formData = new FormData();
    formData.append("email", email);
    formData.append("otp", otp);
  
    const res = await fetch("verify.php", {
      method: "POST",
      body: formData
    });
  
    const text = await res.text();
    document.getElementById("response").innerText = text;
  }
  