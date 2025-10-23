document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload

  const name = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const course = document.getElementById("course").value;
  const yearLevel = document.getElementById("yearLevel").value;
  const age = document.getElementById("age").value;

  // Simple validation
  if (!name || !email || !course || !yearLevel || !age) {
    alert("Please fill in all fields.");
    return;
  }

  // Display thank-you message
  const message = document.getElementById("message");
  message.textContent = ` Thank you for registering, ${name}!`;

  // Reset form fields
  document.getElementById("registrationForm").reset();
});
