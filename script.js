// Small helper script
document.getElementById('year').textContent = new Date().getFullYear();

// Optional: intercept contact form and show a message
const form = document.getElementById('contact-form');
if (form){
  form.addEventListener('submit', (e) => {
    // If you're using Formspree, allow default submission.
    // You could implement AJAX here if you prefer.
    setTimeout(()=>alert('Thanks — your message was sent.'), 400);
  });
}
