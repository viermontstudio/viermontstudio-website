/**
 * @file navigation.ts
 * @description Gestión de navegación, menú móvil, scrollspy con indicador dinámico y personalización de logo/retrato.
 */

export function initNavigation(): void {
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll<HTMLElement>('.mobile-link');
  const navItems = document.querySelectorAll<HTMLElement>('.nav-item');
  const sections = document.querySelectorAll<HTMLElement>('section[id]');

  // Menú móvil toggle
  if (mobileToggleBtn && mobileDrawer) {
    mobileToggleBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.add('hidden');
      });
    });
  }

  // Resaltado de enlace activo (solo subrayado dinámico, texto preserva su color cromático)
  function updateActiveNav(activeId: string): void {
    const allNavItems = [...Array.from(navItems), ...Array.from(mobileLinks)];
    allNavItems.forEach(item => {
      const sec = item.getAttribute('data-section');
      const borderColor = item.getAttribute('data-border-color') || 'border-white';
      if (sec === activeId) {
        item.classList.remove('border-transparent');
        item.classList.add(borderColor);
      } else {
        item.classList.remove(borderColor);
        item.classList.add('border-transparent');
      }
    });
  }

  window.addEventListener('scroll', () => {
    let current = 'inicio';
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 140;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id') || 'inicio';
      }
    });

    // Si estamos al pie de la página, asegurar activación de contacto
    if (window.innerHeight + scrollY >= document.body.offsetHeight - 80) {
      current = 'contacto';
    }
    updateActiveNav(current);
  }, { passive: true });

  // Al hacer clic, actualizar el subrayado inmediatamente
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const sec = item.getAttribute('data-section');
      if (sec) updateActiveNav(sec);
    });
  });

  mobileLinks.forEach(item => {
    item.addEventListener('click', () => {
      const sec = item.getAttribute('data-section');
      if (sec) updateActiveNav(sec);
    });
  });

  // Gestión interactiva de foto real de Javier y logo oficial
  initAvatarAndLogo();
}

function initAvatarAndLogo(): void {
}
