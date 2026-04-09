/* ================================================================
   ABE Consulting SARL — Authentication (client-side demo)
   NOTE: In production, replace with a real backend auth API.
   ================================================================ */

'use strict';

/* ─── Demo users database ─────────────────────────────────────── */
const DEMO_USERS = [
  {
    email:    'demo@abeconsulting.cm',
    password: 'Demo2024!',
    name:     'Charly TEMGOUA',
    role:     'Client Premium',
    company:  'ABE Consulting SARL',
  },
  {
    email:    'client@test.cm',
    password: 'Test1234!',
    name:     'Jean-Baptiste MFOU',
    role:     'Client Standard',
    company:  'ABC Négoce SARL',
  },
];

/* ─── Token helpers ───────────────────────────────────────────── */
function generateToken() {
  return 'abe_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
}
function isLoggedIn() {
  return !!localStorage.getItem('abe_token');
}

/* ─── Route guard (call on protected pages) ───────────────────── */
function requireAuth() {
  if (!isLoggedIn()) {
    window.location.href = 'login.html?redirect=' + encodeURIComponent(window.location.pathname);
  }
}

/* ─── Login form handler ──────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  if (form) initLoginForm(form);

  // Protect dashboard
  if (window.location.pathname.includes('dashboard')) {
    requireAuth();
  }

  // Auto-fill redirect after login
  const params = new URLSearchParams(window.location.search);
  const redirect = params.get('redirect');
  if (redirect) {
    sessionStorage.setItem('abe_redirect', redirect);
  }
});

function initLoginForm(form) {
  const emailInput    = document.getElementById('loginEmail');
  const passwordInput = document.getElementById('loginPassword');
  const loginBtn      = document.getElementById('loginBtn');
  const errorBox      = document.getElementById('loginError');
  const errorMsg      = document.getElementById('loginErrorMsg');

  form.addEventListener('submit', async e => {
    e.preventDefault();
    clearErrors();

    const email    = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value;
    let valid = true;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showInputError(emailInput, 'emailError', 'Entrez une adresse email valide.');
      valid = false;
    }
    if (!password || password.length < 6) {
      showInputError(passwordInput, 'passwordError', 'Mot de passe trop court.');
      valid = false;
    }
    if (!valid) return;

    // Show loading
    loginBtn.classList.add('loading');
    loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Connexion…';

    // Simulate network delay
    await delay(1000);

    const user = DEMO_USERS.find(u =>
      u.email === email && u.password === password
    );

    loginBtn.classList.remove('loading');
    loginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Se connecter';

    if (user) {
      const token = generateToken();
      const remember = document.getElementById('rememberMe')?.checked;

      // Store session
      localStorage.setItem('abe_token', token);
      localStorage.setItem('abe_user', JSON.stringify({
        name:    user.name,
        email:   user.email,
        role:    user.role,
        company: user.company,
      }));

      if (remember) {
        localStorage.setItem('abe_remember', '1');
      }

      // Redirect
      const dest = sessionStorage.getItem('abe_redirect') || 'dashboard.html';
      sessionStorage.removeItem('abe_redirect');
      window.location.href = dest;

    } else {
      // Wrong credentials
      errorBox.style.display = 'flex';
      errorMsg.textContent = 'Email ou mot de passe incorrect. Essayez le compte démo.';
      passwordInput.value = '';
      passwordInput.classList.add('err');
      emailInput.classList.add('err');
    }
  });

  // Clear errors on input
  [emailInput, passwordInput].forEach(input => {
    input.addEventListener('input', clearErrors);
  });
}

function showInputError(input, errId, msg) {
  input.classList.add('err');
  const errEl = document.getElementById(errId);
  if (errEl) errEl.textContent = msg;
}

function clearErrors() {
  document.querySelectorAll('.field-error').forEach(e => e.textContent = '');
  document.querySelectorAll('.input-wrap input').forEach(i => i.classList.remove('err'));
  const box = document.getElementById('loginError');
  if (box) box.style.display = 'none';
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* ─── Logout ──────────────────────────────────────────────────── */
function logout() {
  if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
    localStorage.removeItem('abe_token');
    localStorage.removeItem('abe_user');
    window.location.href = 'login.html';
  }
}
window.logout = logout;
