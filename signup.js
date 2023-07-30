const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const password = document.getElementById("password").value;
  const agreeTerms = document.getElementById("agreeTerms").checked;

  // Check if the user agreed to the terms and conditions
  if (!agreeTerms) {
    alert("Please agree to the terms and conditions.");
    return;
  }

  // Save user details to localStorage
  const userDetails = {
    fullName: fullName,
    email: email,
    phoneNumber: phoneNumber,
    password: password,
  };
  localStorage.setItem("userDetails", JSON.stringify(userDetails));

  // Redirect to dashboard.html after successful signup
  window.location.href = "dashboard.html";
});
