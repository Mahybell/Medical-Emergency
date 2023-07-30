// Get the eye symbol and password input elements
const eyeIcon = document.querySelector('.toggle-password');
const passwordInput = document.getElementById('password');

// Toggle the password visibility when the eye symbol is clicked
eyeIcon.addEventListener('click', function () {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
  //  // Save user details to localStorage
  //  const userDetails = {
  //   email: email,
  //   password: password,
  // };
  // localStorage.setItem("userDetails", JSON.stringify(userDetails));

  // // Redirect to dashboard.html after successful signup
  // window.location.href = "dashboard.html";
});