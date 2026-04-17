import emailjs from '@emailjs/browser';

export function initForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnIcon = document.getElementById('btn-icon');
  const PUBLIC_KEY = "54bXIIwr3-2Ag69Ph";
const SERVICE_ID = "service_x7tulk4";
const TEMPLATE_ID = "template_3sjfkkf";


  if (!form) return;

  emailjs.init(PUBLIC_KEY); // <-- coloca aqui

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    submitBtn.disabled = true;
    btnText.innerText = 'Enviando...';
    btnIcon.innerHTML = '<div class="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form)
      .then(() => {
        btnText.innerText = 'Enviado com sucesso';
        btnIcon.innerHTML = '<i data-lucide="check-circle-2" class="w-5 h-5"></i>';
        if (window.lucide) window.lucide.createIcons();

        form.reset();

        //redirecionamento para a página de agradecimento
        setTimeout(() => {
          window.location.href = '/html/obrigado.html';
        }, 2000);
      })
      .catch(() => {
        btnText.innerText = 'Erro ao enviar';
        btnIcon.innerHTML = '<i data-lucide="alert-circle" class="w-5 h-5"></i>';
        if (window.lucide) window.lucide.createIcons();
      })
      .finally(() => {
        submitBtn.disabled = false;

      });
  });
}