// Get the form
const form = document.getElementById('registrationForm');

// When form is submitted
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop form from submitting
    
    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Get error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    
    // Clear previous errors
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
    
    // Check if name is empty
    if (name === '') {
        nameError.textContent = 'Please enter your name';
        return;
    }
    
    // Check if email is empty
    if (email === '') {
        emailError.textContent = 'Please enter your email';
        return;
    }
    
    // Check if email has @ using match
    if (!email.match(/@/)) {
        emailError.textContent = 'Email must have @';
        return;
    }
    
    // Check if email format is valid using regex
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailError.textContent = 'Please enter a valid email';
        return;
    }
    
    // Check if password is empty
    if (password === '') {
        passwordError.textContent = 'Please enter a password';
        return;
    }
    
    // Check if password is too short
    if (password.length < 6) {
        passwordError.textContent = 'Password must be 6 characters or more';
        return;
    }
    
    // Check if password has at least one letter using match
    if (!password.match(/[a-zA-Z]/)) {
        passwordError.textContent = 'Password must include at least one letter';
        return;
    }
    
    // Check if password has at least one number using match
    if (!password.match(/[0-9]/)) {
        passwordError.textContent = 'Password must include at least one number';
        return;
    }
    
    // Check if passwords match
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match';
        return;
    }
    
    // If everything is OK, show success
    alert('Registration successful!\\nName: ' + name + '\\nEmail: ' + email);
    form.reset();
});