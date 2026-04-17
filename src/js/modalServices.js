export function initModal() {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modalContent");
  const closeModal = document.getElementById("closeModal");

  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalFeatures = document.getElementById("modalFeatures");
  const modalPrice = document.getElementById("modalPrice");
  const whatsappBtn = document.getElementById("whatsappBtn");

  if (!modal) return; // evita erro se não existir na página

  const phone = "5591992179973";

  const servicesData = {
  landing: {
    title: "Landing Pages",
    description: "Páginas criadas estrategicamente para converter visitantes em clientes.",
    price: "R$ 300 - R$ 750",
    features: [
      "Alta conversão",
      "Integração com WhatsApp",
      "SEO básico",
      "Carregamento rápido",
      "Design profissional"
    ]
  },
  institucional: {
    title: "Sites Institucionais",
    description: "Sites completos para empresas que querem autoridade online.",
    price: "R$ 600 - R$ 1200",
    features: [
      "Até 5 páginas",
      "Design moderno",
      "SEO otimizado",
      "Responsivo",
      "Formulário de contato"
    ]
  },
  bio: {
    title: "Link na Bio",
    description: "Página otimizada para redes sociais com todos os seus links.",
    price: "R$ 100 - R$ 250",
    features: [
      "Design personalizado",
      "Links ilimitados",
      "Carregamento rápido"
    ]
  },
  frontend: {
    title: "Interfaces Front-End",
    description: "Interfaces modernas para sistemas web.",
    price: "Sob orçamento",
    features: [
      "Código limpo",
      "Componentização",
      "Alta performance"
    ]
  },
  performance: {
    title: "Otimização de Performance",
    description: "Seu site muito mais rápido e otimizado.",
    price: "R$ 200 - R$ 500",
    features: [
      "Melhoria PageSpeed",
      "Otimização de imagens",
      "Redução de scripts"
    ]
  },
  responsivo: {
    title: "Responsividade",
    description: "Seu site funcionando perfeitamente em qualquer tela.",
    price: "R$ 150 - R$ 400",
    features: [
      "Mobile first",
      "Compatível com tablets",
      "UX melhorada"
    ]
  },
  animacoes: {
    title: "Animações e Interações",
    description: "Experiências visuais modernas e envolventes.",
    price: "R$ 250 - R$ 600",
    features: [
      "GSAP",
      "Microinterações",
      "Transições suaves"
    ]
  }
};

  document.querySelectorAll(".open-modal").forEach(button => {
    button.addEventListener("click", () => {
      const service = button.getAttribute("data-service");
      const data = servicesData[service];

      if (!data) return;

      modalTitle.textContent = data.title;
      modalDescription.textContent = data.description;
      modalPrice.textContent = data.price;

      modalFeatures.innerHTML = data.features
        .map(item => `<li>• ${item}</li>`)
        .join("");

      const message = `Olá! Tenho interesse em ${data.title} (${data.price}).`;
      whatsappBtn.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

      modal.classList.remove("pointer-events-none");

      // animação GSAP
      if (window.gsap) {
        gsap.to(modal, { opacity: 1, duration: 0.3 });
        gsap.to(modalContent, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out"
        });
      } else {
        modal.style.opacity = 1;
        modalContent.style.opacity = 1;
      }
    });
  });

  function close() {
    if (window.gsap) {
      gsap.to(modal, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => modal.classList.add("pointer-events-none")
      });

      gsap.to(modalContent, {
        opacity: 0,
        scale: 0.9,
        y: 50,
        duration: 0.3
      });
    } else {
      modal.style.opacity = 0;
      modal.classList.add("pointer-events-none");
    }
  }

  closeModal.addEventListener("click", close);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });
}