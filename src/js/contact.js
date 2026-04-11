
import { initCursor } from './cursor.js';
import { initForm } from './form.js';

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');
  }, 1000);

  initCursor();
  initForm();

  if (window.lucide) {
    window.lucide.createIcons();
  }
});
