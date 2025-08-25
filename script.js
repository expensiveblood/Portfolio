// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"});
  });
});

// Parallax
let lastScrollY=0, ticking=false;
window.addEventListener("scroll", ()=>{
  lastScrollY = window.scrollY;
  if(!ticking){
    window.requestAnimationFrame(()=>{
      const hero = document.querySelector(".hero-content");
      hero.style.transform = `translateY(${lastScrollY*0.4}px)`;
      ticking=false;
    });
    ticking=true;
  }
});

// Strong Thunderstorm Rain
const rainContainer = document.querySelector(".rain");
const flash = document.querySelector(".flash");

function createRainDrops(){
  rainContainer.innerHTML="";
  const numberOfDrops = Math.floor(window.innerWidth*window.innerHeight/4000); // more dense rain

  for(let i=0;i<numberOfDrops;i++){
    const drop=document.createElement("div");
    drop.classList.add("rain-drop");
    drop.style.left=Math.random()*window.innerWidth+"px";
    drop.style.height=15+Math.random()*25+"px";
    drop.style.animationDuration=0.4+Math.random()*1.2+"s";
    drop.style.animationDelay=Math.random()*2+"s";
    drop.style.opacity=0.3+Math.random()*0.5;
    rainContainer.appendChild(drop);
  }
}

// Subtle lightning flash
function flashLightning(){
  if(Math.random()<0.004){
    flash.style.opacity=0.15+Math.random()*0.2;
    setTimeout(()=>{ flash.style.opacity=0; },100+Math.random()*150);
  }
  requestAnimationFrame(flashLightning);
}

// Run
createRainDrops();
window.addEventListener("resize",createRainDrops);
flashLightning();

// Page fade-in
window.addEventListener("load", ()=>{ document.body.classList.add("loaded"); });
