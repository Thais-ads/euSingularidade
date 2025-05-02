// Abre o WhatsApp no número principal
const whatsappBtn = document.getElementById('whatsappBtn');
whatsappBtn.addEventListener('click', () => {
  window.open('https://wa.me/5511977094841', '_blank');
});

// Validação simples de formulário
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !phone || !email || !message) {
    alert('Por favor, preencha todos os campos antes de enviar.');
    return;
  }

  // Aqui você pode implementar o envio dos dados via AJAX
  alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
  form.reset();
});
