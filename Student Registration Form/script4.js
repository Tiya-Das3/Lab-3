document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear previous error messages
    let hasError = false;

    // Get form values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Validate username
    if (!username) {
        alert('Username is required.');
        hasError = true;
    }
    
    // Validate email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    if (!email) {
        alert('Email is required.');
        hasError = true;
    } else if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        hasError = true;
    }

    // Validate phone number (numeric, 10 digits)
    const phonePattern = /^\d{10}$/;
    if (!phone) {
        alert('Phone number is required.');
        hasError = true;
    } else if (!phonePattern.test(phone)) {
        alert('Phone number must be 10 digits.');
        hasError = true;
    }

    // Validate password (at least 7 characters, one uppercase, one digit, one special character)
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@]).{7,}$/;
    if (!password) {
        alert('Password is required.');
        hasError = true;
    } else if (!passwordPattern.test(password)) {
        alert('Password must be at least 7 characters long and contain one uppercase letter, one digit, and one special character (&, $, #, @).');
        hasError = true;
    }

    // Confirm passwords match
    if (!confirmPassword) {
        alert('Confirm Password is required.');
        hasError = true;
    } else if (password !== confirmPassword) {
        alert('Passwords do not match.');
        hasError = true;
    }

    // If no errors, show confirmation box
    if (!hasError) {
        if (confirm('Form submitted successfully! Do you want to proceed?')) {
            // Code to handle form submission can go here
            alert('Form submission confirmed.');
        } else {
            alert('Form submission canceled.');
        }
    }
});

