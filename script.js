
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Perform form validation (optional)
  if (name.trim() === '' || email.trim() === '') {
      alert('Please fill in the required fields (Name and Email).');
      return;
  }

  // Your form submission code here (e.g., send data to a server)
  // For this example, we'll simply display a success message:
  alert(`Form submitted successfully!\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);

  // Reset the form after submission (optional)
  document.getElementById('contact-form').reset();
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Add your form submission code here (e.g., sending the form data to a server or displaying a success message).
  alert('Form submitted successfully!');
  
  // Scroll back to the top of the page
  document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
});

