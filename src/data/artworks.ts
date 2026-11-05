export interface Artwork {
  id: string;
  title: string;
  category: string;
  tag: string;
  desc: string;
  alt?: string;
  filename: string;
  img: string;
  highRes?: string;
  spanRow?: boolean;
  spanCol?: boolean;
  isolatedBg?: boolean;
  imgStyle?: string;
}

export const DEFAULT_ARTWORKS_CATALOG: Artwork[] = [
  // ==========================================
  // 1. MURALES (13 obras)
  // ==========================================
  {
    id: 'mural_vestuario_caballeros_golf',
    title: 'Vestuarios caballeros de club de golf',
    category: 'murales',
    tag: 'MURALES',
    desc: 'Aerografía sobre pared · Club de Golf Basozabal (2020)',
    alt: 'Figura masculina de jugador de golf realizada mediante aerografía en escala de grises para la entrada del vestuario de caballeros del Club de Golf Basozabal.',
    filename: '2020_04_vestuarios_masculinos_golf.webp',
    img: './src/assets/images/2020_04_vestuarios_masculinos_golf.webp',
    spanRow: true,
    imgStyle: 'object-position: center 8%; transform: scale(1.07);'
  },
  {
    id: 'mural_vestuario_damas_golf',
    title: 'Vestuarios damas de club de golf',
    category: 'murales',
    tag: 'MURALES',
    desc: 'Aerografía sobre pared · Club de Golf Basozabal (2020)',
    alt: 'Figura femenina de jugadora de golf realizada mediante aerografía en escala de grises para la entrada del vestuario de damas del Club de Golf Basozabal.',
    filename: '2020_04_vestuarios_femeninos_golf.webp',
    img: './src/assets/images/2020_04_vestuarios_femeninos_golf.webp',
    spanRow: true,
    imgStyle: 'object-position: center 8%; transform: scale(1.07);'
  },
  {
    id: 'mural_guarderia_golf_minnie_mouse',
    title: 'Mural guardería club de golf - Minnie Mouse',
    category: 'murales',
    tag: 'MURALES',
    desc: 'Aerografía en la guardería del Club de Golf Basozabal (2016)',
    alt: 'Mural infantil de Minnie Mouse descansando en el rough realizado mediante aerografía para la guardería del Club de Golf Basozabal.',
    filename: '2016_04_mural_guarderia_golf_4.webp',
    img: './src/assets/images/2016_04_mural_guarderia_golf_4.webp',
    imgStyle: 'object-position: center center;'
  },
  {
    id: 'mural_guarderia_golf_pluto',
    title: 'Mural guardería club de golf - Pluto',
    category: 'murales',
    tag: 'MURALES',
    desc: 'Aerografía en la guardería del Club de Golf Basozabal (2016)',
    alt: 'Mural infantil de Pluto en un green de golf realizado mediante aerografía para la guardería del Club de Golf Basozabal.',
    filename: '2016_04_mural_guarderia_golf_1.webp',
    img: './src/assets/images/2016_04_mural_guarderia_golf_1.webp',
    imgStyle: 'object-position: center center;'
  },
  {
    id: 'mural_guarderia_golf_mickey_mouse_y_goofy',
    title: 'Mural guardería club de golf - Mickey y Goofy',
    category: 'murales',
    tag: 'MURALES',
    desc: 'Aerografía en la guardería del Club de Golf Basozabal (2016)',
    alt: 'Mural infantil de Mickey Mouse y Goofy jugando golf realizado mediante aerografía para la guardería del Club de Golf Basozabal.',
    filename: '2016_04_mural_guarderia_golf_2.webp',
    img: './src/assets/images/2016_04_mural_guarderia_golf_2.webp',
    imgStyle: 'object-position: center center;'
  },
  {
    id: 'mural_guarderia_golf_daisy_y_pato_donald',
    title: 'Mural guardería club de golf - Daisy y Donald',
    category: 'murales',
    tag: 'MURALES',
    desc: 'Aerografía en la guardería del Club de Golf Basozabal (2016)',
    alt: 'Mural infantil de Daisy y el pato Donald jugando al golf realizado mediante aerografía para la guardería del Club de Golf Basozabal.',
    filename: '2016_04_mural_guarderia_golf_3.webp',
    img: './src/assets/images/2016_04_mural_guarderia_golf_3.webp',
    imgStyle: 'object-position: center center;'
  },
  {
    id: 'mural_ermita_guadalupe',
    title: 'Mural Ermita Guadalupe',
    category: 'murales',
    tag: 'MURALES',
    desc: 'Aerografía en domicilio · Ermita Guadalupe de Hondarribia (2015)',
    alt: 'Mural de gran formato realizado mediante aerografía representando la Ermita de Guadalupe sobre el monte Jaizkibel en Hondarribia.',
    filename: '2015_07_mural_hondarribi.webp',
    img: './src/assets/images/2015_07_mural_hondarribi.webp',
    spanRow: true,
    imgStyle: 'object-position: 54% center; transform: scale(1.32);'
  },
  {
    id: 'mural_caballero_y_dragon',
    title: 'Aerografía caballero y dragón',
    category: 'murales',
    tag: 'MURALES',
    desc: 'Mural y cuento personalizado en dormitorio infantil con cama castillo (2016)',
    alt: 'Mural temático de fantasía medieval representando al niño del encargo como un caballero dominando a un dragón.',
    filename: '2016_07_mural_Castillo_Infantil.webp',
    img: './src/assets/images/2016_07_mural_Castillo_Infantil.webp',
    spanCol: true,
    imgStyle: 'object-position: center center;'
  },
  {
    id: 'mural_aviador',
    title: 'Mural Infantil «El Aviador»',
    category: 'murales',
    tag: 'MURALES',
    desc: 'Aerografía en dormitorio infantil · Conejo Piloto y Osito paracaidista (2011)',
    alt: 'Mural representando un conejo aviador y un osito paracaidista en un dormitorio infantil.',
    filename: '2011_10_mural_infantil_aviador.webp',
    img: './src/assets/images/2011_10_mural_infantil_aviador.webp',
    imgStyle: 'object-position: center center;'
  },
  {
    id: 'mural_regatas',
    title: 'Mural Tradición de Regatas',
    category: 'murales',
    tag: 'MURALES',
    desc: 'Aerografía en Trofeos Egia de San Sebastián · Regatas tradicionales (2009)',
    alt: 'Mural de gran formato en aerografía dedicado a la tradición marítima y traineras vascas en la bahía de La Concha.',
    filename: '2009_01_mural_regatas.webp',
    img: './src/assets/images/2009_01_mural_regatas.webp',
    spanCol: true,
    imgStyle: 'object-position: 70% 30%; transform: scale(1.08); transform-origin: right center;'
  },
  {
    id: 'mural_troya',
    title: 'Mural Épico «Troya»',
    category: 'murales',
    tag: 'MURALES',
    desc: 'Aerografía sobre pared · Restaurante Troya de Astigarraga (2008)',
    alt: 'Mural de gran formato en escala de grises inspirado en la guerra de Troya para el comedor del Restaurante Troya de Astigarraga.',
    filename: '2008_02_mural_troya.webp',
    img: './src/assets/images/2008_02_mural_troya.webp',
    imgStyle: 'object-position: center 33%;'
  },
  {
    id: 'perros_con_ruleros',
    title: 'Mural Peluquería',
    category: 'murales',
    tag: 'MURALES',
    desc: 'Aerografía sobre pared · Peluquería Santa Eulalia de San Sebastián (2007)',
    alt: 'Mural decorativo de temática animal representando perros con ruleros realizado para salón de peluquería.',
    filename: '2007_07_mural_peluqueria.webp',
    img: './src/assets/images/2007_07_mural_peluqueria.webp',
    imgStyle: 'object-position: 55% 32%; transform: scale(1.12); transform-origin: center top;'
  },
  {
    id: 'mural_senra',
    title: 'Mural Bodegas',
    category: 'murales',
    tag: 'MURALES',
    desc: 'Aerografía sobre pared · Bar Restaurante Senra de San Sebastián (2007)',
    alt: 'Mural decorativo realizado mediante aerografía para el espacio gastronómico y restaurante Senra.',
    filename: '2007_05_mural_senra.webp',
    img: './src/assets/images/2007_05_mural_senra.webp',
    imgStyle: 'object-position: center center;'
  },

  // ==========================================
  // 2. CASCOS (9 obras)
  // ==========================================
  {
    id: 'casco_ruben_mtz',
    title: 'Casco Rubén Martínez',
    category: 'cascos',
    tag: 'CASCOS',
    desc: 'Aerografía de competición de alta precisión para el piloto Rubén Martínez (2015)',
    alt: 'Aerografía de competición de alta precisión sobre casco de carreras para el piloto Rubén Martínez.',
    filename: '2015_02_casco_ruben_mtz_ok.webp',
    img: './src/assets/images/2015_02_casco_ruben_mtz_ok.webp',
    isolatedBg: true,
    imgStyle: 'object-fit: contain !important; transform: scale(1.18); object-position: center 40%;'
  },
  {
    id: 'casco_barcelona',
    title: 'Casco FC Barcelona',
    category: 'cascos',
    tag: 'CASCOS',
    desc: 'Aerografía personalizada con los colores y escudo oficial del FC Barcelona (2011)',
    alt: 'Casco de competición personalizado con los colores y escudo oficial del FC Barcelona.',
    filename: '2011_08_casco_barcelona_ok.webp',
    img: './src/assets/images/2011_08_casco_barcelona_ok.webp',
    isolatedBg: true,
    imgStyle: 'transform: scale(0.85); object-position: center center;'
  },
  {
    id: 'casco_cementerio',
    title: 'Casco «Cementerio Gótico»',
    category: 'cascos',
    tag: 'CASCOS',
    desc: 'Aerografía con temática de cementerio gótico, calaveras y sombras profundas (2010)',
    alt: 'Aerografía con temática de cementerio gótico, calaveras y sombras profundas sobre casco de moto.',
    filename: '2010_05_casco_cementerio_ok.webp',
    img: './src/assets/images/2010_05_casco_cementerio_ok.webp',
    isolatedBg: true,
    imgStyle: 'object-position: center center;'
  },
  {
    id: 'casco_garban',
    title: 'Casco Competición «Garbán»',
    category: 'cascos',
    tag: 'CASCOS',
    desc: 'Pintura y diseño dinámico de competición para el piloto de karts Garbán (2009)',
    alt: 'Pintura y diseño dinámico de casco de competición para piloto de karts Garbán.',
    filename: '2009_03_casco_garban_ok.webp',
    img: './src/assets/images/2009_03_casco_garban_ok.webp',
    isolatedBg: true,
    imgStyle: 'transform: scale(1.05); object-position: center center;'
  },
  {
    id: 'casco_hockey',
    title: 'Casco Hockey «Calavera»',
    category: 'cascos',
    tag: 'CASCOS',
    desc: 'Aerografía sobre casco del portero de hockey Javi Méndez (2008)',
    alt: 'Personalización en aerografía sobre casco de portero de hockey con diseño de calavera agresiva.',
    filename: '2008_11_casco_hockey_ok.webp',
    img: './src/assets/images/2008_11_casco_hockey_ok.webp',
    isolatedBg: true,
    imgStyle: 'object-position: center center;'
  },
  {
    id: 'casco_oliver',
    title: 'Casco «Euskadi»',
    category: 'cascos',
    tag: 'CASCOS',
    desc: 'Diseño exclusivo con motivos de Euskadi para el piloto Oliver (2008)',
    alt: 'Diseño exclusivo de casco de moto personalizado con motivos y simbología vasca.',
    filename: '2008_06_casco_oliver_ok.webp',
    img: './src/assets/images/2008_06_casco_oliver_ok.webp',
    isolatedBg: true,
    imgStyle: 'transform: scale(1.10); object-position: center center;'
  },
  {
    id: 'casco_replica',
    title: 'Casco Réplica Competición',
    category: 'cascos',
    tag: 'CASCOS',
    desc: 'Réplica artesanal de casco de alta competición con líneas geométricas (2008)',
    alt: 'Réplica artesanal de casco de alta competición con líneas geométricas y aerografía de precisión.',
    filename: '2008_05_casco_replica_ok.webp',
    img: './src/assets/images/2008_05_casco_replica_ok.webp',
    isolatedBg: true,
    imgStyle: 'transform: scale(1.32); object-position: center center;'
  },
  {
    id: 'casco_harley',
    title: 'Casco Harley-Davidson «American Legend»',
    category: 'cascos',
    tag: 'CASCOS',
    desc: 'Aerografía sobre casco custom con águila real y emblema clásico Harley (2008)',
    alt: 'Aerografía sobre casco custom con águila real y emblema clásico Harley-Davidson.',
    filename: '2008_04_casco_harley_ok.webp',
    img: './src/assets/images/2008_04_casco_harley_ok.webp',
    isolatedBg: true,
    imgStyle: 'transform: scale(0.85); object-position: center center;'
  },
  {
    id: 'casco_sin_city',
    title: 'Casco «Sin City» Custom',
    category: 'cascos',
    tag: 'CASCOS',
    desc: 'Retrato femenino en blanco y negro estilo Sin City sobre casco custom (2006)',
    alt: 'Retrato femenino en blanco y negro estilo Sin City sobre casco custom mediante aerografía.',
    filename: '2007_02_casco_sin_city_ok.webp',
    img: './src/assets/images/2007_02_casco_sin_city_ok.webp',
    isolatedBg: true,
    imgStyle: 'object-fit: contain !important; transform: scale(1.05); object-position: center 38%;'
  },

  // ==========================================
  // 3. VEHÍCULOS (8 obras)
  // ==========================================
  {
    id: 'trainera_zumaia',
    title: 'Trainera Telmo Deun de Zumaia «Escamas»',
    category: 'vehiculos',
    tag: 'VEHÍCULOS',
    desc: 'Aerografía sobre la Trainera Telmo Deun de Zumaia «Escamas» (2013)',
    alt: 'Aerografía sobre la trainera Telmo Deun de Zumaia representando textura de escamas en color rojo.',
    filename: '2013_05_trainera_zumaia_escamas_2.webp',
    img: './src/assets/images/2013_05_trainera_zumaia_escamas_2.webp',
    spanCol: true,
    imgStyle: 'object-position: center center;'
  },
  {
    id: 'mercedes_ponton',
    title: 'Mercedes Ponton de 1956 «Efecto Madera»',
    category: 'vehiculos',
    tag: 'VEHÍCULOS',
    desc: 'Aerografía efecto madera en piezas interiores de Mercedes Ponton de 1956 (2011)',
    alt: 'Aerografía sobre piezas y salpicadero de Mercedes Ponton de 1956 simulando acabado raíz de madera.',
    filename: '2011_11_efecto_madera_mercedes_ponton_ok.webp',
    img: './src/assets/images/2011_11_efecto_madera_mercedes_ponton_ok.webp',
    isolatedBg: true,
    imgStyle: 'object-position: center center;'
  },
  {
    id: 'deposito_harley',
    title: 'Depósito Harley-Davidson Tribal',
    category: 'vehiculos',
    tag: 'VEHÍCULOS',
    desc: 'Aerografía personalizada y rotulación tribal sobre depósito Harley-Davidson (2011)',
    alt: 'Aerografía personalizada y rotulación tribal sobre depósito de combustible Harley-Davidson.',
    filename: '2011_11_deposito_harley_tribal_ok.webp',
    img: './src/assets/images/2011_11_deposito_harley_tribal_ok.webp',
    isolatedBg: true,
    imgStyle: 'object-position: center center;'
  },
  {
    id: 'yamaha_r1',
    title: 'Yamaha R1 «Valentino Rossi»',
    category: 'vehiculos',
    tag: 'VEHÍCULOS',
    desc: 'Decoración de carenado réplica The Doctor sobre Yamaha R1 (2011)',
    alt: 'Decoración de carenado réplica The Doctor sobre Yamaha R1 de circuito.',
    filename: '2011_03_yamaha_valentino_ok.webp',
    img: './src/assets/images/2011_03_yamaha_valentino_ok.webp',
    isolatedBg: true,
    imgStyle: 'object-position: center center;'
  },
  {
    id: 'monstertruck_focos',
    title: 'Monster Truck «Focos Realistas»',
    category: 'vehiculos',
    tag: 'VEHÍCULOS',
    desc: 'Aerografía artística de focos realistas sobre capó de Monster Truck (2010)',
    alt: 'Aerografía artística de focos hiperrealistas sobre capó y carrocería de Monster Truck.',
    filename: '2010_05_focos_monstertruck.webp',
    img: './src/assets/images/2010_05_focos_monstertruck.webp',
    imgStyle: 'object-position: center center;'
  },
  {
    id: 'barqueta_fran_cobo',
    title: 'Barqueta BRC Fran Cobo',
    category: 'vehiculos',
    tag: 'VEHÍCULOS',
    desc: 'Rotulación y pintura de competición para barqueta BRC Fran Cobo · En colaboración con Mitxifú (2007)',
    alt: 'Rotulación y pintura de competición para barqueta BRC en colaboración con Mitxifú.',
    filename: '2007_06_barqueta_fran_cobo_ok.webp',
    img: './src/assets/images/2007_06_barqueta_fran_cobo_ok.webp',
    isolatedBg: true,
    imgStyle: 'object-position: center center;'
  },
  {
    id: 'capo_tigre',
    title: 'Capó «Tigre de Fuego»',
    category: 'vehiculos',
    tag: 'VEHÍCULOS',
    desc: 'Aerografía artística de alto detalle sobre capó de coche · Tigre blanco (2007)',
    alt: 'Aerografía artística hiperrealista de tigre blanco con detalles de fuego sobre capó de automóvil.',
    filename: '2007_05_capo_tigre.webp',
    img: './src/assets/images/2007_05_capo_tigre.webp',
    imgStyle: 'object-position: center 25%;'
  },
  {
    id: 'capo_mascara',
    title: 'Capó «Máscara Veneciana»',
    category: 'vehiculos',
    tag: 'VEHÍCULOS',
    desc: 'Aerografía artística de alto detalle sobre capó de coche · Máscara Veneciana (2007)',
    alt: 'Aerografía artística de alto detalle representando máscara veneciana sobre capó de automóvil.',
    filename: '2007_05_capo_mascara_ok.webp',
    img: './src/assets/images/2007_05_capo_mascara_ok.webp',
    isolatedBg: true,
    imgStyle: 'object-position: center center;'
  },

  // ==========================================
  // 4. OBJETOS (9 obras)
  // ==========================================
  {
    id: 'persiana_altzania',
    title: 'Persiana Asociación Cultural Altzania',
    category: 'objetos',
    tag: 'OBJETOS',
    desc: 'Aerografía sobre persiana metálica · Asociación Cultural Altzania (2019)',
    alt: 'Aerografía artística sobre persiana metálica comercial para la Asociación Cultural Altzania.',
    filename: '2019_12_persiana_altzania.webp',
    img: './src/assets/images/2019_12_persiana_altzania.webp',
    imgStyle: 'object-position: center 18%; transform: scale(0.92);'
  },
  {
    id: 'caballo_longines',
    title: 'Caballo Balancín «Longines»',
    category: 'objetos',
    tag: 'OBJETOS',
    desc: 'Montaje, imprimación, pintura artística personalizada y acabado completo sobre madera en bruto · Regalo de empresa (2017)',
    alt: 'Pintura y acabado personalizado sobre caballo balancín de madera como regalo corporativo de empresa.',
    filename: '2017_10_caballo_balancin_longines_2.webp',
    img: './src/assets/images/2017_10_caballo_balancin_longines_2.webp',
    imgStyle: 'transform: scale(1.15); object-position: center center;'
  },
  {
    id: 'castillo_infantil_obj',
    title: 'Castillo Infantil Temático',
    category: 'objetos',
    tag: 'OBJETOS',
    desc: 'Diseño, construcción, montaje, pintura y acabado temático artesanal sobre madera para dormitorio infantil (2016)',
    alt: 'Diseño, construcción artesanal y aerografía temática sobre estructura de juego infantil de madera.',
    filename: '2016_07_Castillo_Infantil.webp',
    img: './src/assets/images/2016_07_Castillo_Infantil.webp',
    imgStyle: 'object-position: center center;'
  },
  {
    id: 'drive_logo',
    title: 'Drive de Golf con Logotipo',
    category: 'objetos',
    tag: 'OBJETOS',
    desc: 'Reparación y micro-aerografía de precisión con logotipo sobre cabeza de driver de golf (2014)',
    alt: 'Microaerografía de alta precisión con logotipo personalizado sobre cabeza de driver de golf.',
    filename: '2014_08_palo_logo_ok.webp',
    img: './src/assets/images/2014_08_palo_logo_ok.webp',
    isolatedBg: true,
    imgStyle: 'object-position: center center;'
  },
  {
    id: 'caballo_casas_novas',
    title: 'Caballo Balancín «Casas Novas»',
    category: 'objetos',
    tag: 'OBJETOS',
    desc: 'Montaje, imprimación, pintura artística personalizada y acabado completo sobre madera en bruto · Regalo de empresa (2013)',
    alt: 'Pintura artística personalizada sobre caballo balancín de madera para regalo corporativo.',
    filename: '2013_03_caballo_balancin_casas_novas_ok.webp',
    img: './src/assets/images/2013_03_caballo_balancin_casas_novas_ok.webp',
    isolatedBg: true,
    imgStyle: 'object-position: center center;'
  },
  {
    id: 'palos_alejo',
    title: 'Aerografía sobre Drive y Madera «Efecto Madera»',
    category: 'objetos',
    tag: 'OBJETOS',
    desc: 'Personalización artesanal efecto madera sobre driver y madera de Alejo Cuadra (2009)',
    alt: 'Personalización artesanal mediante aerografía simulando textura de madera sobre palos de golf.',
    filename: '2009_04_palos_golf_alejo_ok.webp',
    img: './src/assets/images/2009_04_palos_golf_alejo_ok.webp',
    isolatedBg: true,
    imgStyle: 'transform: scale(0.90); object-position: center center;'
  },
  {
    id: 'palo_arrate',
    title: 'Aerografía sobre Drive de Golf «Peine del Viento»',
    category: 'objetos',
    tag: 'OBJETOS',
    desc: 'Micro-aerografía y silueta del Peine del Viento sobre driver de golf (2009)',
    alt: 'Microaerografía y silueta del Peine del Viento sobre cabeza de driver de golf.',
    filename: '2009_04_palo_golf_arrate_ok.webp',
    img: './src/assets/images/2009_04_palo_golf_arrate_ok.webp',
    isolatedBg: true,
    imgStyle: 'transform: scale(1.20); object-position: center center;'
  },
  {
    id: 'palo_laura',
    title: 'Aerografía sobre Drive de Golf «Orquídea»',
    category: 'objetos',
    tag: 'OBJETOS',
    desc: 'Micro-aerografía botánica de alta precisión sobre driver de golf «Orquídea» (2009)',
    alt: 'Microaerografía botánica de alta precisión representando una orquídea sobre cabeza de driver de golf.',
    filename: '2009_03_palo_golf_laura_ok.webp',
    img: './src/assets/images/2009_03_palo_golf_laura_ok.webp',
    isolatedBg: true,
    imgStyle: 'object-position: center center;'
  },
  {
    id: 'palo_benja',
    title: 'Aerografía sobre Drive de Golf «Efecto Madera»',
    category: 'objetos',
    tag: 'OBJETOS',
    desc: 'Acabado artesanal efecto raíz de nogal sobre driver de Benjamín Gorostegui (2009)',
    alt: 'Acabado artesanal simulando efecto raíz de nogal mediante aerografía sobre driver de golf.',
    filename: '2009_03_palo_golf_benja_ok.webp',
    img: './src/assets/images/2009_03_palo_golf_benja_ok.webp',
    isolatedBg: true,
    imgStyle: 'transform: scale(0.90); object-position: center center;'
  },

  // ==========================================
  // 5. ILUSTRACIONES (13 obras)
  // ==========================================
  {
    id: 'acuarela_pinguino',
    title: 'Acuarela «Pingüino»',
    category: 'ilustraciones',
    tag: 'ILUSTRACIONES',
    desc: 'Pintura en papel acuarelable con técnica tradicional de pincel húmedo y degradados (2020)',
    alt: 'Ilustración tradicional en acuarela representando un pingüino en tonos fríos.',
    filename: '2020_05_acuarela_pinguino.webp',
    img: './src/assets/images/2020_05_acuarela_pinguino.webp',
    imgStyle: 'object-position: center 15%;'
  },
  {
    id: 'lapices_rosa',
    title: 'Lápices «Rosa Silvestre»',
    category: 'ilustraciones',
    tag: 'ILUSTRACIONES',
    desc: 'Dibujo botánico con lápices de color policromos y transiciones tonales (2020)',
    alt: 'Dibujo botánico detallado de rosa silvestre realizado con lápices de color.',
    filename: '2020_04_lapices_colores_rosa.webp',
    img: './src/assets/images/2020_04_lapices_colores_rosa.webp',
    imgStyle: 'object-position: 50% 42%; transform: scale(1) translateX(-2.5%);'
  },
  {
    id: 'rotuladores_pajaro',
    title: 'Ave con Tintas Metálicas',
    category: 'ilustraciones',
    tag: 'ILUSTRACIONES',
    desc: 'Técnica mixta con rotuladores metálicos brillantes sobre papel negro (2019)',
    alt: 'Técnica mixta con rotuladores metálicos sobre papel representando un ave.',
    filename: '2019_01_rotuladores_metalicos_pajaro.webp',
    img: './src/assets/images/2019_01_rotuladores_metalicos_pajaro.webp',
    imgStyle: 'object-position: center 58%; transform: scale(1.16);'
  },
  {
    id: 'lapices_elefante',
    title: 'Retrato de Elefante',
    category: 'ilustraciones',
    tag: 'ILUSTRACIONES',
    desc: 'Estudio anatómico y de texturas epidérmicas con lápices de grafito (2018)',
    alt: 'Estudio anatómico y textura de elefante realizado mediante dibujo tradicional a lápiz.',
    filename: '2018_10_lapices_elefante.webp',
    img: './src/assets/images/2018_10_lapices_elefante.webp',
    imgStyle: 'object-position: 45% 38%; transform: scale(1.29);'
  },
  {
    id: 'lapices_avispa',
    title: 'Ilustración «Avispa»',
    category: 'ilustraciones',
    tag: 'ILUSTRACIONES',
    desc: 'Detalle entomológico con lápices de color y contraste de amarillos (2018)',
    alt: 'Dibujo científico y entomológico detallado de avispa realizado con lápices de color.',
    filename: '2018_10_lapices_colores_avispa.webp',
    img: './src/assets/images/2018_10_lapices_colores_avispa.webp',
    imgStyle: 'object-position: 55% 20%;'
  },
  {
    id: 'pico_picapinos',
    title: 'Pico Picapinos',
    category: 'ilustraciones',
    tag: 'ILUSTRACIONES',
    desc: 'Estudio ornitológico con lápices de color y plumaje detallado (2018)',
    alt: 'Ilustración ornitológica detallada de pico picapinos grabada sobre madera.',
    filename: '2018_02_lapiz_color_pico_picapinos.webp',
    img: './src/assets/images/2018_02_lapiz_color_pico_picapinos.webp',
    imgStyle: 'object-position: center center; transform: scale(1.18) translateY(-6%);'
  },
  {
    id: 'logo_sukas_style',
    title: 'Logotipo «Suka\'s Style»',
    category: 'ilustraciones',
    tag: 'ILUSTRACIONES',
    desc: 'Diseño de identidad corporativa y logotipo para Johanna Crespo (2017)',
    alt: 'Diseño de identidad visual y tipografía corporativa para la marca Suka\'s Style.',
    filename: '2017_11_ilustracion_logo_sukas_style.webp',
    img: './src/assets/images/2017_11_ilustracion_logo_sukas_style.webp',
    spanCol: true,
    imgStyle: 'object-position: center 51%; transform: scale(1.22); transform-origin: center 51%;'
  },
  {
    id: 'logo_aerografias',
    title: 'Logotipo Aerografías Javier Montero',
    category: 'ilustraciones',
    tag: 'ILUSTRACIONES',
    desc: 'Identidad gráfica original de Javier Montero · Viermont Studio (2013)',
    alt: 'Diseño de marca e identidad visual corporativa para Aerografías Javier Montero.',
    filename: '2013_02_logo_aerografias.webp',
    img: './src/assets/images/2013_02_logo_aerografias.webp',
    imgStyle: 'object-position: center center;'
  },
  {
    id: 'ilustracion_orando',
    title: 'Ilustración Digital «Orando»',
    category: 'ilustraciones',
    tag: 'ILUSTRACIONES',
    desc: 'Pintura digital de concepto con iluminación volumétrica · Mujer orando en la naturaleza (2016)',
    alt: 'Pintura digital con amplio juego de iluminación volumétrica y expresividad espiritual.',
    filename: '2016_04_ilustracion_digital_orando.webp',
    img: './src/assets/images/2016_04_ilustracion_digital_orando.webp',
    spanCol: true,
    imgStyle: 'object-position: center 65%; transform: scale(1.0);'
  },
  {
    id: 'fotograma_tres_mellizas',
    title: 'Fotograma «Las Tres Mellizas»',
    category: 'ilustraciones',
    tag: 'ILUSTRACIONES',
    desc: 'Fotograma original dibujado a mano como intercalador para Las Tres Mellizas (2001)',
    alt: 'Fotograma original dibujado a mano como intercalador para la serie de animación Las Tres Mellizas.',
    filename: '2001_fotograma_3_mellizas.webp',
    img: './src/assets/images/2001_fotograma_3_mellizas.webp',
    imgStyle: 'transform: scale(1.25); object-position: center center;'
  },
  {
    id: 'lienzo_texturas',
    title: 'Lienzo Digital «Texturas»',
    category: 'ilustraciones',
    tag: 'ILUSTRACIONES',
    desc: 'Obra digital de arte contemporáneo con estudio de texturas y materia visual (2014)',
    alt: 'Obra digital abstracta contemporánea basada en exploración de texturas y expresividad cromática.',
    filename: '2014_01_lienzo_digital_texturas.webp',
    img: './src/assets/images/2014_01_lienzo_digital_texturas.webp',
    imgStyle: 'object-position: center center;'
  },
  {
    id: 'lienzo_abstracto_2',
    title: 'Lienzo Digital Abstracto II',
    category: 'ilustraciones',
    tag: 'ILUSTRACIONES',
    desc: 'Composición abstracta digital con paleta cromática de alta saturación (2013)',
    alt: 'Composición abstracta digital con paleta cromática intensa y trazos libres.',
    filename: '2013_06_lienzo_digital_abstracto_2.webp',
    img: './src/assets/images/2013_06_lienzo_digital_abstracto_2.webp',
    imgStyle: 'object-position: center center;'
  },
  {
    id: 'lienzo_abstracto_1',
    title: 'Lienzo Digital Abstracto I',
    category: 'ilustraciones',
    tag: 'ILUSTRACIONES',
    desc: 'Obra abstracta digital sobre lienzo con ritmo formal y contrastes dinámicos (2013)',
    alt: 'Obra abstracta digital con estudio de color, formas geométrico-orgánicas y alto contraste.',
    filename: '2013_06_lienzo_digital_abstracto_1.webp',
    img: './src/assets/images/2013_06_lienzo_digital_abstracto_1.webp',
    imgStyle: 'object-position: center center;'
  },

  // ==========================================
  // 6. EJERCICIOS (9 obras)
  // ==========================================
  {
    id: 'lauricella_025',
    title: 'Ejercicios de anatomía artística - Lauricella I',
    category: 'ejercicios',
    tag: 'EJERCICIOS',
    desc: 'Basado en los libros de anatomía artística de Michel Lauricella (2020)',
    alt: 'Estudio del volumen del torso y estructura anatómica basado en los libros de Michel Lauricella.',
    filename: '2020_03_anatomia_artistica_mlauricella_025.webp',
    img: './src/assets/images/2020_03_anatomia_artistica_mlauricella_025.webp',
    imgStyle: 'object-position: 18% 40%; transform: scale(1.08);'
  },
  {
    id: 'lauricella_024',
    title: 'Ejercicios de anatomía artística - Lauricella II',
    category: 'ejercicios',
    tag: 'EJERCICIOS',
    desc: 'Basado en los libros de anatomía artística de Michel Lauricella (2020)',
    alt: 'Estudio anatómico de perspectiva y simplificación morfológica según Michel Lauricella.',
    filename: '2020_02_anatomia_artistica_mlauricella_024.webp',
    img: './src/assets/images/2020_02_anatomia_artistica_mlauricella_024.webp',
    imgStyle: 'object-position: 82% 40%; transform: scale(1.08);'
  },
  {
    id: 'lauricella_023',
    title: 'Ejercicios de anatomía artística - Lauricella III',
    category: 'ejercicios',
    tag: 'EJERCICIOS',
    desc: 'Basado en los libros de anatomía artística de Michel Lauricella (2020)',
    alt: 'Ejercicio anatómico orientado al estudio de masas musculares y movimiento humano.',
    filename: '2020_02_anatomia_artistica_mlauricella_023.webp',
    img: './src/assets/images/2020_02_anatomia_artistica_mlauricella_023.webp',
    imgStyle: 'object-position: 18% 40%; transform: scale(1.08);'
  },
  {
    id: 'lauricella_022',
    title: 'Ejercicios de anatomía artística - Lauricella IV',
    category: 'ejercicios',
    tag: 'EJERCICIOS',
    desc: 'Basado en los libros de anatomía artística de Michel Lauricella (2020)',
    alt: 'Análisis estructural de la pelvis y extremidades según el método de Michel Lauricella.',
    filename: '2020_02_anatomia_artistica_mlauricella_022.webp',
    img: './src/assets/images/2020_02_anatomia_artistica_mlauricella_022.webp',
    imgStyle: 'object-position: 82% 40%; transform: scale(1.08);'
  },
  {
    id: 'anatomia_brazos',
    title: 'Boceto Anatómico de Brazos',
    category: 'ejercicios',
    tag: 'EJERCICIOS',
    desc: 'Basado en el libro «Figura humana» de José M. Parramón (2018)',
    alt: 'Estudio dinámico original de musculatura y tensión del brazo humano basado en la obra de José M. Parramón.',
    filename: '2018_03_boceto_anatomia_brazos.webp',
    img: './src/assets/images/2018_03_boceto_anatomia_brazos.webp',
    imgStyle: 'object-position: 70% 35%; transform: scale(1.08);'
  },
  {
    id: 'boceto_bocas',
    title: 'Estudio Expresivo de Bocas',
    category: 'ejercicios',
    tag: 'EJERCICIOS',
    desc: 'Basado en el libro «El Retrato» de Giovanni Civardi (2017)',
    alt: 'Trazos originales de gesticulación labial, comisuras y anatomía bucal a lápiz basados en la obra de Giovanni Civardi.',
    filename: '2017_11_boceto_bocas.webp',
    img: './src/assets/images/2017_11_boceto_bocas.webp',
    imgStyle: 'object-position: center 55%; transform: scale(1.05);'
  },
  {
    id: 'boceto_orejas',
    title: 'Estudio de Orejas y Cartílago',
    category: 'ejercicios',
    tag: 'EJERCICIOS',
    desc: 'Basado en el libro «El Retrato» de Giovanni Civardi (2017)',
    alt: 'Estudio volumétrico y de relieves cartilaginosos del pabellón auditivo humano basado en la obra de Giovanni Civardi.',
    filename: '2017_10_boceto_orejas.webp',
    img: './src/assets/images/2017_10_boceto_orejas.webp',
    imgStyle: 'object-position: center 6%; transform: scale(1.05);'
  },
  {
    id: 'boceto_narices',
    title: 'Estudio de Narices y Perspectiva',
    category: 'ejercicios',
    tag: 'EJERCICIOS',
    desc: 'Basado en el libro «El Retrato» de Giovanni Civardi (2017)',
    alt: 'Estudio volumétrico y de planos lumínicos de la anatomía nasal desde múltiples ángulos según Giovanni Civardi.',
    filename: '2017_10_boceto_narices.webp',
    img: './src/assets/images/2017_10_boceto_narices.webp',
    imgStyle: 'object-position: center 60%; transform: scale(1.05);'
  },
  {
    id: 'boceto_ojos',
    title: 'Estudio de Ojos y Miradas',
    category: 'ejercicios',
    tag: 'EJERCICIOS',
    desc: 'Basado en el libro «El Retrato» de Giovanni Civardi (2017)',
    alt: 'Estudio anatómico del globo ocular, párpados y expresión de la mirada según el método de Giovanni Civardi.',
    filename: '2017_09_boceto_ojos.webp',
    img: './src/assets/images/2017_09_boceto_ojos.webp',
    imgStyle: 'object-position: center 5%; transform: scale(1.05);'
  }
];
