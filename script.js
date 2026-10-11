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
// Rotating "I work on" text
const workRotating = document.getElementById("workRotating");

if (workRotating) {
  const workAreas = [
    "Deep Learning",
    "Natural Language Processing",
    "Transformer Models",
    "Model Fine-Tuning",
    "Machine Learning Systems"
  ];

  let workIndex = 0;

  setInterval(() => {
    workRotating.style.opacity = "0";

    setTimeout(() => {
      workIndex = (workIndex + 1) % workAreas.length;
      workRotating.textContent = workAreas[workIndex];
      workRotating.style.opacity = "1";
    }, 250);
  }, 2200);
}
