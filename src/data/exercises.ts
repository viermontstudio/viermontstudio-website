export interface Exercise {
  comando: string;
  nombre: string;
  lenguaje: string;
  etiqueta: string;
  colorChip: string;
  salidaHtml: string;
}

export const MIS_EJERCICIOS_VIERMONT = [
          {
            comando: "bash monitoring.sh",
            nombre: "Born2beRoot Monitor",
            lenguaje: "Bash / SysAdmin",
            etiqueta: "42 Cursus",
            colorChip: "text-emerald-400",
            salidaHtml: `
              <div class="text-emerald-400 font-bold">[42 Cursus &bull; 01_Born2beRoot] bash monitoring.sh</div>
              <div class="p-3 my-2 rounded bg-black/60 border border-emerald-500/20 text-gray-200 font-mono text-[11px] leading-relaxed space-y-1">
                <div class="text-teal-300 font-semibold">Broadcast message from root@debian (tty1) :</div>
                <div class="pl-2 border-l-2 border-emerald-500/30 space-y-0.5 text-gray-300">
                  <div>&bull; <span class="text-gray-400">Architecture:</span> Linux debian 5.10.0-14-amd64 #1 SMP Debian 5.10.113-1 x86_64 GNU/Linux</div>
                  <div>&bull; <span class="text-gray-400">CPU physical:</span> 1 &bull; <span class="text-gray-400">vCPU:</span> 1</div>
                  <div>&bull; <span class="text-gray-400">Memory Usage:</span> <span class="text-emerald-400">412/1984MB (20.76%)</span></div>
                  <div>&bull; <span class="text-gray-400">Disk Usage:</span> <span class="text-emerald-400">1542/30.2Gb (5%)</span></div>
                  <div>&bull; <span class="text-gray-400">CPU load:</span> 1.2%</div>
                  <div>&bull; <span class="text-gray-400">Last boot:</span> 2026-10-15 09:14</div>
                  <div>&bull; <span class="text-gray-400">LVM use:</span> <span class="text-emerald-400 font-bold">yes</span></div>
                  <div>&bull; <span class="text-gray-400">Connections TCP:</span> <span class="text-emerald-400">1 ESTABLISHED</span></div>
                  <div>&bull; <span class="text-gray-400">User log:</span> 1</div>
                  <div>&bull; <span class="text-gray-400">Network:</span> IP 192.168.1.42 (08:00:27:ae:71:02)</div>
                  <div>&bull; <span class="text-gray-400">Sudo:</span> 14 cmd</div>
                </div>
              </div>
              <div class="text-emerald-400">&check; Script de monitorización del sistema ejecutado correctamente (42 Urduliz).</div>`
          },
          {
            comando: "make libft",
            nombre: "Librería C Libft",
            lenguaje: "C / Makefile",
            etiqueta: "42 Cursus",
            colorChip: "text-teal-300",
            salidaHtml: `
              <div class="text-teal-300 font-bold">[42 Cursus &bull; 00_Libft] make -C 42_Cursus/00_Libft</div>
              <div class="p-3 my-2 rounded bg-black/60 border border-teal-500/20 text-gray-300 font-mono text-[11px] space-y-1">
                <div><span class="text-gray-500">$</span> gcc -Wall -Wextra -Werror -c ft_strlen.c ft_memset.c ft_bzero.c ft_memcpy.c ft_memmove.c</div>
                <div><span class="text-gray-500">$</span> gcc -Wall -Wextra -Werror -c ft_strdup.c ft_calloc.c ft_substr.c ft_strjoin.c ft_strtrim.c ft_split.c ft_itoa.c</div>
                <div><span class="text-gray-500">$</span> gcc -Wall -Wextra -Werror -c ft_lstnew.c ft_lstadd_front.c ft_lstsize.c ft_lstlast.c ft_lstclear.c</div>
                <div class="text-yellow-300"><span class="text-gray-500">$</span> ar rcs libft.a *.o</div>
                <div class="text-emerald-400 font-semibold pt-1">&check; libft.a generada con éxito &bull; Norminette OK &bull; 0 memory leaks.</div>
              </div>
              <div class="text-teal-300">&check; Reimplementación completa de la biblioteca estándar de C terminada.</div>`
          },
          {
            comando: "java BIRT_Prog",
            nombre: "Java Backend & POO",
            lenguaje: "Java",
            etiqueta: "BIRT LH",
            colorChip: "text-blue-400",
            salidaHtml: `
              <div class="text-blue-400 font-bold">[BIRT LH &bull; DAM] javac PROG03_01.java &amp;&amp; java PROG03_01</div>
              <div class="p-3 my-2 rounded bg-black/60 border border-blue-500/20 text-gray-200 font-mono text-[11px] space-y-1">
                <div><span class="text-gray-500">// Módulo de Programación BIRT LH:</span> <span class="text-yellow-300">Java POO &amp; Persistencia</span></div>
                <div><span class="text-gray-500">// Estructura:</span> Clases de dominio, encapsulamiento, colecciones (ArrayList / HashMap).</div>
                <div><span class="text-gray-500">// Validación:</span> Control riguroso de excepciones (try-catch-finally) y tipado estricto.</div>
                <div class="text-emerald-400 font-bold pt-1">&check; Tests unitarios superados: 12/12 &bull; Código de salida: 0 (OK)</div>
              </div>
              <div class="text-emerald-400">&check; Módulos Java POO de BIRT completados.</div>`
          },
          {
            comando: "java CifradoCesar",
            nombre: "Cifrado César & Criptografía",
            lenguaje: "Java / Criptografía",
            etiqueta: "DAM & TryHackMe",
            colorChip: "text-amber-400",
            salidaHtml: `
              <div class="text-amber-400 font-bold">[DAM &bull; Criptografía Aplicada] javac CifradoCesar.java &amp;&amp; java CifradoCesar</div>
              <div class="p-3 my-2 rounded bg-black/60 border border-amber-500/20 text-gray-200 font-mono text-[11px] space-y-1.5">
                <div><span class="text-gray-500">// Algoritmo:</span> <span class="text-yellow-300">Cifrado César por sustitución monoalfabética</span></div>
                <div><span class="text-gray-500">// Clave de desplazamiento (k):</span> <span class="text-emerald-400">7</span></div>
                <div class="pt-1"><span class="text-gray-400">&gt; Mensaje original:</span> <span class="text-white font-semibold">"VIERMONT_STUDIO_CYBERSEC_2026"</span></div>
                <div><span class="text-gray-400">&gt; Texto cifrado:</span> <span class="text-amber-300 font-bold">"CPLYTVUA_ZABKPV_JFILYZLJ_2026"</span></div>
                <div><span class="text-gray-400">&gt; Proceso inverso (-k):</span> <span class="text-emerald-400 font-semibold">"VIERMONT_STUDIO_CYBERSEC_2026"</span></div>
                <div class="text-emerald-400 font-bold pt-1">&check; Integridad verificada &bull; Test de encriptación/desencriptación superado (100% match)</div>
              </div>
              <div class="text-amber-300">&check; Implementación criptográfica en Java finalizada correctamente.</div>`
          },
          {
            comando: "git status",
            nombre: "Estado Repositorios",
            lenguaje: "Git",
            etiqueta: "GitHub",
            colorChip: "text-gray-300",
            salidaHtml: `
              <div class="text-gray-300 font-bold">[GitHub Repositories] github.com/viermontstudio</div>
              <div class="p-3 my-2 rounded bg-black/60 border border-white/10 text-gray-200 font-mono text-[11px] space-y-1.5">
                <div><span class="text-teal-400 font-bold">&bull; viermontstudio-website</span>: Web oficial: Auditoría técnica, diseño y supervisión de correcciones (ejecución asistida por IA).</div>
                <div><span class="text-emerald-400 font-bold">&bull; DAM-JobieFP</span>: Desarrollo de Aplicaciones Multiplataforma (Java, SQL, C#, Linux).</div>
                <div><span class="text-blue-400 font-bold">&bull; BIRT</span>: Módulos de programación en Java (Programación Orientada a Objetos).</div>
                <div><span class="text-amber-400 font-bold">&bull; Aprendeaprogramar.com</span>: Consolidación de algoritmia y fundamentos en lenguaje C.</div>
                <div><span class="text-teal-400 font-bold">&bull; 42_Cursus</span>: Proyectos de C (Libft, Born2beRoot, Valgrind) de 42 Urduliz.</div>
                <div><span class="text-teal-400 font-bold">&bull; 42_Pool</span>: Ejercicios intensivos en C de bajo nivel (26 días) de 42 Urduliz.</div>
              </div>
              <div class="text-teal-400">&check; 6 repositorios oficiales catalogados y sincronizados</div>`
          }
        ] as Exercise[];
