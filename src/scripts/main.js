// src/scripts/navigation.ts
function initNavigation() {
  const mobileToggleBtn = document.getElementById("mobile-toggle-btn");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const mobileLinks = document.querySelectorAll(".mobile-link");
  const navItems = document.querySelectorAll(".nav-item");
  const sections = document.querySelectorAll("section[id]");
  if (mobileToggleBtn && mobileDrawer) {
    mobileToggleBtn.addEventListener("click", () => {
      mobileDrawer.classList.toggle("hidden");
    });
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.add("hidden");
      });
    });
  }
  function updateActiveNav(activeId) {
    const allNavItems = [...Array.from(navItems), ...Array.from(mobileLinks)];
    allNavItems.forEach((item) => {
      const sec = item.getAttribute("data-section");
      const borderColor = item.getAttribute("data-border-color") || "border-white";
      if (sec === activeId) {
        item.classList.remove("border-transparent");
        item.classList.add(borderColor);
      } else {
        item.classList.remove(borderColor);
        item.classList.add("border-transparent");
      }
    });
  }
  window.addEventListener("scroll", () => {
    let current = "inicio";
    const scrollY = window.pageYOffset;
    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 140;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id") || "inicio";
      }
    });
    if (window.innerHeight + scrollY >= document.body.offsetHeight - 80) {
      current = "contacto";
    }
    updateActiveNav(current);
  }, { passive: true });
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const sec = item.getAttribute("data-section");
      if (sec) updateActiveNav(sec);
    });
  });
  mobileLinks.forEach((item) => {
    item.addEventListener("click", () => {
      const sec = item.getAttribute("data-section");
      if (sec) updateActiveNav(sec);
    });
  });
  initAvatarAndLogo();
}
function initAvatarAndLogo() {
}

