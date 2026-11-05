/**
 * @file cert-modal.ts
 * @description Modal visualizador de certificaciones oficiales (100% solo lectura, sin opción de subida ni edición).
 */

import { MIS_CERTIFICACIONES } from '../data/certificates';

declare global {
  interface Window {
    openCertModal: (certKey: string) => void;
    closeCertModal: () => void;
  }
}

export function initCertModal(): void {
  const certModal = document.getElementById('cert-modal');
  const certModalClose = document.getElementById('cert-modal-close');
  const certModalCloseFooter = document.getElementById('cert-modal-close-footer');
  const certModalTitle = document.getElementById('cert-modal-title');
  const certModalIssuer = document.getElementById('cert-modal-issuer');
  const certBadgeStatus = document.getElementById('cert-badge-status');
  const certIconContainer = document.getElementById('cert-icon-container');
  const certModalStatusText = document.getElementById('cert-modal-status-text');
  const certModalModules = document.getElementById('cert-modal-modules');
  const certModalNotes = document.getElementById('cert-modal-notes');
  const certExternalLink = document.getElementById('cert-external-link') as HTMLAnchorElement | null;
  const certCustomImageWrapper = document.getElementById('cert-custom-image-wrapper');
  const certCustomImage = document.getElementById('cert-custom-image') as HTMLImageElement | null;
  const certPdfLink = document.getElementById('cert-pdf-link') as HTMLAnchorElement | null;

  function openCertModal(certKey: string): void {
    const cert = (MIS_CERTIFICACIONES as Record<string, any>)[certKey];
    if (!cert || !certModal) return;

    if (certModalTitle) certModalTitle.textContent = cert.titulo;
    if (certModalIssuer) certModalIssuer.textContent = cert.emisor;
    if (certModalStatusText) certModalStatusText.textContent = cert.estadoTexto;
    if (certModalNotes) certModalNotes.textContent = cert.nota;

    if (certBadgeStatus) {
      certBadgeStatus.className = `inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest border ${cert.badgeClase}`;
      certBadgeStatus.innerHTML = cert.badgeHtml;
    }

    if (certIconContainer) {
      certIconContainer.className = `w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border ${cert.iconClase}`;
      certIconContainer.innerHTML = cert.icono;
    }

    // Renderizar módulos
    if (certModalModules) {
      certModalModules.innerHTML = '';
      cert.modulos.forEach((mod: string) => {
        const li = document.createElement('li');
        li.className = 'flex items-start gap-2.5 text-xs text-gray-300';
        li.innerHTML = `<span class="text-teal-400 mt-0.5 font-mono text-[10px]">&bull;</span><span>${mod}</span>`;
        certModalModules.appendChild(li);
      });
    }

    // Enlace oficial de verificación externa
    if (certExternalLink) {
      certExternalLink.href = cert.enlace;
      certExternalLink.innerHTML = `<span>${cert.enlaceTexto}</span><i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>`;
    }

    // Enlace PDF oficial si existe
    if (certPdfLink) {
      if (cert.pdfUrl) {
        certPdfLink.href = cert.pdfUrl;
        certPdfLink.classList.remove('hidden');
      } else {
        certPdfLink.classList.add('hidden');
      }
    }

    // Mostrar diploma si existe imagen precargada
    if (cert.defaultImage && certCustomImage && certCustomImageWrapper) {
      certCustomImage.src = cert.defaultImage;
      certCustomImageWrapper.classList.remove('hidden');
    } else if (certCustomImageWrapper) {
      certCustomImageWrapper.classList.add('hidden');
    }

    certModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeCertModal(): void {
    if (!certModal) return;
    certModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  window.openCertModal = openCertModal;
  window.closeCertModal = closeCertModal;

  // Listeners para botones de acreditaciones
  document.querySelectorAll<HTMLElement>('[data-cert-key], [data-cert-view], .open-cert-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const key = btn.getAttribute('data-cert-key') || btn.getAttribute('data-cert-view');
      if (key) {
        e.preventDefault();
        openCertModal(key);
      }
    });
  });

  if (certModalClose) certModalClose.addEventListener('click', closeCertModal);
  if (certModalCloseFooter) certModalCloseFooter.addEventListener('click', closeCertModal);

  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) closeCertModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && certModal && !certModal.classList.contains('hidden')) {
      closeCertModal();
    }
  });
}
