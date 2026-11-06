const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

function generateAtsComplete() {
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 20, bottom: 20, left: 20, right: 20 },
    autoFirstPage: true,
    bufferPages: true,
  });

  const fontSans = '/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf';
  const fontSansBold = '/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf';
  const fontSansItalic = '/usr/share/fonts/truetype/liberation/LiberationSans-Italic.ttf';

  const W = 595.28;
  const H = 841.89;
  const margin = 24;
  const contentWidth = W - margin * 2; // 547.28
  const innerLeft = margin;
  const innerWidth = contentWidth;

  const C = {
    bg: '#ffffff',
    textDark: '#0f172a',
    textMain: '#334155',
    textMuted: '#64748b',
    border: '#cbd5e1',
    lineDark: '#0f172a',
    cardBg: '#f8fafc',
    cardBorder: '#e2e8f0',
  };

  function drawAtsHeader(title, yPos) {
    doc.font(fontSansBold).fontSize(9.5).fillColor(C.textDark);
    doc.text(title.toUpperCase(), innerLeft, yPos, { lineBreak: false });
    doc.moveTo(innerLeft, yPos + 13).lineTo(innerLeft + innerWidth, yPos + 13).strokeColor(C.border).lineWidth(0.8).stroke();
    return yPos + 19;
  }

  // ==========================================
  // PÁGINA 1: PERFIL, FORMACIÓN, REPOSITORIOS
  // ==========================================
  doc.rect(0, 0, W, H).fill(C.bg);

  let Y = margin;

  // Encabezado
  doc.font(fontSansBold).fontSize(20).fillColor(C.textDark).text('JAVIER MONTERO', innerLeft, Y, { align: 'center', width: innerWidth });
  Y += 23;
  doc.font(fontSansBold).fontSize(10).fillColor(C.textMain).text('DESARROLLADOR DE SOFTWARE (DAM) & ARTISTA VISUAL', innerLeft, Y, { align: 'center', width: innerWidth });
  Y += 16;
  doc.font(fontSansBold).fontSize(8.5).fillColor(C.textDark).text('Email: viermontstudio@gmail.com   |   Ubicación: 20870 Elgoibar (Gipuzkoa), País Vasco', innerLeft, Y, { align: 'center', width: innerWidth });
  Y += 12;
  doc.font(fontSans).fontSize(8).fillColor(C.textMuted).text('Web: https://viermontstudio.com   |   LinkedIn: linkedin.com/in/viermontstudio   |   GitHub: github.com/viermontstudio', innerLeft, Y, { align: 'center', width: innerWidth });
  Y += 15;
  doc.moveTo(innerLeft, Y).lineTo(innerLeft + innerWidth, Y).strokeColor(C.lineDark).lineWidth(1.2).stroke();
  Y += 8;

  // 1. Perfil Profesional
  Y = drawAtsHeader('Perfil Profesional & Posicionamiento', Y);
  doc.roundedRect(innerLeft, Y, innerWidth, 54, 4).fill(C.cardBg).strokeColor(C.cardBorder).lineWidth(0.7).stroke();
  doc.font(fontSans).fontSize(8.1).fillColor(C.textMain).lineGap(2.5);
  doc.text(
    'Desarrollador en formación (DAM) con trayectoria previa en desarrollo web, diseño gráfico, dibujo artístico y delineación técnica. Combino mi formación en C, C#, Java, SQL, Linux y Ciberseguridad con la responsabilidad, autonomía y excelencia en el trato al cliente desarrolladas a lo largo de más de 18 años de trayectoria laboral continua en otro sector. Retomo mi carrera tecnológica con el objetivo de incorporarme al sector IT, aportando un perfil diferencial: junior en tecnología, senior en oficio, visión práctica y capacidad real de resolver problemas.',
    innerLeft + 10,
    Y + 7,
    { width: innerWidth - 20 }
  );
  Y += 54 + 10;

  // 2. Formación Académica & Certificaciones IT
  Y = drawAtsHeader('Formación Académica & Certificaciones IT', Y);
  const edu = [
    { t: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)', d: '2026 - Actualidad', i: 'Jobie FP • Modalidad Oficial Homologada', s: 'Programación estructurada y POO (Java, C#), bases de datos SQL relacionales, entornos de desarrollo y sistemas Linux.' },
    { t: 'Cursos de Ciberseguridad Defensiva (Pre Security & Cybersecurity 101)', d: '2026 - Actualidad', i: 'TryHackMe • Certificación Oficial THM-ODHVAD97QZ', s: 'Fundamentos de redes (TCP/IP, modelo OSI), seguridad defensiva en Linux/Windows, análisis de vulnerabilidades y hardening.' },
    { t: 'Campus de Programación (Cursus & Piscina de Acceso C)', d: '2021 - 2022', i: 'Campus 42 Urduliz (Bizkaia)', s: 'Programación intensiva en C bajo Unix/Linux: manipulación de punteros, memoria dinámica (heap), Shell scripting, Git y algoritmia.' },
    { t: 'Módulo de Programación Informática Java (POO & Lógica Backend)', d: '2022 - 2023', i: 'BIRT LH (Euskadi) • Formación Profesional Online', s: 'Paradigma orientado a objetos en Java, encapsulamiento, colecciones complejas (ArrayList/HashMap), control de excepciones y testing.' },
    { t: 'Técnico en Preimpresión en Artes Gráficas', d: '1998 - 2000', i: 'CEINPRO (San Sebastián)', s: 'Composición tipográfica, colorimetría, diseño gráfico publicitario, fotografía y preparación técnica para producción industrial.' },
  ];

  const eduH = 43;
  edu.forEach((e) => {
    doc.roundedRect(innerLeft, Y, innerWidth, eduH, 4).fill(C.cardBg).strokeColor(C.cardBorder).lineWidth(0.6).stroke();
    doc.font(fontSansBold).fontSize(8.5).fillColor(C.textDark).text(e.t, innerLeft + 8, Y + 5, { width: innerWidth - 110, lineBreak: false });
    doc.font(fontSansBold).fontSize(8).fillColor(C.textMuted).text(e.d, innerLeft + innerWidth - 110, Y + 5, { width: 102, align: 'right' });
    doc.font(fontSansItalic).fontSize(7.5).fillColor(C.textMuted).text(e.i, innerLeft + 8, Y + 17, { lineBreak: false });
    doc.font(fontSans).fontSize(7.5).fillColor(C.textMain).text(e.s, innerLeft + 8, Y + 28, { width: innerWidth - 16 });
    Y += eduH + 5;
  });
  Y += 5;

  // 3. Proyectos Técnicos & Repositorios de Código
  Y = drawAtsHeader('Proyectos Técnicos & Repositorios de Código (github.com/viermontstudio)', Y);
  const repos = [
    { n: 'viermontstudio-website', tech: 'HTML5 • CSS • Vite', d: 'Plataforma oficial de Viermont Studio. Arquitectura modular, terminal interactiva y optimización visual de alto rendimiento.' },
    { n: 'DAM-JobieFP', tech: 'Java • SQL • C# • Linux', d: 'Prácticas y módulos del ciclo DAM: bases de datos relacionales, backend POO y desarrollo multiplataforma.' },
    { n: 'BIRT', tech: 'Java • POO', d: 'Ejercicios de programación en Java: dominio de clases, encapsulamiento, colecciones complejas y control de errores.' },
    { n: 'Aprendeaprogramar.com', tech: 'Lenguaje C • Algoritmia', d: 'Fundamentos de programación en C desde la base: estructuras de control, funciones y lógica estricta.' },
    { n: '42_Cursus', tech: 'C • Valgrind • Makefiles', d: 'Proyectos avanzados en C: gestión directa de memoria (heap), recreación de utilidades Unix y algoritmos.' },
    { n: '42_Pool', tech: 'C • Punteros • Unix', d: 'Ejercicios intensivos de programación en C: punteros dobles, estructuras de memoria y resolución bajo presión.' },
  ];

  const colW = (innerWidth - 12) / 3;
  const repoH = 68;
  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < 3; c++) {
      const idx = r * 3 + c;
      const repo = repos[idx];
      const rX = innerLeft + c * (colW + 6);
      const rY = Y + r * (repoH + 6);
      doc.roundedRect(rX, rY, colW, repoH, 4).fill(C.cardBg).strokeColor(C.cardBorder).lineWidth(0.6).stroke();
      doc.font(fontSansBold).fontSize(7.8).fillColor(C.textDark).text(repo.n, rX + 6, rY + 6, { width: colW - 12, lineBreak: false });
      doc.font(fontSansItalic).fontSize(6.8).fillColor(C.textMuted).text(repo.tech, rX + 6, rY + 18, { width: colW - 12, lineBreak: false });
      doc.font(fontSans).fontSize(6.8).fillColor(C.textMain).lineGap(1).text(repo.d, rX + 6, rY + 30, { width: colW - 12 });
    }
  }
  Y += 2 * (repoH + 6) + 4;

  // Pie Pág 1
  doc.font(fontSans).fontSize(7.5).fillColor(C.textMuted);
  doc.text('Javier Montero — Currículum Vitae   |   Página 1 de 2   (Continúa en página 2 con Experiencia Laboral y Competencias)', innerLeft, H - margin - 8, { align: 'center', width: innerWidth });

  // ==========================================
  // PÁGINA 2: EXPERIENCIA, OTRA FORMACIÓN, SKILLS
  // ==========================================
  doc.addPage();
  doc.rect(0, 0, W, H).fill(C.bg);

  let Y2 = margin;

  // Mini Header Pág 2
  doc.font(fontSansBold).fontSize(8.5).fillColor(C.textDark).text('JAVIER MONTERO', innerLeft, Y2, { lineBreak: false });
  doc.font(fontSans).fontSize(8).fillColor(C.textMuted).text(' — Currículum Vitae   |   Email: viermontstudio@gmail.com', innerLeft + 85, Y2, { lineBreak: false });
  doc.font(fontSansBold).fontSize(8).fillColor(C.textDark).text('Página 2 de 2', innerLeft + innerWidth - 80, Y2, { width: 80, align: 'right' });
  Y2 += 12;
  doc.moveTo(innerLeft, Y2).lineTo(innerLeft + innerWidth, Y2).strokeColor(C.lineDark).lineWidth(1).stroke();
  Y2 += 8;

  // 4. Experiencia Laboral
  Y2 = drawAtsHeader('Experiencia Laboral (+18 Años de Trayectoria Continua)', Y2);
  const jobs = [
    {
      title: 'Caddie Máster & Atención Exclusiva',
      company: 'Real Nuevo Club de Golf de San Sebastián Basozabal',
      date: '2008 - Actualidad (+18 años)',
      tag: 'Resolución autónoma & confidencialidad en entorno de alta exigencia',
      tasks: [
        'Atención exclusiva a socios y visitantes internacionales en entorno de alta exigencia.',
        'Control y gestión de juego como starter y marshall, garantizando el cumplimiento de normativas.',
        'Resolución autónoma de conflictos, mantenimiento operativo y coordinación continua de instalaciones.'
      ],
      h: 62
    },
    {
      title: 'Pintor Aerografista, Diseñador Gráfico & Creador Visual Freelance',
      company: 'Viermont Studio (Estudio Propio)',
      date: '2006 - Actualidad',
      tag: 'Precisión milimétrica, diseño gráfico comercial y desarrollo web',
      tasks: [
        'Personalización artística y aerografía técnica sobre carrocerías, cascos de competición y murales de gran formato.',
        'Diseño de identidades corporativas, logotipos, cartelería comercial y piezas gráficas a medida.',
        'Desarrollo e implementación del sitio web corporativo de Viermont Studio (HTML, CSS y gráficos vectoriales).'
      ],
      h: 62
    },
    {
      title: 'Diseñador & Programador Web',
      company: 'Letralan / Quick Comunicación Multimedia (San Sebastián)',
      date: '2004 (6 meses)',
      tag: 'Desarrollo web corporativo para clientes comerciales',
      tasks: [
        'Desarrollo de sitios web corporativos utilizando HTML, CSS, ASP y JavaScript.',
        'Maquetación estructurada, diseño de banners interactivos y optimización de recursos gráficos.'
      ],
      h: 50
    },
    {
      title: 'Dibujante e Intercalador de Animación Tradicional 2D',
      company: 'Basabe Animation / Sirimiri Films',
      date: '2000 - 2004 (4 años)',
      tag: 'Rigor de dibujo clásico y disciplina fotograma a fotograma',
      tasks: [
        'Producción de series animadas de televisión: «Las tres mellizas», «Juanito Jones», «Tom el dinosaurio».',
        'Intercalación tradicional y control de tiempos de animación con precisión milimétrica.'
      ],
      h: 50
    },
    {
      title: 'Delineante Proyectista CAD',
      company: 'Geminys / DMT Ingeniería Industrial',
      date: '1997 - 1998, 2002',
      tag: 'Delineación técnica y manuales industriales',
      tasks: [
        'Elaboración de planos técnicos para maquinaria industrial pesada mediante AutoCAD.',
        'Redacción y maquetación técnica de manuales de uso y mantenimiento para maquinaria industrial.'
      ],
      h: 50
    }
  ];

  jobs.forEach((j) => {
    doc.roundedRect(innerLeft, Y2, innerWidth, j.h, 4).fill(C.cardBg).strokeColor(C.cardBorder).lineWidth(0.6).stroke();
    doc.font(fontSansBold).fontSize(8.5).fillColor(C.textDark).text(j.title, innerLeft + 8, Y2 + 5, { width: innerWidth - 140, lineBreak: false });
    doc.font(fontSansBold).fontSize(8).fillColor(C.textMuted).text(j.date, innerLeft + innerWidth - 140, Y2 + 5, { width: 132, align: 'right' });
    doc.font(fontSansBold).fontSize(7.5).fillColor(C.textMain).text(j.company, innerLeft + 8, Y2 + 16, { lineBreak: false });
    doc.font(fontSansItalic).fontSize(7).fillColor(C.textMuted).text('// ' + j.tag, innerLeft + 250, Y2 + 16, { width: innerWidth - 260, align: 'right' });

    let tY = Y2 + 28;
    j.tasks.forEach((t) => {
      doc.font(fontSans).fontSize(7.2).fillColor(C.textMain);
      doc.circle(innerLeft + 12, tY + 4, 1.2).fill(C.textMuted);
      doc.text(t, innerLeft + 18, tY, { width: innerWidth - 28, lineBreak: false });
      tY += 9.5;
    });

    Y2 += j.h + 5;
  });

  Y2 += 4;

  // 5. Otra Formación
  Y2 = drawAtsHeader('Otra Formación Técnica & Artística', Y2);
  const certColW = (innerWidth - 10) / 2;
  const certH = 46;

  doc.roundedRect(innerLeft, Y2, certColW, certH, 4).fill(C.cardBg).strokeColor(C.cardBorder).lineWidth(0.6).stroke();
  doc.font(fontSansBold).fontSize(7.6).fillColor(C.textDark).text('Curso de Diseño y Programación Web (609h)', innerLeft + 8, Y2 + 6);
  doc.font(fontSans).fontSize(7).fillColor(C.textMuted).text('— Área (San Sebastián, 2003)', innerLeft + 8, Y2 + 16);
  doc.font(fontSansBold).fontSize(7.6).fillColor(C.textDark).text('Curso de Aerografía Profesional (80h)', innerLeft + 8, Y2 + 26);
  doc.font(fontSans).fontSize(7).fillColor(C.textMuted).text('— Estudio Juanjo Barón (2006)', innerLeft + 8, Y2 + 36);

  const cX2 = innerLeft + certColW + 10;
  doc.roundedRect(cX2, Y2, certColW, certH, 4).fill(C.cardBg).strokeColor(C.cardBorder).lineWidth(0.6).stroke();
  doc.font(fontSansBold).fontSize(7.6).fillColor(C.textDark).text('Curso Chapista Pintor de Vehículos (760h)', cX2 + 8, Y2 + 6);
  doc.font(fontSans).fontSize(7).fillColor(C.textMuted).text('— CIP Andoain (2007)', cX2 + 8, Y2 + 16);
  doc.font(fontSansBold).fontSize(7.6).fillColor(C.textDark).text('Curso de Dibujo & Animación Tradicional (152h)', cX2 + 8, Y2 + 26);
  doc.font(fontSans).fontSize(7).fillColor(C.textMuted).text('— Sirimiri Films (2000 - 2001)', cX2 + 8, Y2 + 36);

  Y2 += certH + 10;

  // 6. Stack Técnico & Competencias
  Y2 = drawAtsHeader('Competencias Técnicas, Herramientas & Idiomas', Y2);
  const stackColW = (innerWidth - 16) / 3;
  const stackH = 92;

  // Col 1
  let sX = innerLeft;
  doc.roundedRect(sX, Y2, stackColW, stackH, 4).fill(C.cardBg).strokeColor(C.cardBorder).lineWidth(0.6).stroke();
  doc.font(fontSansBold).fontSize(7.5).fillColor(C.textDark).text('LENGUAJES & DESARROLLO', sX + 7, Y2 + 6);
  doc.font(fontSans).fontSize(6.9).fillColor(C.textMain).lineGap(2.5);
  doc.text('▪ Lenguajes: C, Java, C#, SQL, Bash\n\n▪ Sistemas: Linux (Ubuntu/Debian), Unix, Windows, macOS\n\n▪ Entornos: Git, GitHub, VS Code, IntelliJ, Vim, VirtualBox\n\n▪ Web: HTML5, CSS, Vite', sX + 7, Y2 + 18, { width: stackColW - 14 });

  // Col 2
  sX += stackColW + 8;
  doc.roundedRect(sX, Y2, stackColW, stackH, 4).fill(C.cardBg).strokeColor(C.cardBorder).lineWidth(0.6).stroke();
  doc.font(fontSansBold).fontSize(7.5).fillColor(C.textDark).text('SEGURIDAD, IA & DISEÑO', sX + 7, Y2 + 6);
  doc.font(fontSans).fontSize(6.9).fillColor(C.textMain).lineGap(2.5);
  doc.text('▪ Ciberseguridad: Pre Security Path, THM 101, Hardening & Redes\n\n▪ IA Generativa: Google AI Studio, Gemini, Copilot, ChatGPT\n\n▪ Diseño Digital: Photoshop, Illustrator, Affinity Designer, Krita\n\n▪ Oficio Visual: Aerografía técnica, Dibujo clásico, Delineación CAD', sX + 7, Y2 + 18, { width: stackColW - 14 });

  // Col 3
  sX += stackColW + 8;
  doc.roundedRect(sX, Y2, stackColW, stackH, 4).fill(C.cardBg).strokeColor(C.cardBorder).lineWidth(0.6).stroke();
  doc.font(fontSansBold).fontSize(7.5).fillColor(C.textDark).text('IDIOMAS & APTITUDES', sX + 7, Y2 + 6);
  doc.font(fontSans).fontSize(6.9).fillColor(C.textMain).lineGap(2.5);
  doc.text('▪ Español: Nativo\n\n▪ Euskera: B1\n\n▪ Inglés: B1 (Certificado EF SET • Reading C1)\n\n▪ Aptitudes: Madurez profesional, resolución autónoma de problemas, atención al cliente exclusiva, empatía y rigor en el detalle.', sX + 7, Y2 + 18, { width: stackColW - 14 });

  // Pie Pág 2
  doc.font(fontSans).fontSize(7.5).fillColor(C.textMuted);
  doc.text('Javier Montero — Currículum Vitae   |   Página 2 de 2   |   Disponible para incorporación inmediata', innerLeft, H - margin - 8, { align: 'center', width: innerWidth });

  const outputPath = path.resolve(__dirname, '../public/CV_Javier_Montero_ATS_TextoPlano.pdf');
  const writeStream = fs.createWriteStream(outputPath);
  doc.pipe(writeStream);
  doc.end();

  return new Promise((resolve, reject) => {
    writeStream.on('finish', () => {
      console.log('CV ATS Generated Successfully! File: public/CV_Javier_Montero_ATS_TextoPlano.pdf');
      resolve();
    });
    writeStream.on('error', reject);
  });
}

if (require.main === module) {
  generateAtsComplete();
}

module.exports = { generateAtsComplete };
