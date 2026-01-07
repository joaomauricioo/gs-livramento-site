(function () {
  // ============================
  // CONFIGURAÇÃO DO WHATSAPP
  // ============================
  const WHATS_NUMBER = "557740097806"; // +55 (77) 4009-7806 (somente números)
  const WHATS_TEXT = encodeURIComponent(
    "Olá! Vim pelo site da GS Livramento e gostaria de um orçamento."
  );
  const WHATS_LINK = `https://wa.me/${WHATS_NUMBER}?text=${WHATS_TEXT}`;

  // ============================
  // ATUALIZA ANO NO RODAPÉ
  // ============================
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ============================
  // LINKS DO WHATSAPP
  // ============================
  const heroBtn = document.getElementById("btnWhatsHero");
  const contactBtn = document.getElementById("btnWhatsContact");
  const telLink = document.getElementById("telLink");

  [heroBtn, contactBtn, telLink].forEach((el) => {
    if (el) {
      el.setAttribute("href", WHATS_LINK);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    }
  });

  // ============================
  // MENU MOBILE
  // ============================
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
