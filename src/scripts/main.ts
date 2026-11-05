/**
 * @file main.ts
 * @description Punto de entrada principal modular para la web oficial de Viermont Studio.
 */

import { initNavigation } from './navigation';
import { initGallery } from './gallery';
import { initTerminal } from './terminal';
import { initCertModal } from './cert-modal';
import { initLegalModal } from './legal-modal';
import { initContact } from './contact';

function initApp(): void {
  initNavigation();
  initGallery();
  initTerminal();
  initCertModal();
  initLegalModal();
  initContact();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
