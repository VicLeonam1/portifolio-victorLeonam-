import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initGSAP() {
  // Hero Animations
  if (document.querySelector('.hero-title')) {
    gsap.from('.hero-title', { y: 50, opacity: 0, duration: 1, ease: 'power3.out' });
    gsap.from('.hero-subtitle', { y: 30, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out' });
    gsap.from('.hero-btn', { scale: 0.8, opacity: 0, duration: 0.5, delay: 0.6, ease: 'back.out(1.7)' });
    gsap.from('.hero-social a', { y: 20, opacity: 0, duration: 0.5, stagger: 0.1, delay: 0.8, ease: 'power2.out' });
  }

  // Sections Fade Up
  const sections = document.querySelectorAll('section:not(#inicio)');
  sections.forEach(sec => {
    const heading = sec.querySelector('h2');
    if (heading) {
      gsap.from(heading, {
        scrollTrigger: { trigger: sec, start: 'top 80%' },
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out'
      });
    }
  });

  // Services Stagger
  if (document.querySelector('.service-card')) {
    gsap.from('.service-card', {
  opacity: 0,
  immediateRender: false
});
  }

  // Process Stagger
  if (document.querySelector('.process-step')) {
    gsap.from('.process-step', {
      scrollTrigger: { trigger: '#processo', start: 'top 70%' },
      y: 40, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out'
    });
  }

  // Tools Stagger
  if (document.querySelector('.tool-item')) {
    gsap.from('.tool-item', {
      scrollTrigger: { trigger: '#ferramentas', start: 'top 80%' },
      scale: 0.5, opacity: 0, duration: 0.5, stagger: 0.05, ease: 'back.out(1.5)'
    });
  }
  
  // Testimonials Stagger
  if (document.querySelector('.testimonial-card')) {
    gsap.from('.testimonial-card', {
      scrollTrigger: { trigger: '#depoimentos', start: 'top 70%' },
      y: 30, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out'
    });
  }
}
