// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Optional parallax effect
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero-content");
  let scroll = window.scrollY;
  hero.style.transform = `translateY(${scroll * 0.4}px)`;
});
const rainContainer = document.querySelector(".rain");
const numberOfDrops = Math.floor(window.innerWidth / 10); // 1 drop per 10px width

for (let i = 0; i < numberOfDrops; i++) {
  const drop = document.createElement("div");
  drop.classList.add("rain-drop");

  drop.style.left = Math.random() * window.innerWidth + "px";
  drop.style.animationDuration = 0.5 + Math.random() * 0.5 + "s";
  drop.style.animationDelay = Math.random() * 2 + "s";

  rainContainer.appendChild(drop);
}
window.addEventListener("resize", () => {
  rainContainer.innerHTML = ""; // clear old drops
  const numberOfDrops = Math.floor(window.innerWidth / 10);
  for (let i = 0; i < numberOfDrops; i++) {
    const drop = document.createElement("div");
    drop.classList.add("rain-drop");
    drop.style.left = Math.random() * window.innerWidth + "px";
    drop.style.animationDuration = 0.5 + Math.random() * 0.5 + "s";
    drop.style.animationDelay = Math.random() * 2 + "s";
    rainContainer.appendChild(drop);
  }
});