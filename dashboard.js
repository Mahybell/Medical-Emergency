// Predefined user object with medical information

const body = document.querySelector("body"),
      sidebar = body.querySelector("body"),
      toggle = body.querySelector("toggle"),


      toggle.addEventLIstener("click", () =>{
        sidebar.classList.toggle("close")

      });
// const user = {
//     name: 'John Doe',
//     age: 35,
//     gender: 'Male',
//     email: 'john.doe@example.com',
//     phone: '+234 8000000000',
//     bloodType: 'O+',
//     allergies: 'None',
//     medicalHistory: 'Lorem ipsum dolor sit amet...'
//   };
  
//   // Function to update user profile fields
//   function updateUserProfile() {
//     document.getElementById('userName').textContent = user.name;
//     document.getElementById('userAge').textContent = user.age;
//     document.getElementById('userGender').textContent = user.gender;
//     document.getElementById('userEmail').textContent = user.email;
//     document.getElementById('userPhone').textContent = user.phone;
  
//     // Set the input fields in the form with user data
//     document.getElementById('bloodType').value = user.bloodType;
//     document.getElementById('allergies').value = user.allergies;
//     document.getElementById('medicalHistory').value = user.medicalHistory;
//   }
  
//   // Call the function to populate the user profile fields with the initial user data
//   updateUserProfile();
  
//   // Function to handle form submission
//   function handleFormSubmission(event) {
//     event.preventDefault();
  
//     // Update the user object with the new medical information from the form
//     user.bloodType = document.getElementById('bloodType').value;
//     user.allergies = document.getElementById('allergies').value;
//     user.medicalHistory = document.getElementById('medicalHistory').value;
  
//     // Call the function again to update the user profile fields with the new data
//     updateUserProfile();
//   }
  
//   // Add event listener to the form to handle submission
//   const medicalForm = document.getElementById('medicalForm');
//   medicalForm.addEventListener('submit', handleFormSubmission);