// src/data/artworks.ts
var DEFAULT_ARTWORKS_CATALOG = [
  // ==========================================
  // 1. MURALES (13 obras)
  // ==========================================
  {
    id: "mural_vestuario_caballeros_golf",
    title: "Vestuarios caballeros de club de golf",
    category: "murales",
    tag: "MURALES",
    desc: "Aerograf\xEDa sobre pared \xB7 Club de Golf Basozabal (2020)",
    alt: "Figura masculina de jugador de golf realizada mediante aerograf\xEDa en escala de grises para la entrada del vestuario de caballeros del Club de Golf Basozabal.",
    filename: "2020_04_vestuarios_masculinos_golf.webp",
    img: "./src/assets/images/2020_04_vestuarios_masculinos_golf.webp",
    spanRow: true,
    imgStyle: "object-position: center 8%; transform: scale(1.07);"
  },
  {
    id: "mural_vestuario_damas_golf",
    title: "Vestuarios damas de club de golf",
    category: "murales",
    tag: "MURALES",
    desc: "Aerograf\xEDa sobre pared \xB7 Club de Golf Basozabal (2020)",
    alt: "Figura femenina de jugadora de golf realizada mediante aerograf\xEDa en escala de grises para la entrada del vestuario de damas del Club de Golf Basozabal.",
    filename: "2020_04_vestuarios_femeninos_golf.webp",
    img: "./src/assets/images/2020_04_vestuarios_femeninos_golf.webp",
    spanRow: true,
    imgStyle: "object-position: center 8%; transform: scale(1.07);"
  },
  {
    id: "mural_guarderia_golf_minnie_mouse",
    title: "Mural guarder\xEDa club de golf - Minnie Mouse",
    category: "murales",
    tag: "MURALES",
    desc: "Aerograf\xEDa en la guarder\xEDa del Club de Golf Basozabal (2016)",
    alt: "Mural infantil de Minnie Mouse descansando en el rough realizado mediante aerograf\xEDa para la guarder\xEDa del Club de Golf Basozabal.",
    filename: "2016_04_mural_guarderia_golf_4.webp",
    img: "./src/assets/images/2016_04_mural_guarderia_golf_4.webp",
    imgStyle: "object-position: center center;"
  },
  {
    id: "mural_guarderia_golf_pluto",
    title: "Mural guarder\xEDa club de golf - Pluto",
    category: "murales",
    tag: "MURALES",
    desc: "Aerograf\xEDa en la guarder\xEDa del Club de Golf Basozabal (2016)",
    alt: "Mural infantil de Pluto en un green de golf realizado mediante aerograf\xEDa para la guarder\xEDa del Club de Golf Basozabal.",
    filename: "2016_04_mural_guarderia_golf_1.webp",
    img: "./src/assets/images/2016_04_mural_guarderia_golf_1.webp",
    imgStyle: "object-position: center center;"
  },
  {
    id: "mural_guarderia_golf_mickey_mouse_y_goofy",
    title: "Mural guarder\xEDa club de golf - Mickey y Goofy",
    category: "murales",
    tag: "MURALES",
    desc: "Aerograf\xEDa en la guarder\xEDa del Club de Golf Basozabal (2016)",
    alt: "Mural infantil de Mickey Mouse y Goofy jugando golf realizado mediante aerograf\xEDa para la guarder\xEDa del Club de Golf Basozabal.",
    filename: "2016_04_mural_guarderia_golf_2.webp",
    img: "./src/assets/images/2016_04_mural_guarderia_golf_2.webp",
    imgStyle: "object-position: center center;"
  },
  {
    id: "mural_guarderia_golf_daisy_y_pato_donald",
    title: "Mural guarder\xEDa club de golf - Daisy y Donald",
    category: "murales",
    tag: "MURALES",
    desc: "Aerograf\xEDa en la guarder\xEDa del Club de Golf Basozabal (2016)",
    alt: "Mural infantil de Daisy y el pato Donald jugando al golf realizado mediante aerograf\xEDa para la guarder\xEDa del Club de Golf Basozabal.",
    filename: "2016_04_mural_guarderia_golf_3.webp",
    img: "./src/assets/images/2016_04_mural_guarderia_golf_3.webp",
    imgStyle: "object-position: center center;"
  },
  {
    id: "mural_ermita_guadalupe",
    title: "Mural Ermita Guadalupe",
    category: "murales",
    tag: "MURALES",
    desc: "Aerograf\xEDa en domicilio \xB7 Ermita Guadalupe de Hondarribia (2015)",
    alt: "Mural de gran formato realizado mediante aerograf\xEDa representando la Ermita de Guadalupe sobre el monte Jaizkibel en Hondarribia.",
    filename: "2015_07_mural_hondarribi.webp",
    img: "./src/assets/images/2015_07_mural_hondarribi.webp",
    spanRow: true,
    imgStyle: "object-position: 54% center; transform: scale(1.32);"
  },
  {
    id: "mural_caballero_y_dragon",
    title: "Aerograf\xEDa caballero y drag\xF3n",
    category: "murales",
    tag: "MURALES",
    desc: "Mural y cuento personalizado en dormitorio infantil con cama castillo (2016)",
    alt: "Mural tem\xE1tico de fantas\xEDa medieval representando al ni\xF1o del encargo como un caballero dominando a un drag\xF3n.",
    filename: "2016_07_mural_Castillo_Infantil.webp",
    img: "./src/assets/images/2016_07_mural_Castillo_Infantil.webp",
    spanCol: true,
    imgStyle: "object-position: center center;"
  },
  {
    id: "mural_aviador",
    title: "Mural Infantil \xABEl Aviador\xBB",
    category: "murales",
    tag: "MURALES",
    desc: "Aerograf\xEDa en dormitorio infantil \xB7 Conejo Piloto y Osito paracaidista (2011)",
    alt: "Mural representando un conejo aviador y un osito paracaidista en un dormitorio infantil.",
    filename: "2011_10_mural_infantil_aviador.webp",
    img: "./src/assets/images/2011_10_mural_infantil_aviador.webp",
    imgStyle: "object-position: center center;"
  },
  {
    id: "mural_regatas",
    title: "Mural Tradici\xF3n de Regatas",
    category: "murales",
    tag: "MURALES",
    desc: "Aerograf\xEDa en Trofeos Egia de San Sebasti\xE1n \xB7 Regatas tradicionales (2009)",
    alt: "Mural de gran formato en aerograf\xEDa dedicado a la tradici\xF3n mar\xEDtima y traineras vascas en la bah\xEDa de La Concha.",
    filename: "2009_01_mural_regatas.webp",
    img: "./src/assets/images/2009_01_mural_regatas.webp",
    spanCol: true,
    imgStyle: "object-position: 70% 30%; transform: scale(1.08); transform-origin: right center;"
  },
  {
    id: "mural_troya",
    title: "Mural \xC9pico \xABTroya\xBB",
    category: "murales",
    tag: "MURALES",
    desc: "Aerograf\xEDa sobre pared \xB7 Restaurante Troya de Astigarraga (2008)",
    alt: "Mural de gran formato en escala de grises inspirado en la guerra de Troya para el comedor del Restaurante Troya de Astigarraga.",
    filename: "2008_02_mural_troya.webp",
    img: "./src/assets/images/2008_02_mural_troya.webp",
    imgStyle: "object-position: center 33%;"
  },
  {
    id: "perros_con_ruleros",
    title: "Mural Peluquer\xEDa",
    category: "murales",
    tag: "MURALES",
    desc: "Aerograf\xEDa sobre pared \xB7 Peluquer\xEDa Santa Eulalia de San Sebasti\xE1n (2007)",
    alt: "Mural decorativo de tem\xE1tica animal representando perros con ruleros realizado para sal\xF3n de peluquer\xEDa.",
    filename: "2007_07_mural_peluqueria.webp",
    img: "./src/assets/images/2007_07_mural_peluqueria.webp",
    imgStyle: "object-position: 55% 32%; transform: scale(1.12); transform-origin: center top;"
  },
  {
    id: "mural_senra",
    title: "Mural Bodegas",
    category: "murales",
    tag: "MURALES",
    desc: "Aerograf\xEDa sobre pared \xB7 Bar Restaurante Senra de San Sebasti\xE1n (2007)",
    alt: "Mural decorativo realizado mediante aerograf\xEDa para el espacio gastron\xF3mico y restaurante Senra.",
    filename: "2007_05_mural_senra.webp",
    img: "./src/assets/images/2007_05_mural_senra.webp",
    imgStyle: "object-position: center center;"
  },
  // ==========================================
  // 2. CASCOS (9 obras)
  // ==========================================
  {
    id: "casco_ruben_mtz",
    title: "Casco Rub\xE9n Mart\xEDnez",
    category: "cascos",
    tag: "CASCOS",
    desc: "Aerograf\xEDa de competici\xF3n de alta precisi\xF3n para el piloto Rub\xE9n Mart\xEDnez (2015)",
    alt: "Aerograf\xEDa de competici\xF3n de alta precisi\xF3n sobre casco de carreras para el piloto Rub\xE9n Mart\xEDnez.",
    filename: "2015_02_casco_ruben_mtz_ok.webp",
    img: "./src/assets/images/2015_02_casco_ruben_mtz_ok.webp",
    isolatedBg: true,
    imgStyle: "object-fit: contain !important; transform: scale(1.18); object-position: center 40%;"
  },
  {
    id: "casco_barcelona",
    title: "Casco FC Barcelona",
    category: "cascos",
    tag: "CASCOS",
    desc: "Aerograf\xEDa personalizada con los colores y escudo oficial del FC Barcelona (2011)",
    alt: "Casco de competici\xF3n personalizado con los colores y escudo oficial del FC Barcelona.",
    filename: "2011_08_casco_barcelona_ok.webp",
    img: "./src/assets/images/2011_08_casco_barcelona_ok.webp",
    isolatedBg: true,
    imgStyle: "transform: scale(0.85); object-position: center center;"
  },
  {
    id: "casco_cementerio",
    title: "Casco \xABCementerio G\xF3tico\xBB",
    category: "cascos",
    tag: "CASCOS",
    desc: "Aerograf\xEDa con tem\xE1tica de cementerio g\xF3tico, calaveras y sombras profundas (2010)",
    alt: "Aerograf\xEDa con tem\xE1tica de cementerio g\xF3tico, calaveras y sombras profundas sobre casco de moto.",
    filename: "2010_05_casco_cementerio_ok.webp",
    img: "./src/assets/images/2010_05_casco_cementerio_ok.webp",
    isolatedBg: true,
    imgStyle: "object-position: center center;"
  },
  {
    id: "casco_garban",
    title: "Casco Competici\xF3n \xABGarb\xE1n\xBB",
    category: "cascos",
    tag: "CASCOS",
    desc: "Pintura y dise\xF1o din\xE1mico de competici\xF3n para el piloto de karts Garb\xE1n (2009)",
    alt: "Pintura y dise\xF1o din\xE1mico de casco de competici\xF3n para piloto de karts Garb\xE1n.",
    filename: "2009_03_casco_garban_ok.webp",
    img: "./src/assets/images/2009_03_casco_garban_ok.webp",
    isolatedBg: true,
    imgStyle: "transform: scale(1.05); object-position: center center;"
  },
  {
    id: "casco_hockey",
    title: "Casco Hockey \xABCalavera\xBB",
    category: "cascos",
    tag: "CASCOS",
    desc: "Aerograf\xEDa sobre casco del portero de hockey Javi M\xE9ndez (2008)",
    alt: "Personalizaci\xF3n en aerograf\xEDa sobre casco de portero de hockey con dise\xF1o de calavera agresiva.",
    filename: "2008_11_casco_hockey_ok.webp",
    img: "./src/assets/images/2008_11_casco_hockey_ok.webp",
    isolatedBg: true,
    imgStyle: "object-position: center center;"
  },
  {
    id: "casco_oliver",
    title: "Casco \xABEuskadi\xBB",
    category: "cascos",
    tag: "CASCOS",
    desc: "Dise\xF1o exclusivo con motivos de Euskadi para el piloto Oliver (2008)",
    alt: "Dise\xF1o exclusivo de casco de moto personalizado con motivos y simbolog\xEDa vasca.",
    filename: "2008_06_casco_oliver_ok.webp",
    img: "./src/assets/images/2008_06_casco_oliver_ok.webp",
    isolatedBg: true,
    imgStyle: "transform: scale(1.10); object-position: center center;"
  },
  {
    id: "casco_replica",
    title: "Casco R\xE9plica Competici\xF3n",
    category: "cascos",
    tag: "CASCOS",
    desc: "R\xE9plica artesanal de casco de alta competici\xF3n con l\xEDneas geom\xE9tricas (2008)",
    alt: "R\xE9plica artesanal de casco de alta competici\xF3n con l\xEDneas geom\xE9tricas y aerograf\xEDa de precisi\xF3n.",
    filename: "2008_05_casco_replica_ok.webp",
    img: "./src/assets/images/2008_05_casco_replica_ok.webp",
    isolatedBg: true,
    imgStyle: "transform: scale(1.32); object-position: center center;"
  },
  {
    id: "casco_harley",
    title: "Casco Harley-Davidson \xABAmerican Legend\xBB",
    category: "cascos",
    tag: "CASCOS",
    desc: "Aerograf\xEDa sobre casco custom con \xE1guila real y emblema cl\xE1sico Harley (2008)",
    alt: "Aerograf\xEDa sobre casco custom con \xE1guila real y emblema cl\xE1sico Harley-Davidson.",
    filename: "2008_04_casco_harley_ok.webp",
    img: "./src/assets/images/2008_04_casco_harley_ok.webp",
    isolatedBg: true,
    imgStyle: "transform: scale(0.85); object-position: center center;"
  },
  {
    id: "casco_sin_city",
    title: "Casco \xABSin City\xBB Custom",
    category: "cascos",
    tag: "CASCOS",
    desc: "Retrato femenino en blanco y negro estilo Sin City sobre casco custom (2006)",
    alt: "Retrato femenino en blanco y negro estilo Sin City sobre casco custom mediante aerograf\xEDa.",
    filename: "2007_02_casco_sin_city_ok.webp",
    img: "./src/assets/images/2007_02_casco_sin_city_ok.webp",
    isolatedBg: true,
    imgStyle: "object-fit: contain !important; transform: scale(1.05); object-position: center 38%;"
  },
  // ==========================================
  // 3. VEHÍCULOS (8 obras)
  // ==========================================
  {
    id: "trainera_zumaia",
    title: "Trainera Telmo Deun de Zumaia \xABEscamas\xBB",
    category: "vehiculos",
    tag: "VEH\xCDCULOS",
    desc: "Aerograf\xEDa sobre la Trainera Telmo Deun de Zumaia \xABEscamas\xBB (2013)",
    alt: "Aerograf\xEDa sobre la trainera Telmo Deun de Zumaia representando textura de escamas en color rojo.",
    filename: "2013_05_trainera_zumaia_escamas_2.webp",
    img: "./src/assets/images/2013_05_trainera_zumaia_escamas_2.webp",
    spanCol: true,
    imgStyle: "object-position: center center;"
  },
  {
    id: "mercedes_ponton",
    title: "Mercedes Ponton de 1956 \xABEfecto Madera\xBB",
    category: "vehiculos",
    tag: "VEH\xCDCULOS",
    desc: "Aerograf\xEDa efecto madera en piezas interiores de Mercedes Ponton de 1956 (2011)",
    alt: "Aerograf\xEDa sobre piezas y salpicadero de Mercedes Ponton de 1956 simulando acabado ra\xEDz de madera.",
    filename: "2011_11_efecto_madera_mercedes_ponton_ok.webp",
    img: "./src/assets/images/2011_11_efecto_madera_mercedes_ponton_ok.webp",
    isolatedBg: true,
    imgStyle: "object-position: center center;"
  },
  {
    id: "deposito_harley",
    title: "Dep\xF3sito Harley-Davidson Tribal",
    category: "vehiculos",
    tag: "VEH\xCDCULOS",
    desc: "Aerograf\xEDa personalizada y rotulaci\xF3n tribal sobre dep\xF3sito Harley-Davidson (2011)",
    alt: "Aerograf\xEDa personalizada y rotulaci\xF3n tribal sobre dep\xF3sito de combustible Harley-Davidson.",
    filename: "2011_11_deposito_harley_tribal_ok.webp",
    img: "./src/assets/images/2011_11_deposito_harley_tribal_ok.webp",
    isolatedBg: true,
    imgStyle: "object-position: center center;"
  },
  {
    id: "yamaha_r1",
    title: "Yamaha R1 \xABValentino Rossi\xBB",
    category: "vehiculos",
    tag: "VEH\xCDCULOS",
    desc: "Decoraci\xF3n de carenado r\xE9plica The Doctor sobre Yamaha R1 (2011)",
    alt: "Decoraci\xF3n de carenado r\xE9plica The Doctor sobre Yamaha R1 de circuito.",
    filename: "2011_03_yamaha_valentino_ok.webp",
    img: "./src/assets/images/2011_03_yamaha_valentino_ok.webp",
    isolatedBg: true,
    imgStyle: "object-position: center center;"
  },
  {
    id: "monstertruck_focos",
    title: "Monster Truck \xABFocos Realistas\xBB",
    category: "vehiculos",
    tag: "VEH\xCDCULOS",
    desc: "Aerograf\xEDa art\xEDstica de focos realistas sobre cap\xF3 de Monster Truck (2010)",
    alt: "Aerograf\xEDa art\xEDstica de focos hiperrealistas sobre cap\xF3 y carrocer\xEDa de Monster Truck.",
    filename: "2010_05_focos_monstertruck.webp",
    img: "./src/assets/images/2010_05_focos_monstertruck.webp",
    imgStyle: "object-position: center center;"
  },
  {
    id: "barqueta_fran_cobo",
    title: "Barqueta BRC Fran Cobo",
    category: "vehiculos",
    tag: "VEH\xCDCULOS",
    desc: "Rotulaci\xF3n y pintura de competici\xF3n para barqueta BRC Fran Cobo \xB7 En colaboraci\xF3n con Mitxif\xFA (2007)",
    alt: "Rotulaci\xF3n y pintura de competici\xF3n para barqueta BRC en colaboraci\xF3n con Mitxif\xFA.",
    filename: "2007_06_barqueta_fran_cobo_ok.webp",
    img: "./src/assets/images/2007_06_barqueta_fran_cobo_ok.webp",
    isolatedBg: true,
    imgStyle: "object-position: center center;"
  },
  {
    id: "capo_tigre",
    title: "Cap\xF3 \xABTigre de Fuego\xBB",
    category: "vehiculos",
    tag: "VEH\xCDCULOS",
    desc: "Aerograf\xEDa art\xEDstica de alto detalle sobre cap\xF3 de coche \xB7 Tigre blanco (2007)",
    alt: "Aerograf\xEDa art\xEDstica hiperrealista de tigre blanco con detalles de fuego sobre cap\xF3 de autom\xF3vil.",
    filename: "2007_05_capo_tigre.webp",
    img: "./src/assets/images/2007_05_capo_tigre.webp",
    imgStyle: "object-position: center 25%;"
  },
  {
    id: "capo_mascara",
    title: "Cap\xF3 \xABM\xE1scara Veneciana\xBB",
    category: "vehiculos",
    tag: "VEH\xCDCULOS",
    desc: "Aerograf\xEDa art\xEDstica de alto detalle sobre cap\xF3 de coche \xB7 M\xE1scara Veneciana (2007)",
    alt: "Aerograf\xEDa art\xEDstica de alto detalle representando m\xE1scara veneciana sobre cap\xF3 de autom\xF3vil.",
    filename: "2007_05_capo_mascara_ok.webp",
    img: "./src/assets/images/2007_05_capo_mascara_ok.webp",
    isolatedBg: true,
    imgStyle: "object-position: center center;"
  },
  // ==========================================
  // 4. OBJETOS (9 obras)
  // ==========================================
  {
    id: "persiana_altzania",
    title: "Persiana Asociaci\xF3n Cultural Altzania",
    category: "objetos",
    tag: "OBJETOS",
    desc: "Aerograf\xEDa sobre persiana met\xE1lica \xB7 Asociaci\xF3n Cultural Altzania (2019)",
    alt: "Aerograf\xEDa art\xEDstica sobre persiana met\xE1lica comercial para la Asociaci\xF3n Cultural Altzania.",
    filename: "2019_12_persiana_altzania.webp",
    img: "./src/assets/images/2019_12_persiana_altzania.webp",
    imgStyle: "object-position: center 18%; transform: scale(0.92);"
  },
  {
    id: "caballo_longines",
    title: "Caballo Balanc\xEDn \xABLongines\xBB",
    category: "objetos",
    tag: "OBJETOS",
    desc: "Montaje, imprimaci\xF3n, pintura art\xEDstica personalizada y acabado completo sobre madera en bruto \xB7 Regalo de empresa (2017)",
    alt: "Pintura y acabado personalizado sobre caballo balanc\xEDn de madera como regalo corporativo de empresa.",
    filename: "2017_10_caballo_balancin_longines_2.webp",
    img: "./src/assets/images/2017_10_caballo_balancin_longines_2.webp",
    imgStyle: "transform: scale(1.15); object-position: center center;"
  },
  {
    id: "castillo_infantil_obj",
    title: "Castillo Infantil Tem\xE1tico",
    category: "objetos",
    tag: "OBJETOS",
    desc: "Dise\xF1o, construcci\xF3n, montaje, pintura y acabado tem\xE1tico artesanal sobre madera para dormitorio infantil (2016)",
    alt: "Dise\xF1o, construcci\xF3n artesanal y aerograf\xEDa tem\xE1tica sobre estructura de juego infantil de madera.",
    filename: "2016_07_Castillo_Infantil.webp",
    img: "./src/assets/images/2016_07_Castillo_Infantil.webp",
    imgStyle: "object-position: center center;"
  },
  {
    id: "drive_logo",
    title: "Drive de Golf con Logotipo",
    category: "objetos",
    tag: "OBJETOS",
    desc: "Reparaci\xF3n y micro-aerograf\xEDa de precisi\xF3n con logotipo sobre cabeza de driver de golf (2014)",
    alt: "Microaerograf\xEDa de alta precisi\xF3n con logotipo personalizado sobre cabeza de driver de golf.",
    filename: "2014_08_palo_logo_ok.webp",
    img: "./src/assets/images/2014_08_palo_logo_ok.webp",
    isolatedBg: true,
    imgStyle: "object-position: center center;"
  },
  {
    id: "caballo_casas_novas",
    title: "Caballo Balanc\xEDn \xABCasas Novas\xBB",
    category: "objetos",
    tag: "OBJETOS",
    desc: "Montaje, imprimaci\xF3n, pintura art\xEDstica personalizada y acabado completo sobre madera en bruto \xB7 Regalo de empresa (2013)",
    alt: "Pintura art\xEDstica personalizada sobre caballo balanc\xEDn de madera para regalo corporativo.",
    filename: "2013_03_caballo_balancin_casas_novas_ok.webp",
    img: "./src/assets/images/2013_03_caballo_balancin_casas_novas_ok.webp",
    isolatedBg: true,
    imgStyle: "object-position: center center;"
  },
  {
    id: "palos_alejo",
    title: "Aerograf\xEDa sobre Drive y Madera \xABEfecto Madera\xBB",
    category: "objetos",
    tag: "OBJETOS",
    desc: "Personalizaci\xF3n artesanal efecto madera sobre driver y madera de Alejo Cuadra (2009)",
    alt: "Personalizaci\xF3n artesanal mediante aerograf\xEDa simulando textura de madera sobre palos de golf.",
    filename: "2009_04_palos_golf_alejo_ok.webp",
    img: "./src/assets/images/2009_04_palos_golf_alejo_ok.webp",
    isolatedBg: true,
    imgStyle: "transform: scale(0.90); object-position: center center;"
  },
  {
    id: "palo_arrate",
    title: "Aerograf\xEDa sobre Drive de Golf \xABPeine del Viento\xBB",
    category: "objetos",
    tag: "OBJETOS",
    desc: "Micro-aerograf\xEDa y silueta del Peine del Viento sobre driver de golf (2009)",
    alt: "Microaerograf\xEDa y silueta del Peine del Viento sobre cabeza de driver de golf.",
    filename: "2009_04_palo_golf_arrate_ok.webp",
    img: "./src/assets/images/2009_04_palo_golf_arrate_ok.webp",
    isolatedBg: true,
    imgStyle: "transform: scale(1.20); object-position: center center;"
  },
  {
    id: "palo_laura",
    title: "Aerograf\xEDa sobre Drive de Golf \xABOrqu\xEDdea\xBB",
    category: "objetos",
    tag: "OBJETOS",
    desc: "Micro-aerograf\xEDa bot\xE1nica de alta precisi\xF3n sobre driver de golf \xABOrqu\xEDdea\xBB (2009)",
    alt: "Microaerograf\xEDa bot\xE1nica de alta precisi\xF3n representando una orqu\xEDdea sobre cabeza de driver de golf.",
    filename: "2009_03_palo_golf_laura_ok.webp",
    img: "./src/assets/images/2009_03_palo_golf_laura_ok.webp",
    isolatedBg: true,
    imgStyle: "object-position: center center;"
  },
  {
    id: "palo_benja",
    title: "Aerograf\xEDa sobre Drive de Golf \xABEfecto Madera\xBB",
    category: "objetos",
    tag: "OBJETOS",
    desc: "Acabado artesanal efecto ra\xEDz de nogal sobre driver de Benjam\xEDn Gorostegui (2009)",
    alt: "Acabado artesanal simulando efecto ra\xEDz de nogal mediante aerograf\xEDa sobre driver de golf.",
    filename: "2009_03_palo_golf_benja_ok.webp",
    img: "./src/assets/images/2009_03_palo_golf_benja_ok.webp",
    isolatedBg: true,
    imgStyle: "transform: scale(0.90); object-position: center center;"
  },
  // ==========================================
  // 5. ILUSTRACIONES (13 obras)
  // ==========================================
  {
    id: "acuarela_pinguino",
    title: "Acuarela \xABPing\xFCino\xBB",
    category: "ilustraciones",
    tag: "ILUSTRACIONES",
    desc: "Pintura en papel acuarelable con t\xE9cnica tradicional de pincel h\xFAmedo y degradados (2020)",
    alt: "Ilustraci\xF3n tradicional en acuarela representando un ping\xFCino en tonos fr\xEDos.",
    filename: "2020_05_acuarela_pinguino.webp",
    img: "./src/assets/images/2020_05_acuarela_pinguino.webp",
    imgStyle: "object-position: center 15%;"
  },
  {
    id: "lapices_rosa",
    title: "L\xE1pices \xABRosa Silvestre\xBB",
    category: "ilustraciones",
    tag: "ILUSTRACIONES",
    desc: "Dibujo bot\xE1nico con l\xE1pices de color policromos y transiciones tonales (2020)",
    alt: "Dibujo bot\xE1nico detallado de rosa silvestre realizado con l\xE1pices de color.",
    filename: "2020_04_lapices_colores_rosa.webp",
    img: "./src/assets/images/2020_04_lapices_colores_rosa.webp",
    imgStyle: "object-position: 50% 42%; transform: scale(1) translateX(-2.5%);"
  },
  {
    id: "rotuladores_pajaro",
    title: "Ave con Tintas Met\xE1licas",
    category: "ilustraciones",
    tag: "ILUSTRACIONES",
    desc: "T\xE9cnica mixta con rotuladores met\xE1licos brillantes sobre papel negro (2019)",
    alt: "T\xE9cnica mixta con rotuladores met\xE1licos sobre papel representando un ave.",
    filename: "2019_01_rotuladores_metalicos_pajaro.webp",
    img: "./src/assets/images/2019_01_rotuladores_metalicos_pajaro.webp",
    imgStyle: "object-position: center 58%; transform: scale(1.16);"
  },
  {
    id: "lapices_elefante",
    title: "Retrato de Elefante",
    category: "ilustraciones",
    tag: "ILUSTRACIONES",
    desc: "Estudio anat\xF3mico y de texturas epid\xE9rmicas con l\xE1pices de grafito (2018)",
    alt: "Estudio anat\xF3mico y textura de elefante realizado mediante dibujo tradicional a l\xE1piz.",
    filename: "2018_10_lapices_elefante.webp",
    img: "./src/assets/images/2018_10_lapices_elefante.webp",
    imgStyle: "object-position: 45% 38%; transform: scale(1.29);"
  },
  {
    id: "lapices_avispa",
    title: "Ilustraci\xF3n \xABAvispa\xBB",
    category: "ilustraciones",
    tag: "ILUSTRACIONES",
    desc: "Detalle entomol\xF3gico con l\xE1pices de color y contraste de amarillos (2018)",
    alt: "Dibujo cient\xEDfico y entomol\xF3gico detallado de avispa realizado con l\xE1pices de color.",
    filename: "2018_10_lapices_colores_avispa.webp",
    img: "./src/assets/images/2018_10_lapices_colores_avispa.webp",
    imgStyle: "object-position: 55% 20%;"
  },
  {
    id: "pico_picapinos",
    title: "Pico Picapinos",
    category: "ilustraciones",
    tag: "ILUSTRACIONES",
    desc: "Estudio ornitol\xF3gico con l\xE1pices de color y plumaje detallado (2018)",
    alt: "Ilustraci\xF3n ornitol\xF3gica detallada de pico picapinos grabada sobre madera.",
    filename: "2018_02_lapiz_color_pico_picapinos.webp",
    img: "./src/assets/images/2018_02_lapiz_color_pico_picapinos.webp",
    imgStyle: "object-position: center center; transform: scale(1.18) translateY(-6%);"
  },
  {
    id: "logo_sukas_style",
    title: "Logotipo \xABSuka's Style\xBB",
    category: "ilustraciones",
    tag: "ILUSTRACIONES",
    desc: "Dise\xF1o de identidad corporativa y logotipo para Johanna Crespo (2017)",
    alt: "Dise\xF1o de identidad visual y tipograf\xEDa corporativa para la marca Suka's Style.",
    filename: "2017_11_ilustracion_logo_sukas_style.webp",
    img: "./src/assets/images/2017_11_ilustracion_logo_sukas_style.webp",
    spanCol: true,
    imgStyle: "object-position: center 51%; transform: scale(1.22); transform-origin: center 51%;"
  },
  {
    id: "logo_aerografias",
    title: "Logotipo Aerograf\xEDas Javier Montero",
    category: "ilustraciones",
    tag: "ILUSTRACIONES",
    desc: "Identidad gr\xE1fica original de Javier Montero \xB7 Viermont Studio (2013)",
    alt: "Dise\xF1o de marca e identidad visual corporativa para Aerograf\xEDas Javier Montero.",
    filename: "2013_02_logo_aerografias.webp",
    img: "./src/assets/images/2013_02_logo_aerografias.webp",
    imgStyle: "object-position: center center;"
  },
  {
    id: "ilustracion_orando",
    title: "Ilustraci\xF3n Digital \xABOrando\xBB",
    category: "ilustraciones",
    tag: "ILUSTRACIONES",
    desc: "Pintura digital de concepto con iluminaci\xF3n volum\xE9trica \xB7 Mujer orando en la naturaleza (2016)",
    alt: "Pintura digital con amplio juego de iluminaci\xF3n volum\xE9trica y expresividad espiritual.",
    filename: "2016_04_ilustracion_digital_orando.webp",
    img: "./src/assets/images/2016_04_ilustracion_digital_orando.webp",
    spanCol: true,
    imgStyle: "object-position: center 65%; transform: scale(1.0);"
  },
  {
    id: "fotograma_tres_mellizas",
    title: "Fotograma \xABLas Tres Mellizas\xBB",
    category: "ilustraciones",
    tag: "ILUSTRACIONES",
    desc: "Fotograma original dibujado a mano como intercalador para Las Tres Mellizas (2001)",
    alt: "Fotograma original dibujado a mano como intercalador para la serie de animaci\xF3n Las Tres Mellizas.",
    filename: "2001_fotograma_3_mellizas.webp",
    img: "./src/assets/images/2001_fotograma_3_mellizas.webp",
    imgStyle: "transform: scale(1.25); object-position: center center;"
  },
  {
    id: "lienzo_texturas",
    title: "Lienzo Digital \xABTexturas\xBB",
    category: "ilustraciones",
    tag: "ILUSTRACIONES",
    desc: "Obra digital de arte contempor\xE1neo con estudio de texturas y materia visual (2014)",
    alt: "Obra digital abstracta contempor\xE1nea basada en exploraci\xF3n de texturas y expresividad crom\xE1tica.",
    filename: "2014_01_lienzo_digital_texturas.webp",
    img: "./src/assets/images/2014_01_lienzo_digital_texturas.webp",
    imgStyle: "object-position: center center;"
  },
  {
    id: "lienzo_abstracto_2",
    title: "Lienzo Digital Abstracto II",
    category: "ilustraciones",
    tag: "ILUSTRACIONES",
    desc: "Composici\xF3n abstracta digital con paleta crom\xE1tica de alta saturaci\xF3n (2013)",
    alt: "Composici\xF3n abstracta digital con paleta crom\xE1tica intensa y trazos libres.",
    filename: "2013_06_lienzo_digital_abstracto_2.webp",
    img: "./src/assets/images/2013_06_lienzo_digital_abstracto_2.webp",
    imgStyle: "object-position: center center;"
  },
  {
    id: "lienzo_abstracto_1",
    title: "Lienzo Digital Abstracto I",
    category: "ilustraciones",
    tag: "ILUSTRACIONES",
    desc: "Obra abstracta digital sobre lienzo con ritmo formal y contrastes din\xE1micos (2013)",
    alt: "Obra abstracta digital con estudio de color, formas geom\xE9trico-org\xE1nicas y alto contraste.",
    filename: "2013_06_lienzo_digital_abstracto_1.webp",
    img: "./src/assets/images/2013_06_lienzo_digital_abstracto_1.webp",
    imgStyle: "object-position: center center;"
  },
  // ==========================================
  // 6. EJERCICIOS (9 obras)
  // ==========================================
  {
    id: "lauricella_025",
    title: "Ejercicios de anatom\xEDa art\xEDstica - Lauricella I",
    category: "ejercicios",
    tag: "EJERCICIOS",
    desc: "Basado en los libros de anatom\xEDa art\xEDstica de Michel Lauricella (2020)",
    alt: "Estudio del volumen del torso y estructura anat\xF3mica basado en los libros de Michel Lauricella.",
    filename: "2020_03_anatomia_artistica_mlauricella_025.webp",
    img: "./src/assets/images/2020_03_anatomia_artistica_mlauricella_025.webp",
    imgStyle: "object-position: 18% 40%; transform: scale(1.08);"
  },
  {
    id: "lauricella_024",
    title: "Ejercicios de anatom\xEDa art\xEDstica - Lauricella II",
    category: "ejercicios",
    tag: "EJERCICIOS",
    desc: "Basado en los libros de anatom\xEDa art\xEDstica de Michel Lauricella (2020)",
    alt: "Estudio anat\xF3mico de perspectiva y simplificaci\xF3n morfol\xF3gica seg\xFAn Michel Lauricella.",
    filename: "2020_02_anatomia_artistica_mlauricella_024.webp",
    img: "./src/assets/images/2020_02_anatomia_artistica_mlauricella_024.webp",
    imgStyle: "object-position: 82% 40%; transform: scale(1.08);"
  },
  {
    id: "lauricella_023",
    title: "Ejercicios de anatom\xEDa art\xEDstica - Lauricella III",
    category: "ejercicios",
    tag: "EJERCICIOS",
    desc: "Basado en los libros de anatom\xEDa art\xEDstica de Michel Lauricella (2020)",
    alt: "Ejercicio anat\xF3mico orientado al estudio de masas musculares y movimiento humano.",
    filename: "2020_02_anatomia_artistica_mlauricella_023.webp",
    img: "./src/assets/images/2020_02_anatomia_artistica_mlauricella_023.webp",
    imgStyle: "object-position: 18% 40%; transform: scale(1.08);"
  },
  {
    id: "lauricella_022",
    title: "Ejercicios de anatom\xEDa art\xEDstica - Lauricella IV",
    category: "ejercicios",
    tag: "EJERCICIOS",
    desc: "Basado en los libros de anatom\xEDa art\xEDstica de Michel Lauricella (2020)",
    alt: "An\xE1lisis estructural de la pelvis y extremidades seg\xFAn el m\xE9todo de Michel Lauricella.",
    filename: "2020_02_anatomia_artistica_mlauricella_022.webp",
    img: "./src/assets/images/2020_02_anatomia_artistica_mlauricella_022.webp",
    imgStyle: "object-position: 82% 40%; transform: scale(1.08);"
  },
  {
    id: "anatomia_brazos",
    title: "Boceto Anat\xF3mico de Brazos",
    category: "ejercicios",
    tag: "EJERCICIOS",
    desc: "Basado en el libro \xABFigura humana\xBB de Jos\xE9 M. Parram\xF3n (2018)",
    alt: "Estudio din\xE1mico original de musculatura y tensi\xF3n del brazo humano basado en la obra de Jos\xE9 M. Parram\xF3n.",
    filename: "2018_03_boceto_anatomia_brazos.webp",
    img: "./src/assets/images/2018_03_boceto_anatomia_brazos.webp",
    imgStyle: "object-position: 70% 35%; transform: scale(1.08);"
  },
  {
    id: "boceto_bocas",
    title: "Estudio Expresivo de Bocas",
    category: "ejercicios",
    tag: "EJERCICIOS",
    desc: "Basado en el libro \xABEl Retrato\xBB de Giovanni Civardi (2017)",
    alt: "Trazos originales de gesticulaci\xF3n labial, comisuras y anatom\xEDa bucal a l\xE1piz basados en la obra de Giovanni Civardi.",
    filename: "2017_11_boceto_bocas.webp",
    img: "./src/assets/images/2017_11_boceto_bocas.webp",
    imgStyle: "object-position: center 55%; transform: scale(1.05);"
  },
  {
    id: "boceto_orejas",
    title: "Estudio de Orejas y Cart\xEDlago",
    category: "ejercicios",
    tag: "EJERCICIOS",
    desc: "Basado en el libro \xABEl Retrato\xBB de Giovanni Civardi (2017)",
    alt: "Estudio volum\xE9trico y de relieves cartilaginosos del pabell\xF3n auditivo humano basado en la obra de Giovanni Civardi.",
    filename: "2017_10_boceto_orejas.webp",
    img: "./src/assets/images/2017_10_boceto_orejas.webp",
    imgStyle: "object-position: center 6%; transform: scale(1.05);"
  },
  {
    id: "boceto_narices",
    title: "Estudio de Narices y Perspectiva",
    category: "ejercicios",
    tag: "EJERCICIOS",
    desc: "Basado en el libro \xABEl Retrato\xBB de Giovanni Civardi (2017)",
    alt: "Estudio volum\xE9trico y de planos lum\xEDnicos de la anatom\xEDa nasal desde m\xFAltiples \xE1ngulos seg\xFAn Giovanni Civardi.",
    filename: "2017_10_boceto_narices.webp",
    img: "./src/assets/images/2017_10_boceto_narices.webp",
    imgStyle: "object-position: center 60%; transform: scale(1.05);"
  },
  {
    id: "boceto_ojos",
    title: "Estudio de Ojos y Miradas",
    category: "ejercicios",
    tag: "EJERCICIOS",
    desc: "Basado en el libro \xABEl Retrato\xBB de Giovanni Civardi (2017)",
    alt: "Estudio anat\xF3mico del globo ocular, p\xE1rpados y expresi\xF3n de la mirada seg\xFAn el m\xE9todo de Giovanni Civardi.",
    filename: "2017_09_boceto_ojos.webp",
    img: "./src/assets/images/2017_09_boceto_ojos.webp",
    imgStyle: "object-position: center 5%; transform: scale(1.05);"
  }
];

