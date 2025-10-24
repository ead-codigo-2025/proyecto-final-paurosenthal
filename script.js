// Filtro de categorías en Proyectos
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-btn");
  const cards = document.querySelectorAll(".card");

  if (!tabs.length) return;

  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      // activar pestaña
      tabs.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const cat = card.getAttribute("data-cat");
        const show = (filter === "all" || cat === filter);
        card.style.display = show ? "block" : "none";
      });
    });
  });
});