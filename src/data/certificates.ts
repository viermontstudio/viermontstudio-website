export interface Certification {
  titulo: string;
  emisor: string;
  icono: string;
  iconClase: string;
  badgeHtml: string;
  badgeClase: string;
  estadoTexto: string;
  modulos: string[];
  nota: string;
  defaultImage?: string;
  pdfUrl?: string;
  enlace: string;
  enlaceTexto: string;
  storageKey: string;
}

export const MIS_CERTIFICACIONES = {
  'thm-presecurity': {
    titulo: 'TryHackMe: Pre Security Learning Path',
    emisor: 'TryHackMe · Plataforma Oficial de Ciberseguridad (UK)',
    icono: '<i class="fa-solid fa-shield-halved"></i>',
    iconClase: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    badgeHtml: '<i class="fa-solid fa-circle-check text-[9px]"></i> VERIFICADO &bull; COMPLETADO',
    badgeClase: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    estadoTexto: 'Completado el 14/03/2026 (Duración: 19h 10m)',
    modulos: [
      'Network Fundamentals (TCP/IP, OSI, Puertos, Enrutamiento)',
      'How The Web Works (Protocolo HTTP/S, Peticiones, DNS, Servidores)',
      'Linux Fundamentals (Terminal CLI, Permisos, Ficheros, Procesos)',
      'Windows Fundamentals (Sistema de Archivos, Registro, Seguridad UAC)',
      'ID Oficial de Credencial: THM-ODHVAD97QZ'
    ],
    nota: 'Acreditación expedida al completar satisfactoriamente el itinerario preparatorio de ciberseguridad, validando los conocimientos fundamentales para el análisis defensivo y la administración segura de redes.',
    defaultImage: './src/assets/certificates/thm_pre_security_cert.png',
    pdfUrl: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-ODHVAD97QZ.pdf',
    enlace: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-ODHVAD97QZ.pdf',
    enlaceTexto: 'Verificar en TryHackMe (Credencial Oficial)',
    storageKey: 'viermont_cert_img_thm_presec'
  },
  'ef-set-english': {
    titulo: 'EF SET English Certificate (CEFR B1 Intermediate)',
    emisor: 'EF Standard English Test (EF SET)',
    icono: '<i class="fa-solid fa-language"></i>',
    iconClase: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    badgeHtml: '<i class="fa-solid fa-circle-check text-[9px]"></i> CERTIFICADO OFICIAL &bull; B1 (Reading C1)',
    badgeClase: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    estadoTexto: 'Expedido el 01/03/2024 (Puntuación EF SET 47/100 · B1)',
    modulos: [
      'Puntuación Global EF SET: 47/100 (B1 Intermediate)',
      'Comprensión Lectora (Reading): 63/100 — C1 Advanced',
      'Comprensión Auditiva (Listening): 31/100 — A2 Elementary',
      'Marco Común Europeo de Referencia para las Lenguas (MCER / CEFR)',
      'ID Oficial Verificable: cert.efset.org/UGynH4'
    ],
    nota: 'Certificación oficial de competencia en lengua inglesa que acredita solvencia en lectura técnica, documentación informática, especificaciones y código en inglés a nivel C1 Avanzado.',
    defaultImage: './src/assets/certificates/ef_set_english_cert.png',
    pdfUrl: './src/assets/certificates/EF_SET_English_B1_Javier_Montero.pdf',
    enlace: 'https://cert.efset.org/UGynH4',
    enlaceTexto: 'Verificar en EF SET Oficial',
    storageKey: 'viermont_cert_img_efset'
  },
          'thm-cyber101': {
            titulo: 'TryHackMe: Cybersecurity 101',
            emisor: 'TryHackMe · Especialización en Seguridad Defensiva y Redes',
            icono: '<i class="fa-solid fa-lock"></i>',
            iconClase: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
            badgeHtml: '<span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span> EN CURSO &bull; APRENDIZAJE ACTIVO',
            badgeClase: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
            estadoTexto: 'En progreso activo (2026)',
            modulos: [
              'Security Principles (Confidencialidad, Integridad y Disponibilidad - Triada CIA)',
              'Criptografía Aplicada (Cifrado simétrico/asimétrico, Hashing, Firmas)',
              'Defensive Security (Monitorización, Logs de Eventos y Detección)',
              'Análisis de Vulnerabilidades Web y de Redes',
              'Introducción Práctica a la Seguridad Ofensiva y Pentesting'
            ],
            nota: 'Itinerario formativo avanzado orientado a la protección de infraestructuras, auditoría de vulnerabilidades y buenas prácticas de desarrollo seguro (DevSecOps).',
            enlace: 'https://tryhackme.com',
            enlaceTexto: 'Ver en TryHackMe',
            storageKey: 'viermont_cert_img_thm_cyber101'
          },
          '42-urduliz': {
            titulo: '42 Urduliz (Fundación Telefónica / Bizkaia)',
            emisor: 'Campus de Programación Peer-to-Peer',
            icono: '42',
            iconClase: 'text-teal-400 bg-teal-500/10 border-teal-500/20 font-bold',
            badgeHtml: '<i class="fa-solid fa-code text-[9px]"></i> FORMACIÓN INTENSIVA &bull; CAMPUS',
            badgeClase: 'bg-teal-500/10 border-teal-500/20 text-teal-300',
            estadoTexto: 'Formación Práctica Presencial Inmersiva (2021-2022)',
            modulos: [
              'Programación en Lenguaje C Puro (Sin librerías estándar)',
              'Aritmética de Punteros y Gestión Manual de Memoria (malloc / free)',
              'Detección y Eliminación de Fugas de Memoria con Valgrind (0 Leaks)',
              'Shell Scripting, Terminal Bash y Entorno Unix/Linux',
              'Control de Versiones Git y Corrección Automática (Norminette)'
            ],
            nota: 'Campus de aprendizaje basado en proyectos prácticos entre pares sin profesores ni horarios fijos. Fomenta el rigor extremo, la resolución autónoma de problemas técnicos y la resiliencia en equipo.',
            enlace: 'https://www.42urduliz.com',
            enlaceTexto: 'Visitar 42 Urduliz',
            storageKey: 'viermont_cert_img_42'
          },
          'java-backend': {
            titulo: 'Java Backend & POO (Open Bootcamp / BIRT LH)',
            emisor: 'Campus Online & BIRT LH',
            icono: '<i class="fa-brands fa-java"></i>',
            iconClase: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
            badgeHtml: '<i class="fa-solid fa-check text-[9px]"></i> COMPLETADO',
            badgeClase: 'bg-blue-500/10 border-blue-500/20 text-blue-300',
            estadoTexto: 'Completado con éxito (2022-2023)',
            modulos: [
              'Programación Orientada a Objetos en Java (Clases, Herencia, Interfaces)',
              'Estructuras de Datos y Colecciones Java (ArrayList, HashSet, Map)',
              'Manejo Avanzado de Excepciones y Logging',
              'Bases de Datos Relacionales SQL y Persistencia JDBC',
              'Patrones de Diseño y Modularidad de Software'
            ],
            nota: 'Capacitación en desarrollo de aplicaciones backend robustas con Java, POO y modelado relacional de datos.',
            enlace: 'https://open-bootcamp.com',
            enlaceTexto: 'Consultar Itinerario',
            storageKey: 'viermont_cert_img_java'
          }
        } as Record<string, Certification>;
