function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
  
    // Simple validation
    if (username === 'user' && password === 'pass') {
      errorMessage.textContent = 'Login successful!';
      errorMessage.style.color = 'green';
    } else {
      errorMessage.textContent = 'Invalid username or password.';
      errorMessage.style.color = 'red';
    }
  }
  