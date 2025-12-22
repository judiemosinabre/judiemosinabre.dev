// Initialize EmailJS
(function () {
  emailjs.init("Yc6svpYKqrdG7bGVg"); // your public key
})();

// Form submit handler
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("form-name").value.trim();
  const email = document.getElementById("form-email").value.trim();
  const message = document.getElementById("form-message").value.trim();
  const feedback = document.getElementById("form-feedback");

  feedback.textContent = "";
  feedback.className = "form-feedback";

  if (!name || !email || !message) {
    feedback.textContent = "Please fill in all fields.";
    feedback.classList.add("error");
    return;
  }

  // 🔥 MUST MATCH TEMPLATE VARIABLES EXACTLY
  const templateParams = {
    name: name,       // matches {{name}}
    email: email,     // matches {{email}} (To Email)
    message: message  // safe even if unused
  };

  emailjs
    .send(
      "service_uhey5sb",
      "template_rz1lusb",
      templateParams
    )
    .then(() => {
      feedback.textContent = "Message sent successfully! 💌";
      feedback.classList.add("success");
      document.getElementById("contact-form").reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      feedback.textContent = "Failed to send message. Please try again.";
      feedback.classList.add("error");
    });
});
