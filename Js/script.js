document.addEventListener("DOMContentLoaded", function() {
    // Accordion FAQ
    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach(question => {
      question.addEventListener("click", function() {
        const answer = this.nextElementSibling;
        answer.style.display = (answer.style.display === "block") ? "none" : "block";
      });
    });
  
    // Integração com o formulário de contato (simulação de envio)
    const form = document.getElementById("contato-form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const nome = form.nome.value;
      // Aqui você pode integrar com uma API ou serviço backend conforme necessário
      alert("Obrigado " + nome + ", sua mensagem foi enviada!");
      form.reset();
    });
  
    // Slider dos Parceiros - loop infinito
    const slider = document.querySelector('.slider');
    let scrollAmount = 0;
    function slideLogos() {
      // Incrementa o scroll; ajuste a velocidade conforme necessário
      scrollAmount += 1;
      // Se atingir o final, reinicia para o início
      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
      }
      slider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
    // Intervalo para animação contínua
    setInterval(slideLogos, 20);
  });
  