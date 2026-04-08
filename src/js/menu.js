export function initMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const links = menu ? menu.querySelectorAll('.mobile-link') : [];
  const navbar = document.getElementById('navbar');

  let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  // 🔥 adiciona blur quando sai do topo
  if (currentScroll > 10) {
    navbar.classList.add('nav-scrolled');
  } else {
    navbar.classList.remove('nav-scrolled');
  }

  // 🔥 esconder quando desce / mostrar quando sobe
  if (currentScroll > lastScroll && currentScroll > 100) {
    navbar.classList.add('nav-hidden'); // descendo
  } else {
    navbar.classList.remove('nav-hidden'); // subindo
  }

  lastScroll = currentScroll;
});

  // 📱 MENU MOBILE
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      menu.classList.toggle('flex');

      if (!menu.classList.contains('hidden')) {
        menu.style.opacity = '0';
        menu.style.transform = 'translateY(-20px)';
        document.body.style.overflow = 'hidden';

        setTimeout(() => {
          menu.style.opacity = '1';
          menu.style.transform = 'translateY(0)';
        }, 10);
      } else {
        document.body.style.overflow = '';
      }
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
        document.body.style.overflow = '';
      });
    });
  }
}