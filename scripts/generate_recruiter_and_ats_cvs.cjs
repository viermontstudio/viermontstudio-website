const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');
const sharp = require('sharp');

// =========================================================================
// 1. GENERAR CV TERMINAL CON TELÉFONO PARA RECLUTADORES
// =========================================================================
async function generateTerminalCVWithPhone() {
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

  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 20, bottom: 20, left: 20, right: 20 },
    autoFirstPage: true,
    bufferPages: true,
  });

  const outputPath = path.resolve(__dirname, '../public/CV_Javier_Montero_Directo_Reclutadores.pdf');
  const writeStream = fs.createWriteStream(outputPath);
  doc.pipe(writeStream);

  const fontMono = '/usr/share/fonts/truetype/liberation/LiberationMono-Regular.ttf';
  const fontMonoBold = '/usr/share/fonts/truetype/liberation/LiberationMono-Bold.ttf';
  const fontSans = '/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf';
  const fontSansBold = '/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf';

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
  const contentWidth = W - margin * 2;
  const innerLeft = margin + 16;
  const innerWidth = contentWidth - 32;

  function drawPinIcon(x, y, s, col) {
    doc.save();
    doc.translate(x, y);
    doc.circle(s / 2, s * 0.35, s * 0.32).fill(col);
    doc.polygon([s * 0.18, s * 0.4], [s * 0.82, s * 0.4], [s * 0.5, s * 0.95]).fill(col);
    doc.circle(s / 2, s * 0.35, s * 0.12).fill('#0d1117');
    doc.restore();
  }

  function drawPhoneIcon(x, y, s, col) {
    doc.save();
    doc.translate(x, y);
    doc.roundedRect(s * 0.15, s * 0.05, s * 0.7, s * 0.9, 1.5).strokeColor(col).lineWidth(0.9).stroke();
    doc.rect(s * 0.25, s * 0.2, s * 0.5, s * 0.55).strokeColor(col).lineWidth(0.5).stroke();
    doc.circle(s * 0.5, s * 0.85, s * 0.06).fill(col);
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
    const r = s / 2;
    doc.circle(r, r, r - 0.5).strokeColor(col).lineWidth(0.9).stroke();
    doc.moveTo(1, r).lineTo(s - 1, r).strokeColor(col).lineWidth(0.6).stroke();
    doc.ellipse(r, r, r * 0.45, r - 0.5).strokeColor(col).lineWidth(0.6).stroke();
    doc.restore();
  }

  function drawGithubIcon(x, y, s, col) {
    doc.save();
    doc.translate(x, y);
    const r = s / 2;
    doc.circle(r, r, r - 0.5).strokeColor(col).lineWidth(0.9).stroke();
    doc.circle(r * 0.7, r * 0.85, 0.7).fill(col);
    doc.circle(r * 1.3, r * 0.85, 0.7).fill(col);
    doc.path(`M ${r * 0.5} ${r * 1.25} Q ${r} ${r * 1.6} ${r * 1.5} ${r * 1.25}`).strokeColor(col).lineWidth(0.7).stroke();
    doc.restore();
  }

  function drawLinkedinIcon(x, y, s, col) {
    doc.save();
    doc.translate(x, y);
    doc.roundedRect(0, 0, s, s, 2).fill(col);
    doc.circle(s * 0.32, s * 0.3, 0.9).fill('#0d1117');
    doc.rect(s * 0.25, s * 0.44, 1.4, s * 0.38).fill('#0d1117');
    doc.rect(s * 0.48, s * 0.44, 1.4, s * 0.38).fill('#0d1117');
    doc.path(`M ${s * 0.48} ${s * 0.56} C ${s * 0.52} ${s * 0.42} ${s * 0.76} ${s * 0.42} ${s * 0.76} ${s * 0.58} L ${s * 0.76} ${s * 0.82} L ${s * 0.63} ${s * 0.82} L ${s * 0.63} ${s * 0.62} C ${s * 0.63} ${s * 0.54} ${s * 0.5} ${s * 0.54} ${s * 0.5} ${s * 0.62} Z`).fill('#0d1117');
    doc.restore();
  }

  function drawWindowChrome(title, pageNum, totalPages) {
    doc.rect(0, 0, W, H).fill(C.bg);
    doc.roundedRect(margin, margin, contentWidth, H - margin * 2, 8).fill(C.windowBg).strokeColor(C.border).lineWidth(1).stroke();
    doc.roundedRect(margin, margin, contentWidth, 28, 8).fill(C.headerBg);
    doc.rect(margin, margin + 20, contentWidth, 8).fill(C.headerBg);
    doc.moveTo(margin, margin + 28).lineTo(margin + contentWidth, margin + 28).strokeColor(C.border).lineWidth(1).stroke();

    doc.circle(margin + 16, margin + 14, 4.5).fill(C.redDot);
    doc.circle(margin + 28, margin + 14, 4.5).fill(C.yellowDot);
    doc.circle(margin + 40, margin + 14, 4.5).fill(C.greenDot);

    doc.font(fontMono).fontSize(8).fillColor(C.textMuted);
    doc.text(title, margin + 56, margin + 10, { lineBreak: false });

    doc.font(fontMonoBold).fontSize(8).fillColor(C.teal);
    doc.text(`[PAGE ${pageNum}/${totalPages}]`, margin + contentWidth - 90, margin + 10, { width: 80, align: 'right' });
  }

  function drawSectionPrompt(cmd, category, yPos) {
    doc.font(fontMonoBold).fontSize(9).fillColor(C.teal);
    doc.text(`$ ${cmd}`, innerLeft, yPos, { lineBreak: false });

    doc.font(fontMono).fontSize(8).fillColor(C.textDim);
    doc.text(`// ${category}`, innerLeft + 230, yPos + 1, { width: innerWidth - 230, align: 'right', lineBreak: false });

    doc.moveTo(innerLeft, yPos + 15)
      .lineTo(innerLeft + innerWidth, yPos + 15)
      .strokeColor(C.cardBorder)
      .lineWidth(0.8)
      .stroke();

    return yPos + 22;
  }

  // PAGE 1
  drawWindowChrome('viermontstudio@terminal: ~ (CV Javier Montero • DAM & Reclutadores)', 1, 2);

  let Y = 56;
  const photoW = 82;
  const photoH = 82;
  doc.image(photoPath, innerLeft, Y, { width: photoW, height: photoH });
  doc.roundedRect(innerLeft, Y, photoW, photoH, 11).strokeColor(C.teal).lineWidth(1.5).stroke();

  const idX = innerLeft + photoW + 14;

  doc.font(fontMonoBold).fontSize(19).fillColor(C.white);
  doc.text('JAVIER MONTERO', idX, Y + 1);

  doc.font(fontMonoBold).fontSize(9).fillColor(C.teal);
  doc.text('DESARROLLADOR EN FORMACIÓN (DAM) & ARTISTA VISUAL', idX, Y + 22);

  const badgeY = Y + 37;
  let bX = idX;

  doc.roundedRect(bX, badgeY, 94, 14, 4).fill(C.emeraldBg).strokeColor(C.emerald).lineWidth(0.8).stroke();
  doc.font(fontMonoBold).fontSize(6.8).fillColor(C.emeraldLight).text('● OPEN TO WORK IT', bX + 6, badgeY + 3.5);
  bX += 99;

  doc.roundedRect(bX, badgeY, 86, 14, 4).fill(C.cyanBg).strokeColor(C.cyan).lineWidth(0.8).stroke();
  doc.font(fontMonoBold).fontSize(6.8).fillColor(C.cyan).text('DAM • Jobie FP', bX + 6, badgeY + 3.5);
  bX += 91;

  doc.roundedRect(bX, badgeY, 88, 14, 4).fill(C.tealBg).strokeColor(C.teal).lineWidth(0.8).stroke();
  doc.font(fontMonoBold).fontSize(6.8).fillColor(C.teal).text('Campus 42 Urduliz', bX + 6, badgeY + 3.5);
  bX += 93;

  doc.roundedRect(bX, badgeY, 84, 14, 4).fill(C.goldBg).strokeColor(C.gold).lineWidth(0.8).stroke();
  doc.font(fontMonoBold).fontSize(6.8).fillColor(C.gold).text('+18 Años Oficio', bX + 6, badgeY + 3.5);

  // Filas de Contacto con TELÉFONO INCLUIDO
  const contactY1 = Y + 58;
  const iconS = 9.5;

  // Fila 1: Ubicación + Teléfono + Email
  drawPinIcon(idX, contactY1 + 1, iconS, C.teal);
  doc.font(fontMono).fontSize(7.4).fillColor(C.textMain).text(' Elgoibar (Gipuzkoa)', idX + iconS + 3, contactY1, { lineBreak: false });

  const phoneX = idX + 130;
  drawPhoneIcon(phoneX, contactY1 + 1, iconS, C.gold);
  doc.font(fontMonoBold).fontSize(7.4).fillColor(C.gold).text(' (+34) 635 72 64 64', phoneX + iconS + 3, contactY1, { lineBreak: false });

  const emailX = idX + 265;
  drawMailIcon(emailX, contactY1 + 1, iconS, C.teal);
  doc.font(fontMono).fontSize(7.4).fillColor(C.textMain).text(' viermontstudio@gmail.com', emailX + iconS + 3, contactY1, { lineBreak: false });

  // Fila 2: Web + GitHub + LinkedIn
  const contactY2 = contactY1 + 13;

  drawGlobeIcon(idX, contactY2 + 1, iconS, C.cyan);
  doc.font(fontMono).fontSize(7.4).fillColor(C.textMain).text(' viermontstudio.com', idX + iconS + 3, contactY2, { lineBreak: false });

  const gitX = idX + 130;
  drawGithubIcon(gitX, contactY2 + 1, iconS, C.purple);
  doc.font(fontMono).fontSize(7.4).fillColor(C.textMain).text(' github.com/viermontstudio', gitX + iconS + 3, contactY2, { lineBreak: false });

  const inX = idX + 285;
  drawLinkedinIcon(inX, contactY2 + 1, iconS, C.cyan);
  doc.font(fontMono).fontSize(7.4).fillColor(C.textMain).text(' in/viermontstudio', inX + iconS + 3, contactY2, { lineBreak: false });

  // 2. WHOAMI (Perfil)
  Y = 152;
  Y = drawSectionPrompt('whoami --professional-manifesto', 'PERFIL PROFESIONAL & POSICIONAMIENTO', Y);

  const manifestoH = 58;
  doc.roundedRect(innerLeft, Y, innerWidth, manifestoH, 5).fill(C.cardBg).strokeColor(C.cardBorder).lineWidth(0.8).stroke();
  doc.font(fontSans).fontSize(8.1).fillColor(C.textMain).lineGap(3);
  doc.text(
    'Desarrollador en formación (DAM) con trayectoria previa en desarrollo web, diseño gráfico, dibujo artístico y delineación técnica. Combino mi formación en C, C#, Java, SQL, Linux y Ciberseguridad con la responsabilidad, autonomía y excelencia en el trato al cliente desarrolladas a lo largo de más de 18 años de trayectoria laboral continua en otro sector. Retomo mi carrera tecnológica con el objetivo de incorporarme al sector IT, aportando un perfil diferencial: junior en tecnología, senior en oficio, visión práctica y capacidad real de resolver problemas.',
    innerLeft + 12,
    Y + 8,
    { width: innerWidth - 24, align: 'left' }
  );

  // 3. EDUCATION
  Y += manifestoH + 12;
  Y = drawSectionPrompt('cat /etc/education.log', 'FORMACIÓN IT, ACADÉMICA & CIBERSEGURIDAD', Y);

  const eduItems = [
    {
      title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
      sub: 'Jobie FP • Modalidad Oficial Homologada',
      date: '2026 - Actualidad',
      desc: 'Programación estructurada y POO (Java, C#), bases de datos SQL relacionales, entornos de desarrollo y sistemas Linux.',
      color: C.teal,
    },
    {
      title: 'Cursos de Ciberseguridad Defensiva (Pre Security & Cybersecurity 101)',
      sub: 'TryHackMe • Certificación Oficial THM-ODHVAD97QZ',
      date: '2026 - Actualidad',
      desc: 'Fundamentos de redes (TCP/IP, OSI), seguridad defensiva en Linux/Windows, análisis de vulnerabilidades y hardening.',
      color: C.cyan,
    },
    {
      title: 'Campus de Programación (Cursus & Piscina de Acceso C)',
      sub: 'Campus 42 Urduliz (Bizkaia)',
      date: '2021 - 2022',
      desc: 'Programación intensiva en C bajo Unix/Linux: manipulación de punteros, memoria dinámica, Shell scripting, Git y algoritmia.',
      color: C.emeraldLight,
    },
    {
      title: 'Módulo de Programación Informática Java (POO & Lógica Backend)',
      sub: 'BIRT LH (Euskadi) • Formación Profesional Online',
      date: '2022 - 2023',
      desc: 'Paradigma orientado a objetos en Java, encapsulamiento, colecciones (ArrayList/HashMap), control de excepciones y testing.',
      color: C.cyan,
    },
    {
      title: 'Técnico en Preimpresión en Artes Gráficas',
      sub: 'CEINPRO (San Sebastián)',
      date: '1998 - 2000',
      desc: 'Composición tipográfica, colorimetría, diseño gráfico publicitario, fotografía y preparación técnica para producción.',
      color: C.gold,
    },
  ];

  const eduBoxH = 41;
  eduItems.forEach((item) => {
    doc.roundedRect(innerLeft, Y, innerWidth, eduBoxH, 5).fill(C.cardBg).strokeColor(C.cardBorder).lineWidth(0.8).stroke();
    doc.font(fontMonoBold).fontSize(8.5).fillColor(item.color).text(`> ${item.title}`, innerLeft + 10, Y + 6, { lineBreak: false });
    doc.font(fontMonoBold).fontSize(8).fillColor(C.white).text(item.date, innerLeft + innerWidth - 110, Y + 6, { width: 100, align: 'right' });
    doc.font(fontMono).fontSize(7.4).fillColor(C.textMuted).text(item.sub, innerLeft + 10, Y + 18, { lineBreak: false });
    doc.font(fontSans).fontSize(7.4).fillColor(C.textMain).text(item.desc, innerLeft + 10, Y + 28, { width: innerWidth - 20 });
    Y += eduBoxH + 5;
  });

  // 4. GIT REPOS
  Y += 6;
  Y = drawSectionPrompt('git status --repositories --all', 'REPOSITORIOS OFICIALES (github.com/viermontstudio)', Y);

  const repos = [
    { name: 'viermontstudio-website', tech: 'HTML5 • CSS • Vite', desc: 'Plataforma oficial de Viermont Studio. Arquitectura modular, terminal interactiva y optimización visual.' },
    { name: 'DAM-JobieFP', tech: 'Java • SQL • C# • Linux', desc: 'Prácticas y módulos del ciclo DAM: bases de datos relacionales, backend POO y desarrollo multiplataforma.' },
    { name: 'BIRT', tech: 'Java • Programación Orientada a Objetos', desc: 'Ejercicios de programación en Java: dominio de clases, colecciones complejas y control de errores.' },
    { name: 'Aprendeaprogramar.com', tech: 'Lenguaje C • Algoritmia', desc: 'Fundamentos de programación en C desde la base: estructuras de control, funciones y lógica estricta.' },
    { name: '42_Cursus', tech: 'C • Valgrind • Shell • Makefiles', desc: 'Proyectos avanzados en C: gestión directa de memoria (heap), recreación de utilidades Unix y algoritmos.' },
    { name: '42_Pool', tech: 'C • Punteros • Unix • Algoritmos', desc: 'Ejercicios intensivos de programación en C: punteros dobles, estructuras de memoria y resolución bajo presión.' },
  ];

  const colW = (innerWidth - 16) / 3;
  const repoBoxH = 68;

  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < 3; c++) {
      const idx = r * 3 + c;
      const repo = repos[idx];
      const rX = innerLeft + c * (colW + 8);
      const rY = Y + r * (repoBoxH + 7);
      doc.roundedRect(rX, rY, colW, repoBoxH, 5).fill(C.cardBg).strokeColor(C.cardBorder).lineWidth(0.8).stroke();
      doc.font(fontMonoBold).fontSize(7.5).fillColor(C.teal).text(`> ${repo.name}`, rX + 7, rY + 6, { width: colW - 14, lineBreak: false });
      doc.font(fontMono).fontSize(6.2).fillColor(C.cyan).text(repo.tech, rX + 7, rY + 18, { width: colW - 14, lineBreak: false });
      doc.font(fontSans).fontSize(6.8).fillColor(C.textMain).lineGap(1).text(repo.desc, rX + 7, rY + 30, { width: colW - 14 });
    }
  }

  // Footer Pág 1
  doc.font(fontMono).fontSize(7.5).fillColor(C.textDim);
  doc.text('viermontstudio@terminal:~$ [PÁGINA 1 COMPLETADA • CONTINÚA EN PÁGINA 2 CON TRAYECTORIA LABORAL]', innerLeft, H - margin - 22, { align: 'center' });

  // PAGE 2
  doc.addPage();
  drawWindowChrome('viermontstudio@terminal: ~ (Experiencia Laboral & Conocimientos Técnicos)', 2, 2);

  let Y2 = 56;
  Y2 = drawSectionPrompt('history --work-experience -v', 'EXPERIENCIA LABORAL (+18 AÑOS DE TRAYECTORIA CONTINUA)', Y2);

  const jobs = [
    {
      title: 'Caddie Máster & Atención Exclusiva',
      company: 'Real Nuevo Club de Golf de San Sebastián Basozabal',
      date: '2008 - Actualidad (+18 años)',
      tag: '// Resolución autónoma & confidencialidad',
      color: C.gold,
      tasks: [
        'Atención exclusiva a socios y visitantes internacionales en entorno de alta exigencia.',
        'Control y gestión de juego como starter y marshall, garantizando el cumplimiento de normativas.',
        'Resolución autónoma de conflictos, mantenimiento operativo y coordinación continua de instalaciones.',
      ],
      h: 62,
    },
    {
      title: 'Pintor Aerografista, Diseñador Gráfico & Creador Visual Freelance',
      company: 'Viermont Studio (Estudio Propio)',
      date: '2006 - Actualidad',
      tag: '// Precisión milimétrica & desarrollo web',
      color: C.teal,
      tasks: [
        'Personalización artística y aerografía técnica sobre carrocerías, cascos de competición y murales de gran formato.',
        'Diseño de identidades corporativas, logotipos, cartelería comercial y piezas gráficas a medida.',
        'Desarrollo e implementación del sitio web corporativo de Viermont Studio (HTML, CSS y gráficos vectoriales).',
      ],
      h: 62,
    },
    {
      title: 'Diseñador & Programador Web',
      company: 'Letralan / Quick Comunicación Multimedia (San Sebastián)',
      date: '2004 (6 meses)',
      tag: '// Desarrollo web corporativo para clientes comerciales',
      color: C.cyan,
      tasks: [
        'Desarrollo de sitios web corporativos utilizando HTML, CSS, ASP y JavaScript.',
        'Maquetación estructurada, diseño de banners interactivos y optimización de recursos gráficos.',
      ],
      h: 50,
    },
    {
      title: 'Dibujante e Intercalador de Animación Tradicional 2D',
      company: 'Basabe Animation / Sirimiri Films',
      date: '2000 - 2004 (4 años)',
      tag: '// Rigor de dibujo clásico y disciplina fotograma a fotograma',
      color: C.purple,
      tasks: [
        'Producción de series animadas de televisión: «Las tres mellizas», «Juanito Jones», «Tom el dinosaurio».',
        'Intercalación tradicional y control de tiempos de animación con precisión milimétrica.',
      ],
      h: 50,
    },
    {
      title: 'Delineante Proyectista CAD',
      company: 'Geminys / DMT Ingeniería Industrial',
      date: '1997 - 1998, 2002',
      tag: '// Delineación técnica y manuales industriales',
      color: C.gold,
      tasks: [
        'Elaboración de planos técnicos para maquinaria industrial pesada mediante AutoCAD.',
        'Redacción y maquetación técnica de manuales de uso y mantenimiento para maquinaria industrial.',
      ],
      h: 50,
    },
  ];

  jobs.forEach((j) => {
    doc.roundedRect(innerLeft, Y2, innerWidth, j.h, 5).fill(C.cardBg).strokeColor(C.cardBorder).lineWidth(0.8).stroke();
    doc.font(fontMonoBold).fontSize(j.title.length > 45 ? 7.8 : 8.5).fillColor(C.white).text(`> ${j.title}`, innerLeft + 10, Y2 + 6, { width: innerWidth - 190, lineBreak: false });
    doc.font(fontMonoBold).fontSize(7.8).fillColor(j.color).text(j.date, innerLeft + innerWidth - 180, Y2 + 6, { width: 172, align: 'right', lineBreak: false });
    doc.font(fontMonoBold).fontSize(7.5).fillColor(C.teal).text(j.company, innerLeft + 10, Y2 + 18, { lineBreak: false });
    doc.font(fontMono).fontSize(7.2).fillColor(C.textDim).text(j.tag, innerLeft + innerWidth - 260, Y2 + 18, { width: 250, align: 'right', lineBreak: false });

    let tY = Y2 + 30;
    j.tasks.forEach((t) => {
      doc.font(fontSans).fontSize(7.2).fillColor(C.textMain);
      doc.circle(innerLeft + 14, tY + 4, 1.2).fill(C.textMuted);
      doc.text(t, innerLeft + 20, tY, { width: innerWidth - 30, lineBreak: false });
      tY += 9.5;
    });

    Y2 += j.h + 5;
  });

  // OTRA FORMACIÓN
  Y2 += 8;
  Y2 = drawSectionPrompt('cat /etc/certifications.log', 'OTRA FORMACIÓN TÉCNICA & ARTÍSTICA', Y2);

  const certColW = (innerWidth - 10) / 2;
  const certH = 50;

  doc.roundedRect(innerLeft, Y2, certColW, certH, 5).fill(C.cardBg).strokeColor(C.cardBorder).lineWidth(0.8).stroke();
  doc.font(fontMonoBold).fontSize(7.6).fillColor(C.teal).text('> Curso de Diseño y Programación Web (609h)', innerLeft + 8, Y2 + 6);
  doc.font(fontMono).fontSize(7).fillColor(C.textDim).text('— Área (San Sebastián, 2003)', innerLeft + 8, Y2 + 17);
  doc.font(fontMonoBold).fontSize(7.6).fillColor(C.teal).text('> Curso de Aerografía Profesional (80h)', innerLeft + 8, Y2 + 27);
  doc.font(fontMono).fontSize(7).fillColor(C.textDim).text('— Estudio Juanjo Barón (2006)', innerLeft + 8, Y2 + 37);

  const cX2 = innerLeft + certColW + 10;
  doc.roundedRect(cX2, Y2, certColW, certH, 5).fill(C.cardBg).strokeColor(C.cardBorder).lineWidth(0.8).stroke();
  doc.font(fontMonoBold).fontSize(7.6).fillColor(C.gold).text('> Curso Chapista Pintor de Vehículos (760h)', cX2 + 8, Y2 + 6);
  doc.font(fontMono).fontSize(7).fillColor(C.textDim).text('— CIP Andoain (2007)', cX2 + 8, Y2 + 17);
  doc.font(fontMonoBold).fontSize(7.6).fillColor(C.gold).text('> Curso de Dibujo & Animación Tradicional (152h)', cX2 + 8, Y2 + 27);
  doc.font(fontMono).fontSize(7).fillColor(C.textDim).text('— Sirimiri Films (2000 - 2001)', cX2 + 8, Y2 + 37);

  Y2 += certH + 12;

  // STACK TECNICO
  Y2 = drawSectionPrompt('env | grep -E "STACK|LANG|SKILLS"', 'STACK TÉCNICO, HERRAMIENTAS & IDIOMAS', Y2);

  const stackColW = (innerWidth - 16) / 3;
  const stackH = 100;

  // Col 1
  let sX = innerLeft;
  doc.roundedRect(sX, Y2, stackColW, stackH, 5).fill(C.cardBg).strokeColor(C.cardBorder).lineWidth(0.8).stroke();
  doc.font(fontMonoBold).fontSize(7.6).fillColor(C.emeraldLight).text('// LENGUAJES & DESARROLLO', sX + 8, Y2 + 7);
  doc.font(fontMono).fontSize(7).fillColor(C.textMain).lineGap(3);
  doc.text('▪ Lenguajes: C, Java, C#, SQL, Bash\n\n▪ Sistemas: Linux (Ubuntu/Debian), Unix, Windows, macOS\n\n▪ Entornos: Git, GitHub, VS Code, IntelliJ, Vim, VirtualBox\n\n▪ Web: HTML5, CSS, Vite', sX + 8, Y2 + 20, { width: stackColW - 14 });

  // Col 2
  sX += stackColW + 8;
  doc.roundedRect(sX, Y2, stackColW, stackH, 5).fill(C.cardBg).strokeColor(C.cardBorder).lineWidth(0.8).stroke();
  doc.font(fontMonoBold).fontSize(7.6).fillColor(C.cyan).text('// SEGURIDAD, IA & DISEÑO', sX + 8, Y2 + 7);
  doc.font(fontMono).fontSize(7).fillColor(C.textMain).lineGap(3);
  doc.text('▪ Ciberseguridad: Pre Security Path, THM 101, Hardening & Redes\n\n▪ IA Generativa: Google AI Studio, Gemini, Copilot, ChatGPT\n\n▪ Diseño Digital: Photoshop, Illustrator, Affinity Designer, Krita\n\n▪ Oficio Visual: Aerografía técnica, Dibujo clásico, Delineación CAD', sX + 8, Y2 + 20, { width: stackColW - 14 });

  // Col 3
  sX += stackColW + 8;
  doc.roundedRect(sX, Y2, stackColW, stackH, 5).fill(C.cardBg).strokeColor(C.cardBorder).lineWidth(0.8).stroke();
  doc.font(fontMonoBold).fontSize(7.6).fillColor(C.gold).text('// IDIOMAS & APTITUDES', sX + 8, Y2 + 7);
  doc.font(fontMono).fontSize(7).fillColor(C.textMain).lineGap(3);
  doc.text('▪ Español: Nativo\n\n▪ Euskera: B1\n\n▪ Inglés: B1 (Certificado EF SET • Reading C1)\n\n▪ Aptitudes: Madurez profesional, resolución autónoma de problemas, atención al cliente exclusiva, empatía y rigor en el detalle.', sX + 8, Y2 + 20, { width: stackColW - 14 });

  // Footer Pág 2
  doc.font(fontMono).fontSize(7.5).fillColor(C.textDim);
  doc.text('viermontstudio@terminal:~$ status --verify', innerLeft, H - margin - 22, { lineBreak: false });
  doc.font(fontMonoBold).fontSize(7.5).fillColor(C.emeraldLight);
  doc.text('[STATUS: 200 OK • DISPONIBLE PARA INCORPORACIÓN]', innerLeft + innerWidth - 230, H - margin - 22, { width: 230, align: 'right' });

  doc.end();

  return new Promise((resolve, reject) => {
    writeStream.on('finish', resolve);
    writeStream.on('error', reject);
  });
}

// =========================================================================
// 2. GENERAR CV EN TEXTO PLANO 100% ATS (A4 Clásico, Limpio, Neutro)
// =========================================================================
async function generateAtsPlainTextCV() {
  const { generateAtsComplete } = require("./generate_ats_complete_cv.cjs");
  return generateAtsComplete();
}

async function run() {
  console.log('Generating CV Terminal with Phone...');
  await generateTerminalCVWithPhone();
  console.log('Generating CV Plain Text ATS...');
  await generateAtsPlainTextCV();
  console.log('Both PDFs generated successfully!');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
