(() => {
  const root = document.documentElement;
  const button = document.getElementById('theme-toggle');
  let saved;
  try { saved = localStorage.getItem('portfolio-theme'); } catch (_) {}
  const dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  const setTheme = (value) => {
    root.dataset.theme = value;
    button.setAttribute('aria-pressed', String(value === 'dark'));
    button.setAttribute('aria-label', value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  };
  setTheme(dark ? 'dark' : 'light');
  button.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem('portfolio-theme', next); } catch (_) {}
  });
})();
// Type and erase each specialization, respecting reduced motion.
(() => {
  const text = document.getElementById('workRotating');
  if (!text) return;
  const areas = [
    'Deep Learning',
    'Natural Language Processing',
    'Transformer Models',
    'Model Fine-Tuning',
    'Machine Learning Systems'
  ];
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let timer;
  let area = 0;
  let letters = 0;
  let deleting = false;

  const tick = () => {
    const phrase = areas[area];
    letters += deleting ? -1 : 1;
    text.textContent = phrase.slice(0, letters);
    let delay = deleting ? 40 : 85;
    if (!deleting && letters === phrase.length) {
      deleting = true;
      delay = 1700;
    } else if (deleting && letters === 0) {
      deleting = false;
      area = (area + 1) % areas.length;
      delay = 300;
    }
    timer = window.setTimeout(tick, delay);
  };

  const start = () => {
    window.clearTimeout(timer);
    area = 0;
    letters = 0;
    deleting = false;
    text.textContent = motion.matches ? areas[0] : '';
    if (!motion.matches) timer = window.setTimeout(tick, 300);
  };
  motion.addEventListener('change', start);
  start();
})();

// Reveal content on scroll while keeping the introduction immediately visible.
(() => {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || !('IntersectionObserver' in window)) return;
  const blocks = document.querySelectorAll(
    '.section-heading, .project-card, .section-end, .timeline-item, .about-layout > div, .personal > div, .contact, .footer'
  );
  const observer = new window.IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0, rootMargin: '0px 0px -72px 0px' });

  blocks.forEach(block => {
    // Keep content already in view visible, including direct section links.
    if (block.getBoundingClientRect().top < window.innerHeight) return;
    block.classList.add('scroll-reveal');
    observer.observe(block);
  });
  const showAll = () => {
    observer.disconnect();
    blocks.forEach(block => block.classList.add('is-visible'));
  };
  motion.addEventListener('change', event => {
    if (event.matches) showAll();
  });
  // Keyboard navigation must never land on hidden content.
  document.addEventListener('focusin', event => {
    const block = event.target.closest('.scroll-reveal');
    if (block) {
      block.classList.add('is-visible');
      observer.unobserve(block);
    }
  });
})();

// A sparse, short-lived stardust trail for mouse movement.
(() => {
  const pointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const particles = new Set();
  let lastTime = -Infinity;
  let lastX = 0;
  let lastY = 0;
  document.addEventListener('pointermove', event => {
    if (!pointer.matches || motion.matches || event.pointerType !== 'mouse') return;
    const now = performance.now();
    if (now - lastTime < 60 || particles.size >= 12) return;
    if (Math.hypot(event.clientX - lastX, event.clientY - lastY) < 8) return;
    lastTime = now;
    lastX = event.clientX;
    lastY = event.clientY;
    const dust = document.createElement('span');
    dust.className = 'cursor-dust';
    dust.setAttribute('aria-hidden', 'true');
    dust.style.left = `${event.clientX + (Math.random() - .5) * 6}px`;
    dust.style.top = `${event.clientY + (Math.random() - .5) * 6}px`;
    document.body.appendChild(dust);
    particles.add(dust);
    window.setTimeout(() => {
      dust.remove();
      particles.delete(dust);
    }, 800);
  }, { passive: true });
})();
