// Mobile menu toggle + smooth scroll + small accessibility helpers
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menuBtn');
  const navMenu = document.getElementById('navMenu');

  // Toggle mobile menu
  menuBtn.addEventListener('click', () => {
    const open = menuBtn.classList.toggle('open');
    navMenu.classList.toggle('show');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close mobile menu when a nav link is clicked (helpful on mobile)
  navMenu.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      navMenu.classList.remove('show');
      menuBtn.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
