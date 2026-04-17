const ALL_PROJECTS =
  [
  {
    id: 1,
    name: "Mendonça & Associados",
    type: "Landing Page",
    image: "/src/assets/img/mendonça-advocacia.png",
    description: "Uma landing page de alta conversão desenvolvida para uma empresa de advocacia. Focada em velocidade de carregamento e otimização de SEO.",
    tech: ["HTML", "CSS", "JS", "GSAP", "Tailwind"],
    github: "#",
    demo: "https://mendoncaadvocacia.netlify.app/"
  },

  {
    id: 2,
    name: "L'ÉLÉGANCE",
    type: "Sites Institucionais",
    image: "/src/assets/img/l-elegance.png",
    description: "Site institucional completo para um restaurante de alta gastronomia, com cardápio digital, reservas online e integração com redes sociais.",
    tech: ["HTML", "Tailwind", "JS"],
    github: "#",
    demo: "https://lelegancerestaurente.netlify.app/"
  },

  {
    id: 3,
    name: "Link na Bio - Sarah Fitness",
    type: "Outros",
    image: "/src/assets/img/sarah-fitness.png",
    description: "Página de links otimizada para mobile, com carregamento instantâneo e design personalizado para influenciadores.",
    tech: ["HTML", "CSS"],
    github: "#",
    demo: "https://sarahfitness.netlify.app/"
  },

  {
    id: 4,
    name: "Nexus Agência digital",
    type: "Landing Page",
    image: "/src/assets/img/nexus-agencia-digital.png",
    description: "Site desenvolvido para uma agência digital premium, criado para transmitir modernidade, autoridade e sofisticação. O projeto combina design estratégico, visual impactante e navegação fluida para apresentar serviços, fortalecer a marca e gerar novas oportunidades de negócio.",
    tech: ["JS", "Chart.js", "Tailwind"],
    github: "#",
    demo: "https://nexusagenciadigital.netlify.app/"
  },

  {
    id: 5,
    name: "DevPro",
    type: "Sites Institucionais",
    image: "/src/assets/img/devpro.png",
    description: "Loja virtual completa com carrinho de compras, integração de pagamentos e painel administrativo.",
    tech: ["HTML", "JS", "CSS"],
    github: "#",
    demo: "#"
  },

  {
    id: 6,
    name: "Lumina Sorriso",
    type: "Sites Institucionais",
    image: "/src/assets/img/lumina-sorriso.png",
    description: "Site desenvolvido para uma clínica odontológica premium, criado para transmitir confiança, profissionalismo e bem-estar. O projeto une design elegante, navegação intuitiva e comunicação estratégica para valorizar os serviços, destacar a tecnologia utilizada e proporcionar uma experiência acolhedora desde o primeiro contato.",
    tech: ["HTML", "GSAP", "Tailwind"],
    github: "#",
    demo: "https://luminasorriso.netlify.app/"
  },
  {
    id: 7,
    name: "NovaSolar",
    type: "Sites Institucionais",
    image: "/src/assets/img/nova-solar.png",
    description: "Site desenvolvido para uma empresa de energia solar, criado para transmitir inovação, economia e sustentabilidade. O projeto une design moderno, comunicação estratégica e navegação intuitiva para destacar os benefícios da energia solar, gerar confiança e converter visitantes em novos clientes.",
    tech: ["HTML", "GSAP", "Tailwind"],
    github: "#",
    demo: "https://novasolar.netlify.app/"
  }
]

const ITEMS_PER_PAGE = 3;
let currentPage = 1;
let activeFilter = "Todos";
let searchQuery = "";

export function initProjects() {
  if (!document.getElementById('projects-grid')) return;
  
  renderFilters();
  setupSearch();
  updateProjects();
  setupModal();
}

