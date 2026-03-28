document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("whatsappForm");
  const subjectInput = form.subject;

  // Clear subject by default on page load
  subjectInput.value = "";

  // Check URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const service = urlParams.get("service");

  if (service) {
    // Only fill subject if ?service=ServiceName exists
    subjectInput.value = service;

    // Remove query parameter so refresh clears it
    const newURL =
      window.location.origin + window.location.pathname + "#contact-form";
    window.history.replaceState({}, document.title, newURL);

    // Scroll to form
    const formSection = document.querySelector(".contact-form");
    if (formSection) formSection.scrollIntoView({ behavior: "smooth" });
  }

  // WhatsApp form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const company = form.company.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    // Phone validation
    const phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(phone)) {
      alert("Please enter a valid phone number (10-15 digits).");
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Prepare WhatsApp message
    let whatsappMessage = `*Name:* ${name}%0A`;
    if (company) whatsappMessage += `*Company:* ${company}%0A`;
    whatsappMessage += `*Phone:* ${phone}%0A*Email:* ${email}%0A`;
    if (subject) whatsappMessage += `*Subject:* ${subject}%0A`;
    whatsappMessage += `*Message:* ${message}`;

    const whatsappNumber = "917083255495";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
  });
});
