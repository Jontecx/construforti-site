/**
 * Construforti Materiais para Construcao - Catalogo & Conversao WhatsApp
 * Sem exibicao de precos: 100% dos orcamentos direcionados para wa.me/5511998631033
 */
(() => {
  "use strict";

  const WHATSAPP_NUMBER = "5511998631033";

  const PRODUCTS = [
    {
      id: "pedras-ensacadas",
      title: "Areia e Pedra Ensacada",
      category: "Areias e Pedras",
      categorySlug: "areias-pedras",
      stage: "inicio",
      stageLabel: "Início de Obra",
      badge: "OFERTA!",
      badgeTone: "orange",
      popularScore: 100,
      image: "assets/prod-pedras-ensacadas.webp",
      desc: "Sacos de 20kg práticos e limpos para reformas, pequenos reparos e concretagem rápida."
    },
    {
      id: "tubos-pvc",
      title: "Tubos de PVC — Soldável e Esgoto",
      category: "Hidráulica",
      categorySlug: "hidraulica",
      stage: "instalacoes",
      stageLabel: "Elétrica e Hidráulica",
      badge: "OFERTA!",
      badgeTone: "orange",
      popularScore: 98,
      image: "assets/prod-tubos-pvc.webp",
      desc: "Linha completa de tubos marrom soldável, branco para esgoto, joelhos, tês e conexões."
    },
    {
      id: "cimento-votoran",
      title: "Cimento 25kg (Votoran / CSN)",
      category: "Básico e Estrutural",
      categorySlug: "basico-estrutural",
      stage: "inicio",
      stageLabel: "Início de Obra",
      badge: "OFERTA!",
      badgeTone: "orange",
      popularScore: 99,
      image: "assets/prod-cimento.webp",
      desc: "Cimento CP II-E-32 para fundação, laje, alvenaria, contrapiso e reboco resistente."
    },
    {
      id: "parte-eletrica",
      title: "Parte Elétrica Completa",
      category: "Parte Elétrica",
      categorySlug: "eletrica",
      stage: "instalacoes",
      stageLabel: "Elétrica e Hidráulica",
      badge: "DESTAQUE",
      badgeTone: "purple",
      popularScore: 94,
      image: "assets/prod-eletrica.webp",
      desc: "Fios e cabos flexíveis, disjuntores DIN, quadros de distribuição, tomadas e interruptores."
    },
    {
      id: "caixa-dagua-fortlev",
      title: "Caixa D'Água Fortlev",
      category: "Hidráulica",
      categorySlug: "hidraulica",
      stage: "instalacoes",
      stageLabel: "Elétrica e Hidráulica",
      badge: "OFERTA!",
      badgeTone: "orange",
      popularScore: 96,
      image: "assets/prod-caixa-dagua.webp",
      desc: "Reservatórios Fortlev de 310L, 500L, 1.000L e maiores com tampa de encaixe seguro."
    },
    {
      id: "argamassas",
      title: "Argamassas AC1, AC2 e AC3",
      category: "Argamassas e Pintura",
      categorySlug: "argamassas-pintura",
      stage: "acabamento",
      stageLabel: "Acabamento",
      badge: "OFERTA!",
      badgeTone: "orange",
      popularScore: 95,
      image: "assets/prod-argamassas.webp",
      desc: "Argamassas colantes para áreas internas, fachadas externas, porcelanatos e pisos sobre pisos."
    },
    {
      id: "areia-pedra-granel",
      title: "Areias, Pedras, Pedrisco e Pó de Pedra",
      category: "Areias e Pedras",
      categorySlug: "areias-pedras",
      stage: "inicio",
      stageLabel: "Início de Obra",
      badge: "NA OBRA!",
      badgeTone: "purple",
      popularScore: 97,
      image: "assets/prod-areia-granel.webp",
      desc: "Fornecimento a granel (areia fina, média, grossa, brita 1, pedrisco e pó de pedra) em Atibaia."
    },
    {
      id: "massa-corrida",
      title: "Massa Corrida e Preparação",
      category: "Argamassas e Pintura",
      categorySlug: "argamassas-pintura",
      stage: "acabamento",
      stageLabel: "Acabamento",
      badge: "OFERTA!",
      badgeTone: "orange",
      popularScore: 90,
      image: "assets/prod-massa-corrida.webp",
      desc: "Massa corrida PVA e acrílica de fácil lixamento e acabamento liso para pintura perfeita."
    },
    {
      id: "isopor-eps",
      title: "Placas de Isopor EPS",
      category: "Cobertura e Isolamento",
      categorySlug: "cobertura-isolamento",
      stage: "inicio",
      stageLabel: "Início de Obra",
      badge: "OFERTA!",
      badgeTone: "orange",
      popularScore: 89,
      image: "assets/prod-isopor-eps.webp",
      desc: "Placas EPS para enchimento de laje, junta de dilatação e isolamento térmico/acústico."
    },
    {
      id: "tijolo-ceramico",
      title: "Tijolo Cerâmico e Blocos",
      category: "Básico e Estrutural",
      categorySlug: "basico-estrutural",
      stage: "inicio",
      stageLabel: "Início de Obra",
      badge: "DESTAQUE",
      badgeTone: "purple",
      popularScore: 93,
      image: "assets/prod-tijolos.webp",
      desc: "Tijolos cerâmicos baianos e blocos de concreto para alvenaria firme e alinhada."
    },
    {
      id: "laje-trelica",
      title: "Laje Treliça e Malha POP",
      category: "Básico e Estrutural",
      categorySlug: "basico-estrutural",
      stage: "inicio",
      stageLabel: "Início de Obra",
      badge: "SOB MEDIDA",
      badgeTone: "purple",
      popularScore: 92,
      image: "assets/prod-laje-trelica.webp",
      desc: "Vigas treliçadas, lajotas e telas soldadas Malha POP para pisos e coberturas."
    },
    {
      id: "telha-fibrocimento",
      title: "Telha Fibrocimento 2,44 x 1,10 (Brasilit)",
      category: "Cobertura e Isolamento",
      categorySlug: "cobertura-isolamento",
      stage: "acabamento",
      stageLabel: "Acabamento",
      badge: "DESTAQUE",
      badgeTone: "purple",
      popularScore: 91,
      image: "assets/prod-telhas.webp",
      desc: "Telhas onduladas Brasilit 5mm e 6mm com alta resistência e entrega programada."
    }
  ];

  const CATEGORY_ORDER = [
    { slug: "all", label: "Todos os Produtos" },
    { slug: "areias-pedras", label: "Areias e Pedras" },
    { slug: "basico-estrutural", label: "Básico e Estrutural" },
    { slug: "hidraulica", label: "Hidráulica" },
    { slug: "eletrica", label: "Parte Elétrica" },
    { slug: "argamassas-pintura", label: "Argamassas e Pintura" },
    { slug: "cobertura-isolamento", label: "Cobertura e Isolamento" }
  ];

  const state = {
    category: "all",
    stage: "all",
    search: "",
    sort: "featured",
    quoteIds: new Set()
  };

  function buildWhatsAppUrl(message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  function waIconSvg(size = 16) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.49 0 .14 5.34.14 11.91c0 2.1.55 4.15 1.59 5.96L0 24l6.31-1.65a11.86 11.86 0 0 0 5.75 1.47h.01c6.57 0 11.92-5.34 11.92-11.91 0-3.18-1.24-6.17-3.47-8.43ZM12.07 21.8a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.75.98 1-3.65-.24-.37a9.88 9.88 0 0 1-1.52-5.26c0-5.46 4.44-9.9 9.9-9.9 2.64 0 5.13 1.03 7 2.9a9.84 9.84 0 0 1 2.9 7c0 5.46-4.44 9.89-9.9 9.89Zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/></svg>`;
  }

  function renderCategories() {
    const listEl = document.getElementById("categoryList");
    const mobilePillsEl = document.getElementById("mobileCategoryPills");
    if (!listEl || !mobilePillsEl) return;

    listEl.innerHTML = "";
    mobilePillsEl.innerHTML = "";

    CATEGORY_ORDER.forEach((cat) => {
      const count = cat.slug === "all"
        ? PRODUCTS.length
        : PRODUCTS.filter((p) => p.categorySlug === cat.slug).length;

      const li = document.createElement("li");
      li.className = "category-item";
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `category-btn ${state.category === cat.slug ? "active" : ""}`;
      btn.innerHTML = `<span>${cat.label}</span><span class="category-count">(${count})</span>`;
      btn.addEventListener("click", () => {
        state.category = cat.slug;
        renderCategories();
        renderProducts();
      });
      li.appendChild(btn);
      listEl.appendChild(li);

      const pill = document.createElement("button");
      pill.type = "button";
      pill.className = `mobile-pill ${state.category === cat.slug ? "active" : ""}`;
      pill.textContent = `${cat.label} (${count})`;
      pill.addEventListener("click", () => {
        state.category = cat.slug;
        renderCategories();
        renderProducts();
      });
      mobilePillsEl.appendChild(pill);
    });
  }

  function getFilteredProducts() {
    const q = state.search.trim().toLowerCase();
    const filtered = PRODUCTS.filter((item) => {
      const matchCat = state.category === "all" || item.categorySlug === state.category;
      const matchStage = state.stage === "all" || item.stage === state.stage;
      const matchQuery = !q ||
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.stageLabel.toLowerCase().includes(q);
      return matchCat && matchStage && matchQuery;
    });

    if (state.sort === "az") {
      filtered.sort((a, b) => a.title.localeCompare(b.title, "pt-BR"));
    } else if (state.sort === "popular") {
      filtered.sort((a, b) => b.popularScore - a.popularScore);
    }
    return filtered;
  }

  function renderProducts() {
    const grid = document.getElementById("productsGrid");
    const countEl = document.getElementById("catalogCount");
    if (!grid || !countEl) return;

    const list = getFilteredProducts();
    countEl.textContent = list.length === 0
      ? "Nenhuma linha encontrada com os filtros atuais"
      : `Exibindo 1–${list.length} de ${PRODUCTS.length} linhas de produtos`;

    if (list.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <h3>Não encontrou o material exato na lista?</h3>
          <p>Trabalhamos com dezenas de outros itens do básico ao acabamento na loja física em Atibaia.</p>
          <a class="btn-whatsapp-lg" href="${buildWhatsAppUrl("Olá! Vim pelo site da Construforti e gostaria de consultar um material específico.")}" target="_blank" rel="noopener noreferrer">
            ${waIconSvg(18)} Consultar Vendedor no WhatsApp
          </a>
        </div>
      `;
      return;
    }

    grid.innerHTML = list.map((item) => {
      const isAdded = state.quoteIds.has(item.id);
      const waLink = buildWhatsAppUrl(
        `Olá! Vim pelo site da Construforti e gostaria de um orçamento para: *${item.title}*.`
      );
      return `
        <article class="product-card" data-product-id="${item.id}">
          <span class="card-ribbon ribbon-${item.badgeTone}">${item.badge}</span>
          <div class="card-image-wrap">
            <img src="${item.image}" alt="${item.title} — Construforti Atibaia" width="400" height="300" loading="lazy">
          </div>
          <div class="card-body">
            <span class="card-category-label">${item.category} • ${item.stageLabel}</span>
            <h3 class="card-title">${item.title}</h3>
            <p class="card-desc">${item.desc}</p>
            <div class="card-meta-row">
              <span class="card-quote-tag">Sob Consulta</span>
              <span class="card-stars" aria-label="Avaliação 5 de 5 estrelas">★★★★★</span>
            </div>
            <div class="card-actions">
              <a class="btn-card-whats" href="${waLink}" target="_blank" rel="noopener noreferrer" aria-label="Cotar ${item.title} no WhatsApp">
                ${waIconSvg(16)} Cotar no WhatsApp
              </a>
              <button type="button" class="btn-add-quote ${isAdded ? "added" : ""}" data-toggle-quote="${item.id}">
                ${isAdded ? "✓ Na Minha Lista de Orçamento" : "+ Adicionar à Lista"}
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");

    grid.querySelectorAll("[data-toggle-quote]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-toggle-quote");
        if (state.quoteIds.has(id)) {
          state.quoteIds.delete(id);
        } else {
          state.quoteIds.add(id);
        }
        renderProducts();
        updateQuoteBar();
      });
    });
  }

  function updateQuoteBar() {
    const bar = document.getElementById("quoteBar");
    const countSpan = document.getElementById("quoteCountText");
    const sendBtn = document.getElementById("quoteBarSend");
    const sidebarStageCta = document.getElementById("sidebarStageCta");

    const selected = PRODUCTS.filter((p) => state.quoteIds.has(p.id));
    if (bar && countSpan && sendBtn) {
      if (selected.length > 0) {
        bar.classList.add("visible");
        countSpan.textContent = `${selected.length} ${selected.length === 1 ? "item" : "itens"}`;
        const names = selected.map((s) => `- ${s.title}`).join("\n");
        sendBtn.href = buildWhatsAppUrl(
          `Olá! Vim pelo site da Construforti e quero cotar os seguintes materiais:\n${names}`
        );
      } else {
        bar.classList.remove("visible");
      }
    }

    if (sidebarStageCta) {
      if (selected.length > 0) {
        const names = selected.map((s) => s.title).join(", ");
        sidebarStageCta.href = buildWhatsAppUrl(
          `Olá! Quero orçamento pelo site para: ${names}.`
        );
      } else {
        const stageText = state.stage === "all"
          ? "materiais para minha obra"
          : `materiais da etapa: ${document.querySelector(".stage-btn.active")?.dataset.label || ""}`;
        sidebarStageCta.href = buildWhatsAppUrl(
          `Olá! Vim pelo site da Construforti e gostaria de um orçamento de ${stageText}.`
        );
      }
    }
  }

  function initFilters() {
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        state.search = e.target.value;
        renderProducts();
      });
    }

    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        state.sort = e.target.value;
        renderProducts();
      });
    }

    const stageTrackFill = document.getElementById("stageTrackFill");
    const stageWidths = { all: "100%", inicio: "40%", instalacoes: "70%", acabamento: "100%" };
    document.querySelectorAll(".stage-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".stage-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.stage = btn.dataset.stage || "all";
        if (stageTrackFill) {
          stageTrackFill.style.width = stageWidths[state.stage] || "100%";
        }
        renderProducts();
        updateQuoteBar();
      });
    });

    const clearBtn = document.getElementById("quoteBarClear");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        state.quoteIds.clear();
        renderProducts();
        updateQuoteBar();
      });
    }
  }

  function initFooterForm() {
    const form = document.getElementById("footerQuoteForm");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = (document.getElementById("footerName")?.value || "").trim();
      const neighborhood = (document.getElementById("footerNeighborhood")?.value || "").trim();
      const materials = (document.getElementById("footerMessage")?.value || "").trim();

      const lines = [
        "Olá, equipe Construforti! Vim pelo site e gostaria de um orçamento:",
        name ? `Nome: ${name}` : null,
        neighborhood ? `Bairro / Obra: ${neighborhood}` : null,
        materials ? `Lista de Materiais: ${materials}` : "Preciso de ajuda para cotar materiais."
      ].filter(Boolean);

      window.open(buildWhatsAppUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
    });
  }

  function initMobileMenu() {
    const toggle = document.getElementById("mobileMenuBtn");
    const nav = document.getElementById("mainNav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initLegalModals() {
    const modal = document.getElementById("legalModal");
    const modalTitle = document.getElementById("legalModalTitle");
    const modalBody = document.getElementById("legalModalBody");
    const closeBtn = document.getElementById("legalModalClose");
    if (!modal || !modalTitle || !modalBody || !closeBtn) return;

    const CONTENT = {
      privacidade: {
        title: "Política de Privacidade — Construforti",
        html: `
          <p>A <strong>Construforti Materiais para Construção LTDA</strong> (CNPJ 52.866.007/0001-94), localizada na Av. São João, 1830 - Jardim Brogota, Atibaia - SP, respeita a privacidade de todos os visitantes.</p>
          <p>Este site atua como vitrine institucional e catálogo digital para solicitação direta de orçamentos via WhatsApp oficial <strong>(11) 99863-1033</strong>. Não coletamos nem armazenamos dados bancários ou sensíveis neste ambiente.</p>
          <p>Ao clicar nos botões de orçamento e enviar sua lista pelo WhatsApp, seus dados de contato são utilizados exclusivamente para atendimento comercial, cálculo de frete e emissão de orçamento.</p>
        `
      },
      termos: {
        title: "Termos de Uso — Construforti",
        html: `
          <p>Este catálogo apresenta as principais linhas de materiais comercializadas pela <strong>Construforti Materiais Para Construção</strong> em Atibaia e região.</p>
          <p>Todos os valores, condições de pagamento, disponibilidade de estoque e prazos de entrega são informados diretamente por nossa equipe comercial via WhatsApp <strong>(11) 99863-1033</strong> ou presencialmente na loja.</p>
          <p>Imagens ilustrativas das marcas parceiras comercializadas em nossa unidade.</p>
        `
      }
    };

    document.querySelectorAll("[data-legal]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.getAttribute("data-legal");
        const entry = CONTENT[key];
        if (!entry) return;
        modalTitle.textContent = entry.title;
        modalBody.innerHTML = entry.html;
        modal.classList.add("open");
      });
    });

    const closeModal = () => modal.classList.remove("open");
    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderCategories();
    renderProducts();
    updateQuoteBar();
    initFilters();
    initFooterForm();
    initMobileMenu();
    initLegalModals();
  });
})();
