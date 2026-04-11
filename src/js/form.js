export function initForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnIcon = document.getElementById('btn-icon');

  if (!form) return;

  form.addEventListener('submit', () => {
    
    // Submitting state
    submitBtn.disabled = true;
    btnText.innerText = 'Enviando...';
    btnIcon.innerHTML = '<div class="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>';
    
    setTimeout(() => {
      // Success state
      btnText.innerText = 'Enviado com sucesso';
      btnIcon.innerHTML = '<i data-lucide="check-circle-2" class="w-5 h-5"></i>';
      if (window.lucide) window.lucide.createIcons();
      form.reset();
      
      setTimeout(() => {
        // Idle state
        submitBtn.disabled = false;
        btnText.innerText = 'Enviar Mensagem';
        btnIcon.innerHTML = '<i data-lucide="send" class="w-5 h-5"></i>';
        if (window.lucide) window.lucide.createIcons();
      }, 3000);
    }, 1500);
  });
}
