# 🎨 Viermont Studio — Web Oficial & Portfolio

`Version: v6.0.1` | `TypeScript` | `Vite` | `PHP 8.x` | `SecOps: Hardened` | `License: MIT`  

**Arte y Código** — Plataforma web oficial y portfolio interactivo de **Javier Montero Martínez**.  
🌐 **Web Oficial:** https://viermontstudio.com  

---

#### 📌 Descripción del Proyecto
Plataforma web diseñada para integrar dos trayectorias profesionales complementarias:
1. **Desarrollo de Software y Ciberseguridad Defensiva:** Ciclo DAM (Jobie FP), lenguajes C, Java, SQL, administración Linux/Bash y acreditaciones en TryHackMe (*Pre Security* y *Cybersecurity 101*).
2. **Artes Gráficas y Personalización Artística:** Trayectoria continua de más de 19 años en aerografía de alta precisión, diseño gráfico y delineación técnica en Viermont Studio, junto a 18 años en atención al cliente y gestión operativa de campo en el Real Nuevo Club de Golf Basozabal.

---

#### 🛠️ Metodología & Autoría: AI-Driven Architecture

> *"El arte y la creatividad son propios; la IA es el motor de ejecución tecnológica. La dirección, el diseño y la responsabilidad final del proyecto son 100% humanas."*

El código fuente de esta plataforma (TypeScript, HTML, CSS, PHP) ha sido desarrollado y optimizado mediante herramientas de **Inteligencia Artificial**. El autor no ha escrito manualmente cada línea de código, sino que actúa como **director de proyecto, arquitecto de software, prompt engineer y auditor de seguridad (SecOps)**, asumiendo la responsabilidad técnica y el criterio de diseño final.

##### 📋 Roles de Ingeniería
* 👨‍💻 **Javier Montero — Tech Lead & Security Director (Líder Técnico y Director de Seguridad):** Arquitectura de software, diseño UI/UX, auditoría SecOps y decisiones finales.
* ⚡ **Google AI Studio — Core Developer / Engine (Desarrollador Principal / Motor):** Generación y refactorización del código TypeScript y backend PHP.
* 📚 **Gemini Notebook — Knowledge Manager & Technical Writer (Gestor de Conocimiento y Redactor Técnico):** Consolidación de documentación técnica, memorias y requisitos.
* 🛡️ **ChatGPT & Claude — QA & Security Code Reviewers (Revisores de Código y Ciberseguridad):** Análisis estático de código, auditoría de vulnerabilidades y verificación SecOps.
* ⌨️ **GitHub Copilot — Inline Pair Programmer (Programador en Pareja Integrado):** Asistencia en tiempo real y optimización de sintaxis en el IDE.

---

#### 🛡️ Ciberseguridad Defensiva & SecOps (4 Pilares)
1. **Superficie de Ataque Cero:** Cliente 100% estático y de solo lectura; erradicación de paneles de administración remotos y middlewares de subida de archivos (inmune a RCE e inyecciones).
2. **Formulario Seguro (`contact.php`):** Validación estricta en servidor con protección *Honeypot* anti-bot, limitador de frecuencia por IP (*Rate-Limiting*) y prevención de inyección de cabeceras en correo (CRLF).
3. **Hardening HTTP (`.htaccess`):** Implementación de cabeceras de seguridad estrictas (`HSTS`, `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `CSP`) y bloqueo de acceso HTTP a archivos internos de infraestructura (`package.json`, `.env*`, `.git/`, etc.).
4. **Privacidad por Diseño (RGPD):** Procesamiento nativo en servidor propio sin intermediarios ni cesión de datos a plataformas de terceros, con casilla de consentimiento obligatorio verificada en backend.

---

#### 🛠️ Arquitectura y Stack Tecnológico
* **Frontend:** HTML5 semántico accesible, Tailwind CSS y Vanilla TypeScript modular.
* **Empaquetado & Compilación:** Vite y esbuild para la generación de un bundle ECMAScript modular (`src/scripts/main.ts`) ultraligero (~86 KB) optimizado para navegadores modernos.
* **Galería Interactiva Bento:** Catálogo público compuesto por 61 obras organizadas en retícula modular con compresión estricta a formato WebP (reducción de peso visual del 93%).
* **Terminal Bash Emulada:** Entorno de consola interactivo en cliente (navegador) con historial de comandos, ayuda contextual, visualizador de currículum en Markdown y sincronización en tiempo real con la API pública de GitHub (`@viermontstudio`).

---

#### 📂 Estructura del Repositorio
```text
├── index.html              # Punto de entrada principal con pre-renderizado estático
├── contact.php             # Procesador nativo del formulario de contacto con validación RGPD
├── .htaccess               # Reglas de endurecimiento, cabeceras SecOps y caché para LiteSpeed/Apache
├── .gitignore              # Reglas de exclusión para dependencias y carpetas privadas/máster
├── package.json            # Configuración de dependencias y scripts de construcción
├── tsconfig.json           # Configuración del compilador TypeScript
├── vite.config.ts          # Configuración de Vite y plugin Tailwind CSS
├── public/                 # Archivos estáticos directos (favicons, manifest, imágenes WebP, CV PDF)
├── docs/                   # Documentación técnica, auditorías y memorias evolutivas (V1 a V6)
├── versions/               # (Local / Excluido en .gitignore) Paquetes .zip de respaldo de versiones anteriores
└── research/               # (Local / Excluido en .gitignore) Archivos máster en alta resolución y material de trabajo
```

*Nota: Se excluyen del repositorio remoto los archivos de respaldo local (`versions/`), los archivos fuente/máster en alta resolución (`research/`) y la documentación interna, manteniendo en `public/` la versión optimizada de las obras en formato WebP para la galería pública.*

---

#### 🚀 Instalación y Desarrollo Local
##### Requisitos previos
* Node.js (versión 18 o superior)
* npm (versión 9 o superior)

##### Pasos
1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/viermontstudio/viermontstudio-website.git
   cd viermontstudio-website
   ```
2. **Instalar dependencias:**
   ```bash
   npm install
   ```
3. **Iniciar el servidor de desarrollo local:**
   ```bash
   npm run dev
   ```
   Abre http://localhost:3000 en tu navegador.
4. **Validación de tipos y linting:**
   ```bash
   npm run lint
   ```
5. **Compilar proyecto:**
   ```bash
   npm run build
   ```
   Los archivos optimizados se generarán en la carpeta `dist/`.

---

#### 🔒 Despliegue en Servidor (cPanel / LiteSpeed / Apache)
1. Copiar los archivos estáticos generados en `dist/` al directorio `public_html/`.
2. Asegurarse de que el archivo `.htaccess` esté presente en `public_html/` para activar las reglas de seguridad y bloqueo de archivos internos.
3. El archivo `contact.php` procesará automáticamente los mensajes de contacto tras verificar el consentimiento RGPD en servidor.

---

#### 👤 Autor
**Javier Montero Martínez**
* Viermont Studio: https://viermontstudio.com
* GitHub: @viermontstudio
* Email: viermontstudio@gmail.com

---

#### 📄 Licencia
Código fuente bajo licencia MIT. Las obras artísticas, fotografías, logotipos y diseños contenidos en este repositorio son propiedad intelectual exclusiva de Javier Montero Martínez (Viermont Studio).
