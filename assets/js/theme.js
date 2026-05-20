(function () {
  var html = document.documentElement;
  var toggleBtn = document.getElementById('dark-mode-toggle');
  var hamburger = document.getElementById('nav-hamburger');
  var navLinks = document.getElementById('nav-links');

  // --- Dark mode ---

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme || '');
    try { localStorage.setItem('theme', theme || ''); } catch (e) {}
  }

  function getStoredTheme() {
    try { return localStorage.getItem('theme'); } catch (e) { return null; }
  }

  // On load: restore saved preference, or fall back to system preference
  var saved = getStoredTheme();
  if (saved === 'dark') {
    applyTheme('dark');
  } else if (!saved && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      var current = html.getAttribute('data-theme');
      applyTheme(current === 'dark' ? '' : 'dark');
    });
  }

  // --- Mobile hamburger ---

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      var isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      navLinks.classList.toggle('nav-open', !isOpen);
    });

    // Close nav when a link is clicked
    navLinks.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('nav-open');
      });
    });
  }
})();
