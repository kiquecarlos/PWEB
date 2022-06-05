function submitContactForm(event) {
  const contactForm = {
    name: document.getElementById("contactName").value,
    email: document.getElementById("contactEmail").value,
    phone: document.getElementById("contactPhone").value,
    message: document.getElementById("contactMessage").value,
  };

  const whatsAppMsg = `
  Oi me Chamo ${contactForm.name},
  Meu E-mail é ${contactForm.email},
  meu telefone para contato é ${contactForm.phone}
  e gostaria de te passar a seguinte Mensagem
  ${contactForm.message}`;

  const linkWhatsApp = `https://api.whatsapp.com/send?phone=5515997945996&text=${whatsAppMsg}`;

  document.getElementById("contactForm").reset();

  window.open(linkWhatsApp, "_blank").focus();
}
