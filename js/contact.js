const form = document.getElementById("whatsappForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent default form submission

  const name = form.name.value.trim();
  const company = form.company.value.trim();
  const phone = form.phone.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  // Phone validation: only digits, min 10
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

  // WhatsApp number (replace with your number)
  const whatsappNumber = "917083255495";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Open WhatsApp
  window.open(whatsappURL, "_blank");
});
