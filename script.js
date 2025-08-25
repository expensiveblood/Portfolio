/* General Reset */
* { margin:0; padding:0; box-sizing:border-box; }
body { font-family:"Arial Black",sans-serif; background:#000; color:#fff; overflow-x:hidden; }

/* Canvas should cover whole screen */
#rain-canvas {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 1; /* behind content but above overlays */
}

/* Hero Section */
.hero {
  position: relative;
  height: 100vh;
  display: flex; justify-content:center; align-items:center; text-align:center;
}
.overlay {
  position: absolute; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.6); z-index:0;
}
.hero-content { position: relative; z-index:2; }
.hero-content h1 { font-size:5rem; text-transform:uppercase; letter-spacing:4px; }
.tagline { font-size:1.2rem; margin:20px 0; letter-spacing:2px; }
.btn { display:inline-block; padding:10px 20px; border:2px solid #fff; text-decoration:none; color:#fff; transition:0.3s; }
.btn:hover { background:#fff; color:#000; }

/* Sections */
.section { padding:80px 10%; text-align:center; }
.section h2 { font-size:2.5rem; margin-bottom:20px; }

/* Social Links */
.social-links { display:flex; justify-content:center; gap:30px; margin-top:20px; }
.social-links a { color:#fff; font-size:2rem; transition: color 0.3s, transform 0.3s; }
.social-links a:hover { color:#ff0000; transform:scale(1.2); }

/* Contact */
form { display:flex; flex-direction:column; gap:15px; max-width:500px; margin:auto; }
form input, form textarea { padding:12px; background:#111; border:1px solid #333; color:#fff; }
form button { padding:12px; background:#000; border:none; color:#000; font-weight:bold; cursor:pointer; }
form button:hover { background:#ff6600; color:#fff; }

/* Footer */
footer { padding:20px; text-align:center; background:#111; font-size:0.9rem; color:#777; }

/* Glitch Effect */
.glitch { position:relative; color:#fff; }
.glitch::before, .glitch::after { content:attr(data-text); position:absolute; left:0; width:100%; overflow:hidden; clip:rect(0,0,0,0); }
.glitch::before { animation:glitchTop 1s infinite linear alternate-reverse; color:#f0f; }
.glitch::after { animation:glitchBottom 1s infinite linear alternate-reverse; color:#0ff; }
@keyframes glitchTop { 0%{clip:rect(0,900px,0,0);} 20%{clip:rect(0,900px,80px,0); transform:translate(-5px,-5px);} 40%{clip:rect(0,900px,0,0);} }
@keyframes glitchBottom { 0%{clip:rect(0,900px,0,0);} 20%{clip:rect(0,900px,80px,0); transform:translate(5px,5px);} 40%{clip:rect(0,900px,0,0);} }

.about p { max-width:800px; margin:20px auto; line-height:1.8; font-size:1.1rem; color:#ccc; text-align:center; padding:0 20px; }
@media (max-width:768px){ .about p{ font-size:1rem; } }
@media (max-width:480px){ .about p{ font-size:0.95rem; } }
