const stack = document.querySelector(".history__images");
let intervalId;
let isHovering = false;

document.querySelector(".history-card").classList.add("active");

// Funkce pro otočení cards
function SwapCards() {
  const cards = document.querySelectorAll(".history-card");
  const actual = document.querySelector(".history-card.active");

  let next = actual.nextElementSibling;

  if (!next || !next.classList.contains("history-card")) {
    next = cards[0];
  }

  actual.classList.remove("active");
  next.classList.add("active");

  stack.appendChild(actual);
}

function stopSwapping() {
  clearInterval(intervalId);
}

function startSwapping() {
  if (isHovering) return;
  intervalId = setInterval(SwapCards, 3000);
}

startSwapping();

stack.addEventListener("mouseenter", () => {
  isHovering = true;
  stopSwapping();
});

stack.addEventListener("mouseleave", () => {
  isHovering = false;
  startSwapping();
});
