/**
 * @file legal-modal.ts
 * @description Gestión de modales de información legal, aviso legal, privacidad y cookies.
 */

declare global {
  interface Window {
    openLegalModal: (tab?: 'aviso' | 'privacidad' | 'cookies') => void;
    closeLegalModal: () => void;
    switchLegalTab: (tab: 'aviso' | 'privacidad' | 'cookies') => void;
  }
}

export function initLegalModal(): void {
  const legalModalBackdrop = document.getElementById('legal-modal-backdrop');
  const legalModalCard = document.getElementById('legal-modal-card') || (legalModalBackdrop ? legalModalBackdrop.querySelector('div') : null);
  const legalModalCloseBtn = document.getElementById('legal-modal-close-btn');
  const legalModalCloseFooterBtn = document.getElementById('legal-modal-close-footer-btn');

  const tabBtnAviso = document.getElementById('legal-tab-btn-aviso') || document.getElementById('legal-tab-aviso-btn');
  const tabBtnPrivacidad = document.getElementById('legal-tab-btn-privacidad') || document.getElementById('legal-tab-privacidad-btn');
  const tabBtnCookies = document.getElementById('legal-tab-btn-cookies') || document.getElementById('legal-tab-cookies-btn');

  const secAviso = document.getElementById('legal-content-aviso') || document.getElementById('legal-sec-aviso');
  const secPrivacidad = document.getElementById('legal-content-privacidad') || document.getElementById('legal-sec-privacidad');
  const secCookies = document.getElementById('legal-content-cookies') || document.getElementById('legal-sec-cookies');
  const legalModalHeaderTitle = document.getElementById('legal-modal-header-title');

  function switchLegalTab(tab: 'aviso' | 'privacidad' | 'cookies' = 'aviso'): void {
    const tabs = [
      { id: 'aviso', btn: tabBtnAviso, sec: secAviso, title: 'viermontstudio@legal: ~ (Aviso Legal & Identidad)' },
      { id: 'privacidad', btn: tabBtnPrivacidad, sec: secPrivacidad, title: 'viermontstudio@legal: ~ (Política de Privacidad RGPD)' },
      { id: 'cookies', btn: tabBtnCookies, sec: secCookies, title: 'viermontstudio@legal: ~ (Política de Cookies)' }
    ];

    tabs.forEach(t => {
      if (t.id === tab) {
        if (t.sec) t.sec.classList.remove('hidden');
        if (t.btn) {
          t.btn.classList.add('bg-teal-500/10', 'text-teal-300', 'border-teal-500/30');
          t.btn.classList.remove('border-transparent', 'text-gray-400');
        }
        if (legalModalHeaderTitle) legalModalHeaderTitle.textContent = t.title;
      } else {
        if (t.sec) t.sec.classList.add('hidden');
        if (t.btn) {
          t.btn.classList.remove('bg-teal-500/10', 'text-teal-300', 'border-teal-500/30');
          t.btn.classList.add('border-transparent', 'text-gray-400');
        }
      }
    });

    const bodyContainer = document.getElementById('legal-modal-body') || (legalModalCard ? legalModalCard.querySelector('.overflow-y-auto') : null);
    if (bodyContainer) (bodyContainer as HTMLElement).scrollTop = 0;
  }

  function openLegalModal(tab: 'aviso' | 'privacidad' | 'cookies' = 'aviso'): void {
    if (!legalModalBackdrop) return;
    switchLegalTab(tab);
    legalModalBackdrop.classList.remove('hidden');
    legalModalBackdrop.classList.add('flex');
    requestAnimationFrame(() => {
      legalModalBackdrop.classList.remove('opacity-0', 'pointer-events-none');
      legalModalBackdrop.classList.add('opacity-100', 'pointer-events-auto');
      if (legalModalCard) {
        legalModalCard.classList.remove('scale-95', 'opacity-0');
        legalModalCard.classList.add('scale-100', 'opacity-100');
      }
    });
    document.body.style.overflow = 'hidden';
  }

  function closeLegalModal(): void {
    if (!legalModalBackdrop) return;
    legalModalBackdrop.classList.remove('opacity-100', 'pointer-events-auto');
    legalModalBackdrop.classList.add('opacity-0', 'pointer-events-none');
    if (legalModalCard) {
      legalModalCard.classList.remove('scale-100', 'opacity-100');
      legalModalCard.classList.add('scale-95', 'opacity-0');
    }
    setTimeout(() => {
      if (legalModalBackdrop.classList.contains('opacity-0')) {
        legalModalBackdrop.classList.remove('flex');
        legalModalBackdrop.classList.add('hidden');
      }
    }, 300);
    document.body.style.overflow = '';
  }

  window.openLegalModal = openLegalModal;
  window.closeLegalModal = closeLegalModal;
  window.switchLegalTab = switchLegalTab;

  if (tabBtnAviso) tabBtnAviso.addEventListener('click', () => switchLegalTab('aviso'));
  if (tabBtnPrivacidad) tabBtnPrivacidad.addEventListener('click', () => switchLegalTab('privacidad'));
  if (tabBtnCookies) tabBtnCookies.addEventListener('click', () => switchLegalTab('cookies'));

  document.querySelectorAll<HTMLElement>('#footer-legal-btn, [data-legal-tab="aviso"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openLegalModal('aviso');
    });
  });

  document.querySelectorAll<HTMLElement>('#footer-privacy-btn, #open-privacy-link-btn, [data-legal-tab="privacidad"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openLegalModal('privacidad');
    });
  });

  document.querySelectorAll<HTMLElement>('#footer-cookies-btn, [data-legal-tab="cookies"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openLegalModal('cookies');
    });
  });

  if (legalModalCloseBtn) legalModalCloseBtn.addEventListener('click', closeLegalModal);
  if (legalModalCloseFooterBtn) legalModalCloseFooterBtn.addEventListener('click', closeLegalModal);

  if (legalModalBackdrop) {
    legalModalBackdrop.addEventListener('click', (e) => {
      if (e.target === legalModalBackdrop) closeLegalModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && legalModalBackdrop && !legalModalBackdrop.classList.contains('pointer-events-none')) {
      closeLegalModal();
    }
  });
}
