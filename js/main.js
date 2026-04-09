/* ================================================================
   ABE Consulting SARL — Main JavaScript
   Stack : Alpine.js · Swiper · GSAP (via CDN) · Vanilla JS
   ================================================================ */

'use strict';

/* ─── Alpine.js data ──────────────────────────────────────────── */
function app() {
  return {
    drawerOpen: false,
    scrolled: false,
    init() {
      window.addEventListener('scroll', () => {
        this.scrolled = window.scrollY > 60;
      }, { passive: true });
    }
  };
}

/* ─── DOM Ready ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initSwiper();
  initCounters();
  initReveal();
  initForm();
  initFaqJs();
  initBackTop();
  initCookieBanner();
  initSmoothScroll();
  initActiveNav();
});

/* ─── Preloader ───────────────────────────────────────────────── */
function initPreloader() {
  const pl = document.getElementById('preloader');
  if (!pl) return;
  window.addEventListener('load', () => {
    setTimeout(() => {
      pl.classList.add('hide');
      setTimeout(() => pl.remove(), 700);
      animateHero();
    }, 600);
  });
}

/* ─── Hero entrance animation ─────────────────────────────────── */
function animateHero() {
  const targets = [
    '.hero-eyebrow',
    '.hero-title',
    '.hero-sub',
    '.hero-ctas',
    '.hero-stats',
    '.scroll-hint',
  ];
  targets.forEach((sel, i) => {
    const el = document.querySelector(sel);
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity .7s ease ${i * 0.1 + 0.1}s, transform .7s ease ${i * 0.1 + 0.1}s`;
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 50);
  });
}

/* ─── Swiper (Testimonials) ───────────────────────────────────── */
function initSwiper() {
  if (typeof Swiper === 'undefined') return;
  new Swiper('.testi-swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: { delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true },
    pagination: { el: '.swiper-pagination', clickable: true },
    breakpoints: {
      640:  { slidesPerView: 1 },
      900:  { slidesPerView: 2 },
      1200: { slidesPerView: 3 },
    },
  });
}

/* ─── Counter animation ───────────────────────────────────────── */
function initCounters() {
  const counters = document.querySelectorAll('.count');
  if (!counters.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      io.unobserve(entry.target);
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const duration = 1800;
      const start = performance.now();
      const easeOut = t => 1 - Math.pow(1 - t, 3);

      function tick(now) {
        const elapsed = Math.min((now - start) / duration, 1);
        el.textContent = Math.floor(easeOut(elapsed) * target);
        if (elapsed < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => io.observe(c));
}

/* ─── Reveal on scroll ────────────────────────────────────────── */
function initReveal() {
  const items = document.querySelectorAll('.reveal, .reveal-l, .reveal-r');
  if (!items.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  items.forEach(el => io.observe(el));
}

/* ─── FAQ accordion (pure JS fallback, also works with Alpine) ── */
function toggleFaq(id) {
  const item = document.getElementById(id);
  if (!item) return;
  const isOpen = item.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  // Open clicked (if it was closed)
  if (!isOpen) item.classList.add('open');
}
function initFaqJs() {
  document.querySelectorAll('.faq-btn').forEach(btn => {
    const item = btn.closest('.faq-item');
    if (!item.id) return; // handled by onclick attribute
    btn.addEventListener('click', () => toggleFaq(item.id));
  });
}

/* ─── Contact form ────────────────────────────────────────────── */
function initForm() {
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  const submitBtn = document.getElementById('submitBtn');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    clearFormErrors(form);

    const name    = form.querySelector('#c-name');
    const email   = form.querySelector('#c-email');
    const service = form.querySelector('#c-service');
    const msg     = form.querySelector('#c-msg');
    let valid = true;

    if (!name.value.trim()) { showFieldError(name, 'Ce champ est requis.'); valid = false; }
    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      showFieldError(email, 'Email invalide.'); valid = false;
    }
    if (!service.value) { showFieldError(service, 'Veuillez choisir un service.'); valid = false; }
    if (msg.value.trim().length < 10) { showFieldError(msg, 'Message trop court (10 caractères min).'); valid = false; }

    if (!valid) return;

    const orig = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi…';
    submitBtn.disabled = true;

    // Simulate sending – replace with a real API / EmailJS / FormSubmit endpoint
    setTimeout(() => {
      form.style.display = 'none';
      success.style.display = 'flex';
      submitBtn.innerHTML = orig;
      submitBtn.disabled = false;
    }, 1800);
  });
}
function showFieldError(field, msg) {
  field.style.borderColor = '#ef4444';
  field.style.boxShadow   = '0 0 0 3px rgba(239,68,68,.1)';
  const parent = field.closest('.f-grp');
  if (!parent) return;
  parent.classList.add('error');
  let err = parent.querySelector('.f-err');
  if (!err) { err = document.createElement('p'); err.className = 'f-err'; parent.appendChild(err); }
  err.textContent = msg;
}
function clearFormErrors(form) {
  form.querySelectorAll('.f-grp.error').forEach(g => {
    g.classList.remove('error');
    const err = g.querySelector('.f-err');
    if (err) err.remove();
  });
  form.querySelectorAll('input,select,textarea').forEach(f => {
    f.style.borderColor = '';
    f.style.boxShadow   = '';
  });
}

/* ─── Back to top ─────────────────────────────────────────────── */
function initBackTop() {
  const btn = document.getElementById('backTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });
}

/* ─── Cookie banner ───────────────────────────────────────────── */
function initCookieBanner() {
  const banner = document.getElementById('cookieBanner');
  if (!banner) return;
  if (!localStorage.getItem('abe_cookies')) {
    setTimeout(() => banner.style.display = 'flex', 2000);
  }
}
function acceptCookies() {
  localStorage.setItem('abe_cookies', '1');
  const banner = document.getElementById('cookieBanner');
  if (banner) { banner.style.opacity = '0'; setTimeout(() => banner.remove(), 400); }
}
window.acceptCookies = acceptCookies;

/* ─── Smooth scroll ───────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const header = document.getElementById('header');
      const offset = (header ? header.offsetHeight : 0) + 8;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    });
  });
}

/* ─── Active nav link ─────────────────────────────────────────── */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(l => l.classList.remove('active-link'));
      const link = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (link) link.classList.add('active-link');
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => io.observe(s));
}
