/**
 * @file contact.ts
 * @description Gestión del formulario de contacto nativo (contact.php) con protección anti-flood y fallback directo mailto.
 */

export function initContact(): void {
  const contactForm = document.getElementById('v0-contact-form') as HTMLFormElement | null;
  const submitBtn = document.getElementById('form-submit-btn') as HTMLButtonElement | null;
  const consentCheckbox = document.getElementById('rgpd-consent-checkbox') as HTMLInputElement | null;

  function showToast(msg: string, isError = false): void {
    const toast = document.getElementById('global-toast');
    const toastMsg = document.getElementById('global-toast-message');
    if (toast && toastMsg) {
      toastMsg.textContent = msg;
      const icon = toast.querySelector('i');
      if (icon) {
        icon.className = isError 
          ? 'fa-solid fa-triangle-exclamation text-rose-400 text-sm' 
          : 'fa-solid fa-circle-check text-emerald-400 text-sm';
      }
      toast.classList.remove('opacity-0', 'translate-y-8', 'pointer-events-none');
      toast.classList.add('opacity-100', 'translate-y-0');
      setTimeout(() => {
        toast.classList.remove('opacity-100', 'translate-y-0');
        toast.classList.add('opacity-0', 'translate-y-8', 'pointer-events-none');
      }, 5000);
    }
  }

  // Detectar si el usuario regresa de un envío exitoso nativo de contact.php
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('enviado') === '1') {
      showToast('¡Mensaje enviado con éxito! Te responderé en menos de 48 horas.');
      const cleanUrl = window.location.pathname + window.location.hash;
      window.history.replaceState({}, document.title, cleanUrl);
    }
  }

  if (contactForm && submitBtn) {
    let lastSubmitTime = 0;

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (consentCheckbox && !consentCheckbox.checked) {
        showToast('Debes aceptar la Política de Privacidad para continuar.', true);
        consentCheckbox.focus();
        return;
      }

      const now = Date.now();
      if (now - lastSubmitTime < 5000) {
        showToast('Por favor espera unos segundos antes de reenviar el formulario.', true);
        return;
      }
      lastSubmitTime = now;

      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span>Enviando mensaje...</span><i class="fa-solid fa-spinner fa-spin text-xs"></i>';
      submitBtn.disabled = true;

      const formData = new FormData(contactForm);

      const payload = {
        nombre: (formData.get('nombre') as string) || '',
        email: (formData.get('email') as string) || '',
        asunto: (formData.get('_subject') as string) || 'Consulta desde viermontstudio.com',
        mensaje: (formData.get('mensaje') as string) || '',
        consentimiento_rgpd: consentCheckbox ? consentCheckbox.checked : false,
        _honey: (formData.get('_honey') as string) || ''
      };

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 segundos para cPanel Exim

      try {
        const response = await fetch('./contact.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload),
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        let data: any = null;
        try {
          data = await response.json();
        } catch (_) {}

        if (response.ok && data && data.success) {
          showToast('¡Mensaje enviado con éxito! Te responderé en menos de 48 horas.');
          contactForm.reset();
        } else {
          const errMsg = (data && data.message) ? data.message : 'No se pudo entregar el correo directamente.';
          throw new Error(errMsg);
        }
      } catch (err: any) {
        clearTimeout(timeoutId);
        console.warn('Envío directo a contact.php:', err);
        
        // Respaldo de máxima fiabilidad: Abrir cliente de correo pre-rellenado
        const mailtoUrl = `mailto:viermontstudio@gmail.com?subject=${encodeURIComponent('[Viermont Studio] ' + payload.asunto)}&body=${encodeURIComponent(
          `Nombre: ${payload.nombre}\nEmail: ${payload.email}\n\nMensaje:\n${payload.mensaje}`
        )}`;
        
        showToast('Abriendo tu gestor de correo para enviar a viermontstudio@gmail.com...', true);
        setTimeout(() => {
          window.location.href = mailtoUrl;
        }, 1000);
      } finally {
        submitBtn.innerHTML = originalBtnHtml;
        submitBtn.disabled = false;
      }
    });
  }
}
