import { initMenu } from './menu.js';
import { initProjects } from './projects.js';
import { initGSAP } from './gsapAnimations.js';
import { initCursor } from './cursor.js';
import { initFAQ } from './faq.js';
import "../style.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener('DOMContentLoaded', () => {
  
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');

    initGSAP();

    // 🔥 CORREÇÃO CRÍTICA
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

  }, 2000);

  // Progress Bar
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) progressBar.style.width = scrolled + "%";
  });

  initMenu();
  initProjects();
  initCursor();
  initFAQ();
  
  if (window.lucide) {
    window.lucide.createIcons();
  }
});