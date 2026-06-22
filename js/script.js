// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
}, { threshold: 0.1 });
reveals.forEach(r => observer.observe(r));

// Nav active + scroll state
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const navEl = document.querySelector('nav');

window.addEventListener('scroll', () => {
  // active link
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });

  // nav shadow on scroll
  navEl.style.boxShadow = window.scrollY > 40
    ? '0 4px 32px rgba(0,0,0,0.4)'
    : '';
}, { passive: true });
