// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Parallax effect (optimized with requestAnimationFrame)
let lastScrollY = 0;
let ticking = false;

window.addEventListener("scroll", () => {
  lastScrollY = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const hero = document.querySelector(".hero-content");
      hero.style.transform = `translateY(${lastScrollY * 0.4}px)`;
      ticking = false;
    });
    ticking = true;
  }
});

// Rain effect
const rainContainer = document.querySelector(".rain");

function createRainDrops() {
  rainContainer.innerHTML = ""; // clear old drops
  const numberOfDrops = Math.floor(window.innerWidth / 10);

  for (let i = 0; i < numberOfDrops; i++) {
    const drop = document.createElement("div");
    drop.classList.add("rain-drop");

    // Randomize raindrop properties
    drop.style.left = Math.random() * window.innerWidth + "px";
    drop.style.animationDuration = 0.5 + Math.random() * 1.5 + "s"; // varied fall speeds
    drop.style.animationDelay = Math.random() * 2 + "s";
    drop.style.opacity = Math.random(); // some faint drops

    rainContainer.appendChild(drop);
  }
}

// Run once on load + update on resize
createRainDrops();
window.addEventListener("resize", createRainDrops);

// Page fade-in effect
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
