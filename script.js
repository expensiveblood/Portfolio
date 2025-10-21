// Global state to track if a progress update is pending
let isTicking = false;
const headerNav = document.querySelector('.header-nav'); 
const progressBar = document.getElementById('progressBar');
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.getElementById('nav-links');

// ==========================================================
// 1. CUSTOM SMOOTH SCROLLING FUNCTION
// ==========================================================
function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothScrollTo(targetY, duration) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const timeElapsed = timestamp - startTime;
        const progress = Math.min(1, timeElapsed / duration);
        const easedProgress = easeInOutCubic(progress);
        window.scrollTo(0, startY + distance * easedProgress);
        if (timeElapsed < duration) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}

// ==========================================================
// 2. TEXT REVEAL EFFECT 
// ==========================================================
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.js-reveal-text');
    setTimeout(() => {
        revealElements.forEach((el, index) => {
            el.style.transitionDelay = `${index * 0.15 + 0.1}s`;
            el.classList.add('visible');
        });
    }, 100); 
});

// ==========================================================
// 3. SCROLL EFFECTS (Progress Bar and Header Animation)
// ==========================================================
function updateScrollEffects() {
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 50) {
        if (headerNav && !headerNav.classList.contains('scrolled')) {
            headerNav.classList.add('scrolled');
        }
    } else {
        if (headerNav && headerNav.classList.contains('scrolled')) {
            headerNav.classList.remove('scrolled');
        }
    }

    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = Math.min(100, Math.max(0, (scrollPosition / totalHeight) * 100));

    if (progressBar) {
        progressBar.style.transform = `scaleX(${scrollPercentage / 100})`;
    }

    isTicking = false;
}

function requestTick() {
    if (!isTicking) {
        requestAnimationFrame(updateScrollEffects);
        isTicking = true;
    }
}

window.addEventListener('scroll', requestTick);
window.addEventListener('load', requestTick);

// ==========================================================
// 4. APPLYING CUSTOM SCROLL TO NAV LINKS
// ==========================================================
const allNavItems = document.querySelectorAll('.header-nav a');

if (allNavItems.length) {
    allNavItems.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && (href.startsWith('#') || href === '')) {
                e.preventDefault();
                const targetId = href === '#' || href === '' ? 'body' : href;
                const targetElement = document.querySelector(targetId);
                let targetY = 0;
                if (targetElement && targetId !== 'body') {
                    targetY = targetElement.getBoundingClientRect().top + window.scrollY - 80;
                }
                smoothScrollTo(targetY, 700);

                if (navLinksContainer && navLinksContainer.classList.contains('active')) {
                    navLinksContainer.classList.remove('active');
                    hamburger.classList.remove('is-active');
                }
            }
        });
    });
}

// ==========================================================
// 5. MOBILE NAVIGATION TOGGLE (Hamburger Menu)
// ==========================================================
if (hamburger && navLinksContainer) {
    hamburger.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        hamburger.classList.toggle('is-active'); 
    });
}