function updateProjects() {
  const filtered = ALL_PROJECTS.filter(p => {
    const matchFilter = activeFilter === "Todos" || p.type === activeFilter;
    const searchLower = searchQuery.toLowerCase();
    const matchSearch = p.name.toLowerCase().includes(searchLower) || p.type.toLowerCase().includes(searchLower) || p.tech.some(t => t.toLowerCase().includes(searchLower));
    return matchFilter && matchSearch;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE) || 1;
  if (currentPage > totalPages) currentPage = 1;

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const current = filtered.slice(start, start + ITEMS_PER_PAGE);

  renderGrid(current);
  renderPagination(totalPages);
}

function renderGrid(projects) {
  const grid = document.getElementById('projects-grid');

  // anima saída
  grid.classList.add('opacity-0', 'translate-y-5');

  setTimeout(() => {
    grid.innerHTML = '';

    if (projects.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full text-center py-20 text-white/50">
          <i data-lucide="search" class="w-12 h-12 mx-auto mb-4 opacity-20"></i>
          <p>Nenhum projeto encontrado.</p>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();

      grid.classList.remove('opacity-0', 'translate-y-5');
      return;
    }

    projects.forEach((p, index) => {
      const div = document.createElement('div');

      div.className = `
        group relative rounded-2xl overflow-hidden aspect-[4/3]
        cursor-pointer project-card
        opacity-0 translate-y-8 scale-95
        transition-all duration-700
      `;

      div.onclick = () => openModal(p);

      div.innerHTML = `
        <img src="${p.image}" alt="${p.name}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div class="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <div class="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span class="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">${p.type}</span>
            <h3 class="text-2xl font-display text-white mb-4">${p.name}</h3>

            <div class="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              <span class="text-white/80 text-sm">Ver detalhes</span>

              <div class="w-10 h-10 rounded-full bg-primary text-black flex items-center justify-center box-glow">
                <i data-lucide="arrow-right" class="w-5 h-5"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
      `;

      grid.appendChild(div);

      // entrada individual
      setTimeout(() => {
        div.classList.remove('opacity-0', 'translate-y-8', 'scale-95');
      }, index * 120);
    });

    if (window.lucide) window.lucide.createIcons();

    grid.classList.remove('opacity-0', 'translate-y-5');
  }, 250);
}

function renderFilters() {
  const filtersContainer = document.getElementById('project-filters');
  const filters = ["Todos", "Landing Page", "Sites Institucionais", "UI/Front-end", "Outros"];
  
  filtersContainer.innerHTML = '';
  filters.forEach(f => {
    const btn = document.createElement('button');
    btn.className = `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === f ? 'bg-primary text-black box-glow' : 'bg-dark-surface text-white/70 hover:text-primary border border-white/10 hover:border-primary/50'}`;
    btn.innerText = f;
    btn.onclick = () => {
      activeFilter = f;
      currentPage = 1;
      renderFilters();
      updateProjects();
    };
    filtersContainer.appendChild(btn);
  });
}

function setupSearch() {
  const input = document.getElementById('project-search');
  input.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    currentPage = 1;
    updateProjects();
  });
}

function renderPagination(totalPages) {
  const container = document.getElementById('project-pagination');
  if (totalPages <= 1) {
    container.innerHTML = '';
    return;
  }

  let html = `
    <button onclick="window.changePage(1)" ${currentPage === 1 ? 'disabled' : ''} class="hidden sm:block px-4 py-2 rounded-lg border border-white/10 text-white/70 hover:text-primary hover:border-primary disabled:opacity-50 transition-colors text-sm uppercase tracking-wider">Primeira</button>
    <button onclick="window.changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''} class="px-4 py-2 rounded-lg border border-white/10 text-white/70 hover:text-primary hover:border-primary disabled:opacity-50 transition-colors text-sm uppercase tracking-wider">Anterior</button>
    <div class="flex gap-2 mx-2 sm:mx-4">
  `;

  for (let i = 1; i <= totalPages; i++) {
    html += `<button onclick="window.changePage(${i})" class="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold transition-all ${currentPage === i ? 'bg-primary text-black box-glow' : 'border border-white/10 text-white/70 hover:border-primary hover:text-primary'}">${i}</button>`;
  }

  html += `
    </div>
    <button onclick="window.changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''} class="px-4 py-2 rounded-lg border border-white/10 text-white/70 hover:text-primary hover:border-primary disabled:opacity-50 transition-colors text-sm uppercase tracking-wider">Próxima</button>
    <button onclick="window.changePage(${totalPages})" ${currentPage === totalPages ? 'disabled' : ''} class="hidden sm:block px-4 py-2 rounded-lg border border-white/10 text-white/70 hover:text-primary hover:border-primary disabled:opacity-50 transition-colors text-sm uppercase tracking-wider">Última</button>
  `;

  container.innerHTML = html;
}

window.changePage = (page) => {
  currentPage = page;
  updateProjects();
  document.getElementById('projetos').scrollIntoView({ behavior: 'smooth' });
};

function setupModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close');
  
  closeBtn.onclick = closeModal;
  modal.onclick = (e) => {
    if (e.target === modal) closeModal();
  };
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(project) {
  const modal = document.getElementById('project-modal');
  document.getElementById('modal-image').src = project.image;
  document.getElementById('modal-type').innerText = project.type;
  document.getElementById('modal-title').innerText = project.name;
  document.getElementById('modal-desc').innerText = project.description;
  
  const techContainer = document.getElementById('modal-tech');
  techContainer.innerHTML = project.tech.map(t => `<span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/80">${t}</span>`).join('');
  
  document.getElementById('modal-demo').href = project.demo;
  document.getElementById('modal-github').href = project.github;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}
