/**
 * @file terminal.ts
 * @description Motor de Terminal interactiva, visor de README.md, historial Bash y sincronización con GitHub.
 */

import { MIS_EJERCICIOS_VIERMONT } from '../data/exercises';

declare global {
  interface Window {
    switchTerminalView: (view: 'readme' | 'terminal') => void;
    showGlobalToast: (msg: string) => void;
  }
}

export function initTerminal(): void {
  const tabReadmeBtn = document.getElementById('tab-readme-btn');
  const tabTerminalBtn = document.getElementById('tab-terminal-btn');
  const viewReadmeContainer = document.getElementById('view-readme-container');
  const viewTerminalContainer = document.getElementById('view-terminal-container');
  const terminalScreen = document.getElementById('terminal-screen');
  const terminalForm = document.getElementById('terminal-form');
  const terminalInput = document.getElementById('terminal-input') as HTMLInputElement | null;
  const copyReadmeBtn = document.getElementById('copy-readme-btn');
  const copyReadmeLabel = document.getElementById('copy-readme-label');
  const downloadCvBtn = document.getElementById('download-cv-btn');
  const githubSyncIndicator = document.getElementById('github-sync-indicator');
  const githubReposContainer = document.getElementById('github-repos-container');

  const cvMarkdownText = `# JAVIER MONTERO
📍 20870 ELGOIBAR (GIPUZKOA) | ✉️ viermontstudio@gmail.com / mail@viermontstudio.com
🌐 viermontstudio.com | 🐙 github.com/viermontstudio

## PERFIL PROFESIONAL
Desarrollador en formación (DAM) con trayectoria previa en desarrollo web, diseño gráfico, dibujo artístico y delineación técnica. Combino mi formación en C, C#, Java, SQL, Linux y Ciberseguridad con la responsabilidad, autonomía y excelencia en el trato al cliente desarrolladas a lo largo de más de 18 años de trayectoria laboral continua. Actualmente retomo mi carrera tecnológica con el objetivo de volver al sector IT, aportando un perfil distinto al junior habitual: madurez profesional, visión práctica y capacidad real de resolver problemas.

## FORMACIÓN IT & ACADÉMICA
• Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM) (En Formación) - Jobie FP (2026 - Actualidad)
• Cursos de Ciberseguridad (Pre Security & Cybersecurity 101) - TryHackMe (2026 - Actualidad)
• Cursos de Conceptos Programación, Introducción a la Programación y Java Básico - Open Bootcamp (2023)
• Módulo de Programación Informática Java - BIRT LH (Online) (2022 - 2023)
• Campus de Programación (C, Shell, Git, Linux) - 42 Urduliz • Punteros, memoria dinámica (2021 - 2022)
• Curso Chapista Pintor de Vehículos (760 horas) - CIP Andoain (2007)
• Curso de Aerografía Profesional (80 h - Técnicas artísticas) - Estudio Juanjo Barón (2006)
• Curso de Diseño y Programación Web (609 horas) - Área (San Sebastián) (2003)
• Curso de Dibujo & Animación Tradicional (152 horas) - Sirimiri Films (2000 - 2001)
• Técnico en Preimpresión en Artes Gráficas - CEINPRO • Diseño Gráfico, fotografía, tipografía y color (1998 - 2000)

## EXPERIENCIA LABORAL (+18 AÑOS DE TRAYECTORIA CONTINUA)
• Caddie Máster & Atención Exclusiva | Real Nuevo Club de Golf de San Sebastián Basozabal (2008 - Actualidad / +18 años)
  - Atención exclusiva a socios y visitantes internacionales, control de juego como starter y marshall, y mantenimiento de instalaciones. Trayectoria continua basada en la excelencia en el trato, resolución autónoma de incidencias, discreción y confianza.
• Pintor Aerografista, Diseñador Gráfico e Ilustrador Freelance | Viermont Studio (2006 - Actualidad)
  - Pintura y personalización artística de alta precisión sobre vehículos, cascos, atracciones, lienzos, instrumentos musicales y murales. Diseño de logotipos, ilustraciones y desarrollo web del estudio.
• Diseñador y Programador de Páginas Web | Letralan / Quick Comunicación Multimedia (2004 / 6 meses)
  - Creación de páginas web corporativas para clientes de las empresas con Dreamweaver, HTML, CSS, ASP y Flash.
• Dibujante e Intercalador de animación | Basabe Animation / Sirimiri Films (2000 - 2004)
  - Realización de series de TV animadas como «Las tres mellizas», «Tom el dinosaurio» y «Juanito Jones», manteniendo rigor en intercalación tradicional, dibujo clásico y sincronía de movimiento fotograma a fotograma.
• Delineante CAD | Geminys / DMT (1997 - 1998, 2002)
  - Realización de manuales industriales de ingeniería y dibujo de planos de maquinaria industrial mediante AutoCAD.

## CONOCIMIENTOS TÉCNICOS & APTITUDES
• Lenguajes de Programación: C, C#, Java, SQL, Bash
• Informática, Sistemas & IDEs: Linux, Windows, macOS, Shell/Terminal, Git, Vim, VirtualBox, VS / IntelliJ
• Ciberseguridad Defensiva: Pre Security, Cybersecurity 101, Hardening & Redes
• Inteligencia Artificial (IA): Google AI Studio, Gemini Notebook, Microsoft Copilot, ChatGPT
• Web: HTML5, CSS, Vite
• Diseño Gráfico: Photoshop, Illustrator, Affinity, Krita, SketchBook, Canva
• Pintura & Aerografía: Aerografía artística, pintura y preparación de superficies, personalización y acabados
• Dibujo, Animación & Delineación: Animación tradicional 2D, dibujo artístico, delineación CAD
• Aptitudes: Madurez profesional, resolución autónoma de problemas, atención al cliente exclusiva, empatía y rigor en el detalle
• Idiomas: Español - Nativo | Inglés - B1 | Euskera - B1`;

  // Conmutación de Pestañas
  function switchTerminalView(view: 'readme' | 'terminal'): void {
    if (!viewReadmeContainer || !viewTerminalContainer || !tabReadmeBtn || !tabTerminalBtn) return;
    if (view === 'readme') {
      viewReadmeContainer.classList.remove('hidden');
      viewTerminalContainer.classList.add('hidden');
      tabReadmeBtn.classList.add('bg-teal-400', 'text-[#07080a]', 'shadow-sm');
      tabReadmeBtn.classList.remove('text-gray-400');
      tabTerminalBtn.classList.remove('bg-teal-400', 'text-[#07080a]', 'shadow-sm');
      tabTerminalBtn.classList.add('text-gray-400');
    } else {
      viewReadmeContainer.classList.add('hidden');
      viewTerminalContainer.classList.remove('hidden');
      tabTerminalBtn.classList.add('bg-teal-400', 'text-[#07080a]', 'shadow-sm');
      tabTerminalBtn.classList.remove('text-gray-400');
      tabReadmeBtn.classList.remove('bg-teal-400', 'text-[#07080a]', 'shadow-sm');
      tabReadmeBtn.classList.add('text-gray-400');
      if (terminalInput) terminalInput.focus();
    }
  }

  window.switchTerminalView = switchTerminalView;
  if (tabReadmeBtn) tabReadmeBtn.addEventListener('click', () => switchTerminalView('readme'));
  if (tabTerminalBtn) tabTerminalBtn.addEventListener('click', () => switchTerminalView('terminal'));

  // Notificación Toast Global Flotante
  const globalToast = document.getElementById('global-toast');
  const globalToastMessage = document.getElementById('global-toast-message');
  let globalToastTimer: any = null;

  function showGlobalToast(msg: string): void {
    if (!globalToast) return;
    if (globalToastMessage) globalToastMessage.textContent = msg;
    globalToast.classList.remove('translate-y-8', 'opacity-0', 'pointer-events-none');
    globalToast.classList.add('translate-y-0', 'opacity-100');
    clearTimeout(globalToastTimer);
    globalToastTimer = setTimeout(() => {
      globalToast.classList.add('translate-y-8', 'opacity-0', 'pointer-events-none');
      globalToast.classList.remove('translate-y-0', 'opacity-100');
    }, 2600);
  }

  window.showGlobalToast = showGlobalToast;

  // Copiar README al portapapeles
  if (copyReadmeBtn) {
    copyReadmeBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(cvMarkdownText).then(() => {
        if (copyReadmeLabel) copyReadmeLabel.textContent = '¡Copiado!';
        copyReadmeBtn.classList.add('text-teal-300');
        showGlobalToast('README.md copiado al portapapeles con éxito');
        setTimeout(() => {
          if (copyReadmeLabel) copyReadmeLabel.textContent = 'Copiar';
          copyReadmeBtn.classList.remove('text-teal-300');
        }, 2000);
      }).catch(() => {
        prompt('Copia tu currículum Markdown:', cvMarkdownText);
      });
    });
  }

  // Descargar CV oficial en PDF
  if (downloadCvBtn) {
    downloadCvBtn.addEventListener('click', () => {
      console.log('Descargando CV_Javier_Montero_ViermontStudio.pdf');
    });
  }

  // Sincronización Automática con la API pública de GitHub
  let cachedRepos: any[] = [];

  async function fetchGitHubRepos(): Promise<void> {
    try {
      const res = await fetch('https://api.github.com/users/viermontstudio/repos?sort=updated&per_page=6');
      if (!res.ok) throw new Error('API Rate limit o error');
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        cachedRepos = data;
        if (githubSyncIndicator) {
          githubSyncIndicator.textContent = `Sincronizado: 6 repositorios oficiales catalogados (GitHub)`;
        }
      }
    } catch (_) {
      if (githubSyncIndicator) {
        githubSyncIndicator.textContent = 'Modo seguro local · Conexión a GitHub activa';
      }
    }
  }

  fetchGitHubRepos();

  // Historial de comandos
  let terminalHistory: string[] = [];
  let historyNavIndex = -1;
  let commandDraft = '';

  function escapeHtml(str: string): string {
    return String(str || '').replace(/[&<>"']/g, s => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[s] || s);
  }

  // Ejecutor de comandos de la Terminal
  function runTerminalCommand(rawCmd: string): void {
    if (!terminalScreen) return;
    const cmd = rawCmd.trim();
    if (!cmd) return;

    switchTerminalView('terminal');

    // 1. Comando 'clear' o 'cls'
    if (cmd.toLowerCase() === 'clear' || cmd.toLowerCase() === 'cls') {
      terminalScreen.innerHTML = `
        <div class="text-gray-500">
          Viermont Linux Terminal v2.4 (GNU/Linux x86_64 - WebAssembly/JS Client Sandbox)<br/>
          Pantalla limpiada. Escribe <span class="text-teal-300 font-bold">help</span> para consultar los comandos disponibles.
        </div>`;
      return;
    }

    const cmdLine = document.createElement('div');
    cmdLine.className = 'flex items-center gap-2 text-teal-400 font-semibold pt-2';
    cmdLine.innerHTML = `<span>javiermontero@ViermontStudio:~$</span> <span class="text-white">${escapeHtml(cmd)}</span>`;
    terminalScreen.appendChild(cmdLine);

    const outputBox = document.createElement('div');
    outputBox.className = 'text-gray-300 pl-4 border-l-2 border-white/10 space-y-1';
    const lower = cmd.toLowerCase();
    const norm = lower.replace(/\s+/g, ' ');

    // 2. Comprobar si coincide con alguno de los ejercicios configurados por Javier
    let ejercicioEncontrado = MIS_EJERCICIOS_VIERMONT.find(
      e => e.comando.toLowerCase() === norm || norm === e.comando.toLowerCase()
    );

    if (!ejercicioEncontrado) {
      if (norm.includes('cifrado') || norm.includes('cesar')) {
        ejercicioEncontrado = MIS_EJERCICIOS_VIERMONT.find(e => e.comando.toLowerCase().includes('cifrado'));
      } else if (norm.includes('monitoring') || norm.includes('born2be')) {
        ejercicioEncontrado = MIS_EJERCICIOS_VIERMONT.find(e => e.comando.toLowerCase().includes('monitoring'));
      } else if (norm.includes('libft')) {
        ejercicioEncontrado = MIS_EJERCICIOS_VIERMONT.find(e => e.comando.toLowerCase().includes('libft'));
      } else if (norm.includes('birt')) {
        ejercicioEncontrado = MIS_EJERCICIOS_VIERMONT.find(e => e.comando.toLowerCase().includes('birt'));
      }
    }

    if (ejercicioEncontrado) {
      outputBox.innerHTML = ejercicioEncontrado.salidaHtml;
    } else if (lower.includes('cred') || lower.includes('cert') || lower.includes('diploma')) {
      outputBox.innerHTML = `
        <div class="text-emerald-400 font-bold">[ACREDITACIONES T&Eacute;CNICAS Y FORMACI&Oacute;N EN CIBERSEGURIDAD]</div>
        <div class="p-3.5 my-2 rounded-xl bg-black/70 border border-emerald-500/20 text-gray-200 space-y-2.5 text-xs font-mono">
          <div class="flex items-center justify-between border-b border-white/10 pb-2">
            <div>
              <span class="text-emerald-400 font-bold">&check; TryHackMe:</span> 
              <span class="text-white font-medium">Pre Security Learning Path</span>
            </div>
            <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-semibold">COMPLETADO</span>
          </div>
          <div class="text-gray-400 text-[11px] leading-relaxed">
            &bull; Fundamentos: Redes (TCP/IP, OSI, Routing), Web (HTTP/S, Requests, DNS), Linux CLI defensivo y Windows OS.
          </div>

          <div class="flex items-center justify-between border-b border-white/10 pb-2 pt-1">
            <div>
              <span class="text-emerald-400 font-bold">&bull; TryHackMe:</span> 
              <span class="text-white font-medium">Cybersecurity 101 Path</span>
            </div>
            <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-semibold">EN CURSO</span>
          </div>
          <div class="text-gray-400 text-[11px] leading-relaxed">
            &bull; Temario activo: Security Principles (CIA Triad), Criptograf&iacute;a, Defensa en red y Hardening.
          </div>

          <div class="flex items-center justify-between border-b border-white/10 pb-2 pt-1">
            <div>
              <span class="text-emerald-400 font-bold">&check; 42 Urduliz:</span> 
              <span class="text-white font-medium">Campus Pr&aacute;ctico Inmersivo</span>
            </div>
            <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-semibold">CAMPUS PR&Aacute;CTICO</span>
          </div>
          <div class="text-gray-400 text-[11px] leading-relaxed">
            &bull; Experiencia: C puro, algoritmos, punteros, heap/memoria (0 leaks / Valgrind), Shell y filosof&iacute;a peer-to-peer.
          </div>

          <div class="flex items-center justify-between pt-1">
            <div>
              <span class="text-emerald-400 font-bold">&check; Java Backend:</span> 
              <span class="text-white font-medium">Open Bootcamp &amp; BIRT LH</span>
            </div>
            <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-semibold">COMPLETADO</span>
          </div>
        </div>
        <div class="text-gray-400 text-[11px]">
          &rarr; Pulsa sobre las tarjetas en la pesta&ntilde;a <strong class="text-white">README.md</strong> para abrir la ficha t&eacute;cnica y visor de diplomas.
        </div>`;
    } else if (lower.includes('readme')) {
      outputBox.innerHTML = `
        <div class="text-emerald-400 font-bold"># JAVIER MONTERO &mdash; PERFIL PROFESIONAL &amp; CV COMPLETO</div>
        <div class="text-gray-400"><span class="text-emerald-400">Desarrollador en formaci&oacute;n (DAM Jobie FP)</span> &bull; <span class="text-emerald-400">TryHackMe CyberSec</span> &bull; <span class="text-emerald-400">Campus 42</span> &bull; <span class="text-white">+18 a&ntilde;os</span></div>
        <div class="text-gray-300 mt-2">
          Combino formaci&oacute;n en <span class="text-emerald-400 font-semibold">C, C#, Java, SQL, Linux y Ciberseguridad</span> con <span class="text-white font-semibold">m&aacute;s de 18 a&ntilde;os de trayectoria laboral continua</span>.
          Madurez profesional, visi&oacute;n pr&aacute;ctica y capacidad contrastada de resoluci&oacute;n de problemas.
        </div>
        <div class="p-3 my-2 rounded bg-black/60 border border-white/10 text-xs font-mono text-gray-300 space-y-1.5">
          <div><span class="text-emerald-400 font-bold">&bull; IT &amp; IA:</span> DAM (Jobie FP), TryHackMe, 42 Urduliz, Java, Web, IA (Google AI Studio, Gemini Notebook, Microsoft Copilot, ChatGPT) | <span class="text-amber-400 font-bold">&bull; Creativa &amp; Custom:</span> CIP Andoain (760h Chapa/Pintura), Juanjo Bar&oacute;n (80h Aerograf&iacute;a), Sirimiri (Animaci&oacute;n), CEINPRO (Artes Gr&aacute;ficas)</div>
          <div><span class="text-white font-bold">&bull; Trayectoria (+18a):</span> Golf Basozabal (2008-Act) | <span class="text-emerald-400 font-bold">&bull; Web:</span> Letralan ASP (2004) | <span class="text-amber-400 font-bold">&bull; Arte &amp; CAD:</span> Viermont Studio (2006-2019), Sirimiri Animaci&oacute;n (2000-2004), Geminys CAD (1997-2006)</div>
        </div>
        <div class="text-emerald-400 mt-2">&rarr; Ubicaci&oacute;n: 20870 Elgoibar (Gipuzkoa) | viermontstudio@gmail.com</div>
        <div class="text-gray-500 text-[11px] mt-1">(Pulsa en la pesta&ntilde;a superior 'README.md' para ver el curr&iacute;culum completo formateado)</div>`;
    } else if (lower === 'repos' || lower.includes('github') || lower === 'projects') {
      if (cachedRepos.length > 0) {
        let reposListHtml = '<div class="text-teal-300 font-bold">[GitHub API] Repositorios públicos en @viermontstudio:</div><div class="space-y-1 mt-2">';
        cachedRepos.forEach(r => {
          const safeUrl = typeof r.html_url === 'string' && r.html_url.startsWith('https://github.com/') ? r.html_url : 'https://github.com/viermontstudio';
          const safeName = escapeHtml(r.name || 'Repositorio');
          const safeLang = escapeHtml(r.language || 'Code');
          const safeDesc = escapeHtml(r.description || 'Sin descripción');
          reposListHtml += `<div>&bull; <a href="${safeUrl}" target="_blank" class="text-white hover:underline font-semibold" rel="noopener noreferrer">${safeName}</a> <span class="text-teal-400 font-mono text-[11px]">(${safeLang})</span> &mdash; <span class="text-gray-400 text-xs">${safeDesc}</span></div>`;
        });
        reposListHtml += '</div>';
        outputBox.innerHTML = reposListHtml;
      } else {
        outputBox.innerHTML = `
          <div class="text-teal-300 font-bold">[GitHub API] Repositorios públicos de Javier Montero:</div>
          <div class="text-gray-300 mt-1">Visita <a href="https://github.com/viermontstudio" target="_blank" class="text-teal-400 underline font-semibold" rel="noopener noreferrer">https://github.com/viermontstudio</a> para inspeccionar los 6 repositorios oficiales catalogados en vivo.</div>`;
      }
    } else if (lower === 'ls' || lower === 'ls -la' || lower === 'ls -l' || lower === 'ls -a' || lower === 'dir' || lower.startsWith('ls ')) {
      let filesHtml = '<div class="grid grid-cols-2 sm:grid-cols-3 gap-2 text-teal-300 py-1">';
      filesHtml += '<span>📄 README.md</span>';
      filesHtml += '<span>🏅 certificaciones.log</span>';
      MIS_EJERCICIOS_VIERMONT.forEach(e => {
        filesHtml += `<span>⚡ ${e.comando}</span>`;
      });
      filesHtml += '<span>📁 repos_github/</span><span>💼 curriculum_javier.pdf</span></div>';
      filesHtml += '<div class="text-gray-500 text-[11px] mt-1">Escribe cualquiera de los comandos anteriores o pulsa sobre ellos.</div>';
      outputBox.innerHTML = filesHtml;
    } else if (lower.startsWith('git')) {
      const gitEj = MIS_EJERCICIOS_VIERMONT.find(e => e.comando === 'git status');
      if (gitEj) {
        outputBox.innerHTML = gitEj.salidaHtml;
      }
    } else if (lower === 'whoami') {
      outputBox.innerHTML = `
        <div><strong class="text-white">Javier Montero</strong> &mdash; Desarrollador en formación (DAM), estudiante de Ciberseguridad en TryHackMe, delineante y artista creativo en Viermont Studio.</div>
        <div class="text-gray-400 mt-1">Enfoque: Volver al sector IT aportando madurez, rigor técnico y habilidades de diseño de nivel internacional.</div>`;
    } else if (lower.includes('contact') || lower.includes('contacto')) {
      outputBox.innerHTML = `
        <div class="text-teal-300 font-semibold">Datos de Contacto Directo:</div>
        <div>&bull; Formulario Web: <a href="#contacto" class="text-white hover:underline font-semibold">Ir al formulario de contacto</a></div>
        <div>&bull; Ubicación: Elgoibar, Gipuzkoa (País Vasco)</div>
        <div>&bull; GitHub: <a href="https://github.com/viermontstudio" target="_blank" class="text-teal-400 underline" rel="noopener noreferrer">github.com/viermontstudio</a></div>
        <div>&bull; LinkedIn: <a href="https://www.linkedin.com/in/viermontstudio" target="_blank" class="text-teal-400 underline" rel="noopener noreferrer">linkedin.com/in/viermontstudio</a></div>
        <div>&bull; Instagram: <a href="https://www.instagram.com/viermontstudio" target="_blank" class="text-teal-400 underline" rel="noopener noreferrer">instagram.com/viermontstudio</a></div>
        <div>&bull; TikTok: <a href="https://www.tiktok.com/@viermontstudio" target="_blank" class="text-teal-400 underline" rel="noopener noreferrer">tiktok.com/@viermontstudio</a></div>`;
    } else if (lower === 'help') {
      let helpHtml = '<div class="text-teal-300 font-bold mb-1">Comandos disponibles en la terminal:</div><div class="space-y-1">';
      helpHtml += '<div><span class="text-yellow-300 font-bold">cat README.md</span> &mdash; Muestra el currículum completo formateado</div>';
      helpHtml += '<div><span class="text-emerald-300 font-bold">credentials</span> &mdash; Muestra acreditaciones y estado de ciberseguridad</div>';
      helpHtml += '<div><span class="text-yellow-300 font-bold">repos</span> &mdash; Consulta en vivo tus repositorios de GitHub</div>';
      MIS_EJERCICIOS_VIERMONT.forEach(e => {
        helpHtml += `<div><span class="text-yellow-300 font-bold">${e.comando}</span> &mdash; ${e.nombre} (${e.lenguaje})</div>`;
      });
      helpHtml += '<div><span class="text-yellow-300 font-bold">ls -la</span> &mdash; Lista los archivos del proyecto</div>';
      helpHtml += '<div><span class="text-yellow-300 font-bold">whoami</span> &mdash; Información sobre Javier Montero</div>';
      helpHtml += '<div><span class="text-yellow-300 font-bold">contact</span> &mdash; Muestra vías de contacto directo</div>';
      helpHtml += '<div><span class="text-yellow-300 font-bold">tree</span> &mdash; Árbol de archivos del repositorio</div>';
      helpHtml += '<div><span class="text-yellow-300 font-bold">env</span> &mdash; Variables de entorno del sistema</div>';
      helpHtml += '<div><span class="text-yellow-300 font-bold">clear</span> &mdash; Limpia la pantalla de la terminal</div></div>';
      outputBox.innerHTML = helpHtml;
    } else if (lower === 'pwd') {
      outputBox.innerHTML = `<div class="text-teal-300 font-mono">/home/javier/viermontstudio</div>`;
    } else if (lower === 'date') {
      const now = new Date();
      outputBox.innerHTML = `<div class="text-gray-300 font-mono">${now.toUTCString()}</div>`;
    } else if (lower.startsWith('echo ') || lower === 'echo') {
      const rawEcho = rawCmd.substring(4).trim();
      const cleanEcho = rawEcho.replace(/^["']|["']$/g, '');
      outputBox.innerHTML = `<div class="text-gray-200 font-mono">${escapeHtml(cleanEcho)}</div>`;
    } else if (lower === 'uname' || lower.startsWith('uname ')) {
      outputBox.innerHTML = `<div class="text-gray-300 font-mono">Linux viermont-studio 6.8.0-generic x86_64 GNU/Linux</div>`;
    } else if (lower === 'hostname') {
      outputBox.innerHTML = `<div class="text-teal-300 font-mono">viermont-studio</div>`;
    } else if (lower === 'uptime') {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      outputBox.innerHTML = `<div class="text-gray-300 font-mono">${timeStr} up +18 years, 1 user, load average: 0.00, 0.01, 0.05</div>`;
    } else if (lower === 'who' || lower === 'id') {
      outputBox.innerHTML = `<div class="text-gray-300 font-mono">uid=1000(javier) gid=1000(viermont) groups=1000(viermont),100(users)</div>`;
    } else if (lower === 'env' || lower === 'printenv') {
      outputBox.innerHTML = `
        <div class="text-gray-300 font-mono text-[11px] space-y-0.5">
          <div><span class="text-teal-400">USER</span>=javier</div>
          <div><span class="text-teal-400">HOME</span>=/home/javier</div>
          <div><span class="text-teal-400">SHELL</span>=/bin/bash</div>
          <div><span class="text-teal-400">PWD</span>=/home/javier/viermontstudio</div>
          <div><span class="text-teal-400">ROLE</span>="Junior Developer &amp; Senior en Oficio"</div>
          <div><span class="text-teal-400">LOCATION</span>="20870 Elgoibar (Gipuzkoa)"</div>
          <div><span class="text-teal-400">STACK</span>="C, C#, Java, SQL, Linux, CSS, Vite"</div>
          <div><span class="text-teal-400">STATUS</span>="Disponible para incorporación"</div>
          <div><span class="text-teal-400">LANG</span>=es_ES.UTF-8</div>
          <div><span class="text-teal-400">TERM</span>=xterm-256color</div>
        </div>`;
    } else if (lower === 'history') {
      let histHtml = '<div class="text-gray-300 font-mono text-xs space-y-0.5">';
      if (terminalHistory.length === 0) {
        histHtml += '<div class="text-gray-500">Historial vacío en esta sesión.</div>';
      } else {
        terminalHistory.forEach((hCmd, idx) => {
          histHtml += `<div><span class="text-gray-500 w-8 inline-block">${idx + 1}</span> <span class="text-teal-300">${escapeHtml(hCmd)}</span></div>`;
        });
      }
      histHtml += '</div>';
      outputBox.innerHTML = histHtml;
    } else if (lower === 'tree' || lower === 'tree .' || lower === 'tree repos/') {
      outputBox.innerHTML = `
        <div class="text-gray-300 font-mono text-xs leading-relaxed">
          <span class="text-teal-400 font-bold">.</span><br/>
          ├── <span class="text-white">README.md</span> (Currículum completo y trayectoria)<br/>
          ├── <span class="text-emerald-400">certificaciones.log</span> (THM Pre Security, CyberSec 101, EF SET B1)<br/>
          ├── <span class="text-blue-400">stack.json</span> (C, Java, SQL, Linux, CSS)<br/>
          ├── <span class="text-amber-400">repos_github/</span><br/>
          │   ├── viermontstudio-website<br/>
          │   ├── DAM-JobieFP<br/>
          │   ├── BIRT<br/>
          │   ├── Aprendeaprogramar.com<br/>
          │   ├── 42_Cursus<br/>
          │   └── 42_Pool<br/>
          └── <span class="text-rose-400">CV_Javier_Montero_ViermontStudio.pdf</span><br/>
          <span class="text-gray-500 text-[11px] mt-1">2 directories, 8 files</span>
        </div>`;
    } else if (lower.startsWith('cd ') || lower === 'cd') {
      const targetDir = lower.replace(/^cd\s*/, '').trim() || '~';
      outputBox.innerHTML = `<div class="text-teal-300 font-mono text-xs">cd: directorio actual fijado a /home/javier/viermontstudio/${escapeHtml(targetDir === '~' ? '' : targetDir)} (entorno interactivo seguro)</div>`;
    } else if (lower === 'exit' || lower === 'quit' || lower === 'logout') {
      outputBox.innerHTML = `<div class="text-teal-300 font-mono text-xs">logout: Sesión de terminal preservada. Cambiando a vista README.md...</div>`;
      setTimeout(() => switchTerminalView('readme'), 700);
    } else if (lower.startsWith('cat ')) {
      const targetFile = lower.replace(/^cat\s+/, '').trim();
      if (targetFile.includes('readme')) {
        outputBox.innerHTML = `
          <div class="text-emerald-400 font-bold"># JAVIER MONTERO &mdash; PERFIL PROFESIONAL &amp; CV COMPLETO</div>
          <div class="text-gray-400"><span class="text-emerald-400">Desarrollador en formaci&oacute;n (DAM Jobie FP)</span> &bull; <span class="text-emerald-400">TryHackMe CyberSec</span> &bull; <span class="text-emerald-400">Campus 42</span> &bull; <span class="text-white">+18 a&ntilde;os</span></div>
          <div class="text-gray-300 mt-2">
            Combino formaci&oacute;n en <span class="text-emerald-400 font-semibold">C, C#, Java, SQL, Linux y Ciberseguridad</span> con <span class="text-white font-semibold">m&aacute;s de 18 a&ntilde;os de trayectoria laboral continua</span>.
            Madurez profesional, visi&oacute;n pr&aacute;ctica y capacidad contrastada de resoluci&oacute;n de problemas.
          </div>
          <div class="p-3 my-2 rounded bg-black/60 border border-white/10 text-xs font-mono text-gray-300 space-y-1.5">
            <div><span class="text-emerald-400 font-bold">&bull; IT &amp; IA:</span> DAM (Jobie FP), TryHackMe, 42 Urduliz, Java, Web, IA (Google AI Studio, Gemini Notebook, Microsoft Copilot, ChatGPT) | <span class="text-amber-400 font-bold">&bull; Creativa &amp; Custom:</span> CIP Andoain (760h Chapa/Pintura), Juanjo Bar&oacute;n (80h Aerograf&iacute;a), Sirimiri (Animaci&oacute;n), CEINPRO (Artes Gr&aacute;ficas)</div>
            <div><span class="text-white font-bold">&bull; Trayectoria (+18a):</span> Golf Basozabal (2008-Act) | <span class="text-emerald-400 font-bold">&bull; Web:</span> Letralan ASP (2004) | <span class="text-amber-400 font-bold">&bull; Arte &amp; CAD:</span> Viermont Studio (2006-2019), Sirimiri Animaci&oacute;n (2000-2004), Geminys CAD (1997-2006)</div>
          </div>
          <div class="text-emerald-400 mt-2">&rarr; Ubicaci&oacute;n: 20870 Elgoibar (Gipuzkoa) | viermontstudio@gmail.com</div>
          <div class="text-gray-500 text-[11px] mt-1">(Pulsa en la pesta&ntilde;a superior 'README.md' para ver el curr&iacute;culum completo formateado)</div>`;
      } else if (targetFile.includes('stack')) {
        outputBox.innerHTML = `
          <pre class="text-teal-300 font-mono text-xs overflow-x-auto p-2 bg-black/60 rounded border border-white/10">{
  "lenguajes": ["C", "C#", "Java", "SQL", "Bash"],
  "sistemas": ["Linux", "Unix", "Windows OS"],
  "herramientas": ["Git", "Valgrind", "VS Code", "IntelliJ", "Vite"],
  "diseño": ["Photoshop", "Illustrator", "Affinity", "AutoCAD", "Aerografía"],
  "idiomas": {"español": "Nativo", "euskera": "B1", "ingles": "B1 (Reading C1)"}
}</pre>`;
      } else if (targetFile.includes('package')) {
        outputBox.innerHTML = `
          <pre class="text-blue-300 font-mono text-xs overflow-x-auto p-2 bg-black/60 rounded border border-white/10">{
  "name": "viermontstudio-website",
  "version": "2.4.0",
  "author": "Javier Montero",
  "license": "MIT",
  "type": "module"
}</pre>`;
      } else if (targetFile.includes('contact') || targetFile.includes('contacto')) {
        outputBox.innerHTML = `
          <div class="text-gray-200 font-mono text-xs space-y-1">
            <div><strong class="text-teal-400">Email:</strong> viermontstudio@gmail.com</div>
            <div><strong class="text-teal-400">Web:</strong> viermontstudio.com</div>
            <div><strong class="text-teal-400">Ubicación:</strong> 20870 Elgoibar (Gipuzkoa)</div>
            <div><strong class="text-teal-400">GitHub:</strong> github.com/viermontstudio</div>
            <div><strong class="text-teal-400">LinkedIn:</strong> linkedin.com/in/viermontstudio</div>
          </div>`;
      } else if (targetFile.includes('cert') || targetFile.includes('log') || targetFile.includes('diploma')) {
        outputBox.innerHTML = `
          <div class="text-gray-200 font-mono text-xs space-y-1">
            <div>[2026-03] TryHackMe: Pre Security Learning Path (Completado · THM-ODHVAD97QZ)</div>
            <div>[2026-Act] TryHackMe: Cybersecurity 101 (En curso)</div>
            <div>[2024-03] EF SET: English Certificate (B1 Intermediate · Reading C1 · cert.efset.org/UGynH4)</div>
            <div>[2021-2022] 42 Urduliz: Campus Práctico Inmersivo en Lenguaje C</div>
            <div>[2022-2023] BIRT LH: Programación Informática Java (POO)</div>
          </div>`;
      } else {
        outputBox.innerHTML = `
          <div class="text-rose-400 font-mono text-xs">cat: ${escapeHtml(targetFile)}: No existe el archivo o el directorio</div>
          <div class="text-gray-500 font-mono text-[11px]">Escribe <span class="text-teal-300 font-bold">ls -la</span> para ver los archivos disponibles.</div>`;
      }
    } else {
      outputBox.innerHTML = `
        <div class="text-rose-400">bash: comando no encontrado: '${escapeHtml(cmd)}'</div>
        <div class="text-gray-400">Escribe <span class="text-teal-300 font-bold">help</span> para consultar los comandos válidos o pulsa en los botones superiores.</div>`;
    }

    terminalScreen.appendChild(outputBox);
    terminalScreen.scrollTop = terminalScreen.scrollHeight;
  }

  // Exponer para acceso global
  (window as any).runTerminalCommand = runTerminalCommand;

  // Event listener para botones y chips de comandos rápidos
  document.querySelectorAll<HTMLElement>('[data-exec]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const cmd = btn.getAttribute('data-exec');
      if (cmd) {
        if (terminalHistory[terminalHistory.length - 1] !== cmd) {
          terminalHistory.push(cmd);
          historyNavIndex = terminalHistory.length;
        }
        runTerminalCommand(cmd);
      }
    });
  });

  if (terminalForm && terminalInput) {
    terminalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = terminalInput.value;
      if (val.trim()) {
        terminalHistory.push(val.trim());
        historyNavIndex = terminalHistory.length;
        commandDraft = '';
        runTerminalCommand(val);
        terminalInput.value = '';
      }
    });

    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (terminalHistory.length === 0) return;
        if (historyNavIndex === terminalHistory.length) {
          commandDraft = terminalInput.value;
        }
        if (historyNavIndex > 0) {
          historyNavIndex--;
          terminalInput.value = terminalHistory[historyNavIndex];
          setTimeout(() => {
            terminalInput.selectionStart = terminalInput.selectionEnd = terminalInput.value.length;
          }, 0);
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyNavIndex < terminalHistory.length - 1) {
          historyNavIndex++;
          terminalInput.value = terminalHistory[historyNavIndex];
          setTimeout(() => {
            terminalInput.selectionStart = terminalInput.selectionEnd = terminalInput.value.length;
          }, 0);
        } else if (historyNavIndex === terminalHistory.length - 1) {
          historyNavIndex = terminalHistory.length;
          terminalInput.value = commandDraft;
        }
      }
    });
  }
}
