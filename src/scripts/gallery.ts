/**
 * @file gallery.ts
 * @description Renderizado dinámico, filtrado vivo (6 categorías) y visor lightbox para el portfolio artístico de Javier Montero.
 */

import { DEFAULT_ARTWORKS_CATALOG, Artwork } from '../data/artworks';

declare global {
  interface Window {
    handleArtworkFallback: (imgEl: HTMLImageElement, artKey: string) => void;
    applyArtCategoryFilter: (category: string) => void;
  }
}

export function initGallery(): void {
  const galleryContainer = document.getElementById('art-gallery-container');
  const filterPills = document.querySelectorAll<HTMLElement>('.art-filter-pill');
  const textFilters = document.querySelectorAll<HTMLElement>('.art-text-filter');

  // Fallback SVG elegante para obras originales de Javier
  window.handleArtworkFallback = function(imgEl: HTMLImageElement, artKey: string) {
    const titles: Record<string, string> = {
      barqueta_fran_cobo: 'Barqueta BRC Fran Cobo',
      casco_harley: 'Casco Harley-Davidson',
      casco_sin_city: 'Casco Sin City Custom',
      capo_mascara: 'Capó Máscara Veneciana'
    };
    const title = titles[artKey] || 'Obra de Aerografía';

    const svgFallback = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="%2314151a"/>
          <stop offset="50%" stop-color="%230b0c0f"/>
          <stop offset="100%" stop-color="%231a150e"/>
        </linearGradient>
      </defs>
      <rect width="800" height="800" fill="url(%23bg)"/>
      <circle cx="400" cy="360" r="140" fill="%23d4af37" opacity="0.08"/>
      <circle cx="400" cy="360" r="100" fill="none" stroke="%23d4af37" stroke-width="2" stroke-dasharray="6,6" opacity="0.4"/>
      <path d="M380 320 L420 320 L400 280 Z M370 340 L430 340 L425 410 L375 410 Z" fill="%23d4af37" opacity="0.8"/>
      <text x="400" y="460" font-family="sans-serif" font-size="24" font-weight="bold" fill="%23ffffff" text-anchor="middle">${encodeURIComponent(title)}</text>
      <text x="400" y="495" font-family="monospace" font-size="14" fill="%23d4af37" text-anchor="middle">OBRA ORIGINAL &bull; VIERMONT STUDIO</text>
    </svg>`;
    imgEl.onerror = null;
    imgEl.src = svgFallback;
  };

  // Renderizar catálogo oficial en el contenedor si está vacío
  if (galleryContainer && galleryContainer.children.length === 0) {
    renderArtworks(DEFAULT_ARTWORKS_CATALOG, galleryContainer);
  }

  // Configuración de lightbox
  setupLightbox();

  // Filtrado de categorías
  function applyArtCategoryFilter(filterCategory: string): void {
    // Actualizar estado visual de los botones de filtro superiores (estilo pills)
    filterPills.forEach(p => {
      const isMatch = p.getAttribute('data-art-filter') === filterCategory;
      if (isMatch) {
        p.classList.remove('border', 'border-white/10', 'text-gray-400');
        p.classList.add('bg-accentGold', 'text-[#07080a]', 'font-semibold', 'shadow-md', 'shadow-amber-500/25');
      } else {
        p.classList.remove('bg-accentGold', 'text-[#07080a]', 'font-semibold', 'shadow-md', 'shadow-amber-500/25');
        p.classList.add('border', 'border-white/10', 'text-gray-400');
      }
    });

    // Actualizar estado visual del menú inferior
    textFilters.forEach(tf => {
      const isMatch = tf.getAttribute('data-art-filter') === filterCategory;
      if (isMatch) {
        tf.classList.remove('text-accentGold/60', 'border-transparent');
        tf.classList.add('text-accentGold', 'font-semibold', 'border-accentGold');
      } else {
        tf.classList.remove('text-accentGold', 'font-semibold', 'border-accentGold');
        tf.classList.add('text-accentGold/60', 'border-transparent');
      }
    });

    // Filtrar las obras mostrando únicamente la categoría activa seleccionada
    const dynamicArtItems = document.querySelectorAll<HTMLElement>('.art-item');
    dynamicArtItems.forEach(item => {
      const cat = item.getAttribute('data-category');
      if (cat === filterCategory) {
        item.classList.remove('hidden-art');
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
        }, 15);
      } else {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.95)';
        setTimeout(() => {
          item.classList.add('hidden-art');
        }, 180);
      }
    });
  }

  window.applyArtCategoryFilter = applyArtCategoryFilter;

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const filter = pill.getAttribute('data-art-filter');
      if (filter) applyArtCategoryFilter(filter);
    });
  });

  textFilters.forEach(tf => {
    tf.addEventListener('click', () => {
      const filter = tf.getAttribute('data-art-filter');
      if (filter) {
        applyArtCategoryFilter(filter);
        const target = document.getElementById('art-category-filters') || document.getElementById('arte');
        if (target) {
          const headerOffset = 90;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Activar categoría por defecto
  applyArtCategoryFilter('murales');
}

/**
 * Renderiza dinámicamente las tarjetas de arte con la triple capa de protección y diseño Instagram
 */
export function renderArtworks(items: Artwork[], container: HTMLElement): void {
  container.innerHTML = '';
  const fragment = document.createDocumentFragment();

  items.forEach((item, index) => {
    const card = document.createElement('div');
    const spanClasses = [
      item.spanRow ? 'gallery-span-row-2' : '',
      item.spanCol ? 'gallery-span-col-2' : ''
    ].filter(Boolean).join(' ');
    card.className = `art-item ${spanClasses} group cursor-pointer relative select-none w-full h-full`.trim().replace(/\s+/g, ' ');
    card.style.opacity = '1';
    card.style.transform = 'scale(1)';
    card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
    card.setAttribute('data-category', item.category);
    card.setAttribute('data-title', item.title);
    card.setAttribute('data-alt', item.alt || item.title);
    card.setAttribute('data-tag', item.tag || item.category.toUpperCase());
    card.setAttribute('data-desc', item.desc);
    card.setAttribute('data-img', item.img);
    card.setAttribute('data-art-key', item.id);
    card.setAttribute('data-isolated-bg', item.isolatedBg ? 'true' : 'false');

    // Contenedor principal de la tarjeta
    const cardInner = document.createElement('div');
    cardInner.className = 'relative rounded-3xl overflow-hidden bg-[#111216] border border-white/10 w-full h-full min-h-[290px] flex flex-col justify-end';

    // Imagen creada mediante DOM nativo y saneada
    const imgEl = document.createElement('img');
    const safeSrc = item.img.startsWith('/src/assets/images/') || item.img.startsWith('src/assets/images/') || item.img.startsWith('/') ? item.img : '';
    imgEl.src = safeSrc;
    imgEl.alt = item.alt || item.title;
    imgEl.className = 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 no-download';
    if (item.imgStyle) {
      imgEl.style.cssText = item.imgStyle;
    } else {
      imgEl.style.objectPosition = 'center center';
    }
    imgEl.loading = index < 6 ? 'eager' : 'lazy';
    imgEl.decoding = 'async';
    imgEl.draggable = false;
    imgEl.addEventListener('contextmenu', (e) => e.preventDefault());
    imgEl.addEventListener('error', () => {
      if (typeof window.handleArtworkFallback === 'function') {
        window.handleArtworkFallback(imgEl, item.id);
      }
    });

    // Capa de degradado
    const gradientOverlay = document.createElement('div');
    gradientOverlay.className = 'absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none';

    // Capa escudo anti-descarga
    const shield = document.createElement('div');
    shield.className = 'art-shield';
    shield.draggable = false;
    shield.addEventListener('contextmenu', (e) => e.preventDefault());

    // Marca de agua
    const watermark = document.createElement('div');
    watermark.className = 'watermark-subtle absolute top-4 left-4 z-20 flex items-center gap-1.5';
    watermark.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-accentGold"></span><span class="text-[9px] font-mono tracking-widest text-white uppercase">Viermont Studio &copy;</span>';

    // Información de la obra (texto seguro con textContent)
    const textInfo = document.createElement('div');
    textInfo.className = 'absolute bottom-6 left-6 right-6 z-20 pointer-events-none';

    const tagSpan = document.createElement('span');
    tagSpan.className = 'text-[10px] font-mono uppercase tracking-widest text-accentGold font-semibold block mb-1';
    tagSpan.textContent = item.tag || item.category.toUpperCase();

    const titleH3 = document.createElement('h3');
    titleH3.className = 'font-headline text-xl text-white font-bold mb-0.5';
    titleH3.textContent = item.title;

    const descP = document.createElement('p');
    descP.className = 'text-xs text-gray-400 font-light line-clamp-2';
    descP.textContent = item.desc;

    textInfo.appendChild(tagSpan);
    textInfo.appendChild(titleH3);
    textInfo.appendChild(descP);

    // Botón de expandir
    const expandIcon = document.createElement('div');
    expandIcon.className = 'absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none';
    expandIcon.innerHTML = '<i class="fa-solid fa-expand text-xs"></i>';

    cardInner.appendChild(imgEl);
    cardInner.appendChild(gradientOverlay);
    cardInner.appendChild(shield);
    cardInner.appendChild(watermark);
    cardInner.appendChild(textInfo);
    cardInner.appendChild(expandIcon);

    card.appendChild(cardInner);
    fragment.appendChild(card);
  });

  container.appendChild(fragment);
}

function setupLightbox(): void {
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');
  const lightboxInner = document.getElementById('lightbox-inner');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  const lightboxImage = document.getElementById('lightbox-image') as HTMLImageElement | null;
  const lightboxCategory = document.getElementById('lightbox-category');
  const lightboxHeading = document.getElementById('lightbox-heading');
  const lightboxDetails = document.getElementById('lightbox-details');
  const lightboxCounter = document.getElementById('lightbox-counter');

  function getVisibleArtworks(): HTMLElement[] {
    return Array.from(document.querySelectorAll<HTMLElement>('.art-item:not(.hidden-art)'));
  }

  let currentArtworkIndex = 0;

  function updateLightboxContent(index: number): void {
    const visibleList = getVisibleArtworks();
    if (!visibleList.length || !lightboxImage || !lightboxCategory || !lightboxHeading || !lightboxDetails || !lightboxCounter) return;

    currentArtworkIndex = (index + visibleList.length) % visibleList.length;
    const currentItem = visibleList[currentArtworkIndex];
    if (!currentItem) return;

    const title = currentItem.getAttribute('data-title') || '';
    const alt = currentItem.getAttribute('data-alt') || title;
    const tag = currentItem.getAttribute('data-tag') || '';
    const desc = currentItem.getAttribute('data-desc') || '';
    const img = currentItem.getAttribute('data-img') || '';

    lightboxImage.src = img;
    lightboxImage.alt = alt;
    lightboxCategory.textContent = tag;
    lightboxHeading.textContent = title;
    const spanDesc = lightboxDetails.querySelector('span:first-child');
    if (spanDesc) spanDesc.textContent = desc;
    lightboxCounter.textContent = `${currentArtworkIndex + 1} / ${visibleList.length}`;

    const isIsolated = currentItem.getAttribute('data-isolated-bg') === 'true';
    const isolatedBadge = document.getElementById('lightbox-isolated-badge');
    if (isolatedBadge) {
      if (isIsolated) {
        isolatedBadge.classList.remove('hidden');
        isolatedBadge.classList.add('flex');
      } else {
        isolatedBadge.classList.add('hidden');
        isolatedBadge.classList.remove('flex');
      }
    }
  }

  function openLightbox(itemElement: HTMLElement): void {
    if (!lightboxBackdrop || !lightboxInner) return;
    const visibleList = getVisibleArtworks();
    const targetIndex = visibleList.indexOf(itemElement);
    updateLightboxContent(targetIndex >= 0 ? targetIndex : 0);
    document.body.style.overflow = 'hidden';
    lightboxBackdrop.classList.remove('hidden');
    lightboxBackdrop.classList.add('flex');
    requestAnimationFrame(() => {
      lightboxBackdrop.classList.remove('opacity-0', 'pointer-events-none');
      lightboxBackdrop.classList.add('opacity-100', 'pointer-events-auto');
      if (lightboxInner) {
        lightboxInner.classList.remove('scale-95');
        lightboxInner.classList.add('scale-100');
      }
    });
  }

  function closeLightbox(): void {
    if (!lightboxBackdrop || !lightboxInner) return;
    document.body.style.overflow = '';
    lightboxBackdrop.classList.add('opacity-0', 'pointer-events-none');
    lightboxBackdrop.classList.remove('opacity-100', 'pointer-events-auto');
    lightboxInner.classList.remove('scale-100');
    lightboxInner.classList.add('scale-95');
    setTimeout(() => {
      if (lightboxBackdrop.classList.contains('opacity-0')) {
        lightboxBackdrop.classList.remove('flex');
        lightboxBackdrop.classList.add('hidden');
      }
    }, 300);
  }

  // Delegación de eventos para clics en tarjetas de arte
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const artCard = target.closest('.art-item') as HTMLElement | null;
    if (artCard) {
      openLightbox(artCard);
    }
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      updateLightboxContent(currentArtworkIndex - 1);
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      updateLightboxContent(currentArtworkIndex + 1);
    });
  }

  if (lightboxBackdrop && lightboxInner) {
    lightboxBackdrop.addEventListener('click', (e) => {
      if (!lightboxInner.contains(e.target as Node) && 
          !lightboxPrev?.contains(e.target as Node) && 
          !lightboxNext?.contains(e.target as Node)) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (lightboxBackdrop && lightboxBackdrop.getAttribute('aria-hidden') === 'false') {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') updateLightboxContent(currentArtworkIndex - 1);
      if (e.key === 'ArrowRight') updateLightboxContent(currentArtworkIndex + 1);
    }
  });
}

function escapeHtml(str: string): string {
  return String(str || '').replace(/[&<>"']/g, s => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[s] || s);
}
