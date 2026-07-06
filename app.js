/* ============================================
   J:COM LINK VOD — 2026 Year in Review
   Interactions & Animations
   ============================================ */

// ---- 1. Sticky nav on scroll ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.classList.add('is-scrolled');
  } else {
    nav.classList.remove('is-scrolled');
  }
}, { passive: true });

// ---- 2. IntersectionObserver: reveal + counter + genre bars ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');

      // Counter animation
      if (entry.target.matches('.counter')) {
        animateCounter(entry.target);
      }

      // Trigger contained counters
      entry.target.querySelectorAll('.counter').forEach((el) => {
        if (!el.dataset.done) {
          animateCounter(el);
        }
      });

      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.stat-card, .genre-card, .calendar-card, .title-card, .rec-card, .persona-card, .share-card, .counter').forEach((el) => {
  observer.observe(el);
});

// ---- 3. Counter animation ----
function animateCounter(el) {
  if (el.dataset.done) return;
  el.dataset.done = '1';

  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    // ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.floor(target * eased);
    el.textContent = value.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = target.toLocaleString();
    }
  }

  requestAnimationFrame(tick);
}

// ---- 4. Build 52-week calendar heatmap ----
(function buildCalendar() {
  const grid = document.getElementById('calGrid');
  if (!grid) return;

  const colors = [
    '#f2f2f2',
    '#ffe6df',
    '#ffb8a3',
    '#ff8464',
    '#f25a37',
    '#e93817',
    '#c62211',
  ];

  // 52 weeks, intensity pattern: varies over the year
  const weeks = 52;
  for (let w = 0; w < weeks; w++) {
    const cell = document.createElement('div');
    cell.className = 'cal-cell';

    // Create a plausible viewing pattern: heavier on weekends, winter, and randomly
    let intensity;
    const monthPhase = Math.sin((w / 52) * Math.PI * 2);
    const noise = Math.random();

    if (w >= 45 || w < 8) {
      // Winter / New Year — heavy viewing
      intensity = 4 + Math.floor(noise * 3);
    } else if (w >= 26 && w < 35) {
      // Late summer dip
      intensity = 1 + Math.floor(noise * 2);
    } else {
      intensity = 2 + Math.floor(noise * 4);
    }
    intensity = Math.min(6, Math.max(0, intensity));

    cell.style.background = colors[intensity];
    cell.title = `第 ${w + 1} 週`;

    // Stagger reveal
    cell.style.opacity = '0';
    cell.style.transform = 'scale(0.4)';
    cell.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    setTimeout(() => {
      cell.style.opacity = '1';
      cell.style.transform = 'scale(1)';
    }, w * 15 + 200);

    grid.appendChild(cell);
  }
})();

// ---- 5. Smooth scroll nav ----
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length > 1 && document.querySelector(id)) {
      e.preventDefault();
      document.querySelector(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ---- 6. Parallax float on hero tiles ----
const tiles = document.querySelectorAll('.tile');
window.addEventListener('mousemove', (e) => {
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  const dx = (e.clientX - cx) / cx;
  const dy = (e.clientY - cy) / cy;

  tiles.forEach((tile, i) => {
    const depth = (i + 1) * 8;
    tile.style.setProperty('transform', `translate(${dx * depth}px, ${dy * depth}px)`);
  });
}, { passive: true });

// ---- 7. Share button feedback ----
document.querySelectorAll('.sbtn, .btn').forEach((btn) => {
  btn.addEventListener('click', function (e) {
    // Simple ripple/flash
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      inset: 0;
      background: rgba(255,255,255,0.2);
      border-radius: inherit;
      pointer-events: none;
      opacity: 1;
      transition: opacity 0.6s ease;
    `;
    if (getComputedStyle(this).position === 'static') {
      this.style.position = 'relative';
    }
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    requestAnimationFrame(() => {
      ripple.style.opacity = '0';
      setTimeout(() => ripple.remove(), 600);
    });
  });
});

// ---- 8. Persona card tilt (subtle) ----
const personaCard = document.querySelector('.persona-card');
if (personaCard) {
  personaCard.addEventListener('mousemove', (e) => {
    const rect = personaCard.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    personaCard.style.transform = `perspective(1200px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
  });
  personaCard.addEventListener('mouseleave', () => {
    personaCard.style.transform = 'perspective(1200px) rotateY(0) rotateX(0)';
  });
  personaCard.style.transition = 'transform 0.3s ease';
}

console.log('%c J:COM LINK VOD × 2026 Year in Review ', 'background:linear-gradient(90deg,#ee7800,#ff3b7f,#7c3aed);color:#fff;font-weight:900;padding:8px 12px;border-radius:6px;font-size:14px;');
