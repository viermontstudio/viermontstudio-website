### Viermont Studio — Web Oficial (v6.0)

**Arte y Código** — Plataforma web oficial y portfolio interactivo de **Javier Montero Martínez**.  
Disponible en producción en: [https://viermontstudio.com](https://viermontstudio.com)

---

#### 📌 Descripción del Proyecto
Plataforma web diseñada para integrar dos trayectorias profesionales complementarias:
1. **Desarrollo de Software y Ciberseguridad Defensiva:** Ciclo DAM (Jobie FP), lenguajes C, Java, SQL, administración Linux/Bash y acreditaciones en TryHackMe (*Pre Security* y *Cybersecurity 101*).
2. **Artes Gráficas y Personalización Artística:** Trayectoria continua de más de 19 años en aerografía de alta precisión, diseño gráfico y delineación técnica en Viermont Studio, junto a 18 años en atención al cliente y gestión operativa de campo en el Real Nuevo Club de Golf Basozabal.

---

#### 💡 Transparencia y Declaración de Autoría (IA & Criterio Humano)
* **Código Generado Asistido por IA:** El código fuente de esta web (TypeScript, HTML, CSS, PHP y archivos de configuración) ha sido desarrollado y generado mediante herramientas de **Inteligencia Artificial** (Google AI Studio, Claude, ChatGPT, Copilot). El código no ha sido escrito manualmente línea por línea por el autor.
* **Rol del Autor (Arquitectura y Dirección):** Javier Montero actúa como **director de proyecto, arquitecto de software, prompt engineer y auditor de seguridad (SecOps)**, definiendo la estructura, el diseño visual, las reglas de negocio, la seguridad web y la selección de componentes.
* **Filosofía:** "El arte y la creatividad son propios; la IA es el motor de ejecución tecnológica. La dirección, el diseño y la responsabilidad final del proyecto son 100% humanas."

---

#### 🛠️ Arquitectura y Stack Tecnológico
* **Frontend:** HTML5 semántico accesible, Tailwind CSS y Vanilla TypeScript modular.
* **Empaquetado & Compilación:** [Vite](https://vitejs.dev/) y [esbuild](https://esbuild.github.io/) para la generación de un bundle ECMAScript modular (`src/scripts/main.ts`) ultraligero (~86 KB) optimizado para navegadores modernos y servidores HTTP/2.
* **Backend de Formulario (`contact.php`):** Procesador autónomo ejecutado de forma nativa en servidor cPanel con LiteSpeed (Ginernet, España / UE):
  * **Anti-Spam:** Campo trampa *honeypot* invisible para bots.
  * **Rate Limiting:** Control de frecuencia anti-flood por IP (mínimo 8 segundos entre solicitudes).
  * **Saneamiento:** Prevención de *Header Injection* (CRLF) y limitación estricta de longitud.
  * **Consentimiento RGPD:** Verificación obligatoria en servidor de la casilla de aceptación informada antes de procesar el envío.
  * **Entrega Directa:** Despacho inmediato mediante el agente local de transporte de correo (Exim MTA).
* **Terminal Bash Emulada:** Entorno de consola interactivo en cliente (navegador) con historial de comandos, ayuda contextual, visualizador de currículum en Markdown y sincronización en tiempo real con la API pública de GitHub (`@viermontstudio`).
* **Seguridad Web (.htaccess):**
  * Bloqueo estricto de acceso HTTP a archivos de desarrollo e infraestructura (`package.json`, `tsconfig.json`, `vite.config.ts`, `metadata.json`, `.git/`, `.env*`, etc.).
  * Cabeceras de seguridad SecOps: `Strict-Transport-Security` (HSTS max-age 31536000), `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Permissions-Policy` y `Content-Security-Policy-Report-Only`.
  * Optimización de rendimiento: compresión Gzip (`mod_deflate`) y caché con revalidación HTTP 304 (`no-cache, must-revalidate`).

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
* [Node.js](https://nodejs.org/) (versión 18 o superior)
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
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.
4. **Validación de tipos y linting:**
   ```bash
   npm run lint
   ```
5. **Compilar para producción:**
   ```bash
   npm run build
   ```
   Los archivos optimizados y listos para producción se generarán en la carpeta `dist/`.

---

#### 🔒 Despliegue en Servidor (cPanel / LiteSpeed / Apache)
1. Copiar los archivos estáticos generados en `dist/` al directorio `public_html/`.
2. Asegurarse de que el archivo `.htaccess` esté presente en `public_html/` para activar las reglas de seguridad y bloqueo de archivos internos.
3. El archivo `contact.php` procesará automáticamente los mensajes de contacto tras verificar el consentimiento RGPD en servidor.

---

#### 🤖 Herramientas e Inteligencia Artificial
* **Herramientas de generación y apoyo:** Google AI Studio, Claude, ChatGPT, Microsoft Copilot.
* *La curiosidad señala el camino. La creatividad imagina las posibilidades. La IA ejecuta el código; la mente humana marca el rumbo.*

---

#### 👤 Autor
**Javier Montero Martínez**
* Viermont Studio: [viermontstudio.com](https://viermontstudio.com)
* GitHub: [@viermontstudio](https://github.com/viermontstudio)
* LinkedIn: [linkedin.com/in/viermontstudio](https://www.linkedin.com/in/viermontstudio)
* Email: [viermontstudio@gmail.com](mailto:viermontstudio@gmail.com)

---

#### 📄 Licencia
Código fuente bajo licencia [MIT](LICENSE). Las obras artísticas, fotografías, logotipos y diseños contenidos en este repositorio son propiedad intelectual exclusiva de Javier Montero Martínez (Viermont Studio).
