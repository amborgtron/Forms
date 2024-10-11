const myForm = document.getElementById("myForm");
const inputField = document.getElementById("inputField");

function retrieve(event) {
        // Retrieve the input field value
  const inputContent = inputField.value;
      // JavaScript code for form validation
  // Regular expression pattern for alphanumeric input
   // Check if the input value matches the pattern
  if (/\W/.test(inputContent)) {
  // Invalid input: display error message
    alert("EROOR");
    	// Prevent form from submitting
    event.preventDefault();
  }
  else {
    // Valid input: display confirmation and submit the form
    alert("Good Job")
  }
}

myForm.addEventListener('submit', retrieve);
