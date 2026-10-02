document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');

if (mobileBtn && mobileNav) {
  mobileBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('is-open');
    const isOpen = mobileNav.classList.contains('is-open');
    mobileBtn.setAttribute('aria-expanded', isOpen);
    
    if (isOpen) {
      mobileBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
      document.body.style.overflow = 'hidden';
    } else {
      mobileBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="8" x2="20" y2="8"></line><line x1="4" y1="16" x2="20" y2="16"></line></svg>';
      document.body.style.overflow = '';
    }
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('is-open');
      mobileBtn.setAttribute('aria-expanded', false);
      mobileBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="8" x2="20" y2="8"></line><line x1="4" y1="16" x2="20" y2="16"></line></svg>';
      document.body.style.overflow = '';
    });
  });
}

// Scroll Reveal Animations - Section Specific
const revealConfigs = [
  { selector: '.section-kicker, p.lead, .clinic-info p, .training-intro p, .appointment-copy p:not(.section-kicker)', class: 'reveal' },
  { selector: 'h2', class: 'reveal-left' },
  { selector: '.expertise-card, .profile-card, .map-card, .appointment-form, .contact-card', class: 'reveal-zoom' },
  { selector: '.timeline-item, .path-step, .quote-grid figure, .elegant-details .detail-block, .hero-trust-bar', class: 'reveal' },
];

revealConfigs.forEach(config => {
  document.querySelectorAll(config.selector).forEach(el => {
    el.classList.add(config.class);
  });
});

// Staggered Delays for grid children
const staggerContainers = ['.expertise-grid', '.timeline', '.quote-grid', '.elegant-details'];
staggerContainers.forEach(selector => {
  document.querySelectorAll(selector).forEach(container => {
    Array.from(container.children).forEach((child, index) => {
      if (child.className.includes('reveal')) {
        child.style.transitionDelay = `${index * 0.15}s`;
      }
    });
  });
});

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

document.querySelectorAll('[class*="reveal"]').forEach(el => observer.observe(el));