// src/scripts/gallery.ts
function initGallery() {
  const galleryContainer = document.getElementById("art-gallery-container");
  const filterPills = document.querySelectorAll(".art-filter-pill");
  const textFilters = document.querySelectorAll(".art-text-filter");
  window.handleArtworkFallback = function(imgEl, artKey) {
    const titles = {
      barqueta_fran_cobo: "Barqueta BRC Fran Cobo",
      casco_harley: "Casco Harley-Davidson",
      casco_sin_city: "Casco Sin City Custom",
      capo_mascara: "Cap\xF3 M\xE1scara Veneciana"
    };
    const title = titles[artKey] || "Obra de Aerograf\xEDa";
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
  if (galleryContainer && galleryContainer.children.length === 0) {
    renderArtworks(DEFAULT_ARTWORKS_CATALOG, galleryContainer);
  }
  setupLightbox();
  function applyArtCategoryFilter(filterCategory) {
    filterPills.forEach((p) => {
      const isMatch = p.getAttribute("data-art-filter") === filterCategory;
      if (isMatch) {
        p.classList.remove("border", "border-white/10", "text-gray-400");
        p.classList.add("bg-accentGold", "text-[#07080a]", "font-semibold", "shadow-md", "shadow-amber-500/25");
      } else {
        p.classList.remove("bg-accentGold", "text-[#07080a]", "font-semibold", "shadow-md", "shadow-amber-500/25");
        p.classList.add("border", "border-white/10", "text-gray-400");
      }
    });
    textFilters.forEach((tf) => {
      const isMatch = tf.getAttribute("data-art-filter") === filterCategory;
      if (isMatch) {
        tf.classList.remove("text-accentGold/60", "border-transparent");
        tf.classList.add("text-accentGold", "font-semibold", "border-accentGold");
      } else {
        tf.classList.remove("text-accentGold", "font-semibold", "border-accentGold");
        tf.classList.add("text-accentGold/60", "border-transparent");
      }
    });
    const dynamicArtItems = document.querySelectorAll(".art-item");
    dynamicArtItems.forEach((item) => {
      const cat = item.getAttribute("data-category");
      if (cat === filterCategory) {
        item.classList.remove("hidden-art");
        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "scale(1)";
        }, 15);
      } else {
        item.style.opacity = "0";
        item.style.transform = "scale(0.95)";
        setTimeout(() => {
          item.classList.add("hidden-art");
        }, 180);
      }
    });
  }
  window.applyArtCategoryFilter = applyArtCategoryFilter;
  filterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const filter = pill.getAttribute("data-art-filter");
      if (filter) applyArtCategoryFilter(filter);
    });
  });
  textFilters.forEach((tf) => {
    tf.addEventListener("click", () => {
      const filter = tf.getAttribute("data-art-filter");
      if (filter) {
        applyArtCategoryFilter(filter);
        const target = document.getElementById("art-category-filters") || document.getElementById("arte");
        if (target) {
          const headerOffset = 90;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    });
  });
  applyArtCategoryFilter("murales");
}
function renderArtworks(items, container) {
  container.innerHTML = "";
  const fragment = document.createDocumentFragment();
  items.forEach((item, index) => {
    const card = document.createElement("div");
    const spanClasses = [
      item.spanRow ? "gallery-span-row-2" : "",
      item.spanCol ? "gallery-span-col-2" : ""
    ].filter(Boolean).join(" ");
    card.className = `art-item ${spanClasses} group cursor-pointer relative select-none w-full h-full`.trim().replace(/\s+/g, " ");
    card.style.opacity = "1";
    card.style.transform = "scale(1)";
    card.style.transition = "opacity 0.25s ease, transform 0.25s ease";
    card.setAttribute("data-category", item.category);
    card.setAttribute("data-title", item.title);
    card.setAttribute("data-alt", item.alt || item.title);
    card.setAttribute("data-tag", item.tag || item.category.toUpperCase());
    card.setAttribute("data-desc", item.desc);
    card.setAttribute("data-img", item.img);
    card.setAttribute("data-art-key", item.id);
    card.setAttribute("data-isolated-bg", item.isolatedBg ? "true" : "false");
    card.innerHTML = `
      <div class="relative rounded-3xl overflow-hidden bg-[#111216] border border-white/10 w-full h-full min-h-[290px] flex flex-col justify-end">
        <img
          src="${item.img}"
          alt="${escapeHtml(item.alt || item.title)}"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 no-download"
          style="${item.imgStyle || "object-position: center center;"}"
          loading="${index < 6 ? "eager" : "lazy"}"
          decoding="async"
          draggable="false"
          oncontextmenu="return false;"
          onerror="window.handleArtworkFallback(this, '${item.id}')"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none"></div>
        <div class="art-shield" oncontextmenu="return false;" draggable="false"></div>
        <div class="watermark-subtle absolute top-4 left-4 z-20 flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-accentGold"></span>
          <span class="text-[9px] font-mono tracking-widest text-white uppercase">Viermont Studio &copy;</span>
        </div>
        <div class="absolute bottom-6 left-6 right-6 z-20 pointer-events-none">
          <span class="text-[10px] font-mono uppercase tracking-widest text-accentGold font-semibold block mb-1">${escapeHtml(item.tag || item.category.toUpperCase())}</span>
          <h3 class="font-headline text-xl text-white font-bold mb-0.5">${escapeHtml(item.title)}</h3>
          <p class="text-xs text-gray-400 font-light line-clamp-2">${escapeHtml(item.desc)}</p>
        </div>
        <div class="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
          <i class="fa-solid fa-expand text-xs"></i>
        </div>
      </div>
    `;
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
}
function setupLightbox() {
  const lightboxBackdrop = document.getElementById("lightbox-backdrop");
  const lightboxInner = document.getElementById("lightbox-inner");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxPrev = document.getElementById("lightbox-prev");
  const lightboxNext = document.getElementById("lightbox-next");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxCategory = document.getElementById("lightbox-category");
  const lightboxHeading = document.getElementById("lightbox-heading");
  const lightboxDetails = document.getElementById("lightbox-details");
  const lightboxCounter = document.getElementById("lightbox-counter");
  function getVisibleArtworks() {
    return Array.from(document.querySelectorAll(".art-item:not(.hidden-art)"));
  }
  let currentArtworkIndex = 0;
  function updateLightboxContent(index) {
    const visibleList = getVisibleArtworks();
    if (!visibleList.length || !lightboxImage || !lightboxCategory || !lightboxHeading || !lightboxDetails || !lightboxCounter) return;
    currentArtworkIndex = (index + visibleList.length) % visibleList.length;
    const currentItem = visibleList[currentArtworkIndex];
    if (!currentItem) return;
    const title = currentItem.getAttribute("data-title") || "";
    const alt = currentItem.getAttribute("data-alt") || title;
    const tag = currentItem.getAttribute("data-tag") || "";
    const desc = currentItem.getAttribute("data-desc") || "";
    const img = currentItem.getAttribute("data-img") || "";
    lightboxImage.src = img;
    lightboxImage.alt = alt;
    lightboxCategory.textContent = tag;
    lightboxHeading.textContent = title;
    const spanDesc = lightboxDetails.querySelector("span:first-child");
    if (spanDesc) spanDesc.textContent = desc;
    lightboxCounter.textContent = `${currentArtworkIndex + 1} / ${visibleList.length}`;
    const isIsolated = currentItem.getAttribute("data-isolated-bg") === "true";
    const isolatedBadge = document.getElementById("lightbox-isolated-badge");
    if (isolatedBadge) {
      if (isIsolated) {
        isolatedBadge.classList.remove("hidden");
        isolatedBadge.classList.add("flex");
      } else {
        isolatedBadge.classList.add("hidden");
        isolatedBadge.classList.remove("flex");
      }
    }
  }
  function openLightbox(itemElement) {
    if (!lightboxBackdrop || !lightboxInner) return;
    const visibleList = getVisibleArtworks();
    const targetIndex = visibleList.indexOf(itemElement);
    updateLightboxContent(targetIndex >= 0 ? targetIndex : 0);
    document.body.style.overflow = "hidden";
    lightboxBackdrop.classList.remove("hidden");
    lightboxBackdrop.classList.add("flex");
    requestAnimationFrame(() => {
      lightboxBackdrop.classList.remove("opacity-0", "pointer-events-none");
      lightboxBackdrop.classList.add("opacity-100", "pointer-events-auto");
      if (lightboxInner) {
        lightboxInner.classList.remove("scale-95");
        lightboxInner.classList.add("scale-100");
      }
    });
  }
  function closeLightbox() {
    if (!lightboxBackdrop || !lightboxInner) return;
    document.body.style.overflow = "";
    lightboxBackdrop.classList.add("opacity-0", "pointer-events-none");
    lightboxBackdrop.classList.remove("opacity-100", "pointer-events-auto");
    lightboxInner.classList.remove("scale-100");
    lightboxInner.classList.add("scale-95");
    setTimeout(() => {
      if (lightboxBackdrop.classList.contains("opacity-0")) {
        lightboxBackdrop.classList.remove("flex");
        lightboxBackdrop.classList.add("hidden");
      }
    }, 300);
  }
  document.addEventListener("click", (e) => {
    const target = e.target;
    const artCard = target.closest(".art-item");
    if (artCard) {
      openLightbox(artCard);
    }
  });
  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxPrev) {
    lightboxPrev.addEventListener("click", (e) => {
      e.stopPropagation();
      updateLightboxContent(currentArtworkIndex - 1);
    });
  }
  if (lightboxNext) {
    lightboxNext.addEventListener("click", (e) => {
      e.stopPropagation();
      updateLightboxContent(currentArtworkIndex + 1);
    });
  }
  if (lightboxBackdrop && lightboxInner) {
    lightboxBackdrop.addEventListener("click", (e) => {
      if (!lightboxInner.contains(e.target) && !lightboxPrev?.contains(e.target) && !lightboxNext?.contains(e.target)) {
        closeLightbox();
      }
    });
  }
  document.addEventListener("keydown", (e) => {
    if (lightboxBackdrop && lightboxBackdrop.getAttribute("aria-hidden") === "false") {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") updateLightboxContent(currentArtworkIndex - 1);
      if (e.key === "ArrowRight") updateLightboxContent(currentArtworkIndex + 1);
    }
  });
}
function escapeHtml(str) {
  return String(str || "").replace(/[&<>"']/g, (s) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[s] || s);
}

// src/data/exercises.ts
var MIS_EJERCICIOS_VIERMONT = [
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
              <div class="text-emerald-400">&check; Script de monitorizaci\xF3n del sistema ejecutado correctamente (42 Urduliz).</div>`
  },
  {
    comando: "make libft",
    nombre: "Librer\xEDa C Libft",
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
                <div class="text-emerald-400 font-semibold pt-1">&check; libft.a generada con \xE9xito &bull; Norminette OK &bull; 0 memory leaks.</div>
              </div>
              <div class="text-teal-300">&check; Reimplementaci\xF3n completa de la biblioteca est\xE1ndar de C terminada.</div>`
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
                <div><span class="text-gray-500">// M\xF3dulo de Programaci\xF3n BIRT LH:</span> <span class="text-yellow-300">Java POO &amp; Persistencia</span></div>
                <div><span class="text-gray-500">// Estructura:</span> Clases de dominio, encapsulamiento, colecciones (ArrayList / HashMap).</div>
                <div><span class="text-gray-500">// Validaci\xF3n:</span> Control riguroso de excepciones (try-catch-finally) y tipado estricto.</div>
                <div class="text-emerald-400 font-bold pt-1">&check; Tests unitarios superados: 12/12 &bull; C\xF3digo de salida: 0 (OK)</div>
              </div>
              <div class="text-emerald-400">&check; M\xF3dulos Java POO de BIRT completados.</div>`
  },
  {
    comando: "java CifradoCesar",
    nombre: "Cifrado C\xE9sar & Criptograf\xEDa",
    lenguaje: "Java / Criptograf\xEDa",
    etiqueta: "DAM & TryHackMe",
    colorChip: "text-amber-400",
    salidaHtml: `
              <div class="text-amber-400 font-bold">[DAM &bull; Criptograf\xEDa Aplicada] javac CifradoCesar.java &amp;&amp; java CifradoCesar</div>
              <div class="p-3 my-2 rounded bg-black/60 border border-amber-500/20 text-gray-200 font-mono text-[11px] space-y-1.5">
                <div><span class="text-gray-500">// Algoritmo:</span> <span class="text-yellow-300">Cifrado C\xE9sar por sustituci\xF3n monoalfab\xE9tica</span></div>
                <div><span class="text-gray-500">// Clave de desplazamiento (k):</span> <span class="text-emerald-400">7</span></div>
                <div class="pt-1"><span class="text-gray-400">&gt; Mensaje original:</span> <span class="text-white font-semibold">"VIERMONT_STUDIO_CYBERSEC_2026"</span></div>
                <div><span class="text-gray-400">&gt; Texto cifrado:</span> <span class="text-amber-300 font-bold">"CPLYTVUA_ZABKPV_JFILYZLJ_2026"</span></div>
                <div><span class="text-gray-400">&gt; Proceso inverso (-k):</span> <span class="text-emerald-400 font-semibold">"VIERMONT_STUDIO_CYBERSEC_2026"</span></div>
                <div class="text-emerald-400 font-bold pt-1">&check; Integridad verificada &bull; Test de encriptaci\xF3n/desencriptaci\xF3n superado (100% match)</div>
              </div>
              <div class="text-amber-300">&check; Implementaci\xF3n criptogr\xE1fica en Java finalizada correctamente.</div>`
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
                <div><span class="text-teal-400 font-bold">&bull; viermontstudio-website</span>: Web oficial: Auditor\xEDa t\xE9cnica, dise\xF1o y supervisi\xF3n de correcciones (ejecuci\xF3n asistida por IA).</div>
                <div><span class="text-emerald-400 font-bold">&bull; DAM-JobieFP</span>: Desarrollo de Aplicaciones Multiplataforma (Java, SQL, C#, Linux).</div>
                <div><span class="text-blue-400 font-bold">&bull; BIRT</span>: M\xF3dulos de programaci\xF3n en Java (Programaci\xF3n Orientada a Objetos).</div>
                <div><span class="text-amber-400 font-bold">&bull; Aprendeaprogramar.com</span>: Consolidaci\xF3n de algoritmia y fundamentos en lenguaje C.</div>
                <div><span class="text-teal-400 font-bold">&bull; 42_Cursus</span>: Proyectos de C (Libft, Born2beRoot, Valgrind) de 42 Urduliz.</div>
                <div><span class="text-teal-400 font-bold">&bull; 42_Pool</span>: Ejercicios intensivos en C de bajo nivel (26 d\xEDas) de 42 Urduliz.</div>
              </div>
              <div class="text-teal-400">&check; 6 repositorios oficiales catalogados y sincronizados</div>`
  }
];

// src/scripts/terminal.ts
function initTerminal() {
  const tabReadmeBtn = document.getElementById("tab-readme-btn");
  const tabTerminalBtn = document.getElementById("tab-terminal-btn");
  const viewReadmeContainer = document.getElementById("view-readme-container");
  const viewTerminalContainer = document.getElementById("view-terminal-container");
  const terminalScreen = document.getElementById("terminal-screen");
  const terminalForm = document.getElementById("terminal-form");
  const terminalInput = document.getElementById("terminal-input");
  const copyReadmeBtn = document.getElementById("copy-readme-btn");
  const copyReadmeLabel = document.getElementById("copy-readme-label");
  const downloadCvBtn = document.getElementById("download-cv-btn");
  const githubSyncIndicator = document.getElementById("github-sync-indicator");
  const githubReposContainer = document.getElementById("github-repos-container");
  const cvMarkdownText = `# JAVIER MONTERO
\u{1F4CD} 20870 ELGOIBAR (GIPUZKOA) | \u2709\uFE0F viermontstudio@gmail.com / mail@viermontstudio.com
\u{1F310} viermontstudio.com | \u{1F419} github.com/viermontstudio

## PERFIL PROFESIONAL
Desarrollador en formaci\xF3n (DAM) con trayectoria previa en desarrollo web, dise\xF1o gr\xE1fico, dibujo art\xEDstico y delineaci\xF3n t\xE9cnica. Combino mi formaci\xF3n en C, C#, Java, SQL, Linux y Ciberseguridad con la responsabilidad, autonom\xEDa y excelencia en el trato al cliente desarrolladas a lo largo de m\xE1s de 18 a\xF1os de trayectoria laboral continua. Actualmente retomo mi carrera tecnol\xF3gica con el objetivo de volver al sector IT, aportando un perfil distinto al junior habitual: madurez profesional, visi\xF3n pr\xE1ctica y capacidad real de resolver problemas.

## FORMACI\xD3N IT & ACAD\xC9MICA
\u2022 T\xE9cnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM) (En Formaci\xF3n) - Jobie FP (2026 - Actualidad)
\u2022 Cursos de Ciberseguridad (Pre Security & Cybersecurity 101) - TryHackMe (2026 - Actualidad)
\u2022 Cursos de Conceptos Programaci\xF3n, Introducci\xF3n a la Programaci\xF3n y Java B\xE1sico - Open Bootcamp (2023)
\u2022 M\xF3dulo de Programaci\xF3n Inform\xE1tica Java - BIRT LH (Online) (2022 - 2023)
\u2022 Campus de Programaci\xF3n (C, Shell, Git, Linux) - 42 Urduliz \u2022 Punteros, memoria din\xE1mica (2021 - 2022)
\u2022 Curso Chapista Pintor de Veh\xEDculos (760 horas) - CIP Andoain (2007)
\u2022 Curso de Aerograf\xEDa Profesional (80 h - T\xE9cnicas art\xEDsticas) - Estudio Juanjo Bar\xF3n (2006)
\u2022 Curso de Dise\xF1o y Programaci\xF3n Web (609 horas) - \xC1rea (San Sebasti\xE1n) (2003)
\u2022 Curso de Dibujo & Animaci\xF3n Tradicional (152 horas) - Sirimiri Films (2000 - 2001)
\u2022 T\xE9cnico en Preimpresi\xF3n en Artes Gr\xE1ficas - CEINPRO \u2022 Dise\xF1o Gr\xE1fico, fotograf\xEDa, tipograf\xEDa y color (1998 - 2000)

## EXPERIENCIA LABORAL (TRAYECTORIA CONTINUA AUDITABLE)
\u2022 Caddie M\xE1ster & Atenci\xF3n Exclusiva | Real Nuevo Club de Golf de San Sebasti\xE1n Basozabal (Julio 2008 - Actualidad / 18 a\xF1os continuos)
  - Atenci\xF3n exclusiva a socios y visitantes internacionales, control de juego como starter y marshall, y gesti\xF3n operativa de instalaciones. 18 a\xF1os continuos basados en la excelencia en el trato, resoluci\xF3n aut\xF3noma de incidencias, discreci\xF3n y confianza.
\u2022 Pintor Aerografista, Dise\xF1ador Gr\xE1fico e Ilustrador Freelance | Viermont Studio (Junio 2006 - Actualidad / 19+ a\xF1os)
  - Pintura y personalizaci\xF3n art\xEDstica de alta precisi\xF3n sobre veh\xEDculos, cascos de competici\xF3n, atracciones, lienzos, instrumentos musicales y murales en gran formato. Proyectos para clientes y obra art\xEDstica personal.
\u2022 Dise\xF1ador y Programador de P\xE1ginas Web | Letralan / Quick Comunicaci\xF3n Multimedia (2004 / 6 meses)
  - Creaci\xF3n de p\xE1ginas web corporativas para clientes de las empresas con Dreamweaver, HTML, CSS, ASP y Flash.
\u2022 Dibujante e Intercalador de animaci\xF3n | Basabe Animation / Sirimiri Films (2000 - 2004)
  - Realizaci\xF3n de series de TV animadas como \xABLas tres mellizas\xBB, \xABTom el dinosaurio\xBB y \xABJuanito Jones\xBB, manteniendo rigor en intercalaci\xF3n tradicional, dibujo cl\xE1sico y sincron\xEDa de movimiento fotograma a fotograma.
\u2022 Delineante CAD | Geminys / DMT (1997 - 1998, 2002)
  - Realizaci\xF3n de manuales industriales de ingenier\xEDa y dibujo de planos de maquinaria industrial mediante AutoCAD.

## CONOCIMIENTOS T\xC9CNICOS & APTITUDES
\u2022 Lenguajes de Programaci\xF3n: C, C#, Java, SQL, Bash
\u2022 Inform\xE1tica, Sistemas & IDEs: Linux, Windows, macOS, Shell/Terminal, Git, Vim, VirtualBox, VS / IntelliJ
\u2022 Ciberseguridad Defensiva: Pre Security, Cybersecurity 101, Hardening & Redes
\u2022 Inteligencia Artificial (IA): Google AI Studio, Gemini Notebook, Microsoft Copilot, ChatGPT
\u2022 Web: HTML5, CSS, Vite
\u2022 Dise\xF1o Gr\xE1fico: Photoshop, Illustrator, Affinity, Krita, SketchBook, Canva
\u2022 Pintura & Aerograf\xEDa: Aerograf\xEDa art\xEDstica, pintura y preparaci\xF3n de superficies, personalizaci\xF3n y acabados
\u2022 Dibujo, Animaci\xF3n & Delineaci\xF3n: Animaci\xF3n tradicional 2D, dibujo art\xEDstico, delineaci\xF3n CAD
\u2022 Aptitudes: Madurez profesional, resoluci\xF3n aut\xF3noma de problemas, atenci\xF3n al cliente exclusiva, empat\xEDa y rigor en el detalle
\u2022 Idiomas: Espa\xF1ol - Nativo | Ingl\xE9s - B1 | Euskera - B1`;
  function switchTerminalView(view) {
    if (!viewReadmeContainer || !viewTerminalContainer || !tabReadmeBtn || !tabTerminalBtn) return;
    if (view === "readme") {
      viewReadmeContainer.classList.remove("hidden");
      viewTerminalContainer.classList.add("hidden");
      tabReadmeBtn.classList.add("bg-teal-400", "text-[#07080a]", "shadow-sm");
      tabReadmeBtn.classList.remove("text-gray-400");
      tabTerminalBtn.classList.remove("bg-teal-400", "text-[#07080a]", "shadow-sm");
      tabTerminalBtn.classList.add("text-gray-400");
    } else {
      viewReadmeContainer.classList.add("hidden");
      viewTerminalContainer.classList.remove("hidden");
      tabTerminalBtn.classList.add("bg-teal-400", "text-[#07080a]", "shadow-sm");
      tabTerminalBtn.classList.remove("text-gray-400");
      tabReadmeBtn.classList.remove("bg-teal-400", "text-[#07080a]", "shadow-sm");
      tabReadmeBtn.classList.add("text-gray-400");
      if (terminalInput) terminalInput.focus();
    }
  }
  window.switchTerminalView = switchTerminalView;
  if (tabReadmeBtn) tabReadmeBtn.addEventListener("click", () => switchTerminalView("readme"));
  if (tabTerminalBtn) tabTerminalBtn.addEventListener("click", () => switchTerminalView("terminal"));
  const globalToast = document.getElementById("global-toast");
  const globalToastMessage = document.getElementById("global-toast-message");
  let globalToastTimer = null;
  function showGlobalToast(msg) {
    if (!globalToast) return;
    if (globalToastMessage) globalToastMessage.textContent = msg;
    globalToast.classList.remove("translate-y-8", "opacity-0", "pointer-events-none");
    globalToast.classList.add("translate-y-0", "opacity-100");
    clearTimeout(globalToastTimer);
    globalToastTimer = setTimeout(() => {
      globalToast.classList.add("translate-y-8", "opacity-0", "pointer-events-none");
      globalToast.classList.remove("translate-y-0", "opacity-100");
    }, 2600);
  }
  window.showGlobalToast = showGlobalToast;
  if (copyReadmeBtn) {
    copyReadmeBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(cvMarkdownText).then(() => {
        if (copyReadmeLabel) copyReadmeLabel.textContent = "\xA1Copiado!";
        copyReadmeBtn.classList.add("text-teal-300");
        showGlobalToast("README.md copiado al portapapeles con \xE9xito");
        setTimeout(() => {
          if (copyReadmeLabel) copyReadmeLabel.textContent = "Copiar";
          copyReadmeBtn.classList.remove("text-teal-300");
        }, 2e3);
      }).catch(() => {
        prompt("Copia tu curr\xEDculum Markdown:", cvMarkdownText);
      });
    });
  }
  if (downloadCvBtn) {
    downloadCvBtn.addEventListener("click", () => {
      console.log("Descargando CV_Javier_Montero_ViermontStudio.pdf");
    });
  }
  let cachedRepos = [];
  async function fetchGitHubRepos() {
    try {
      const res = await fetch("https://api.github.com/users/viermontstudio/repos?sort=updated&per_page=6");
      if (!res.ok) throw new Error("API Rate limit o error");
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        cachedRepos = data.map((item) => ({
          name: typeof item.name === "string" ? item.name : "Repositorio",
          language: typeof item.language === "string" ? item.language : "Code",
          description: typeof item.description === "string" ? item.description : "Sin descripci\xF3n",
          html_url: typeof item.html_url === "string" && item.html_url.startsWith("https://github.com/") ? item.html_url : "https://github.com/viermontstudio"
        }));
        if (githubSyncIndicator) {
          githubSyncIndicator.textContent = `Sincronizado: ${cachedRepos.length} repositorios oficiales catalogados (GitHub)`;
        }
      }
    } catch (_) {
      if (githubSyncIndicator) {
        githubSyncIndicator.textContent = "Modo seguro local \xB7 Conexi\xF3n a GitHub activa";
      }
    }
  }
  fetchGitHubRepos();
  let terminalHistory = [];
  let historyNavIndex = -1;
  let commandDraft = "";
  function escapeHtml2(str) {
    return String(str || "").replace(/[&<>"']/g, (s) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[s] || s);
  }
  function runTerminalCommand(rawCmd) {
    if (!terminalScreen) return;
    const cmd = rawCmd.trim();
    if (!cmd) return;
    switchTerminalView("terminal");
    if (cmd.toLowerCase() === "clear" || cmd.toLowerCase() === "cls") {
      terminalScreen.innerHTML = `
        <div class="text-gray-500">
          Viermont Linux Terminal v2.4 (GNU/Linux x86_64 - WebAssembly/JS Client Sandbox)<br/>
          Pantalla limpiada. Escribe <span class="text-teal-300 font-bold">help</span> para consultar los comandos disponibles.
        </div>`;
      return;
    }
    const cmdLine = document.createElement("div");
    cmdLine.className = "flex items-center gap-2 text-teal-400 font-semibold pt-2";
    cmdLine.innerHTML = `<span>javiermontero@ViermontStudio:~$</span> <span class="text-white">${escapeHtml2(cmd)}</span>`;
    terminalScreen.appendChild(cmdLine);
    const outputBox = document.createElement("div");
    outputBox.className = "text-gray-300 pl-4 border-l-2 border-white/10 space-y-1";
    const lower = cmd.toLowerCase();
    const norm = lower.replace(/\s+/g, " ");
    let ejercicioEncontrado = MIS_EJERCICIOS_VIERMONT.find(
      (e) => e.comando.toLowerCase() === norm || norm === e.comando.toLowerCase()
    );
    if (!ejercicioEncontrado) {
      if (norm.includes("cifrado") || norm.includes("cesar")) {
        ejercicioEncontrado = MIS_EJERCICIOS_VIERMONT.find((e) => e.comando.toLowerCase().includes("cifrado"));
      } else if (norm.includes("monitoring") || norm.includes("born2be")) {
        ejercicioEncontrado = MIS_EJERCICIOS_VIERMONT.find((e) => e.comando.toLowerCase().includes("monitoring"));
      } else if (norm.includes("libft")) {
        ejercicioEncontrado = MIS_EJERCICIOS_VIERMONT.find((e) => e.comando.toLowerCase().includes("libft"));
      } else if (norm.includes("birt")) {
        ejercicioEncontrado = MIS_EJERCICIOS_VIERMONT.find((e) => e.comando.toLowerCase().includes("birt"));
      }
    }
    if (ejercicioEncontrado) {
      outputBox.innerHTML = ejercicioEncontrado.salidaHtml;
    } else if (lower.includes("cred") || lower.includes("cert") || lower.includes("diploma")) {
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
    } else if (lower.includes("readme")) {
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
    } else if (lower === "repos" || lower.includes("github") || lower === "projects") {
      if (cachedRepos.length > 0) {
        let reposListHtml = '<div class="text-teal-300 font-bold">[GitHub API] Repositorios p\xFAblicos en @viermontstudio:</div><div class="space-y-1 mt-2">';
        cachedRepos.forEach((r) => {
          const safeUrl = typeof r.html_url === "string" && r.html_url.startsWith("https://github.com/") ? r.html_url : "https://github.com/viermontstudio";
          const safeName = escapeHtml2(r.name || "Repositorio");
          const safeLang = escapeHtml2(r.language || "Code");
          const safeDesc = escapeHtml2(r.description || "Sin descripci\xF3n");
          reposListHtml += `<div>&bull; <a href="${safeUrl}" target="_blank" class="text-white hover:underline font-semibold" rel="noopener noreferrer">${safeName}</a> <span class="text-teal-400 font-mono text-[11px]">(${safeLang})</span> &mdash; <span class="text-gray-400 text-xs">${safeDesc}</span></div>`;
        });
        reposListHtml += "</div>";
        outputBox.innerHTML = reposListHtml;
      } else {
        outputBox.innerHTML = `
          <div class="text-teal-300 font-bold">[GitHub API] Repositorios p\xFAblicos de Javier Montero:</div>
          <div class="text-gray-300 mt-1">Visita <a href="https://github.com/viermontstudio" target="_blank" class="text-teal-400 underline font-semibold" rel="noopener noreferrer">https://github.com/viermontstudio</a> para inspeccionar los 6 repositorios oficiales catalogados en vivo.</div>`;
      }
    } else if (lower === "ls" || lower === "ls -la" || lower === "ls -l" || lower === "ls -a" || lower === "dir" || lower.startsWith("ls ")) {
      let filesHtml = '<div class="grid grid-cols-2 sm:grid-cols-3 gap-2 text-teal-300 py-1">';
      filesHtml += "<span>\u{1F4C4} README.md</span>";
      filesHtml += "<span>\u{1F3C5} certificaciones.log</span>";
      MIS_EJERCICIOS_VIERMONT.forEach((e) => {
        filesHtml += `<span>\u26A1 ${e.comando}</span>`;
      });
      filesHtml += "<span>\u{1F4C1} repos_github/</span><span>\u{1F4BC} curriculum_javier.pdf</span></div>";
      filesHtml += '<div class="text-gray-500 text-[11px] mt-1">Escribe cualquiera de los comandos anteriores o pulsa sobre ellos.</div>';
      outputBox.innerHTML = filesHtml;
    } else if (lower.startsWith("git")) {
      const gitEj = MIS_EJERCICIOS_VIERMONT.find((e) => e.comando === "git status");
      if (gitEj) {
        outputBox.innerHTML = gitEj.salidaHtml;
      }
    } else if (lower === "whoami") {
      outputBox.innerHTML = `
        <div><strong class="text-white">Javier Montero</strong> &mdash; Desarrollador en formaci\xF3n (DAM), estudiante de Ciberseguridad en TryHackMe, delineante y artista creativo en Viermont Studio.</div>
        <div class="text-gray-400 mt-1">Enfoque: Volver al sector IT aportando madurez, rigor t\xE9cnico y habilidades de dise\xF1o de nivel internacional.</div>`;
    } else if (lower.includes("contact") || lower.includes("contacto")) {
      outputBox.innerHTML = `
        <div class="text-teal-300 font-semibold">Datos de Contacto Directo:</div>
        <div>&bull; Formulario Web: <a href="#contacto" class="text-white hover:underline font-semibold">Ir al formulario de contacto</a></div>
        <div>&bull; Ubicaci\xF3n: Elgoibar, Gipuzkoa (Pa\xEDs Vasco)</div>
        <div>&bull; GitHub: <a href="https://github.com/viermontstudio" target="_blank" class="text-teal-400 underline" rel="noopener noreferrer">github.com/viermontstudio</a></div>
        <div>&bull; LinkedIn: <a href="https://www.linkedin.com/in/viermontstudio" target="_blank" class="text-teal-400 underline" rel="noopener noreferrer">linkedin.com/in/viermontstudio</a></div>
        <div>&bull; Instagram: <a href="https://www.instagram.com/viermontstudio" target="_blank" class="text-teal-400 underline" rel="noopener noreferrer">instagram.com/viermontstudio</a></div>
        <div>&bull; TikTok: <a href="https://www.tiktok.com/@viermontstudio" target="_blank" class="text-teal-400 underline" rel="noopener noreferrer">tiktok.com/@viermontstudio</a></div>`;
    } else if (lower === "help") {
      let helpHtml = '<div class="text-teal-300 font-bold mb-1">Comandos disponibles en la terminal:</div><div class="space-y-1">';
      helpHtml += '<div><span class="text-yellow-300 font-bold">cat README.md</span> &mdash; Muestra el curr\xEDculum completo formateado</div>';
      helpHtml += '<div><span class="text-emerald-300 font-bold">credentials</span> &mdash; Muestra acreditaciones y estado de ciberseguridad</div>';
      helpHtml += '<div><span class="text-yellow-300 font-bold">repos</span> &mdash; Consulta en vivo tus repositorios de GitHub</div>';
      MIS_EJERCICIOS_VIERMONT.forEach((e) => {
        helpHtml += `<div><span class="text-yellow-300 font-bold">${e.comando}</span> &mdash; ${e.nombre} (${e.lenguaje})</div>`;
      });
      helpHtml += '<div><span class="text-yellow-300 font-bold">ls -la</span> &mdash; Lista los archivos del proyecto</div>';
      helpHtml += '<div><span class="text-yellow-300 font-bold">whoami</span> &mdash; Informaci\xF3n sobre Javier Montero</div>';
      helpHtml += '<div><span class="text-yellow-300 font-bold">contact</span> &mdash; Muestra v\xEDas de contacto directo</div>';
      helpHtml += '<div><span class="text-yellow-300 font-bold">tree</span> &mdash; \xC1rbol de archivos del repositorio</div>';
      helpHtml += '<div><span class="text-yellow-300 font-bold">env</span> &mdash; Variables de entorno del sistema</div>';
      helpHtml += '<div><span class="text-yellow-300 font-bold">clear</span> &mdash; Limpia la pantalla de la terminal</div></div>';
      outputBox.innerHTML = helpHtml;
    } else if (lower === "pwd") {
      outputBox.innerHTML = `<div class="text-teal-300 font-mono">/home/javier/viermontstudio</div>`;
    } else if (lower === "date") {
      const now = /* @__PURE__ */ new Date();
      outputBox.innerHTML = `<div class="text-gray-300 font-mono">${now.toUTCString()}</div>`;
    } else if (lower.startsWith("echo ") || lower === "echo") {
      const rawEcho = rawCmd.substring(4).trim();
      const cleanEcho = rawEcho.replace(/^["']|["']$/g, "");
      outputBox.innerHTML = `<div class="text-gray-200 font-mono">${escapeHtml2(cleanEcho)}</div>`;
    } else if (lower === "uname" || lower.startsWith("uname ")) {
      outputBox.innerHTML = `<div class="text-gray-300 font-mono">Linux viermont-studio 6.8.0-generic x86_64 GNU/Linux</div>`;
    } else if (lower === "hostname") {
      outputBox.innerHTML = `<div class="text-teal-300 font-mono">viermont-studio</div>`;
    } else if (lower === "uptime") {
      const now = /* @__PURE__ */ new Date();
      const timeStr = now.toTimeString().split(" ")[0];
      outputBox.innerHTML = `<div class="text-gray-300 font-mono">${timeStr} up +18 years, 1 user, load average: 0.00, 0.01, 0.05</div>`;
    } else if (lower === "who" || lower === "id") {
      outputBox.innerHTML = `<div class="text-gray-300 font-mono">uid=1000(javier) gid=1000(viermont) groups=1000(viermont),100(users)</div>`;
    } else if (lower === "env" || lower === "printenv") {
      outputBox.innerHTML = `
        <div class="text-gray-300 font-mono text-[11px] space-y-0.5">
          <div><span class="text-teal-400">USER</span>=javier</div>
          <div><span class="text-teal-400">HOME</span>=/home/javier</div>
          <div><span class="text-teal-400">SHELL</span>=/bin/bash</div>
          <div><span class="text-teal-400">PWD</span>=/home/javier/viermontstudio</div>
          <div><span class="text-teal-400">ROLE</span>="Junior Developer &amp; Senior en Oficio"</div>
          <div><span class="text-teal-400">LOCATION</span>="20870 Elgoibar (Gipuzkoa)"</div>
          <div><span class="text-teal-400">STACK</span>="C, C#, Java, SQL, Linux, CSS, Vite"</div>
          <div><span class="text-teal-400">STATUS</span>="Disponible para incorporaci\xF3n"</div>
          <div><span class="text-teal-400">LANG</span>=es_ES.UTF-8</div>
          <div><span class="text-teal-400">TERM</span>=xterm-256color</div>
        </div>`;
    } else if (lower === "history") {
      let histHtml = '<div class="text-gray-300 font-mono text-xs space-y-0.5">';
      if (terminalHistory.length === 0) {
        histHtml += '<div class="text-gray-500">Historial vac\xEDo en esta sesi\xF3n.</div>';
      } else {
        terminalHistory.forEach((hCmd, idx) => {
          histHtml += `<div><span class="text-gray-500 w-8 inline-block">${idx + 1}</span> <span class="text-teal-300">${escapeHtml2(hCmd)}</span></div>`;
        });
      }
      histHtml += "</div>";
      outputBox.innerHTML = histHtml;
    } else if (lower === "tree" || lower === "tree ." || lower === "tree repos/") {
      outputBox.innerHTML = `
        <div class="text-gray-300 font-mono text-xs leading-relaxed">
          <span class="text-teal-400 font-bold">.</span><br/>
          \u251C\u2500\u2500 <span class="text-white">README.md</span> (Curr\xEDculum completo y trayectoria)<br/>
          \u251C\u2500\u2500 <span class="text-emerald-400">certificaciones.log</span> (THM Pre Security, CyberSec 101, EF SET B1)<br/>
          \u251C\u2500\u2500 <span class="text-blue-400">stack.json</span> (C, Java, SQL, Linux, CSS)<br/>
          \u251C\u2500\u2500 <span class="text-amber-400">repos_github/</span><br/>
          \u2502   \u251C\u2500\u2500 viermontstudio-website<br/>
          \u2502   \u251C\u2500\u2500 DAM-JobieFP<br/>
          \u2502   \u251C\u2500\u2500 BIRT<br/>
          \u2502   \u251C\u2500\u2500 Aprendeaprogramar.com<br/>
          \u2502   \u251C\u2500\u2500 42_Cursus<br/>
          \u2502   \u2514\u2500\u2500 42_Pool<br/>
          \u2514\u2500\u2500 <span class="text-rose-400">CV_Javier_Montero_ViermontStudio.pdf</span><br/>
          <span class="text-gray-500 text-[11px] mt-1">2 directories, 8 files</span>
        </div>`;
    } else if (lower.startsWith("cd ") || lower === "cd") {
      const targetDir = lower.replace(/^cd\s*/, "").trim() || "~";
      outputBox.innerHTML = `<div class="text-teal-300 font-mono text-xs">cd: directorio actual fijado a /home/javier/viermontstudio/${escapeHtml2(targetDir === "~" ? "" : targetDir)} (entorno interactivo seguro)</div>`;
    } else if (lower === "exit" || lower === "quit" || lower === "logout") {
      outputBox.innerHTML = `<div class="text-teal-300 font-mono text-xs">logout: Sesi\xF3n de terminal preservada. Cambiando a vista README.md...</div>`;
      setTimeout(() => switchTerminalView("readme"), 700);
    } else if (lower.startsWith("cat ")) {
      const targetFile = lower.replace(/^cat\s+/, "").trim();
      if (targetFile.includes("readme")) {
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
      } else if (targetFile.includes("stack")) {
        outputBox.innerHTML = `
          <pre class="text-teal-300 font-mono text-xs overflow-x-auto p-2 bg-black/60 rounded border border-white/10">{
  "lenguajes": ["C", "C#", "Java", "SQL", "Bash"],
  "sistemas": ["Linux", "Unix", "Windows OS"],
  "herramientas": ["Git", "Valgrind", "VS Code", "IntelliJ", "Vite"],
  "dise\xF1o": ["Photoshop", "Illustrator", "Affinity", "AutoCAD", "Aerograf\xEDa"],
  "idiomas": {"espa\xF1ol": "Nativo", "euskera": "B1", "ingles": "B1 (Reading C1)"}
}</pre>`;
      } else if (targetFile.includes("package")) {
        outputBox.innerHTML = `
          <pre class="text-blue-300 font-mono text-xs overflow-x-auto p-2 bg-black/60 rounded border border-white/10">{
  "name": "viermontstudio-website",
  "version": "6.0.0",
  "author": "Javier Montero",
  "license": "MIT",
  "type": "module"
}</pre>`;
      } else if (targetFile.includes("contact") || targetFile.includes("contacto")) {
        outputBox.innerHTML = `
          <div class="text-gray-200 font-mono text-xs space-y-1">
            <div><strong class="text-teal-400">Email:</strong> viermontstudio@gmail.com</div>
            <div><strong class="text-teal-400">Web:</strong> viermontstudio.com</div>
            <div><strong class="text-teal-400">Ubicaci\xF3n:</strong> 20870 Elgoibar (Gipuzkoa)</div>
            <div><strong class="text-teal-400">GitHub:</strong> github.com/viermontstudio</div>
            <div><strong class="text-teal-400">LinkedIn:</strong> linkedin.com/in/viermontstudio</div>
          </div>`;
      } else if (targetFile.includes("cert") || targetFile.includes("log") || targetFile.includes("diploma")) {
        outputBox.innerHTML = `
          <div class="text-gray-200 font-mono text-xs space-y-1">
            <div>[2026-03] TryHackMe: Pre Security Learning Path (Completado \xB7 THM-ODHVAD97QZ)</div>
            <div>[2026-Act] TryHackMe: Cybersecurity 101 (En curso)</div>
            <div>[2024-03] EF SET: English Certificate (B1 Intermediate \xB7 Reading C1 \xB7 cert.efset.org/UGynH4)</div>
            <div>[2021-2022] 42 Urduliz: Campus Pr\xE1ctico Inmersivo en Lenguaje C</div>
            <div>[2022-2023] BIRT LH: Programaci\xF3n Inform\xE1tica Java (POO)</div>
          </div>`;
      } else {
        outputBox.innerHTML = `
          <div class="text-rose-400 font-mono text-xs">cat: ${escapeHtml2(targetFile)}: No existe el archivo o el directorio</div>
          <div class="text-gray-500 font-mono text-[11px]">Escribe <span class="text-teal-300 font-bold">ls -la</span> para ver los archivos disponibles.</div>`;
      }
    } else {
      outputBox.innerHTML = `
        <div class="text-rose-400">bash: comando no encontrado: '${escapeHtml2(cmd)}'</div>
        <div class="text-gray-400">Escribe <span class="text-teal-300 font-bold">help</span> para consultar los comandos v\xE1lidos o pulsa en los botones superiores.</div>`;
    }
    terminalScreen.appendChild(outputBox);
    terminalScreen.scrollTop = terminalScreen.scrollHeight;
  }
  window.runTerminalCommand = runTerminalCommand;
  document.querySelectorAll("[data-exec]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const cmd = btn.getAttribute("data-exec");
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
    terminalForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = terminalInput.value;
      if (val.trim()) {
        terminalHistory.push(val.trim());
        historyNavIndex = terminalHistory.length;
        commandDraft = "";
        runTerminalCommand(val);
        terminalInput.value = "";
      }
    });
    terminalInput.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") {
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
      } else if (e.key === "ArrowDown") {
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

// src/data/certificates.ts
var MIS_CERTIFICACIONES = {
  "thm-presecurity": {
    titulo: "TryHackMe: Pre Security Learning Path",
    emisor: "TryHackMe \xB7 Plataforma Oficial de Ciberseguridad (UK)",
    icono: '<i class="fa-solid fa-shield-halved"></i>',
    iconClase: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    badgeHtml: '<i class="fa-solid fa-circle-check text-[9px]"></i> VERIFICADO &bull; COMPLETADO',
    badgeClase: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    estadoTexto: "Completado el 14/03/2026 (Duraci\xF3n: 19h 10m)",
    modulos: [
      "Network Fundamentals (TCP/IP, OSI, Puertos, Enrutamiento)",
      "How The Web Works (Protocolo HTTP/S, Peticiones, DNS, Servidores)",
      "Linux Fundamentals (Terminal CLI, Permisos, Ficheros, Procesos)",
      "Windows Fundamentals (Sistema de Archivos, Registro, Seguridad UAC)",
      "ID Oficial de Credencial: THM-ODHVAD97QZ"
    ],
    nota: "Acreditaci\xF3n expedida al completar satisfactoriamente el itinerario preparatorio de ciberseguridad, validando los conocimientos fundamentales para el an\xE1lisis defensivo y la administraci\xF3n segura de redes.",
    defaultImage: "./src/assets/certificates/thm_pre_security_cert.png",
    pdfUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-ODHVAD97QZ.pdf",
    enlace: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-ODHVAD97QZ.pdf",
    enlaceTexto: "Verificar en TryHackMe (Credencial Oficial)",
    storageKey: "viermont_cert_img_thm_presec"
  },
  "ef-set-english": {
    titulo: "EF SET English Certificate (CEFR B1 Intermediate)",
    emisor: "EF Standard English Test (EF SET)",
    icono: '<i class="fa-solid fa-language"></i>',
    iconClase: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    badgeHtml: '<i class="fa-solid fa-circle-check text-[9px]"></i> CERTIFICADO OFICIAL &bull; B1 (Reading C1)',
    badgeClase: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    estadoTexto: "Expedido el 01/03/2024 (Puntuaci\xF3n EF SET 47/100 \xB7 B1)",
    modulos: [
      "Puntuaci\xF3n Global EF SET: 47/100 (B1 Intermediate)",
      "Comprensi\xF3n Lectora (Reading): 63/100 \u2014 C1 Advanced",
      "Comprensi\xF3n Auditiva (Listening): 31/100 \u2014 A2 Elementary",
      "Marco Com\xFAn Europeo de Referencia para las Lenguas (MCER / CEFR)",
      "ID Oficial Verificable: cert.efset.org/UGynH4"
    ],
    nota: "Certificaci\xF3n oficial de competencia en lengua inglesa que acredita solvencia en lectura t\xE9cnica, documentaci\xF3n inform\xE1tica, especificaciones y c\xF3digo en ingl\xE9s a nivel C1 Avanzado.",
    defaultImage: "./src/assets/certificates/ef_set_english_cert.png",
    pdfUrl: "./src/assets/certificates/EF_SET_English_B1_Javier_Montero.pdf",
    enlace: "https://cert.efset.org/UGynH4",
    enlaceTexto: "Verificar en EF SET Oficial",
    storageKey: "viermont_cert_img_efset"
  },
  "thm-cyber101": {
    titulo: "TryHackMe: Cybersecurity 101",
    emisor: "TryHackMe \xB7 Especializaci\xF3n en Seguridad Defensiva y Redes",
    icono: '<i class="fa-solid fa-lock"></i>',
    iconClase: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    badgeHtml: '<span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span> EN CURSO &bull; APRENDIZAJE ACTIVO',
    badgeClase: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    estadoTexto: "En progreso activo (2026)",
    modulos: [
      "Security Principles (Confidencialidad, Integridad y Disponibilidad - Triada CIA)",
      "Criptograf\xEDa Aplicada (Cifrado sim\xE9trico/asim\xE9trico, Hashing, Firmas)",
      "Defensive Security (Monitorizaci\xF3n, Logs de Eventos y Detecci\xF3n)",
      "An\xE1lisis de Vulnerabilidades Web y de Redes",
      "Introducci\xF3n Pr\xE1ctica a la Seguridad Ofensiva y Pentesting"
    ],
    nota: "Itinerario formativo avanzado orientado a la protecci\xF3n de infraestructuras, auditor\xEDa de vulnerabilidades y buenas pr\xE1cticas de desarrollo seguro (DevSecOps).",
    enlace: "https://tryhackme.com",
    enlaceTexto: "Ver en TryHackMe",
    storageKey: "viermont_cert_img_thm_cyber101"
  },
  "42-urduliz": {
    titulo: "42 Urduliz (Fundaci\xF3n Telef\xF3nica / Bizkaia)",
    emisor: "Campus de Programaci\xF3n Peer-to-Peer",
    icono: "42",
    iconClase: "text-teal-400 bg-teal-500/10 border-teal-500/20 font-bold",
    badgeHtml: '<i class="fa-solid fa-code text-[9px]"></i> FORMACI\xD3N INTENSIVA &bull; CAMPUS',
    badgeClase: "bg-teal-500/10 border-teal-500/20 text-teal-300",
    estadoTexto: "Formaci\xF3n Pr\xE1ctica Presencial Inmersiva (2021-2022)",
    modulos: [
      "Programaci\xF3n en Lenguaje C Puro (Sin librer\xEDas est\xE1ndar)",
      "Aritm\xE9tica de Punteros y Gesti\xF3n Manual de Memoria (malloc / free)",
      "Detecci\xF3n y Eliminaci\xF3n de Fugas de Memoria con Valgrind (0 Leaks)",
      "Shell Scripting, Terminal Bash y Entorno Unix/Linux",
      "Control de Versiones Git y Correcci\xF3n Autom\xE1tica (Norminette)"
    ],
    nota: "Campus de aprendizaje basado en proyectos pr\xE1cticos entre pares sin profesores ni horarios fijos. Fomenta el rigor extremo, la resoluci\xF3n aut\xF3noma de problemas t\xE9cnicos y la resiliencia en equipo.",
    enlace: "https://www.42urduliz.com",
    enlaceTexto: "Visitar 42 Urduliz",
    storageKey: "viermont_cert_img_42"
  },
  "java-backend": {
    titulo: "Java Backend & POO (Open Bootcamp / BIRT LH)",
    emisor: "Campus Online & BIRT LH",
    icono: '<i class="fa-brands fa-java"></i>',
    iconClase: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    badgeHtml: '<i class="fa-solid fa-check text-[9px]"></i> COMPLETADO',
    badgeClase: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    estadoTexto: "Completado con \xE9xito (2022-2023)",
    modulos: [
      "Programaci\xF3n Orientada a Objetos en Java (Clases, Herencia, Interfaces)",
      "Estructuras de Datos y Colecciones Java (ArrayList, HashSet, Map)",
      "Manejo Avanzado de Excepciones y Logging",
      "Bases de Datos Relacionales SQL y Persistencia JDBC",
      "Patrones de Dise\xF1o y Modularidad de Software"
    ],
    nota: "Capacitaci\xF3n en desarrollo de aplicaciones backend robustas con Java, POO y modelado relacional de datos.",
    enlace: "https://open-bootcamp.com",
    enlaceTexto: "Consultar Itinerario",
    storageKey: "viermont_cert_img_java"
  }
};

// src/scripts/cert-modal.ts
function initCertModal() {
  const certModal = document.getElementById("cert-modal");
  const certModalClose = document.getElementById("cert-modal-close");
  const certModalCloseFooter = document.getElementById("cert-modal-close-footer");
  const certModalTitle = document.getElementById("cert-modal-title");
  const certModalIssuer = document.getElementById("cert-modal-issuer");
  const certBadgeStatus = document.getElementById("cert-badge-status");
  const certIconContainer = document.getElementById("cert-icon-container");
  const certModalStatusText = document.getElementById("cert-modal-status-text");
  const certModalModules = document.getElementById("cert-modal-modules");
  const certModalNotes = document.getElementById("cert-modal-notes");
  const certExternalLink = document.getElementById("cert-external-link");
  const certCustomImageWrapper = document.getElementById("cert-custom-image-wrapper");
  const certCustomImage = document.getElementById("cert-custom-image");
  const certPdfLink = document.getElementById("cert-pdf-link");
  function openCertModal(certKey) {
    const cert = MIS_CERTIFICACIONES[certKey];
    if (!cert || !certModal) return;
    if (certModalTitle) certModalTitle.textContent = cert.titulo;
    if (certModalIssuer) certModalIssuer.textContent = cert.emisor;
    if (certModalStatusText) certModalStatusText.textContent = cert.estadoTexto;
    if (certModalNotes) certModalNotes.textContent = cert.nota;
    if (certBadgeStatus) {
      certBadgeStatus.className = `inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest border ${cert.badgeClase}`;
      certBadgeStatus.innerHTML = cert.badgeHtml;
    }
    if (certIconContainer) {
      certIconContainer.className = `w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border ${cert.iconClase}`;
      certIconContainer.innerHTML = cert.icono;
    }
    if (certModalModules) {
      certModalModules.innerHTML = "";
      cert.modulos.forEach((mod) => {
        const li = document.createElement("li");
        li.className = "flex items-start gap-2.5 text-xs text-gray-300";
        li.innerHTML = `<span class="text-teal-400 mt-0.5 font-mono text-[10px]">&bull;</span><span>${mod}</span>`;
        certModalModules.appendChild(li);
      });
    }
    if (certExternalLink) {
      certExternalLink.href = cert.enlace;
      certExternalLink.innerHTML = `<span>${cert.enlaceTexto}</span><i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>`;
    }
    if (certPdfLink) {
      if (cert.pdfUrl) {
        certPdfLink.href = cert.pdfUrl;
        certPdfLink.classList.remove("hidden");
      } else {
        certPdfLink.classList.add("hidden");
      }
    }
    if (cert.defaultImage && certCustomImage && certCustomImageWrapper) {
      certCustomImage.src = cert.defaultImage;
      certCustomImageWrapper.classList.remove("hidden");
    } else if (certCustomImageWrapper) {
      certCustomImageWrapper.classList.add("hidden");
    }
    certModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
  function closeCertModal() {
    if (!certModal) return;
    certModal.classList.add("hidden");
    document.body.style.overflow = "";
  }
  window.openCertModal = openCertModal;
  window.closeCertModal = closeCertModal;
  document.querySelectorAll("[data-cert-key], [data-cert-view], .open-cert-modal-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const key = btn.getAttribute("data-cert-key") || btn.getAttribute("data-cert-view");
      if (key) {
        e.preventDefault();
        openCertModal(key);
      }
    });
  });
  if (certModalClose) certModalClose.addEventListener("click", closeCertModal);
  if (certModalCloseFooter) certModalCloseFooter.addEventListener("click", closeCertModal);
  if (certModal) {
    certModal.addEventListener("click", (e) => {
      if (e.target === certModal) closeCertModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && certModal && !certModal.classList.contains("hidden")) {
      closeCertModal();
    }
  });
}

// src/scripts/legal-modal.ts
function initLegalModal() {
  const legalModalBackdrop = document.getElementById("legal-modal-backdrop");
  const legalModalCard = document.getElementById("legal-modal-card") || (legalModalBackdrop ? legalModalBackdrop.querySelector("div") : null);
  const legalModalCloseBtn = document.getElementById("legal-modal-close-btn");
  const legalModalCloseFooterBtn = document.getElementById("legal-modal-close-footer-btn");
  const tabBtnAviso = document.getElementById("legal-tab-btn-aviso") || document.getElementById("legal-tab-aviso-btn");
  const tabBtnPrivacidad = document.getElementById("legal-tab-btn-privacidad") || document.getElementById("legal-tab-privacidad-btn");
  const tabBtnCookies = document.getElementById("legal-tab-btn-cookies") || document.getElementById("legal-tab-cookies-btn");
  const secAviso = document.getElementById("legal-content-aviso") || document.getElementById("legal-sec-aviso");
  const secPrivacidad = document.getElementById("legal-content-privacidad") || document.getElementById("legal-sec-privacidad");
  const secCookies = document.getElementById("legal-content-cookies") || document.getElementById("legal-sec-cookies");
  const legalModalHeaderTitle = document.getElementById("legal-modal-header-title");
  function switchLegalTab(tab = "aviso") {
    const tabs = [
      { id: "aviso", btn: tabBtnAviso, sec: secAviso, title: "viermontstudio@legal: ~ (Aviso Legal & Identidad)" },
      { id: "privacidad", btn: tabBtnPrivacidad, sec: secPrivacidad, title: "viermontstudio@legal: ~ (Pol\xEDtica de Privacidad RGPD)" },
      { id: "cookies", btn: tabBtnCookies, sec: secCookies, title: "viermontstudio@legal: ~ (Pol\xEDtica de Cookies)" }
    ];
    tabs.forEach((t) => {
      if (t.id === tab) {
        if (t.sec) t.sec.classList.remove("hidden");
        if (t.btn) {
          t.btn.classList.add("bg-teal-500/10", "text-teal-300", "border-teal-500/30");
          t.btn.classList.remove("border-transparent", "text-gray-400");
        }
        if (legalModalHeaderTitle) legalModalHeaderTitle.textContent = t.title;
      } else {
        if (t.sec) t.sec.classList.add("hidden");
        if (t.btn) {
          t.btn.classList.remove("bg-teal-500/10", "text-teal-300", "border-teal-500/30");
          t.btn.classList.add("border-transparent", "text-gray-400");
        }
      }
    });
    const bodyContainer = document.getElementById("legal-modal-body") || (legalModalCard ? legalModalCard.querySelector(".overflow-y-auto") : null);
    if (bodyContainer) bodyContainer.scrollTop = 0;
  }
  function openLegalModal(tab = "aviso") {
    if (!legalModalBackdrop) return;
    switchLegalTab(tab);
    legalModalBackdrop.classList.remove("hidden");
    legalModalBackdrop.classList.add("flex");
    requestAnimationFrame(() => {
      legalModalBackdrop.classList.remove("opacity-0", "pointer-events-none");
      legalModalBackdrop.classList.add("opacity-100", "pointer-events-auto");
      if (legalModalCard) {
        legalModalCard.classList.remove("scale-95", "opacity-0");
        legalModalCard.classList.add("scale-100", "opacity-100");
      }
    });
    document.body.style.overflow = "hidden";
  }
  function closeLegalModal() {
    if (!legalModalBackdrop) return;
    legalModalBackdrop.classList.remove("opacity-100", "pointer-events-auto");
    legalModalBackdrop.classList.add("opacity-0", "pointer-events-none");
    if (legalModalCard) {
      legalModalCard.classList.remove("scale-100", "opacity-100");
      legalModalCard.classList.add("scale-95", "opacity-0");
    }
    setTimeout(() => {
      if (legalModalBackdrop.classList.contains("opacity-0")) {
        legalModalBackdrop.classList.remove("flex");
        legalModalBackdrop.classList.add("hidden");
      }
    }, 300);
    document.body.style.overflow = "";
  }
  window.openLegalModal = openLegalModal;
  window.closeLegalModal = closeLegalModal;
  window.switchLegalTab = switchLegalTab;
  if (tabBtnAviso) tabBtnAviso.addEventListener("click", () => switchLegalTab("aviso"));
  if (tabBtnPrivacidad) tabBtnPrivacidad.addEventListener("click", () => switchLegalTab("privacidad"));
  if (tabBtnCookies) tabBtnCookies.addEventListener("click", () => switchLegalTab("cookies"));
  document.querySelectorAll('#footer-legal-btn, [data-legal-tab="aviso"]').forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openLegalModal("aviso");
    });
  });
  document.querySelectorAll('#footer-privacy-btn, #open-privacy-link-btn, [data-legal-tab="privacidad"]').forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openLegalModal("privacidad");
    });
  });
  document.querySelectorAll('#footer-cookies-btn, [data-legal-tab="cookies"]').forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openLegalModal("cookies");
    });
  });
  if (legalModalCloseBtn) legalModalCloseBtn.addEventListener("click", closeLegalModal);
  if (legalModalCloseFooterBtn) legalModalCloseFooterBtn.addEventListener("click", closeLegalModal);
  if (legalModalBackdrop) {
    legalModalBackdrop.addEventListener("click", (e) => {
      if (e.target === legalModalBackdrop) closeLegalModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && legalModalBackdrop && !legalModalBackdrop.classList.contains("pointer-events-none")) {
      closeLegalModal();
    }
  });
}

