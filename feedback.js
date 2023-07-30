// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
  
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const feedback = document.getElementById('feedback').value;
  
    // Do something with the form data (e.g., send it to the server)
    console.log('Form submitted:');
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Rating:', rating);
    console.log('Feedback:', feedback);
  
    // Clear form fields after submission
    document.getElementById('fullName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('rating').selectedIndex = 0;
    document.getElementById('feedback').value = '';
  }
  
  // Add event listener to the form submit button
  const submitButton = document.querySelector('button[type="submit"]');
  submitButton.addEventListener('click', handleSubmit);
  