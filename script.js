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