// src/scripts/contact.ts
function initContact() {
  const contactForm = document.getElementById("v0-contact-form");
  const submitBtn = document.getElementById("form-submit-btn");
  const consentCheckbox = document.getElementById("rgpd-consent-checkbox");
  function showToast(msg, isError = false) {
    const toast = document.getElementById("global-toast");
    const toastMsg = document.getElementById("global-toast-message");
    if (toast && toastMsg) {
      toastMsg.textContent = msg;
      const icon = toast.querySelector("i");
      if (icon) {
        icon.className = isError ? "fa-solid fa-triangle-exclamation text-rose-400 text-sm" : "fa-solid fa-circle-check text-emerald-400 text-sm";
      }
      toast.classList.remove("opacity-0", "translate-y-8", "pointer-events-none");
      toast.classList.add("opacity-100", "translate-y-0");
      setTimeout(() => {
        toast.classList.remove("opacity-100", "translate-y-0");
        toast.classList.add("opacity-0", "translate-y-8", "pointer-events-none");
      }, 5e3);
    }
  }
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("enviado") === "1") {
      showToast("\xA1Mensaje enviado con \xE9xito! Te responder\xE9 en menos de 48 horas.");
      const cleanUrl = window.location.pathname + window.location.hash;
      window.history.replaceState({}, document.title, cleanUrl);
    }
  }
  if (contactForm && submitBtn) {
    let lastSubmitTime = 0;
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (consentCheckbox && !consentCheckbox.checked) {
        showToast("Debes aceptar la Pol\xEDtica de Privacidad para continuar.", true);
        consentCheckbox.focus();
        return;
      }
      const now = Date.now();
      if (now - lastSubmitTime < 5e3) {
        showToast("Por favor espera unos segundos antes de reenviar el formulario.", true);
        return;
      }
      lastSubmitTime = now;
      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span>Enviando mensaje...</span><i class="fa-solid fa-spinner fa-spin text-xs"></i>';
      submitBtn.disabled = true;
      const formData = new FormData(contactForm);
      const payload = {
        nombre: formData.get("nombre") || "",
        email: formData.get("email") || "",
        asunto: formData.get("_subject") || "Consulta desde viermontstudio.com",
        mensaje: formData.get("mensaje") || "",
        consentimiento_rgpd: consentCheckbox ? consentCheckbox.checked : false,
        _honey: formData.get("_honey") || ""
      };
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15e3);
      try {
        const response = await fetch("./contact.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(payload),
          signal: controller.signal
        });
        clearTimeout(timeoutId);
        let data = null;
        try {
          data = await response.json();
        } catch (_) {
        }
        if (response.ok && data && data.success) {
          showToast("\xA1Mensaje enviado con \xE9xito! Te responder\xE9 en menos de 48 horas.");
          contactForm.reset();
        } else {
          const errMsg = data && data.message ? data.message : "No se pudo entregar el correo directamente.";
          throw new Error(errMsg);
        }
      } catch (err) {
        clearTimeout(timeoutId);
        console.warn("Env\xEDo directo a contact.php:", err);
        const mailtoUrl = `mailto:viermontstudio@gmail.com?subject=${encodeURIComponent("[Viermont Studio] " + payload.asunto)}&body=${encodeURIComponent(
          `Nombre: ${payload.nombre}
Email: ${payload.email}

Mensaje:
${payload.mensaje}`
        )}`;
        showToast("Abriendo tu gestor de correo para enviar a viermontstudio@gmail.com...", true);
        setTimeout(() => {
          window.location.href = mailtoUrl;
        }, 1e3);
      } finally {
        submitBtn.innerHTML = originalBtnHtml;
        submitBtn.disabled = false;
      }
    });
  }
}

// src/scripts/main.ts
function initApp() {
  initNavigation();
  initGallery();
  initTerminal();
  initCertModal();
  initLegalModal();
  initContact();
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
