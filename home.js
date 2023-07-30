     // For example, you can handle button clicks
     const signUpButton = document.querySelector('.btn-signup');
     const signInButton = document.querySelector('.btn-signin');
 
     signUpButton.addEventListener('click', () => {
       // Redirect to the sign up page when Sign Up button is clicked
       window.location.href = 'signup.html';
     });
 
     signInButton.addEventListener('click', () => {
       // Redirect to the sign in page when Sign In button is clicked
       window.location.href = 'signin.html';
     });