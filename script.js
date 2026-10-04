gsap.registerPlugin(ScrollTrigger);

document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
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

// Antigravity Design GSAP Animations

// 1. Floating Hero Glows (Parallax)
gsap.to('.hero-glow-a', {
  yPercent: 40,
  xPercent: -20,
  ease: "none",
  scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 }
});
gsap.to('.hero-glow-b', {
  yPercent: -40,
  xPercent: 20,
  ease: "none",
  scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 }
});

// 2. Continuous Floating Elements
gsap.to('.portrait-frame', {
  y: -15,
  rotationX: 2,
  rotationY: -2,
  duration: 3,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

gsap.to('.credential-badge', {
  y: -10,
  rotationZ: 5,
  duration: 4,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

// 3. Staggered 3D Entrance for Expertise Cards (Isometric Snapping Vibe)
gsap.utils.toArray('.expert-card').forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: '.expertise-grid',
      start: "top 80%",
    },
    y: 120,
    z: -300,
    rotationX: 45,
    rotationY: -15,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    delay: i * 0.2
  });
});

// 4. Glassmorphism Cards Spatial Reveal
gsap.utils.toArray('.profile-card, .scan-panel, .map-card, .appointment-form').forEach(card => {
  gsap.from(card, {
    scrollTrigger: { trigger: card, start: "top 85%" },
    y: 60,
    z: -100,
    opacity: 0,
    rotationX: 10,
    duration: 1.2,
    ease: "power2.out"
  });
});

// 5. Staggered Timeline Items
gsap.from('.timeline-item', {
  scrollTrigger: { trigger: '.timeline', start: "top 80%" },
  x: -50,
  opacity: 0,
  stagger: 0.15,
  duration: 1,
  ease: "power3.out"
});

// 6. Staggered Quote Cards
gsap.from('.quote-grid figure', {
  scrollTrigger: { trigger: '.quote-grid', start: "top 80%" },
  y: 50,
  opacity: 0,
  scale: 0.95,
  stagger: 0.15,
  duration: 1,
  ease: "back.out(1.2)"
});

// 7. Headings and Kickers
gsap.utils.toArray('.section-kicker, h2').forEach(el => {
  gsap.from(el, {
    scrollTrigger: { trigger: el, start: "top 90%" },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
});
