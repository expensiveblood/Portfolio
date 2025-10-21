/* ==========================================================
   GLOBAL STYLES & FONT
========================================================== */
:root {
    --primary-color: #f0f0f0;
    --secondary-color: #ff3300;
    --background-color: #0c0c0c;
    --font-impact: 'Anton', sans-serif;
    --font-body: 'Arial', sans-serif;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-color: var(--background-color);
    color: var(--primary-color);
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover {
    color: var(--secondary-color);
}

/* ==========================================================
   NAVIGATION BAR
========================================================== */
.header-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    padding: 20px 5%;
    transition: background 0.3s ease, padding 0.3s ease;
    background: rgba(12, 12, 12, 0.9);
    backdrop-filter: blur(5px);
}

.header-nav.scrolled {
    padding: 12px 5%;
    background: rgba(12, 12, 12, 0.98);
}

.nav-logo {
    font-family: var(--font-impact);
    font-size: 1.5rem;
    letter-spacing: 2px;
    color: var(--primary-color);
    transition: font-size 0.3s ease, letter-spacing 0.3s ease;
}

.header-nav.scrolled .nav-logo {
    font-size: 1.2rem;
    letter-spacing: 1px;
}

.nav-links-container a {
    margin-left: 40px;
    text-transform: uppercase;
    font-size: 0.9rem;
    font-family: var(--font-body);
    font-weight: bold;
    letter-spacing: 1px;
}

/* ==========================================================
   SCROLL PROGRESS BAR
========================================================== */
.scroll-progress-container {
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    height: 2px;
    background: rgba(255, 255, 255, 0.1);
    z-index: 99;
}

.scroll-progress-bar {
    height: 100%;
    background: var(--secondary-color);
    width: 0%;
    transform-origin: left;
    will-change: transform;
}

/* ==========================================================
   HERO SECTION
========================================================== */
.hero-section {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url('your-impact-background.jpg');
    background-size: cover;
    background-position: center;
    padding-top: 80px;
    position: relative;
    overflow: hidden;
}

.hero-content {
    padding: 20px;
}

.hero-title {
    font-family: var(--font-impact);
    font-size: 8vw;
    line-height: 0.9;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 4px;
}

.hero-subtitle {
    font-family: var(--font-body);
    font-size: 1.2vw;
    margin-top: 20px;
    letter-spacing: 2px;
    color: var(--secondary-color);
    text-transform: uppercase;
}

/* Text reveal animation */
.js-reveal-text {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.7s cubic-bezier(0.25, 0.1, 0.25, 1),
                transform 0.7s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.js-reveal-text.visible {
    opacity: 1;
    transform: translateY(0);
}

/* ==========================================================
   ABOUT SECTION
========================================================== */
.about-container {
    padding: 80px 5% 40px 5%; /* Reduced bottom padding to remove gap */
    text-align: center;
}

.about-text {
    font-family: var(--font-body);
    font-size: 1.2rem;
    line-height: 1.6;
    color: var(--primary-color);
}

/* ==========================================================
   SOCIALS SECTION
========================================================== */
.socials-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 40px 5% 100px 5%; /* Adjust padding to remove gap from above */
    text-align: center;
}

.social-link {
    font-family: var(--font-impact);
    font-size: 2rem;
    letter-spacing: 2px;
    color: var(--primary-color);
}

.social-link:hover {
    color: var(--secondary-color);
}

/* ==========================================================
   CONTACT SECTION
========================================================== */
.contact-section {
    padding: 120px 5%;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-section h2 {
    font-family: var(--font-impact);
    font-size: 3.5rem;
    margin-bottom: 30px;
    text-transform: uppercase;
    letter-spacing: 4px;
}

.contact-email-link {
    font-size: 1.8rem;
    font-family: var(--font-impact);
    letter-spacing: 1px;
    color: var(--secondary-color);
    display: inline-block;
    margin-bottom: 30px;
}

/* Formspree form styles */
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 500px;
    margin: 0 auto;
}

.contact-form input,
.contact-form textarea {
    padding: 10px 15px;
    font-family: var(--font-body);
    font-size: 1rem;
    border: 1px solid rgba(255,255,255,0.3);
    border-radius: 5px;
    background: transparent;
    color: var(--primary-color);
    resize: none;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
    color: rgba(255,255,255,0.7);
}

.contact-form button {
    padding: 12px 20px;
    font-family: var(--font-impact);
    font-size: 1rem;
    background-color: var(--secondary-color);
    color: var(--background-color);
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;
}

.contact-form button:hover {
    background-color: #e62e00;
}

/* ==========================================================
   COPYRIGHT SECTION
========================================================== */
.footer-section {
    text-align: center;
    padding: 30px 5%;
    border-top: 1px solid rgba(255,255,255,0.1);
    font-family: var(--font-body);
    font-size: 0.9rem;
    color: rgba(255,255,255,0.6);
}

/* ==========================================================
   HAMBURGER MENU
========================================================== */
.hamburger-menu {
    display: none;
    cursor: pointer;
    z-index: 110;
    padding: 5px;
}

.hamburger-menu .bar {
    display: block;
    width: 25px;
    height: 2px;
    margin: 5px auto;
    background-color: var(--primary-color);
    transition: all 0.3s ease-in-out;
}

.hamburger-menu.is-active .bar:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
}

.hamburger-menu.is-active .bar:nth-child(2) {
    opacity: 0;
}

.hamburger-menu.is-active .bar:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
}

/* ==========================================================
   RESPONSIVE STYLES
========================================================== */
@media (max-width: 992px) {
    .hero-title {
        font-size: 10vw;
    }
    .hero-subtitle {
        font-size: 2vw;
    }
    .work-grid-section {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
}

@media (max-width: 768px) {
    .header-nav {
        padding: 15px 5%;
    }

    .hamburger-menu {
        display: block;
    }

    .nav-links-container {
        position: fixed;
        top: 0;
        right: -100%;
        width: 100%;
        height: 100vh;
        background-color: rgba(12, 12, 12, 0.98);
        transition: right 0.4s ease-in-out;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
        z-index: 99;
    }

    .nav-links-container.active {
        right: 0;
    }

    .nav-links-container a {
        font-size: 2rem;
        font-family: var(--font-impact);
        letter-spacing: 3px;
        text-transform: uppercase;
    }

    .hero-title {
        font-size: 14vw;
    }

    .hero-subtitle {
        font-size: 3vw;
    }

    .contact-section h2 {
        font-size: 2.5rem;
    }

    .contact-email-link {
        font-size: 1.3rem;
    }
}

@media (max-width: 400px) {
    .nav-links-container a {
        font-size: 1.6rem;
    }

    .hero-subtitle {
        font-size: 3.5vw;
    }
}
