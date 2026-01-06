// Theme Switcher
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to dark theme
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    html.classList.add('light-theme');
    themeToggle.innerHTML = '<span class="theme-icon">☀️</span>';
} else {
    html.classList.remove('light-theme');
    themeToggle.innerHTML = '<span class="theme-icon">🌙</span>';
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    if (html.classList.contains('light-theme')) {
        html.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<span class="theme-icon">🌙</span>';
    } else {
        html.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<span class="theme-icon">☀️</span>';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(el => {
    observer.observe(el);
});
