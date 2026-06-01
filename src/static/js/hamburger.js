// hamburger.js
// Připoj tento skript těsně před </body> nebo jako type="module"

(function () {
  const btn = document.querySelector(".hamburger-btn");
  const nav = document.querySelector(".hamburger-nav");
  if (!btn || !nav) return;

  let isOpen = false;

  function open() {
    isOpen = true;
    nav.classList.add("is-open");
    btn.classList.add("is-open");
    btn.setAttribute("aria-expanded", "true");
    nav.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function close() {
    isOpen = false;
    nav.classList.remove("is-open");
    btn.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
    nav.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  btn.addEventListener("click", () => (isOpen ? close() : open()));

  // zavřít přes Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen) close();
  });

  // zavřít kliknutím na link v menu
  nav.querySelectorAll(".menu__item").forEach((link) => {
    link.addEventListener("click", close);
  });
})();
