const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');
const sharp = require('sharp');

async function generatePDF() {
  // 1. Prepare Photo with rounded corners and high resolution
  const photoSize = 160;
  const roundedCorners = Buffer.from(
    `<svg width="${photoSize}" height="${photoSize}">
      <rect x="0" y="0" width="${photoSize}" height="${photoSize}" rx="22" ry="22" fill="#fff"/>
    </svg>`
  );

  const photoBuf = await sharp(path.resolve(__dirname, '../src/assets/images/javier.webp'))
    .resize(photoSize, photoSize, { fit: 'cover' })
    .composite([{ input: roundedCorners, blend: 'dest-in' }])
    .png()
    .toBuffer();

  const photoPath = '/tmp/javier_cv_photo_hq.png';
  fs.writeFileSync(photoPath, photoBuf);

  // 2. Initialize PDF Document (A4 size: 595.28 x 841.89 pt)
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 20, bottom: 20, left: 20, right: 20 },
    autoFirstPage: true,
    bufferPages: true,
  });

  const outputPath = path.resolve(__dirname, '../public/CV_Javier_Montero_ViermontStudio.pdf');
  const writeStream = fs.createWriteStream(outputPath);
  doc.pipe(writeStream);

  // Register Liberation Fonts
  const fontMono = '/usr/share/fonts/truetype/liberation/LiberationMono-Regular.ttf';
  const fontMonoBold = '/usr/share/fonts/truetype/liberation/LiberationMono-Bold.ttf';
  const fontSans = '/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf';
  const fontSansBold = '/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf';

  // Palette
  const C = {
    bg: '#080a0f',
    windowBg: '#0d1117',
    headerBg: '#161b22',
    border: '#30363d',
    cardBorder: '#21262d',
    cardBg: '#12161f',
    subCardBg: '#0b0e14',
    white: '#f0f6fc',
    textMain: '#c9d1d9',
    textMuted: '#8b949e',
    textDim: '#6e7681',
    emerald: '#10b981',
    emeraldLight: '#34d399',
    emeraldBg: '#064e3b',
    teal: '#2dd4bf',
    tealBg: '#134e48',
    cyan: '#38bdf8',
    cyanBg: '#0c4a6e',
    gold: '#fbbf24',
    goldBg: '#451a03',
    purple: '#c084fc',
    purpleBg: '#3b0764',
    redDot: '#f87171',
    yellowDot: '#fbbf24',
    greenDot: '#34d399',
  };

  const W = 595.28;
  const H = 841.89;
  const margin = 20;
  const contentWidth = W - margin * 2; // 555.28
  const innerLeft = margin + 16; // 36
  const innerWidth = contentWidth - 32; // 523.28

  // Helper Vector Icons
  function drawPinIcon(x, y, s, col) {
    doc.save();
    doc.translate(x, y);
    doc.circle(s / 2, s * 0.35, s * 0.32).fill(col);
    doc.polygon([s * 0.18, s * 0.4], [s * 0.82, s * 0.4], [s * 0.5, s * 0.95]).fill(col);
    doc.circle(s / 2, s * 0.35, s * 0.12).fill('#0d1117');
    doc.restore();
  }

  function drawMailIcon(x, y, s, col) {
    doc.save();
    doc.translate(x, y);
    const h = s * 0.72;
    const topY = (s - h) / 2;
    doc.roundedRect(0, topY, s, h, 1.5).strokeColor(col).lineWidth(0.9).stroke();
    doc.moveTo(1, topY + 1).lineTo(s / 2, topY + h * 0.55).lineTo(s - 1, topY + 1).strokeColor(col).lineWidth(0.9).stroke();
    doc.restore();
  }

  function drawGlobeIcon(x, y, s, col) {
    doc.save();
    doc.translate(x, y);
    doc.circle(s / 2, s / 2, s / 2 - 0.5).strokeColor(col).lineWidth(0.9).stroke();
    doc.moveTo(1, s / 2).lineTo(s - 1, s / 2).strokeColor(col).lineWidth(0.7).stroke();
    doc.ellipse(s / 2, s / 2, s * 0.25, s / 2 - 0.5).strokeColor(col).lineWidth(0.7).stroke();
    doc.restore();
  }

  function drawGithubIcon(x, y, s, col) {
    doc.save();
    doc.translate(x, y);
    doc.circle(s / 2, s / 2, s / 2 - 0.5).fill(col);
    doc.circle(s * 0.35, s * 0.45, s * 0.12).fill('#0d1117');
    doc.circle(s * 0.65, s * 0.45, s * 0.12).fill('#0d1117');
    doc.moveTo(s * 0.3, s * 0.7).quadraticCurveTo(s / 2, s * 0.85, s * 0.7, s * 0.7).strokeColor('#0d1117').lineWidth(1.1).stroke();
    doc.restore();
  }

  function drawLinkedinIcon(x, y, s, col) {
    doc.save();
    doc.translate(x, y);
    doc.roundedRect(0, 0, s, s, 2).fill(col);
    doc.fillColor('#0d1117').font(fontSansBold).fontSize(s * 0.62).text('in', 0, s * 0.15, { width: s, align: 'center', lineBreak: false });
    doc.restore();
  }

  function drawWindowChrome(title, pageNum, totalPages) {
    // Outer canvas background
    doc.rect(0, 0, W, H).fill(C.bg);

    // Terminal container box filling full A4 with sleek border
    doc.roundedRect(margin, margin, contentWidth, H - margin * 2, 10)
      .fill(C.windowBg)
      .strokeColor(C.border)
      .lineWidth(1)
      .stroke();

    // Title bar
    doc.roundedRect(margin, margin, contentWidth, 28, 10).fill(C.headerBg);
    doc.rect(margin, margin + 14, contentWidth, 14).fill(C.headerBg);
    doc.moveTo(margin, margin + 28)
      .lineTo(margin + contentWidth, margin + 28)
      .strokeColor(C.border)
      .lineWidth(1)
      .stroke();

    // Window controls
    doc.circle(margin + 16, margin + 14, 4).fill(C.redDot);
    doc.circle(margin + 28, margin + 14, 4).fill(C.yellowDot);
    doc.circle(margin + 40, margin + 14, 4).fill(C.greenDot);

    // Title bar text
    doc.font(fontMono).fontSize(8).fillColor(C.textMuted);
    doc.text(title, margin + 56, margin + 10, { lineBreak: false });

    // Page indicator
    doc.font(fontMonoBold).fontSize(8).fillColor(C.teal);
    doc.text(`[PAGE ${pageNum}/${totalPages}]`, margin + contentWidth - 90, margin + 10, { width: 80, align: 'right' });
  }

  function drawSectionPrompt(cmd, category, yPos) {
    doc.font(fontMonoBold).fontSize(9).fillColor(C.teal);
    doc.text(`$ ${cmd}`, innerLeft, yPos, { lineBreak: false });

    doc.font(fontMono).fontSize(8).fillColor(C.textDim);
    doc.text(`// ${category}`, innerLeft + 230, yPos + 1, { width: innerWidth - 230, align: 'right', lineBreak: false });

    // Subtle horizontal divider line
    doc.moveTo(innerLeft, yPos + 15)
      .lineTo(innerLeft + innerWidth, yPos + 15)
      .strokeColor(C.cardBorder)
      .lineWidth(0.8)
      .stroke();

    return yPos + 22;
  }

  // ==========================================
  // PAGE 1: HEADER, PROFILE, EDUCATION, REPOS
  // ==========================================
  drawWindowChrome('viermontstudio@terminal: ~ (CV Javier Montero • DAM & 42 Urduliz)', 1, 2);

  let Y = 56;

  // --- 1. HEADER BLOCK (PHOTO + IDENTITY + BADGES + CONTACT CON ICONOS VECTORIALES) ---
  const photoW = 82;
  const photoH = 82;
  doc.image(photoPath, innerLeft, Y, { width: photoW, height: photoH });
  doc.roundedRect(innerLeft, Y, photoW, photoH, 11)
    .strokeColor(C.teal)
    .lineWidth(1.5)
    .stroke();

  const idX = innerLeft + photoW + 14;

  // Name
  doc.font(fontMonoBold).fontSize(19).fillColor(C.white);
  doc.text('JAVIER MONTERO', idX, Y + 1);

  // Subtitle
  doc.font(fontMonoBold).fontSize(9).fillColor(C.teal);
  doc.text('DESARROLLADOR EN FORMACIÓN (DAM) & ARTISTA VISUAL', idX, Y + 22);

  // Status Badges
  const badgeY = Y + 37;
  let bX = idX;

  // Badge 1: OPEN TO WORK
  doc.roundedRect(bX, badgeY, 94, 14, 4).fill(C.emeraldBg).strokeColor(C.emerald).lineWidth(0.8).stroke();
  doc.font(fontMonoBold).fontSize(6.8).fillColor(C.emeraldLight).text('● OPEN TO WORK IT', bX + 6, badgeY + 3.5);
  bX += 99;

  // Badge 2: DAM Jobie FP
  doc.roundedRect(bX, badgeY, 86, 14, 4).fill(C.cyanBg).strokeColor(C.cyan).lineWidth(0.8).stroke();
  doc.font(fontMonoBold).fontSize(6.8).fillColor(C.cyan).text('DAM • Jobie FP', bX + 6, badgeY + 3.5);
  bX += 91;

  // Badge 3: 42 Urduliz
  doc.roundedRect(bX, badgeY, 88, 14, 4).fill(C.tealBg).strokeColor(C.teal).lineWidth(0.8).stroke();
  doc.font(fontMonoBold).fontSize(6.8).fillColor(C.teal).text('Campus 42 Urduliz', bX + 6, badgeY + 3.5);
  bX += 93;

  // Badge 4: +18 Años
  doc.roundedRect(bX, badgeY, 84, 14, 4).fill(C.goldBg).strokeColor(C.gold).lineWidth(0.8).stroke();
  doc.font(fontMonoBold).fontSize(6.8).fillColor(C.gold).text('+18 Años Oficio', bX + 6, badgeY + 3.5);

  // Contact Info Rows with Real Vector Icons (2 lines, clean, zero overflow)
  const contactY1 = Y + 58;
  const iconS = 9.5;

  // Row 1: Ubicación & Email
  drawPinIcon(idX, contactY1 + 1, iconS, C.teal);
  doc.font(fontMono).fontSize(7.4).fillColor(C.textMain).text(' 20870 Elgoibar (Gipuzkoa), País Vasco', idX + iconS + 3, contactY1, { lineBreak: false });

  const emailX = idX + 225;
  drawMailIcon(emailX, contactY1 + 1, iconS, C.teal);
  doc.font(fontMono).fontSize(7.4).fillColor(C.textMain).text(' viermontstudio@gmail.com', emailX + iconS + 3, contactY1, { lineBreak: false });

  // Row 2: Web, GitHub, LinkedIn
  const contactY2 = contactY1 + 13;

  drawGlobeIcon(idX, contactY2 + 1, iconS, C.cyan);
  doc.font(fontMono).fontSize(7.4).fillColor(C.textMain).text(' viermontstudio.com', idX + iconS + 3, contactY2, { lineBreak: false });

  const gitX = idX + 135;
  drawGithubIcon(gitX, contactY2 + 1, iconS, C.purple);
  doc.font(fontMono).fontSize(7.4).fillColor(C.textMain).text(' github.com/viermontstudio', gitX + iconS + 3, contactY2, { lineBreak: false });

  const inX = idX + 310;
  drawLinkedinIcon(inX, contactY2 + 1, iconS, C.cyan);
  doc.font(fontMono).fontSize(7.4).fillColor(C.textMain).text(' in/viermontstudio', inX + iconS + 3, contactY2, { lineBreak: false });

  Y = 152;

  // --- 2. PERFIL PROFESIONAL (MANIFIESTO) ---
  Y += 14;
  Y = drawSectionPrompt('whoami --professional-manifesto', 'PERFIL PROFESIONAL & POSICIONAMIENTO', Y);

  const profileH = 68;
  doc.roundedRect(innerLeft, Y, innerWidth, profileH, 6)
    .fill(C.cardBg)
    .strokeColor(C.cardBorder)
    .lineWidth(0.8)
    .stroke();

  doc.font(fontSans).fontSize(8.3).fillColor(C.white);
  const profileBio = 
    "Desarrollador en formación (DAM) con trayectoria previa en desarrollo web, diseño gráfico, dibujo artístico y delineación técnica. Combino mi formación en C, C#, Java, SQL, Linux y Ciberseguridad con la responsabilidad, autonomía y excelencia en el trato al cliente desarrolladas a lo largo de más de 18 años de trayectoria laboral continua en otro sector. Retomo mi carrera tecnológica con el objetivo de incorporarme al sector IT, aportando un perfil diferencial: junior en tecnología, senior en oficio, visión práctica y capacidad real de resolver problemas.";
  doc.text(profileBio, innerLeft + 12, Y + 9, { width: innerWidth - 24, lineGap: 3.2 });

  Y += profileH + 14;

  // --- 3. FORMACIÓN IT & ACADÉMICA (5 ITEMS CON DISTRIBUCIÓN LIMPIA Y SIN SUPERPOSICIONES) ---
  Y = drawSectionPrompt('cat /etc/education.log', 'FORMACIÓN IT, ACADÉMICA & CIBERSEGURIDAD', Y);

  const education = [
    {
      title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
      sub: 'Jobie FP • Modalidad Oficial Homologada',
      period: '2026 - Actualidad',
      color: C.emeraldLight,
      desc: 'Programación estructurada y POO (Java, C#), bases de datos SQL relacionales, entornos de desarrollo y sistemas Linux.'
    },
    {
      title: 'Cursos de Ciberseguridad Defensiva (Pre Security & Cybersecurity 101)',
      sub: 'TryHackMe • Certificación Oficial THM-ODHVAD97QZ',
      period: '2026 - Actualidad',
      color: C.cyan,
      desc: 'Fundamentos de redes (TCP/IP, OSI), seguridad defensiva en Linux/Windows, análisis de vulnerabilidades y hardening.'
    },
    {
      title: 'Campus de Programación (Cursus & Piscina de Acceso C)',
      sub: 'Campus 42 Urduliz (Bizkaia)',
      period: '2021 - 2022',
      color: C.teal,
      desc: 'Programación intensiva en C bajo Unix/Linux: manipulación de punteros, memoria dinámica, Shell scripting, Git y algoritmia.'
    },
    {
      title: 'Módulo de Programación Informática Java (POO & Lógica Backend)',
      sub: 'BIRT LH (Euskadi) • Formación Profesional Online',
      period: '2022 - 2023',
      color: C.cyan,
      desc: 'Paradigma orientado a objetos en Java, encapsulamiento, colecciones (ArrayList/HashMap), control de excepciones y testing.'
    },
    {
      title: 'Técnico en Preimpresión en Artes Gráficas',
      sub: 'CEINPRO (San Sebastián)',
      period: '1998 - 2000',
      color: C.gold,
      desc: 'Composición tipográfica, colorimetría, diseño gráfico publicitario, fotografía y preparación técnica para producción.'
    }
  ];

  const eduCardH = 49;
  const eduGap = 6;
  education.forEach(ed => {
    doc.roundedRect(innerLeft, Y, innerWidth, eduCardH, 6)
      .fill(C.cardBg)
      .strokeColor(C.cardBorder)
      .lineWidth(0.6)
      .stroke();

    // Line 1: Terminal marker + Title (left, max width so it NEVER collides with period)
    doc.font(fontMonoBold).fontSize(8.5).fillColor(ed.color).text('>', innerLeft + 10, Y + 6, { lineBreak: false });
    doc.font(fontMonoBold).fontSize(8.2).fillColor(ed.color).text(ed.title, innerLeft + 22, Y + 6, { width: innerWidth - 145, lineBreak: false });

    // Period on Right
    doc.font(fontMonoBold).fontSize(8).fillColor(C.white);
    doc.text(ed.period, innerLeft + innerWidth - 120, Y + 6, { width: 110, align: 'right', lineBreak: false });

    // Line 2: Institution
    doc.font(fontMono).fontSize(7.4).fillColor(C.textMuted);
    doc.text(ed.sub, innerLeft + 22, Y + 19, { width: innerWidth - 32, lineBreak: false });

    // Line 3: Description (clean fontSans with proper spacing)
    doc.font(fontSans).fontSize(7.2).fillColor('#94a3b8');
    doc.text(ed.desc, innerLeft + 22, Y + 32, { width: innerWidth - 32, lineBreak: false });

    Y += eduCardH + eduGap;
  });

  Y += 12;

  // --- 4. REPOSITORIOS GITHUB (6 ITEMS EN ORDEN EXACTO SOLICITADO) ---
  Y = drawSectionPrompt('git status --repositories --all', 'REPOSITORIOS OFICIALES (github.com/viermontstudio)', Y);

  const repos = [
    {
      name: 'viermontstudio-website',
      tech: 'HTML5 • CSS • Vite',
      desc: 'Plataforma oficial de Viermont Studio. Arquitectura modular, terminal interactiva y optimización visual.'
    },
    {
      name: 'DAM-JobieFP',
      tech: 'Java • SQL • C# • Linux',
      desc: 'Prácticas y módulos del ciclo DAM: bases de datos relacionales, backend POO y desarrollo multiplataforma.'
    },
    {
      name: 'BIRT',
      tech: 'Java • Programación Orientada a Objetos',
      desc: 'Ejercicios de programación en Java: dominio de clases, colecciones complejas y control de errores.'
    },
    {
      name: 'Aprendeaprogramar.com',
      tech: 'Lenguaje C • Algoritmia',
      desc: 'Fundamentos de programación en C desde la base: estructuras de control, funciones y lógica estricta.'
    },
    {
      name: '42_Cursus',
      tech: 'C • Valgrind • Shell • Makefiles',
      desc: 'Proyectos avanzados en C: gestión directa de memoria (heap), recreación de utilidades Unix y algoritmos.'
    },
    {
      name: '42_Pool',
      tech: 'C • Punteros • Unix • Algoritmos',
      desc: 'Ejercicios intensivos de programación en C: punteros dobles, estructuras de memoria y resolución bajo presión.'
    }
  ];

  const colW = (innerWidth - 16) / 3;
  const repoCardH = 80;
  const repoRowGap = 8;

  repos.forEach((r, idx) => {
    const row = Math.floor(idx / 3);
    const col = idx % 3;
    const rX = innerLeft + col * (colW + 8);
    const rY = Y + row * (repoCardH + repoRowGap);

    doc.roundedRect(rX, rY, colW, repoCardH, 6)
      .fill(C.cardBg)
      .strokeColor(C.cardBorder)
      .lineWidth(0.6)
      .stroke();

    // Repo title (limpio con prompt >)
    doc.font(fontMonoBold).fontSize(8).fillColor(C.teal);
    doc.text(`> ${r.name}`, rX + 8, rY + 7, { width: colW - 16, lineBreak: false });

    // Repo tech tags (soporte de 1 o 2 líneas sin solapamiento)
    doc.font(fontMonoBold).fontSize(6.0).fillColor(C.emeraldLight);
    doc.text(r.tech, rX + 8, rY + 19, { width: colW - 16 });
    const techBottomY = doc.y;

    // Repo description (separación garantizada respecto a tech tags, nunca se solapa)
    doc.font(fontSans).fontSize(6.7).fillColor('#94a3b8');
    const descY = Math.max(rY + 33, techBottomY + 3);
    doc.text(r.desc, rX + 8, descY, { width: colW - 16, lineGap: 1.8 });
  });

  // Footer inside terminal on Page 1 (positioned at bottom)
  const footer1Y = H - margin - 22;
  doc.font(fontMono).fontSize(7.5).fillColor(C.textDim);
  doc.text('viermontstudio@terminal:~$ [PÁGINA 1 COMPLETADA • CONTINÚA EN PÁGINA 2 CON TRAYECTORIA LABORAL]', innerLeft, footer1Y, { lineBreak: false });

  // ==========================================
  // PAGE 2: WORK EXPERIENCE, SKILLS, LANGUAGES
  // ==========================================
  doc.addPage();
  drawWindowChrome('viermontstudio@terminal: ~ (Experiencia Laboral & Conocimientos Técnicos)', 2, 2);

  Y = 56;

  // --- 5. EXPERIENCIA LABORAL (+18 AÑOS) ---
  Y = drawSectionPrompt('history --work-experience -v', 'EXPERIENCIA LABORAL (+18 AÑOS DE TRAYECTORIA CONTINUA)', Y);

  const jobs = [
    {
      role: 'Caddie Máster & Atención Exclusiva',
      company: 'Real Nuevo Club de Golf de San Sebastián Basozabal',
      period: '2008 - Actualidad (+18 años)',
      highlight: 'Resolución autónoma & confidencialidad',
      bullets: [
        'Atención exclusiva a socios y visitantes internacionales en entorno de alta exigencia.',
        'Control y gestión de juego como starter y marshall, garantizando el cumplimiento de normativas.',
        'Resolución autónoma de conflictos, mantenimiento operativo y coordinación continua de instalaciones.'
      ]
    },
    {
      role: 'Pintor Aerografista, Diseñador Gráfico & Creador Visual Freelance',
      company: 'Viermont Studio (Estudio Propio)',
      period: '2006 - Actualidad',
      highlight: 'Precisión milimétrica & desarrollo web',
      bullets: [
        'Personalización artística y aerografía técnica sobre carrocerías, cascos de competición y murales de gran formato.',
        'Diseño de identidades corporativas, logotipos, cartelería comercial y piezas gráficas a medida.',
        'Desarrollo e implementación del sitio web corporativo de Viermont Studio (HTML, CSS y gráficos vectoriales).'
      ]
    },
    {
      role: 'Diseñador & Programador Web',
      company: 'Letralan / Quick Comunicación Multimedia (San Sebastián)',
      period: '2004 (6 meses)',
      highlight: 'Desarrollo web corporativo para clientes comerciales',
      bullets: [
        'Desarrollo de sitios web corporativos utilizando HTML, CSS, ASP y JavaScript.',
        'Maquetación estructurada, diseño de banners interactivos y optimización de recursos gráficos.'
      ]
    },
    {
      role: 'Dibujante e Intercalador de Animación Tradicional 2D',
      company: 'Basabe Animation / Sirimiri Films',
      period: '2000 - 2004 (4 años)',
      highlight: 'Rigor de dibujo clásico y disciplina fotograma a fotograma',
      bullets: [
        'Producción de series animadas de televisión: «Las tres mellizas», «Juanito Jones», «Tom el dinosaurio».',
        'Intercalación tradicional y control de tiempos de animación con precisión milimétrica.'
      ]
    },
    {
      role: 'Delineante Proyectista CAD',
      company: 'Geminys / DMT Ingeniería Industrial',
      period: '1997 - 1998, 2002',
      highlight: 'Delineación técnica y manuales industriales',
      bullets: [
        'Elaboración de planos técnicos para maquinaria industrial pesada mediante AutoCAD.',
        'Redacción y maquetación técnica de manuales de uso y mantenimiento para maquinaria industrial.'
      ]
    }
  ];

  jobs.forEach(j => {
    const isThreeBullets = j.bullets.length === 3;
    const jH = isThreeBullets ? 72 : 62;

    doc.roundedRect(innerLeft, Y, innerWidth, jH, 6)
      .fill(C.cardBg)
      .strokeColor(C.cardBorder)
      .lineWidth(0.6)
      .stroke();

    // Line 1: Role on left, Period on right
    doc.font(fontMonoBold).fontSize(8.5).fillColor(C.white);
    doc.text(`> ${j.role}`, innerLeft + 10, Y + 6, { width: innerWidth - 170, lineBreak: false });

    doc.font(fontMonoBold).fontSize(8).fillColor(C.teal);
    doc.text(j.period, innerLeft + innerWidth - 160, Y + 6, { width: 150, align: 'right', lineBreak: false });

    // Line 2: Company on left (max 260pt), Highlight on right (at innerLeft + 280, NEVER overlapping!)
    doc.font(fontMono).fontSize(7.5).fillColor(C.cyan);
    doc.text(j.company, innerLeft + 18, Y + 19, { width: 255, lineBreak: false });

    doc.font(fontSans).fontSize(7.2).fillColor(C.gold);
    doc.text(`// ${j.highlight}`, innerLeft + 280, Y + 19, { width: innerWidth - 290, align: 'right', lineBreak: false });

    // Bullets (Lines 3, 4, 5) with clean vertical rhythm
    let bY = Y + 32;
    j.bullets.forEach(b => {
      doc.font(fontMono).fontSize(7).fillColor(C.textDim).text('-', innerLeft + 20, bY, { lineBreak: false });
      doc.font(fontSans).fontSize(7.2).fillColor('#94a3b8').text(b, innerLeft + 30, bY, { width: innerWidth - 40, lineBreak: false });
      bY += 12;
    });

    Y += jH + 7;
  });

  Y += 12;

  // --- 6. OTRA FORMACIÓN & ESPECIALIZACIONES ---
  Y = drawSectionPrompt('cat /etc/certifications.log', 'OTRA FORMACIÓN TÉCNICA & ARTÍSTICA', Y);

  const otherEdu = [
    { title: 'Curso de Diseño y Programación Web (609h)', place: 'Área (San Sebastián, 2003)' },
    { title: 'Curso Chapista Pintor de Vehículos (760h)', place: 'CIP Andoain (2007)' },
    { title: 'Curso de Aerografía Profesional (80h)', place: 'Estudio Juanjo Barón (2006)' },
    { title: 'Curso de Dibujo & Animación Tradicional (152h)', place: 'Sirimiri Films (2000 - 2001)' }
  ];

  const otherColW = (innerWidth - 12) / 2;
  const otherH = 68;

  doc.roundedRect(innerLeft, Y, innerWidth, otherH, 6)
    .fill(C.cardBg)
    .strokeColor(C.cardBorder)
    .lineWidth(0.6)
    .stroke();

  otherEdu.forEach((oe, idx) => {
    const r = Math.floor(idx / 2);
    const c = idx % 2;
    const itemX = innerLeft + 12 + c * (otherColW + 6);
    const itemY = Y + 8 + r * 29;

    doc.font(fontMonoBold).fontSize(7.5).fillColor(C.teal).text('>', itemX, itemY, { lineBreak: false });
    doc.font(fontSansBold).fontSize(7.3).fillColor(C.white).text(` ${oe.title}`, itemX + 8, itemY, { width: otherColW - 18, lineBreak: false });
    doc.font(fontSans).fontSize(7.0).fillColor(C.textMuted).text(`  — ${oe.place}`, itemX + 10, itemY + 12.5, { width: otherColW - 20, lineBreak: false });
  });

  Y += otherH + 18;

  // --- 7. CONOCIMIENTOS TÉCNICOS, HERRAMIENTAS & IDIOMAS (3 COLUMNAS AMPLIAS) ---
  Y = drawSectionPrompt('env | grep -E "STACK|LANG|SKILLS"', 'STACK TÉCNICO, HERRAMIENTAS & IDIOMAS', Y);

  const stackColW = (innerWidth - 16) / 3;
  const stackH = 136;

  // Columna 1: Tecnologías IT
  doc.roundedRect(innerLeft, Y, stackColW, stackH, 6)
    .fill(C.cardBg)
    .strokeColor(C.cardBorder)
    .lineWidth(0.6)
    .stroke();

  doc.font(fontMonoBold).fontSize(8).fillColor(C.emeraldLight).text('// LENGUAJES & DESARROLLO', innerLeft + 10, Y + 8);
  doc.font(fontSans).fontSize(7.4).fillColor(C.white);
  doc.text('• Lenguajes: C, Java, C#, SQL, Bash', innerLeft + 10, Y + 26, { width: stackColW - 18, lineGap: 3 });
  doc.text('• Sistemas: Linux (Ubuntu/Debian), Unix, Windows, macOS', innerLeft + 10, Y + 50, { width: stackColW - 18, lineGap: 3 });
  doc.text('• Entornos: Git, GitHub, VS Code, IntelliJ, Vim, VirtualBox', innerLeft + 10, Y + 76, { width: stackColW - 18, lineGap: 3 });
  doc.text('• Web: HTML5, CSS, Vite', innerLeft + 10, Y + 104, { width: stackColW - 18, lineGap: 3 });

  // Columna 2: Ciberseguridad & IA & Creativo
  const col2X = innerLeft + stackColW + 8;
  doc.roundedRect(col2X, Y, stackColW, stackH, 6)
    .fill(C.cardBg)
    .strokeColor(C.cardBorder)
    .lineWidth(0.6)
    .stroke();

  doc.font(fontMonoBold).fontSize(8).fillColor(C.cyan).text('// SEGURIDAD, IA & DISEÑO', col2X + 10, Y + 8);
  doc.font(fontSans).fontSize(7.4).fillColor(C.white);
  doc.text('• Ciberseguridad: Pre Security Path, THM 101, Hardening & Redes', col2X + 10, Y + 26, { width: stackColW - 18, lineGap: 3 });
  doc.text('• IA Generativa: Google AI Studio, Gemini, Copilot, ChatGPT', col2X + 10, Y + 52, { width: stackColW - 18, lineGap: 3 });
  doc.text('• Diseño Digital: Photoshop, Illustrator, Affinity Designer, Krita', col2X + 10, Y + 78, { width: stackColW - 18, lineGap: 3 });
  doc.text('• Oficio Visual: Aerografía técnica, Dibujo clásico, Delineación CAD', col2X + 10, Y + 104, { width: stackColW - 18, lineGap: 3 });

  // Columna 3: Idiomas & Aptitudes
  const col3X = innerLeft + (stackColW + 8) * 2;
  doc.roundedRect(col3X, Y, stackColW, stackH, 6)
    .fill(C.cardBg)
    .strokeColor(C.cardBorder)
    .lineWidth(0.6)
    .stroke();

  doc.font(fontMonoBold).fontSize(8).fillColor(C.gold).text('// IDIOMAS & APTITUDES', col3X + 10, Y + 8);
  doc.font(fontSans).fontSize(7.4).fillColor(C.white);
  doc.text('• Español: Nativo', col3X + 10, Y + 26);
  doc.text('• Euskera: B1', col3X + 10, Y + 41);
  doc.text('• Inglés: B1 (Certificado EF SET · Reading C1)', col3X + 10, Y + 56);
  doc.text('• Aptitudes: Madurez profesional, resolución autónoma de problemas, atención al cliente exclusiva, empatía y rigor en el detalle.', col3X + 10, Y + 74, { width: stackColW - 18, lineGap: 2.8 });

  // Terminal Footer on Page 2
  const footer2Y = H - margin - 22;
  doc.font(fontMono).fontSize(7.5).fillColor(C.textDim);
  doc.text('viermontstudio@terminal:~$ status --verify', innerLeft, footer2Y, { lineBreak: false });

  doc.font(fontMonoBold).fontSize(7.5).fillColor(C.emeraldLight);
  doc.text('[STATUS: 200 OK • DISPONIBLE PARA INCORPORACIÓN]', innerLeft + innerWidth - 270, footer2Y, { width: 270, align: 'right', lineBreak: false });

  // Finalize document
  doc.end();

  return new Promise((resolve, reject) => {
    writeStream.on('finish', () => {
      console.log('PDF Generated successfully at:', outputPath);
      resolve(outputPath);
    });
    writeStream.on('error', reject);
  });
}

generatePDF().catch(err => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
