// Get the form element
const form = document.querySelector('form');

// Add an event listener to the form submission
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the input fields
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const email = document.getElementById('email');
  const queryType = document.querySelector('input[name="query-type"]:checked');
  const message = document.getElementById('message');
  const consent = document.getElementById('consent');

  // Validate the input fields
  const errors = [];
  if (firstName.value.trim() === '') {
    errors.push('First name is required');
  }
  if (lastName.value.trim() === '') {
    errors.push('Last name is required');
  }
  if (email.value.trim() === '') {
    errors.push('Email address is required');
  } else if (!validateEmail(email.value)) {
    errors.push('Invalid email address');
  }
  if (!queryType) {
    errors.push('Query type is required');
  }
  if (message.value.trim() === '') {
    errors.push('Message is required');
  }
  if (!consent.checked) {
    errors.push('Consent is required');
  }

  // Display error messages
  if (errors.length > 0) {
    const errorList = document.createElement('ul');
    errorList.classList.add('text-red-500', 'list-disc', 'ml-4');
    errors.forEach((error) => {
      const errorItem = document.createElement('li');
      errorItem.textContent = error;
      errorList.appendChild(errorItem);
    });
    const errorContainer = document.querySelector('.error-container');
    if (errorContainer) {
      errorContainer.replaceWith(errorList);
    } else {
      form.parentNode.insertBefore(errorList, form);
    }
  } else {
    // Send the form data to the server (replace with your API endpoint)
    const formData = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      queryType: queryType.id,
      message: message.value,
    };
    console.log(formData);
    // You can use the Fetch API or XMLHttpRequest to send the data to your server
    // For demonstration purposes, we'll just log the form data to the console
    alert('Form submitted successfully!');
  }
});

// Email validation function
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
