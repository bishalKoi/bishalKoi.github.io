window.initNavbar = function() {
  const toggleBtn   = document.getElementById('navbar-toggle');
  const closeBtn    = document.getElementById('navbar-close');
  const mobileMenu  = document.getElementById('navbar-mobile');
  const overlay     = document.getElementById('navbar-overlay');
  const body        = document.body;
  let lastFocus = null;
  const openMenu = () => {
    lastFocus = document.activeElement;
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');
    overlay.classList.remove('pointer-events-none');
    overlay.classList.replace('opacity-0','opacity-100');
    toggleBtn.setAttribute('aria-expanded', 'true');
    body.classList.add('overflow-hidden');
    closeBtn?.focus();
  };
  const closeMenu = () => {
    mobileMenu.classList.add('translate-x-full');
    mobileMenu.classList.remove('translate-x-0');
    overlay.classList.add('pointer-events-none');
    overlay.classList.replace('opacity-100','opacity-0');
    toggleBtn.setAttribute('aria-expanded', 'false');
    body.classList.remove('overflow-hidden');
    lastFocus?.focus?.();
  };
  toggleBtn?.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);
  mobileMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
  const handleResize = () => {
    if (window.matchMedia('(min-width: 768px)').matches) {
      closeMenu();
    }
  };
  window.addEventListener('resize', handleResize);
};
