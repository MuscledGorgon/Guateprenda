var idsDict = new Object ();
var map;

function initMap() {
  // Posción de tiendas
  
  idsDict ["t85914"] = [{lat: 24.839823, lng: -107.39427}, 
    {
      direccion: "AV. ÁLVARO OBREGÓN NO.3025 NTE. ENTRE LAS CALLES MARÍA DE JESÚS NEDA Y JOSÉ RAÚL FRANCO BARRERA, COL. ARBOLEDAS, CULIACÁN, SINALOA, C.P. 80010",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "6677534303",
      nombre: "Álvaro Obregón"
    },
    {
      idEstado: "SIN",
      estado: "Sinaloa"
    },
    {
      idMunicipio: "SIN01",
      municipio: "Culiacán"
    }];
  idsDict ["t85917"] = [{lat: 24.831383, lng: -107.375479}, 
    {
      direccion: "AV. JOSÉ ORTIZ DE DOMÍNGUEZ NO.2063 PTE. INT.1 ENTRE LAS CALLES COSMOS Y SATÉLITE, COL. BUENA VISTA, CULIACÁN, SINALOA, C.P.80014",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "6677535969",
      nombre: "Buena Vista"
    },
    {
      idEstado: "SIN",
      estado: "Sinaloa"
    },
    {
      idMunicipio: "SIN01",
      municipio: "Culiacán"
    }];
  idsDict ["t85901"] = [{lat: 24.7874385, lng: -107.4004449}, 
    {
      direccion: "GRAL. NICOLÁS BRAVO SUR NO.1870, COL. GUADALUPE, CULIACÁN, SINALOA, C.P.80220",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "6677520818",
      nombre: "Bravo"
    },
    {
      idEstado: "SIN",
      estado: "Sinaloa"
    },
    {
      idMunicipio: "SIN01",
      municipio: "Culiacán"
    }];
  idsDict ["t85907"] = [{lat: 24.795925, lng: -107.429127}, 
    {
      direccion: "CENTRAL MILLENIUM REG. L.60 ENTRE LAS CALLES ROLANDO ARJONA Y VIALIDAD LATERAL COL.DESARROLLO URBANO, CULIACÁN, SINALOA, C.P. 80100",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "6677171620",
      nombre: "Central"
    },
    {
      idEstado: "SIN",
      estado: "Sinaloa"
    },
    {
      idMunicipio: "SIN01",
      municipio: "Culiacán"
    }];
  idsDict ["t85915"] = [{lat: 24.768729, lng: -107.3981}, 
    {
      direccion: "BLVD. MANUEL J. CLOUTHIER NO.4038 ENTRE LAS CALLES CRUZ GÁLVEZ Y ROSENDO RODRÍGUEZ, COL. BUENOS AIRES, CULIACÁN, SINALOA, C.P. 80199",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "6671352010",
      nombre: "Clouthier"
    },
    {
      idEstado: "SIN",
      estado: "Sinaloa"
    },
    {
      idMunicipio: "SIN01",
      municipio: "Culiacán"
    }];
  idsDict ["t85912"] = [{lat: 24.772135, lng: -107.421246}, 
    {
      direccion: "CALLE ANTONIO ANCONA NRO.2758 ENTRE LAS CALLES CONST. SEBASTIÁN ALLENDE Y JOSÉ NATIVIDAD MACÍAS, COL. DÍAZ ORDAZ, CULIACÁN, SINALOA, C.P.80180",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-15:00",
      telefono: "6677613310",
      nombre: "Díaz Ordaz"
    },
    {
      idEstado: "SIN",
      estado: "Sinaloa"
    },
    {
      idMunicipio: "SIN01",
      municipio: "Culiacán"
    }];
  idsDict ["t85906"] = [{lat: 24.806607, lng: -107.395757}, 
    {
      direccion: "CALLE MARIANO ESCOBEDO PTE. NO.167 ENTRE LAS CALLES DOMINGO RUBÍ Y JUAN CARRASCO COL. CENTRO, CULIACÁN, SINALOA, C.P.80000",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "6677167626",
      nombre: "Escobedo"
    },
    {
      idEstado: "SIN",
      estado: "Sinaloa"
    },
    {
      idMunicipio: "SIN01",
      municipio: "Culiacán"
    }];
  idsDict ["t85904"] = [{lat: 24.8073152, lng: -107.3958168}, 
    {
      direccion: "CALLE BENITO JUÁREZ PTE. NO.80-A ENTRE LAS CALLES JUAN CARRASCO Y ÁLVARO OBREGÓN, COL. CENTRO, CULIACÁN, SINALOA, C.P.80000",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "6677156505",
      nombre: "Juárez"
    },
    {
      idEstado: "SIN",
      estado: "Sinaloa"
    },
    {
      idMunicipio: "SIN01",
      municipio: "Culiacán"
    }];
  idsDict ["t85920"] = [{lat: 24.814244, lng: -107.441322}, 
    {
      direccion: "BLVD. CONQUISTADORES NO.1125 ENTRE LA CALLE LUIS F. MARQUINA Y BLVD. LOLA BELTRÁN, COL. PRADOS DE LA CONQUISTA, CULIACÁN, SINALOA, C.P. 80058",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "6677233609",
      nombre: "La Conquista"
    },
    {
      idEstado: "SIN",
      estado: "Sinaloa"
    },
    {
      idMunicipio: "SIN01",
      municipio: "Culiacán"
    }];
  idsDict ["t85921"] = [{lat: 24.823586, lng: -107.654851}, 
    {
      direccion: "AV. DEFENSA NACIONAL SUR NO.74, COL. CENTRO GENERAL ÁNGEL FLORES LA PALMA, NAVOLATO, SINALOA, C.P.80349",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "6677220805",
      nombre: "La Palma"
    },
    {
      idEstado: "SIN",
      estado: "Sinaloa"
    },
    {
      idMunicipio: "SIN04",
      municipio: "Navolato"
    }];
  idsDict ["t85916"] = [{lat: 24.793028, lng: -107.366017}, 
    {
      direccion: "AV. REVOLUCIÓN SUR NO. 1401 ENTRE LAS CALLES MARIANO AZUELA Y JOSÉ VASCONCELOS, COL. GUADALUPE VICTORIA, CULIACÁN, SINALOA, C.P. 80240",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "6677183219",
      nombre: "Mariano Azuela"
    },
    {
      idEstado: "SIN",
      estado: "Sinaloa"
    },
    {
      idMunicipio: "SIN01",
      municipio: "Culiacán"
    }];
  idsDict ["t85911"] = [{lat: 24.778977, lng: -107.39435}, 
    {
      direccion: "AV. ÁLVARO OBREGÓN SUR NO.2891 INT 10 ENTRE LAS CALLES MÉXICO 68 Y CALLE SIN NOMBRE (CENTRO COMERCIAL WALMART), COL. MONTEBELLO, CULIACÁN, SINALOA, C.P.80227",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "6677158040",
      nombre: "México 68"
    },
    {
      idEstado: "SIN",
      estado: "Sinaloa"
    },
    {
      idMunicipio: "SIN01",
      municipio: "Culiacán"
    }];
  idsDict ["t85902"] = [{lat: 24.766784, lng: -107.697149}, 
    {
      direccion: "CALLE JESÚS ALMADA OTE NO. 64-B ENTRE LAS CALLES AV. ANTONIO ROSALES Y B. JUÁREZ, COL. CENTRO, NAVOLATO, SINALOA, C.P.80370",
      horario: "Lunes a Viernes: 09:00-20:00 Sábados: 10:00-17:00 Domingos: 10:00-17:00",
      telefono: "6727271612",
      nombre: "Navolato"
    },
    {
      idEstado: "SIN",
      estado: "Sinaloa"
    },
    {
      idMunicipio: "SIN04",
      municipio: "Navolato"
    }];
  idsDict ["t85908"] = [{lat: 24.83252, lng: -107.394091}, 
    {
      direccion: "AV. UNIVERSITARIOS NO.71 INT. 3 ENTRE LAS CALLES EUSTAQUIO BUELNA Y R. MÁRQUEZ COL. TIERRA BLANCA, CULIACÁN, SINALOA, C.P. 80030",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "6677538010",
      nombre: "Novena"
    },
    {
      idEstado: "SIN",
      estado: "Sinaloa"
    },
    {
      idMunicipio: "SIN01",
      municipio: "Culiacán"
    }];
  idsDict ["t85903"] = [{lat: 24.7992925, lng: -107.4062682}, 
    {
      direccion: "CALLE LÁZARO CÁRDENAS SUR NO.524 ENTRE LAS CALLES AGUILAR BARRAZA Y CONSTITUCIÓN COL. CENTRO SINALOA, CULIACÁN, SINALOA, C.P.80000",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "6677138146",
      nombre: "Palacio"
    },
    {
      idEstado: "SIN",
      estado: "Sinaloa"
    },
    {
      idMunicipio: "SIN01",
      municipio: "Culiacán"
    }];
  idsDict ["t85905"] = [{lat: 24.7833905, lng: -107.3741371}, 
    {
      direccion: "AV. PATRIA SUR NO.1715 ENTRE LAS CALLES AV. MÉXICO 68 Y BUGAMBILIAS, COL. 10 DE MAYO, CULIACÁN, SINALOA, C.P.80270",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-19:00 Domingos: 09:00-18:00",
      telefono: "6677180397",
      nombre: "Patria"
    },
    {
      idEstado: "SIN",
      estado: "Sinaloa"
    },
    {
      idMunicipio: "SIN01",
      municipio: "Culiacán"
    }];
  idsDict ["t85913"] = [{lat: 24.815706, lng: -107.429451}, 
    {
      direccion: "BLVD. LOLA BELTRÁN NO.3551 PTE. ENTRE LAS CALLES CIRCUITO INTERIOR Y CALLE DE LOS ALTOS, COL. PRADERA DORADA, CULIACÁN, SINALOA, C.P.80058",
      horario: "Lunes a Viernes: 09:00-20:00 Sábados: 10:00-17:00",
      telefono: "6677545887",
      nombre: "U. DE O."
    },
    {
      idEstado: "SIN",
      estado: "Sinaloa"
    },
    {
      idMunicipio: "SIN01",
      municipio: "Culiacán"
    }];
  idsDict ["t85919"] = [{lat: 24.802934, lng: -107.35178}, 
    {
      direccion: "AV. PASEO DEL REY NO.17 ENTRE LAS CALLES BLVD. FCO. I MADERO E INFANTA ELENA, COL. VILLA DEL REAL, CULIACÁN, SINALOA, C.P.80247",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00 ",
      telefono: "6677624008",
      nombre: "Villa de Real"
    },
    {
      idEstado: "SIN",
      estado: "Sinaloa"
    },
    {
      idMunicipio: "SIN01",
      municipio: "Culiacán"
    }];
  idsDict ["t85910"] = [{lat: 24.7788706, lng: -107.4401089}, 
    {
      direccion: "BLVD. EMILIANO ZAPATA NO.4988 ENTRE LAS CALLES FRAY MARCOS DE NIZA Y DIEGO FERNÁNDEZ DE PROAÑO, COL. SAN RAFAEL, CULIACÁN, SINALOA, C.P.80150",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "6677610111",
      nombre: "Zapata"
    },
    {
      idEstado: "SIN",
      estado: "Sinaloa"
    },
    {
      idMunicipio: "SIN01",
      municipio: "Culiacán"
    }];
  idsDict ["t85353"] = [{lat: 19.797749, lng: -99.097203}, 
    {
      direccion: "AV. MIGUEL HIDALGO NO.54, COL. BARRIO DE SAN MIGUEL, ZUMPANGO, ESTADO DE MÉXICO, C.P. 55603",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-17:00",
      telefono: "5911006368",
      nombre: "Zumpango"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX25",
      municipio: "Zumpango"
    }];
  idsDict ["t85141"] = [{lat: 20.519694, lng: -100.816414}, 
    {
      direccion: "BLVD. ADOLFO LÓPEZ MATEOS NO.402 B Y C PTE., COL. CENTRO,  CELAYA, GUANAJUATO, C.P. 38000",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00 Domingos: 11:00-16:00",
      telefono: "4616128646",
      nombre: "Celaya"
    },
    {
      idEstado: "GUA",
      estado: "Guanajuato"
    },
    {
      idMunicipio: "GUA03",
      municipio: "Celaya"
    }];
  idsDict ["t85196"] = [{lat: 20.54201, lng: -100.820247}, 
    {
      direccion: "AV. TECNOLÓGICO NO.633, COL. CIUDAD INDUSTRIAL, CELAYA, GUANAJUATO, C.P. 38010",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "4616119209",
      nombre: "Celaya Tecnológico"
    },
    {
      idEstado: "GUA",
      estado: "Guanajuato"
    },
    {
      idMunicipio: "GUA03",
      municipio: "Celaya"
    }];
  idsDict ["t85082"] = [{lat: 20.683985, lng: -101.354618}, 
    {
      direccion: "AV. VICENTE GUERRERO NO.1434, COL. SANTA JULIA, IRAPUATO, GUANAJUATO, C.P. 36667",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "4626269215",
      nombre: "Irapuato"
    },
    {
      idEstado: "GUA",
      estado: "Guanajuato"
    },
    {
      idMunicipio: "GUA05",
      municipio: "Irapuato"
    }];
  idsDict ["t85093"] = [{lat: 20.67644, lng: -101.34373}, 
    {
      direccion: "20 DE NOVIEMBRE  NO.368, COL. SAN JOSÉ-CENTRO, IRAPUATO, GUANAJUATO, C.P. 36513",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-17:00 Domingos: 10:00-15:00",
      telefono: "4626603504",
      nombre: "Irapuato II"
    },
    {
      idEstado: "GUA",
      estado: "Guanajuato"
    },
    {
      idMunicipio: "GUA05",
      municipio: "Irapuato"
    }];
  idsDict ["t85085"] = [{lat: 20.5757, lng: -101.204836}, 
    {
      direccion: "AV. DEL TRABAJO NO.802 PTE. COL. CENTRO, SALAMANCA, GUANAJUATO, C.P 37600",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00",
      telefono: "4646413131",
      nombre: "Salamanca"
    },
    {
      idEstado: "GUA",
      estado: "Guanajuato"
    },
    {
      idMunicipio: "GUA08",
      municipio: "Salamanca"
    }];
  idsDict ["t85181"] = [{lat: 20.569517, lng: -101.197386}, 
    {
      direccion: "CALLE HIDALGO NO.206, COL. CENTRO, SALAMANCA, GUANAJUATO, C.P. 36700",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-14:00",
      telefono: "4646485957",
      nombre: "Salamanca II"
    },
    {
      idEstado: "GUA",
      estado: "Guanajuato"
    },
    {
      idMunicipio: "GUA08",
      municipio: "Salamanca"
    }];
  idsDict ["t85453"] = [{lat: 20.11521, lng: -98.725189}, 
    {
      direccion: "PROLONGACIÓN AV. MADERO NO.104-C, COL. CÉSPEDES REFORMA, PACHUCA, HIDALGO, C.P. 42090",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-17:00",
      telefono: "7711534365",
      nombre: "Hospitales"
    },
    {
      idEstado: "HID",
      estado: "Hidalgo"
    },
    {
      idMunicipio: "HID05",
      municipio: "Pachuca"
    }];
  idsDict ["t85051"] = [{lat: 20.121204, lng: -98.73663}, 
    {
      direccion: "AV MADERO NO.116-C COL. CENTRO, PACHUCA, HIDALGO, C.P. 42000",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "7711532411",
      nombre: "Pachuca Madero"
    },
    {
      idEstado: "HID",
      estado: "Hidalgo"
    },
    {
      idMunicipio: "HID05",
      municipio: "Pachuca"
    }];
  idsDict ["t85054"] = [{lat: 20.102793, lng: -98.765461}, 
    {
      direccion: "BLVD. LUIS DONALDO COLOSIO NO.116, COL. AMPLIACIÓN STA. JULIA PACHUCA HIDALGO,  C.P. 42080",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-17:00",
      telefono: "7717103037",
      nombre: "Santa Julia"
    },
    {
      idEstado: "HID",
      estado: "Hidalgo"
    },
    {
      idMunicipio: "HID05",
      municipio: "Pachuca"
    }];
  idsDict ["t85442"] = [{lat: 19.842469, lng: -98.977874}, 
    {
      direccion: "AV. JUÁREZ SUR NO.59, BARRIO NACOZARI, TIZAYUCA, HIDALGO, C.P. 43800",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-17:00",
      telefono: "7791006920",
      nombre: "Tizayuca"
    },
    {
      idEstado: "HID",
      estado: "Hidalgo"
    },
    {
      idMunicipio: "HID09",
      municipio: "Tizayuca"
    }];
  idsDict ["t85055"] = [{lat: 20.054792, lng: -99.339296}, 
    {
      direccion: "MELCHOR OCAMPO NO.5, COL. CENTRO TULA DE ALLENDE, HIDALGO, C.P. 42800",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-17:00",
      telefono: "7737322546",
      nombre: "Tula"
    },
    {
      idEstado: "HID",
      estado: "Hidalgo"
    },
    {
      idMunicipio: "HID10",
      municipio: "Tula"
    }];
  idsDict ["t85052"] = [{lat: 20.095174, lng: -98.361676}, 
    {
      direccion: "CARR MÉXICO-TUXPAN NO.142, COL. AMPLIACIÓN VICENTE GUERRERO, TULANCINGO, HIDALGO, C.P. 43630",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "7751122199",
      nombre: "Tulancingo"
    },
    {
      idEstado: "HID",
      estado: "Hidalgo"
    },
    {
      idMunicipio: "HID11",
      municipio: "Tulancingo"
    }];
  idsDict ["t85247"] = [{lat: 20.082504, lng: -98.368315}, 
    {
      direccion: "PRIMERO DE MAYO ORIENTE NO 210, COL. CENTRO, TULANCINGO, HIDALGO, C.P. 43600",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-17:00",
      telefono: "7759741674",
      nombre: "Tulancingo Centro"
    },
    {
      idEstado: "HID",
      estado: "Hidalgo"
    },
    {
      idMunicipio: "HID11",
      municipio: "Tulancingo"
    }];
  idsDict ["t85120"] = [{lat: 20.646748, lng: -100.39386}, 
    {
      direccion: "CALZADA BELÉN NO.91, COL. JARDINES DE SANTIAGO, QUERÉTARO, QUERÉTARO, C.P. 76148",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "4422432236",
      nombre: "Belén"
    },
    {
      idEstado: "QUE",
      estado: "Querétaro"
    },
    {
      idMunicipio: "QUE03",
      municipio: "Querétaro"
    }];
  idsDict ["t85108"] = [{lat: 20.546716, lng: -100.396417}, 
    {
      direccion: "AV. PROLONGACIÓN CANDILES 204 LOCAL D-32, PLAZACANDILES, FRACC. CAMINO REAL, CORREGIDORA, QRO. C.P. 76093",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-19:00 Domingos: 11:00-16:00",
      telefono: "4422993483",
      nombre: "Candiles"
    },
    {
      idEstado: "QUE",
      estado: "Querétaro"
    },
    {
      idMunicipio: "QUE03",
      municipio: "Querétaro"
    }];
  idsDict ["t85133"] = [{lat: 20.60546, lng: -100.389763}, 
    {
      direccion: "PROL. CORREGIDORA NTE. NO.469, COL. LAS GEMAS, QUERÉTARO, QUERÉTARO, C.P. 76168",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "4422241331",
      nombre: "Corregidora"
    },
    {
      idEstado: "QUE",
      estado: "Querétaro"
    },
    {
      idMunicipio: "QUE03",
      municipio: "Querétaro"
    }];
  idsDict ["t85109"] = [{lat: 20.593807, lng: -100.398678}, 
    {
      direccion: "EZEQUIEL MONTES NORTE 86 - A, CENTRO, QUERÉTARO, QUERÉTARO, C.P. 76000",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "4422149055",
      nombre: "Ezequiel Montes"
    },
    {
      idEstado: "QUE",
      estado: "Querétaro"
    },
    {
      idMunicipio: "QUE03",
      municipio: "Querétaro"
    }];
  idsDict ["t85189"] = [{lat: 20.387083, lng: -99.996803}, 
    {
      direccion: "BENITO JUAREZ NO. 5 ORIENTE, COL. CENTRO. SAN JUAN DEL RIO, QUERETARO ,C.P 76800",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-16:00 Domingos: 10:00-14:00",
      telefono: "4272729638",
      nombre: "San Juan del Río"
    },
    {
      idEstado: "QUE",
      estado: "Querétaro"
    },
    {
      idMunicipio: "QUE04",
      municipio: "San Juan del Río"
    }];
  idsDict ["t85110"] = [{lat: 20.632496, lng: -100.464321}, 
    {
      direccion: "AV. DE LA LUZ N° 1603, COL. CERRITO COLORADO COMEVI,QUERÉTARO, QUERÉTARO,C.P 76116",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-19:00 Domingos: 11:00-16:00",
      telefono: "4422604052",
      nombre: "Satélite Qro."
    },
    {
      idEstado: "QUE",
      estado: "Querétaro"
    },
    {
      idMunicipio: "QUE03",
      municipio: "Querétaro"
    }];
  idsDict ["t85039"] = [{lat: 19.530942, lng: -99.154784}, 
    {
      direccion: "AV. LUIS ESPINOZA NO.108, COL. SOLIDARIDAD NACIONAL, DEL. GUSTAVO A. MADERO, CDMX, C.P. 07268",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5553697544",
      nombre: "Acueducto de Guadalupe"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX07",
      municipio: "Gustavo A. Madero"
    }];
  idsDict ["t85414"] = [{lat: 19.400979, lng: -99.187782}, 
    {
      direccion: "AV. JALISCO NO.180, COL. TACUBAYA, DEL. MIGUEL HIDALGO, CDMX, C.P. 11870",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5552733664",
      nombre: "Av. Jalisco"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX11",
      municipio: "Miguel Hidalgo"
    }];
  idsDict ["t85436"] = [{lat: 19.479034, lng: -99.186985}, 
    {
      direccion: "AV. AZCAPOTZALCO NO.562, COL. CENTRO AZCAPOTZALCO, DEL. AZCAPOTZALCO, CDMX, C.P. 02000",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5553471154",
      nombre: "Azcapotzalco Centro"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX02",
      municipio: "Azcapotzalco"
    }];
  idsDict ["t85089"] = [{lat: 19.462679, lng: -99.125401}, 
    {
      direccion: "CALZ. DE GUADALUPE NO.211, COL. 7 DE NOVIEMBRE, DEL. GUSTAVO A. MADERO, CDMX, C.P. 07840",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5557596742",
      nombre: "Calz. Guadalupe"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX07",
      municipio: "Gustavo A. Madero"
    }];
  idsDict ["t85224"] = [{lat: 19.40092, lng: -99.132724}, 
    {
      direccion: "AV. CORUÑA NO.281, COL. VIADUCTO PIEDAD DEL. IZTACALCO, CDMX, C.P. 08200",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5555383458",
      nombre: "Coruña"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX08",
      municipio: "Iztacalco"
    }];
  idsDict ["t85045"] = [{lat: 19.356162, lng: -99.299184}, 
    {
      direccion: "VERACRUZ NO. 22, COL. CUAJIMALPA, CDMX, C.P. 05000",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-16:00",
      telefono: "5558132833",
      nombre: "Cuajimalpa"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX05",
      municipio: "Cuajimalpa"
    }];
  idsDict ["t85034"] = [{lat: 19.555484, lng: -99.135821}, 
    {
      direccion: "JUVENTINO ROSAS LOTE 35, MANZANA 27, ZONA 6, EJIDO CUAUTEPEC II, COL. CUAUTEPEC BARRIO ALTO, CDMX, C.P. 07100",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "5553234069",
      nombre: "Cuautepec"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX07",
      municipio: "Gustavo A. Madero"
    }];
  idsDict ["t85318"] = [{lat: 19.528186, lng: -99.141977}, 
    {
      direccion: "AV. SANTA TERESA S/N ESQ. PUERTO MAZATLÁN, COL. JORGE NEGRETE, DEL.GUSTAVO A. MADERO, CDMX, C.P. 07280",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "5550393255",
      nombre: "Cuautepec Barrio Bajo"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX07",
      municipio: "Gustavo A. Madero"
    }];
  idsDict ["t85063"] = [{lat: 19.356282, lng: -99.152883}, 
    {
      direccion: "AV. DIVISIÓN DEL NORTE NO. 2537, COL. DEL CARMEN, DEL. COYOACÁN, CDMX, C.P. 04100",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5556040924",
      nombre: "División del Norte"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX04",
      municipio: "Coyoacán"
    }];
  idsDict ["t85101"] = [{lat: 19.388255, lng: -99.146807}, 
    {
      direccion: "EJE CENTRAL LÁZARO CÁRDENAS NO.774, COL. NIÑOS HÉROES DE CHAPULTEPEC, DEL. BENITO JUÁREZ, CDMX, C.P. 03440",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5555797953",
      nombre: "Eje Central"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX03",
      municipio: "Benito Juárez"
    }];
  idsDict ["t85311"] = [{lat: 19.40929, lng: -99.120218}, 
    {
      direccion: "AV. MORELOS NO.338, COL. MAGDALENA MIXIUHCA, DEL. VENUSTIANO CARRANZA, CDMX, C.P. 15850 ",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-17:00",
      telefono: "5555526051",
      nombre: "Jamaica"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX14",
      municipio: "Venustuano Carranza"
    }];
  idsDict ["t85060"] = [{lat: 19.359813, lng: -99.121796}, 
    {
      direccion: "CALZ. DE LA VIGA NO.1802, COL. PUEBLO MEXICALTINGO, DEL. IZTAPALAPA, CDMX, C.P. 09099 ",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "5556973903",
      nombre: "La Viga"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX09",
      municipio: "Iztapalapa"
    }];
  idsDict ["t85092"] = [{lat: 19.472966, lng: -99.122121}, 
    {
      direccion: "CALZ. DE GUADALUPE NO.466, COL. INDUSTRIAL, DEL. GUSTAVO A. MADERO, CDMX, C.P. 07800",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "5555171790",
      nombre: "La Villa"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX07",
      municipio: "Gustavo A. Madero"
    }];
  idsDict ["t85232"] = [{lat: 19.456497, lng: -99.193798}, 
    {
      direccion: "CALZADA LEGARIA NO. 48, COL. LEGARIA,  DEL. MIGUEL HIDALGO, CDMX, C.P. 11410",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-17:00",
      telefono: "5553866521",
      nombre: "Legaria"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX11",
      municipio: "Miguel Hidalgo"
    }];
  idsDict ["t85064"] = [{lat: 19.426591, lng: -99.161346}, 
    {
      direccion: "HAVRE NO. 43, COL. JUÁREZ, DEL. CUAUHTÉMOC, MÉXICO, CDMX, C.P. 06600",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5555331006",
      nombre: "Londres"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX06",
      municipio: "Cuauhtémoc"
    }];
  idsDict ["t85076"] = [{lat: 19.493486, lng: -99.14582}, 
    {
      direccion: "AV. MONTEVIDEO NO.647, COL. SAN BARTOLO ATEPEHUACÁN, DEL.GUSTAVO  A. MADERO, CDMX, C.P. 07730",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5551193812",
      nombre: "Montevideo"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX07",
      municipio: "Gustavo A. Madero"
    }];
  idsDict ["t85027"] = [{lat: 19.44496, lng: -99.145905}, 
    {
      direccion: "MOSQUETA NO.158, COL. GUERRERO, DELEGACIÓN CUAUHTÉMOC, CDMX, C.P. 06300",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "5555468790",
      nombre: "Mosqueta"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX06",
      municipio: "Cuauhtémoc"
    }];
  idsDict ["t85204"] = [{lat: 19.402416, lng: -99.199174}, 
    {
      direccion: "AV. OBSERVATORIO NO.239 COL. COVE, DEL. ÁLVARO OBREGÓN, CDMX, C.P. 01120",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5552771616",
      nombre: "Observatorio"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX01",
      municipio: "Álvaro Obregón"
    }];
  idsDict ["t85220"] = [{lat: 19.420288, lng: -99.163812}, 
    {
      direccion: "AV. INSURGENTES SUR NO.206, COL. ROMA NORTE, DEL. CUAUHTÉMOC, CDMX, C.P. 06700 ",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5555336077",
      nombre: "Roma Norte"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX06",
      municipio: "Cuauhtémoc"
    }];
  idsDict ["t85091"] = [{lat: 19.411453, lng: -99.162407}, 
    {
      direccion: " MONTERREY NO.236, COL. ROMA SUR, DEL.CUAUHTÉMOC, CDMX, C.P. 06760",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5552641365",
      nombre: "Roma Sur"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX06",
      municipio: "Cuauhtémoc"
    }];
  idsDict ["t85106"] = [{lat: 19.426064, lng: -99.142429}, 
    {
      direccion: "EJE CENTRAL LÁZARO CÁRDENAS 13 LOC. H, COL. DOCTORES,  DEL CUAUHTÉMOC ,MÉXICO, D.F.CP 06720",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "5555782851",
      nombre: "Salto del Agua"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX06",
      municipio: "Cuauhtémoc"
    }];
  idsDict ["t85197"] = [{lat: 19.343923, lng: -99.191174}, 
    {
      direccion: "DR. GÁLVEZ NO.17 COL. SAN ÁNGEL, DEL. ÁLVARO OBREGÓN, CDMX, C.P. 01000",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5556164714",
      nombre: "San Angel"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX01",
      municipio: "Álvaro Obregón"
    }];
  idsDict ["t85074"] = [{lat: 19.398317, lng: -99.187115}, 
    {
      direccion: "HÉROES DE 1810 NO.29, COL. TACUBAYA, DEL. MIGUEL HIDALGO, CDMX, C.P. 11870",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-17:00",
      telefono: "5552718797",
      nombre: "Tacubaya"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX11",
      municipio: "Miguel Hidalgo"
    }];
  idsDict ["t85028"] = [{lat: 19.279868, lng: -99.166311}, 
    {
      direccion: "CALZ. DE TLALPAN NO.5048, COL. LA JOYA , DEL. TLALPAN, CDMX, C.P. 14090",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5556559558",
      nombre: "Tlalpan Sur"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX12",
      municipio: "Tlalpan"
    }];
  idsDict ["t85030"] = [{lat: 19.382956, lng: -99.236044}, 
    {
      direccion: "AV. VASCO DE QUIROGA NO.1540 (ANTES NO. 9), COLONIA SANTA FE, DELEGACIÓN ÁLVARO OBREGÓN, CDMX, C.P. 01250",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-16:00",
      telefono: "5552574001",
      nombre: "Vasco de Quiroga"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX01",
      municipio: "Álvaro Obregón"
    }];
  idsDict ["t85203"] = [{lat: 19.672608, lng: -99.181785}, 
    {
      direccion: "AV. 20 DE NOVIEMBRE NO.205 COL. CENTRO, CUAUTITLÁN, ESTADO DE MÉXICO, C.P. 54800",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5558704224",
      nombre: "20 de Noviembre"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX07",
      municipio: "Cuautitlán Izcalli"
    }];
  idsDict ["t85349"] = [{lat: 19.540141, lng: -99.153447}, 
    {
      direccion: "CALZ. CHALMA LA VILLA, NO.6, COL. ZONA ESCOLAR, TLALNEPANTLA, ESTADO DE MÉXICO, C.P. 07230",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "5553233462",
      nombre: "Chalma"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX21",
      municipio: "Tlalnepantla de Baz"
    }];
  idsDict ["t85218"] = [{lat: 19.634534, lng: -99.100303}, 
    {
      direccion: "VÍA LÓPEZ PORTILLO NO.196 COACALCO BERRIOZABAL, ESTADO DE MÉXICO, C.P. 55707",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5515421742",
      nombre: "Coacalco"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX06",
      municipio: "Coacalco de Berriozabal"
    }];
  idsDict ["t85046"] = [{lat: 19.652009, lng: -99.20866}, 
    {
      direccion: "TEMOAYA NO.3 COL. CENTRO URBANO, CUAUTITLÁN IZCALLI, ESTADO DE MÉXICO, C.P. 54700",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5558815643",
      nombre: "Cuautitlán Izcalli"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX07",
      municipio: "Cuautitlán Izcalli"
    }];
  idsDict ["t85307"] = [{lat: 19.642441, lng: -99.08755}, 
    {
      direccion: "AV. CARLOS PICHARDO CRUZ S/N MZ-3, LOTE 9 Y 10, FRACC. EL PANTANO, SANTA MARÍA MAGDALENA, COACALCO DE BERRIOZABAL, ESTADO DE MÉXICO, C.P. 55719",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "5526475203",
      nombre: "Eje 8"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX06",
      municipio: "Coacalco de Berriozabal"
    }];
  idsDict ["t85012"] = [{lat: 19.458207, lng: -99.236133}, 
    {
      direccion: "AV. MOLINITO NO.10 COL. EX EJIDO SAN LUIS TLALTILCO, NAUCALPAN, ESTADO DE MÉXICO, C.P. 53580",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-17:00",
      telefono: "5581647433",
      nombre: "El Molinito"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX14",
      municipio: "Naucalpan de Juárez"
    }];
  idsDict ["t85416"] = [{lat: 19.550314, lng: -99.20581}, 
    {
      direccion: "AV. GUSTAVO BAZ NO.403, COL. SAN NICOLÁS TLAXCOLPAN, TLALNEPANTLA, ESTADO DE MÉXICO, C.P. 54030",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5553172895",
      nombre: "Gustavo Baz"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX21",
      municipio: "Tlalnepantla de Baz"
    }];
  idsDict ["t85398"] = [{lat: 19.532912, lng: -99.118339}, 
    {
      direccion: "LOTE 2 MANZANA 361 LOTE 3, 328 A (HOY MANZANA 361-A LOTE 3328, CALLE EXCURSIONISTAS TONATIUH), COL. LÁZARO CÁRDENAS, TLALNEPANTLA, ESTADO DE MÉXICO, C.P. 54189",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5553848039",
      nombre: "La Presa"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX21",
      municipio: "Tlalnepantla de Baz"
    }];
  idsDict ["t85244"] = [{lat: 19.660524, lng: -99.081023}, 
    {
      direccion: "AV. MAGNOLIAS S/N LOTE 53, COL. GRANJAS SAN PABLO TULTITLÁN, ESTADO DE MÉXICO, C.P. 54930",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-17:00",
      telefono: "5558799656",
      nombre: "Magnolias"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX23",
      municipio: "Tultitlán"
    }];
  idsDict ["t85208"] = [{lat: 19.473428, lng: -99.231629}, 
    {
      direccion: "16 DE SEPTIEMBRE NO.1105, COLONIA SAN BARTOLO CENTRO,  NAUCALPAN, ESTADO DE MÉXICO, C.P. 53400",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5555762086",
      nombre: "Naucalpan"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX14",
      municipio: "Naucalpan de Juárez"
    }];
  idsDict ["t85072"] = [{lat: 19.622638, lng: -99.316523}, 
    {
      direccion: "AV. 16 DE SEPTIEMBRE NO.54, COL. HIDALGO, PRIMERA  SECCIÓN, NICOLÁS ROMERO, ESTADO DE MÉXICO, C.P. 54400",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5558214889",
      nombre: "Nicolás Romero"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX16",
      municipio: "Nicolás Romero"
    }];
  idsDict ["t85417"] = [{lat: 19.659513, lng: -99.20749}, 
    {
      direccion: "AV. JIMÉNEZ CANTÚ NO.404, COL. CENTRO URBANO, CUAUTITLÁN IZCALLI, ESTADO DE MÉXICO, C.P. 54700",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-17:00",
      telefono: "5558717246",
      nombre: "Operagua"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX07",
      municipio: "Cuautitlán Izcalli"
    }];
  idsDict ["t85097"] = [{lat: 19.518011, lng: -99.1077}, 
    {
      direccion: "AV. RÍO DE LOS REMEDIOS NO. 63 A-1, COL. SAN JUAN IXHUATEPEC, ECATEPEC DE MORELOS, ESTADO DE MÉXICO, C.P. 54180",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "5557149766",
      nombre: "San Juanico"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX08",
      municipio: "Ecatepec de Morelos"
    }];
  idsDict ["t85355"] = [{lat: 19.745262, lng: -99.179447}, 
    {
      direccion: "HIDALGO NO.13 A, COL. TLATILCO, TEOLOYUCAN, ESTADO DE MÉXICO, C.P. 54770",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5939145428",
      nombre: "Teoloyucan"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX17",
      municipio: "Teoloyucan"
    }];
  idsDict ["t85102"] = [{lat: 19.527511, lng: -99.20858}, 
    {
      direccion: "AV. DOCTOR GUSTAVO BAZ  NO.216-C, COL. MIGUEL HIDALGO, TLALNEPANTLA, ESTADO DE MÉXICO, C.P. 54060",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-17:00",
      telefono: "5553628792",
      nombre: "Tlalnepantla"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX21",
      municipio: "Tlalnepantla de Baz"
    }];
  idsDict ["t85090"] = [{lat: 19.452863, lng: -99.218217}, 
    {
      direccion: "AV. RODOLFO GAONA NO.6, COL. LOMAS DE SOTELO, NAUCALPAN, ESTADO DE MÉXICO, C.P. 53390",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-17:00",
      telefono: "5555804770",
      nombre: "Toreo"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX14",
      municipio: "Naucalpan de Juárez"
    }];
  idsDict ["t85240"] = [{lat: 19.682852, lng: -99.134705}, 
    {
      direccion: "AV. 16 DE SEPTIEMBRE NO.61, BARRIO SAN JUAN, TULTEPEC, ESTADO DE MÉXICO, C.P. 54900",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-17:00",
      telefono: "5558926082",
      nombre: "Tultepec"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX22",
      municipio: "Tultepec"
    }];
  idsDict ["t85242"] = [{lat: 19.641626, lng: -99.167053}, 
    {
      direccion: "BLVD. TULTITLÁN ORIENTE NO.123, COL. BARRIO LOS REYES, TULTITLÁN, ESTADO DE MÉXICO, C.P. 54900",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-17:00",
      telefono: "5558889054",
      nombre: "Tultitlán Centro"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX23",
      municipio: "Tultitlán"
    }];
  idsDict ["t85241"] = [{lat: 19.716571, lng: -99.139906}, 
    {
      direccion: "CARRETERA KM 7.5 CUAUTITLÁN-ZUMPANGO DEL PUEBLO DE VISITACIÓN, MELCHOR OCAMPO, ESTADO DE MÉXICO, C.P. 54890",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "5558786264",
      nombre: "Visitación"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX12",
      municipio: "Melchor Ocampo"
    }];
  idsDict ["t85360"] = [{lat: 19.906923, lng: -99.33999}, 
    {
      direccion: "AV. MELCHOR OCAMPO S/N, COL. EL EDÉN, TEPEJI DEL RÍO, HIDALGO, C.P. 42854 ",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-17:00",
      telefono: "7737332615",
      nombre: "Tepeji del Río"
    },
    {
      idEstado: "HID",
      estado: "Hidalgo"
    },
    {
      idMunicipio: "HID08",
      municipio: "Tepeji del Río"
    }];
  idsDict ["t85345"] = [{lat: 19.494969, lng: -99.080005}, 
    {
      direccion: "EJIDO L-97 M-11, COL. 25 DE JULIO, DEL. GUSTAVO A. MADERO, CDMX, C.P. 07520",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5553675430",
      nombre: "25 de Julio"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX07",
      municipio: "Gustavo A. Madero"
    }];
  idsDict ["t85342"] = [{lat: 19.395066, lng: -99.076655}, 
    {
      direccion: "SUR 16 NO.219, COL. AGRÍCOLA ORIENTAL, IZTACALCO, CDMX, C.P. 08500",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5557011035",
      nombre: "Agrícola Oriental"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX08",
      municipio: "Iztacalco"
    }];
  idsDict ["t85071"] = [{lat: 19.355996, lng: -99.103435}, 
    {
      direccion: "CALZ. ERMITA IZTAPALAPA NO.896, COL. BARRIO SANTA BÁRBARA,  DEL. IZTAPALAPA, CDMX, C.P. 09000 ",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5556856503",
      nombre: "Atlalilco"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX09",
      municipio: "Iztapalapa"
    }];
  idsDict ["t85302"] = [{lat: 19.335402, lng: -99.064582}, 
    {
      direccion: "ANILLO PERIFÉRICO CANAL DE GARAY NO.325, COL. SAN JUAN JOYA, DEL. IZTAPALAPA, CDMX, C.P. 09740",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-17:00",
      telefono: "5556937504",
      nombre: "Canal de Garay"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX09",
      municipio: "Iztapalapa"
    }];
  idsDict ["t85301"] = [{lat: 19.352208, lng: -99.077955}, 
    {
      direccion: "AV. ERMITA IZTAPALAPA NO.1721 (ANTES 1225), COL. SAN MIGUEL, DEL. IZTAPALAPA, CDMX, C.P. 09830",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5556854849",
      nombre: "La Purísima"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX09",
      municipio: "Iztapalapa"
    }];
  idsDict ["t85313"] = [{lat: 19.333141, lng: -99.042838}, 
    {
      direccion: "CALLE JACARANDAS LOTE 1 J, MANZANA 16, SECC. HANK GONZÁLEZ, COL. DESARROLLO URBANO QUETZALCÓATL, DEL. IZTAPALAPA, CDMX, C.P. 09700",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5559423604",
      nombre: "Manuel Cañas"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX09",
      municipio: "Iztapalapa"
    }];
  idsDict ["t85243"] = [{lat: 19.488951, lng: -99.106244}, 
    {
      direccion: "AV. GRAL. MARTÍN CARRERA NO. 148, COL. MARTIN CARRERA, DEL. GUSTAVO A. MADERO, CDMX, C.P. 07070",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5557572416",
      nombre: "Martín Carrera"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX07",
      municipio: "Gustavo A. Madero"
    }];
  idsDict ["t85327"] = [{lat: 19.372727, lng: -99.016984}, 
    {
      direccion: "CALZ. IGNACIO ZARAGOZA NO.2623, COL. SANTA MARTHA ACATITLA SUR, DEL. IZTAPALAPA, CDMX,C.P. 09530",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5557455185",
      nombre: "Peñón viejo"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX09",
      municipio: "Iztapalapa"
    }];
  idsDict ["t85415"] = [{lat: 19.485696, lng: -99.092689}, 
    {
      direccion: "AV. EDUARDO MOLINA NO.1624 L. 5A-04, COL. EL COYOL, DEL. GUSTAVO A. MADERO, CDMX, C.P. 07420",
      horario: "Lunes a Viernes: 11:00-20:00 Sábados: 11:00-19:00 Domingos: 11:00-18:00",
      telefono: "5557373989",
      nombre: "Plaza Oriente"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX07",
      municipio: "Gustavo A. Madero"
    }];
  idsDict ["t85325"] = [{lat: 19.482339, lng: -99.074669}, 
    {
      direccion: "CONSTITUCIÓN DE LA REPÚBLICA NO. 36 Y 38, COL. PROVIDENCIA, DEL. GUSTAVO A. MADERO, CDMX, C.P. 07550",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5526176952",
      nombre: "Providencia"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX07",
      municipio: "Gustavo A. Madero"
    }];
  idsDict ["t85104"] = [{lat: 19.379391, lng: -99.077038}, 
    {
      direccion: "AV. ROJO GÓMEZ NO.660, COL. LEYES DE REFORMA,  DEL. IZTAPALAPA, CDMX, C.P. 09310",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 11:00-16:00",
      telefono: "5556406053",
      nombre: "Rojo Gómez"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX09",
      municipio: "Iztapalapa"
    }];
  idsDict ["t85020"] = [{lat: 19.307313, lng: -99.067693}, 
    {
      direccion: "JUÁREZ NO.1, COL. SAN LORENZO TEZONCO, DEL. IZTAPALAPA, CDMX, C.P. 09940",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5558599555",
      nombre: "San Lorenzo Tláhuac 2"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX09",
      municipio: "Iztapalapa"
    }];
  idsDict ["t85015"] = [{lat: 19.337392, lng: -99.109069}, 
    {
      direccion: "AV. TLÁHUAC NO.757 COL. SAN SIMÓN CULHUACÁN, DEL. IZTAPALAPA, CDMX, CP. 09800",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5556320762",
      nombre: "Tláhuac 1"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX09",
      municipio: "Iztapalapa"
    }];
  idsDict ["t85430"] = [{lat: 19.261597, lng: -99.009175}, 
    {
      direccion: "AV. TLÁHUAC TULYEHUALCO NO.8555 FRACCIÓN D, COL. SAN ISIDRO TULYEHUALCO, DEL. TLÁHUAC, CDMX, C.P. 13094",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 11:00-16:00",
      telefono: "5521613525",
      nombre: "Tulyehualco"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX13",
      municipio: "Tláhuac"
    }];
  idsDict ["t85385"] = [{lat: 19.345673, lng: -99.021082}, 
    {
      direccion: "CALZ. ERMITA IZTAPALAPA NO. 2012, COL. SANTA MARÍA AZTAHUACAN, DEL. IZTAPALAPA, CDMX, C.P. 09500",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-17:00",
      telefono: "5554277585",
      nombre: "Xalpa"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX09",
      municipio: "Iztapalapa"
    }];
  idsDict ["t85443"] = [{lat: 19.262022, lng: -99.104729}, 
    {
      direccion: "AV. MORELOS NO.43, COL. BARRIO EL ROSARIO, XOCHIMILCO, CDMX,  C.P. 16070",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 11:00-16:00",
      telefono: "5555553382",
      nombre: "Xochimilco"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX15",
      municipio: "Xochimilco"
    }];
  idsDict ["t85078"] = [{lat: 19.296089, lng: -99.038157}, 
    {
      direccion: "AV. TLÁHUAC NO.6414, COL. LA CONCHITA ZAPOTITLÁN, DEL. TLÁHUAC, CDMX, C.P. 13360",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5558419113",
      nombre: "Zapotitlán Tláhuac 3"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX13",
      municipio: "Tláhuac"
    }];
  idsDict ["t85409"] = [{lat: 19.126764, lng: -98.76935}, 
    {
      direccion: "AVENIDA HIDALGO NO.37, COL. CENTRO, AMECAMECA, ESTADO DE MÉXICO, C.P. 56900 ",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-16:00",
      telefono: "5976881855",
      nombre: "Amecameca"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX02",
      municipio: "Amecameca"
    }];
  idsDict ["t85389"] = [{lat: 19.312667, lng: -98.925425}, 
    {
      direccion: "AV. CUAUHTÉMOC NO.73 COL. AYOTLA, IXTAPALUCA ESTADO DE MÉXICO, C.P. 56560",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-17:00",
      telefono: "5526458821",
      nombre: "Ayotla"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX10",
      municipio: "Ixtapaluca"
    }];
  idsDict ["t85216"] = [{lat: 19.541964, lng: -99.036641}, 
    {
      direccion: "BOULEVARD DE LOS AZTECAS NO.29, FRACC. CIUDAD AZTECA, ECATEPEC DE MORELOS, ESTADO DE MÉXICO, C.P. 55120 ",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5557758014",
      nombre: "Aztecas"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX08",
      municipio: "Ecatepec de Morelos"
    }];
  idsDict ["t85065"] = [{lat: 19.501285, lng: -99.094078}, 
    {
      direccion: "AV. CENTENARIO NO.2123, COL. NUEVA ATZACOALCO, DEL. GUSTAVO A. MADERO, CDMX, C.P. 07420",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5557697525",
      nombre: "Centenario"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX07",
      municipio: "Gustavo A. Madero"
    }];
  idsDict ["t85228"] = [{lat: 19.260394, lng: -98.8962}, 
    {
      direccion: "AV. CUAUHTÉMOC NO.600 COL. CENTRO, CHALCO, ESTADO DE MÉXICO, C.P. 56600",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5559731266",
      nombre: "Chalco"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX03",
      municipio: "Chalco"
    }];
  idsDict ["t85252"] = [{lat: 19.437096, lng: -98.946978}, 
    {
      direccion: "AV. DE LOS PATOS MZ. 3 LT. 8, COL. LA ZANJA, BARRIO ARTESANOS, CHIMALHUACÁN, ESTADO DE MÉXICO, C.P. 56334",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-17:00",
      telefono: "5521260521",
      nombre: "Chimalhuacán"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX05",
      municipio: "Chimalhuacán"
    }];
  idsDict ["t85317"] = [{lat: 19.507811, lng: -99.059961}, 
    {
      direccion: "AV. CARLOS HANK GONZÁLEZ NO. 97, MZ-39 LT-34, COL. GRANJAS VALLE DE GUADALUPE, SECC. A ECATEPEC DE MORELOS,  ESTADO DE MÉXICO, C.P. 55270",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5558302954",
      nombre: "Hank González"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX08",
      municipio: "Ecatepec de Morelos"
    }];
  idsDict ["t85022"] = [{lat: 19.313742, lng: -98.889622}, 
    {
      direccion: "CUAUHTÉMOC NO. 36, COL. IXTAPALUCA CENTRO,  IXTAPALUCA, ESTADO DE MÉXICO,  C.P. 56530",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5559726724",
      nombre: "Ixtapaluca"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX10",
      municipio: "Ixtapaluca"
    }];
  idsDict ["t85206"] = [{lat: 19.596523, lng: -99.006368}, 
    {
      direccion: "AV. JARDINES DE MORELOS MZ. 131 LT. 113, COL. JARDINES DE MORELOS, SECCIÓN FUENTES, ECATEPEC DE MORELOS, ESTADO DE MÉXICO, C.P. 55070",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 09:00-17:00",
      telefono: "5558371814",
      nombre: "Jardines de Morelos"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX08",
      municipio: "Ecatepec de Morelos"
    }];
  idsDict ["t85418"] = [{lat: 19.618266, lng: -99.038862}, 
    {
      direccion: "CENTRO COMERCIAL MACRO PLAZA LOS HÉROES LOTE 1, MANZANA 1, SECCIÓN 1, DE LA CARRETEARA FEDERAL LECHERÍA- TEXCOCO Y AUTOPISTA MÉXICO PACHUCA S/N, TECÁMAC, ESTADO DE MÉXICO, C.P. 55764",
      horario: "Lunes a Viernes: 09:00-20:00 Sábados: 10:00-18:00 Domingos: 10:00-17:00",
      telefono: "5517384508",
      nombre: "Los Héroes "
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX13",
      municipio: "Tecámac de Felipe Villanueva"
    }];
  idsDict ["t85009"] = [{lat: 19.356182, lng: -98.984157}, 
    {
      direccion: "CARRETERA FEDERAL MÉXICO-PUEBLA KM 18.5, COL. AMPLIACIÓN LOS REYES, LOS REYES LA PAZ, ESTADO DE MÉXICO, C.P. 56400",
      horario: "Lunes a Viernes: 9:00-18:00 Sábados: 10:00-17:00",
      telefono: "5526420819",
      nombre: "Los Reyes La Paz"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX11",
      municipio: "Los Reyes La Paz"
    }];
  idsDict ["t85230"] = [{lat: 19.396211, lng: -99.031261}, 
    {
      direccion: "LÓPEZ MATEOS NO.124, COL. METROPOLITANA 1A. SECCIÓN, NEZAHUALCÓYOTL, ESTADO DE MÉXICO, C.P. 57730",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5526192285",
      nombre: "Neza 1"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX15",
      municipio: "Nezahualcóyotl"
    }];
  idsDict ["t85049"] = [{lat: 19.411631, lng: -99.006737}, 
    {
      direccion: "AV. GUSTAVO BAZ NO.120 ESQ. FERIA DE LAS FLORES, COL. BENITO JUÁREZ, DEL. NEZAHUALCÓYOTL, ESTADO DE MÉXICO, C.P. 57000",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5557342730",
      nombre: "Neza 2"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX15",
      municipio: "Nezahualcóyotl"
    }];
  idsDict ["t85099"] = [{lat: 19.377784, lng: -98.982222}, 
    {
      direccion: "ORIENTE NO.4 LOTE 14 Y 15, MZ. 129 REFORMA NEZAHUALCOYOTL, ESTADO DE MÉXICO, C.P. 57840",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5526422403",
      nombre: "Neza 3"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX15",
      municipio: "Nezahualcóyotl"
    }];
  idsDict ["t85401"] = [{lat: 19.434852, lng: -98.964209}, 
    {
      direccion: "AV. ORGANIZACIÓN POPULAR MZ-A LT -21, BARRIO DE HOJALATEROS, CHIMALHUACÁN, ESTADO DE MÉXICO, C.P. 56366",
      horario: "Lunes a Viernes: 9:00-18:00 Sábados: 10:00-17:00",
      telefono: "5558529268",
      nombre: "Organización Popular"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX05",
      municipio: "Chimalhuacán"
    }];
  idsDict ["t85238"] = [{lat: 19.54899, lng: -99.074195}, 
    {
      direccion: "AV. SAN ANDRÉS NO.107, COL. HANK GONZÁLEZ, ECATEPEC, ESTADO DE MÉXICO, C.P. 55520",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5557910267",
      nombre: "San Andrés"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX08",
      municipio: "Ecatepec de Morelos"
    }];
  idsDict ["t85023"] = [{lat: 19.594252, lng: -99.037906}, 
    {
      direccion: "AV. VÍA MORELOS NO.7, COL. FUENTES DE SAN CRISTÓBAL, ECATEPEC DE MORELOS,  ESTADO DE MÉXICO, C.P. 55040",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5557708288",
      nombre: "San Cristóbal"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX08",
      municipio: "Ecatepec de Morelos"
    }];
  idsDict ["t85321"] = [{lat: 19.416775, lng: -98.903724}, 
    {
      direccion: "AV. HIDALGO NO. 14, COL. CABECERA MUNICIPAL, CHICOLOAPAN, ESTADO DE MÉXICO, C.P. 56370",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5559217521",
      nombre: "San Vicente"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX04",
      municipio: "Chicoloapan"
    }];
  idsDict ["t85066"] = [{lat: 19.71337, lng: -98.973955}, 
    {
      direccion: "CARRETERA MÉXICO-PACHUCA KM. 38.5, TECÁMAC DE FELIPE VILLANUEVA, TECÁMAC, ESTADO DE MÉXICO, C.P. 55740",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5559346472",
      nombre: "Tecámac"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX13",
      municipio: "Tecámac de Felipe Villanueva"
    }];
  idsDict ["t85396"] = [{lat: 19.683382, lng: -98.864933}, 
    {
      direccion: "HIDALGO NO.36, BARRIO DE LA PURIFICACIÓN, TEOTIHUACÁN, ESTADO DE MÉXICO, C.P. 55810",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5949568945",
      nombre: "Teotihuacán"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX18",
      municipio: "Teotihuacán"
    }];
  idsDict ["t85234"] = [{lat: 19.510339, lng: -98.882614}, 
    {
      direccion: "JUÁREZ NO. 307, COL. DEL CARMEN, TEXCOCO, ESTADO DE MÉXICO, C.P. 56140",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-17:00",
      telefono: "5959555531",
      nombre: "Texcoco"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX20",
      municipio: "Texcoco"
    }];
  idsDict ["t85058"] = [{lat: 19.491553, lng: -99.055089}, 
    {
      direccion: "AV. VALLE DE SANTIAGO NO. 77, COL. VALLE DE ARAGÓN, NEZAHUALCÓYOTL, ESTADO DE MÉXICO, C.P. 57100",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5551212091",
      nombre: "Valle de Aragón"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX15",
      municipio: "Nezahualcóyotl"
    }];
  idsDict ["t85231"] = [{lat: 19.297187, lng: -98.939536}, 
    {
      direccion: "AV. ALFREDO DEL MAZO MZ. 1232 LT. 07, COL. INDEPENDENCIA, VALLE DE CHALCO SOLIDARIDAD, ESTADO DE MÉXICO, C.P. 56620",
      horario: "Lunes a Viernes: 9:00-18:00 Sábados: 10:00-17:00",
      telefono: "5559715279",
      nombre: "Valle de Chalco"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX24",
      municipio: "Valle de Chalco Solidaridad"
    }];
  idsDict ["t85406"] = [{lat: 17.553429, lng: -99.500565}, 
    {
      direccion: "MIGUEL HIDALGO ESQ. 5 DE MAYO, COL. CENTRO, CHILPANCINGO, GUERRERO, C.P. 39000",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "7474783290",
      nombre: "Chilpancingo"
    },
    {
      idEstado: "GRO",
      estado: "Guerrero"
    },
    {
      idMunicipio: "GRO02",
      municipio: "Chilpancingo de los Bravo"
    }];
  idsDict ["t85084"] = [{lat: 16.86307, lng: -99.903147}, 
    {
      direccion: "AV. CONSTITUYENES S/N, COL. PROGRESO, ACAPULCO, GUERRERO, C.P. 39350",
      horario: "Lunes a Viernes: 9:00-18:00 Sábados: 10:00-17:00",
      telefono: "7444826289",
      nombre: "Constituyentes Acapulco"
    },
    {
      idEstado: "GRO",
      estado: "Guerrero"
    },
    {
      idMunicipio: "GRO01",
      municipio: "Acapulco"
    }];
  idsDict ["t85316"] = [{lat: 18.344131, lng: -99.54062}, 
    {
      direccion: "CALLE REFORMA NO. 5, COL. CENTRO, IGUALA, GUERRERO, C.P. 40000",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "7333332569",
      nombre: "Iguala"
    },
    {
      idEstado: "GRO",
      estado: "Guerrero"
    },
    {
      idMunicipio: "GRO03",
      municipio: "Iguala"
    }];
  idsDict ["t85326"] = [{lat: 16.852876, lng: -99.906071}, 
    {
      direccion: "MINA NO.30, COL. CENTRO, ACAPULCO, GUERRERO, C.P. 39300",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "7444836422",
      nombre: "Mina Acapulco"
    },
    {
      idEstado: "GRO",
      estado: "Guerrero"
    },
    {
      idMunicipio: "GRO01",
      municipio: "Acapulco"
    }];
  idsDict ["t85067"] = [{lat: 16.858243, lng: -99.915037}, 
    {
      direccion: "AV. PIE DE LA CUESTA 74, COL. HOGAR MODERNO, ACAPULCO DE JUÁREZ, GUERRERO, C.P. 39580",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "7444836939",
      nombre: "Pie de la Cuesta"
    },
    {
      idEstado: "GRO",
      estado: "Guerrero"
    },
    {
      idMunicipio: "GRO01",
      municipio: "Acapulco"
    }];
  idsDict ["t85083"] = [{lat: 18.557929, lng: -99.598434}, 
    {
      direccion: "AV. DE LOS PLATEROS NO.190, COL. CENTRO, TAXCO DE ALARCÓN, GUERRERO, C.P. 40200",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "7626270470",
      nombre: "Taxco"
    },
    {
      idEstado: "GRO",
      estado: "Guerrero"
    },
    {
      idMunicipio: "GRO04",
      municipio: "Taxco de Alarcón"
    }];
  idsDict ["t85413"] = [{lat: 18.840486, lng: -98.940933}, 
    {
      direccion: "AV. REFORMA NO.276, COL. MIGUEL HIDALGO, CUAUTLA, MORELOS, C.P. 62748",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "7351141000",
      nombre: "Cuautla"
    },
    {
      idEstado: "MOR",
      estado: "Morelos"
    },
    {
      idMunicipio: "MOR01",
      municipio: "Cuautla"
    }];
  idsDict ["t85441"] = [{lat: 18.813053, lng: -98.951188}, 
    {
      direccion: "JOSE PERDIZ NO.15, COL. CENTRO, CUAUTLA, MORELOS, C.P. 62749",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-18:00",
      telefono: "7356883020",
      nombre: "Cuautla Centro "
    },
    {
      idEstado: "MOR",
      estado: "Morelos"
    },
    {
      idMunicipio: "MOR01",
      municipio: "Cuautla"
    }];
  idsDict ["t85319"] = [{lat: 18.927741, lng: -99.231897}, 
    {
      direccion: "ADOLFO LÓPEZ MATEOS NO. 411, COL. EL VERGEL, CUERNAVACA, MORELOS, C.P. 62400",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "7773101377",
      nombre: "El Vergel"
    },
    {
      idEstado: "MOR",
      estado: "Morelos"
    },
    {
      idMunicipio: "MOR02",
      municipio: "Cuernavaca"
    }];
  idsDict ["t85387"] = [{lat: 18.897625, lng: -99.168926}, 
    {
      direccion: "BLVD. CUAUHNAHUAC NO. 2 ESQ. MIGUEL HIDALGO, COL. TEJALPA CENTRO, JIUTEPEC, MORELOS, C.P. 62570",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "7775169339",
      nombre: "Jiutepec"
    },
    {
      idEstado: "MOR",
      estado: "Morelos"
    },
    {
      idMunicipio: "MOR03",
      municipio: "Jiutepec"
    }];
  idsDict ["t85403"] = [{lat: 18.615097, lng: -99.180385}, 
    {
      direccion: "CALLE CONSTITUCIÓN DEL CINCUENTA Y SIETE NO.406, JOJUTLA, MORELOS, C.P. 62900",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-17:00 Domingos: 10:00-18:00",
      telefono: "7346881000",
      nombre: "Jojutla"
    },
    {
      idEstado: "MOR",
      estado: "Morelos"
    },
    {
      idMunicipio: "MOR04",
      municipio: "Jojutla"
    }];
  idsDict ["t85250"] = [{lat: 18.92387, lng: -99.211881}, 
    {
      direccion: "AV. PLAN DE AYALA NO.809, COL. VICENTE GUERRERO, CUERNAVACA, MORELOS, C.P. 62430",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-17:00",
      telefono: "7773223240",
      nombre: "Plan de Ayala"
    },
    {
      idEstado: "MOR",
      estado: "Morelos"
    },
    {
      idMunicipio: "MOR02",
      municipio: "Cuernavaca"
    }];
  idsDict ["t85449"] = [{lat: 18.844066, lng: -99.224164}, 
    {
      direccion: "AV. EMILIANO ZAPATA NO.40, COL. CENTRO, TEMIXCO, MORELOS, C.P. 62580",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-18:00",
      telefono: "7773254337",
      nombre: "Temixco"
    },
    {
      idEstado: "MOR",
      estado: "Morelos"
    },
    {
      idMunicipio: "MOR05",
      municipio: "Temixco"
    }];
  idsDict ["t85448"] = [{lat: 25.560972, lng: -108.462194}, 
    {
      direccion: "CALLE CORREGIDORA NO.150 SUR MANZANA 057 LOTE 041, COL. CENTRO, GUASAVE, SINALOA, C.P. 81000",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "6877211113",
      nombre: "Guasave"
    },
    {
      idEstado: "SIN",
      estado: "Sinaloa"
    },
    {
      idMunicipio: "SIN02",
      municipio: "Guasave"
    }];
  idsDict ["t85444"] = [{lat: 25.7882884, lng: -108.993513}, 
    {
      direccion: "AV. MIGUEL HIDALGO NO.243 PONIENTE, COL. CENTRO, LOS MOCHIS, SINALOA, C.P. 81200",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "6686887159",
      nombre: "Los Mochis"
    },
    {
      idEstado: "SIN",
      estado: "Sinaloa"
    },
    {
      idMunicipio: "SIN03",
      municipio: "Los Mochis"
    }];
  idsDict ["t85918"] = [{lat: 24.753568, lng: -107.423282}, 
    {
      direccion: "CALZADA LAS TORRES NO.3098 INT 2 ENTRE LAS CALLES CRUZ MEDINA Y ERNESTO DAMMY, COL. NAKAYAMA, CULIACÁN DE ROSALES, CULIACÁN, SINALOA, C.P.80194",
      horario: "Lunes a Viernes: 10:00-20:00 Sábados: 10:00-17:00",
      telefono: "6677108938",
      nombre: "Nakayama"
    },
    {
      idEstado: "SIN",
      estado: "Sinaloa"
    },
    {
      idMunicipio: "SIN01",
      municipio: "Culiacán"
    }];
  idsDict ["t85909"] = [{lat: 24.801388, lng: -107.367188}, 
    {
      direccion: "BLVD. FRANCISCO I. MADERO NO.1966 OTE. ENTRE LAS CALLES ABELARDO MEDINA DÍAZ Y GILBERTO OWEN, COL. GUADALUPE VICTORIA, CULIACÁN, SINALOA, C.P.80240",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "6677158855",
      nombre: "Sanalona"
    },
    {
      idEstado: "SIN",
      estado: "Sinaloa"
    },
    {
      idMunicipio: "SIN01",
      municipio: "Culiacán"
    }];
  idsDict ["t85210"] = [{lat: 17.080176, lng: -96.712404}, 
    {
      direccion: "HEROICO COLEGIO MILITAR NO. 909, COL. NARANJOS ÁLAMOS REFORMA, OAXACA, OAXACA, C.P. 68050 ",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "9515151122",
      nombre: "Colegio Militar"
    },
    {
      idEstado: "OAX",
      estado: "Oaxaca"
    },
    {
      idMunicipio: "OAX01",
      municipio: "Oaxaca"
    }];
  idsDict ["t85366"] = [{lat: 18.0890793, lng: -96.1324674}, 
    {
      direccion: "BLVD. BENITO JUÁREZ NO.901, LOCAL 4, 5 Y 6, FRACC. LOS ÁNGELES, TUXTEPEC, OAXACA, C.P. 68370  ",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 11:00-16:00",
      telefono: "2878778517",
      nombre: "Multiplaza Tuxtepec"
    },
    {
      idEstado: "OAX",
      estado: "Oaxaca"
    },
    {
      idMunicipio: "OAX03",
      municipio: "Tuxtepec"
    }];
  idsDict ["t85177"] = [{lat: 18.081667, lng: -96.124194}, 
    {
      direccion: "INDEPENDENCIA NO.466, COL. CENTRO,  SAN JUAN BAUTISTA TUXTEPEC, OAXACA, C.P. 68300",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "2878779067",
      nombre: "Tuxtepec"
    },
    {
      idEstado: "OAX",
      estado: "Oaxaca"
    },
    {
      idMunicipio: "OAX03",
      municipio: "Tuxtepec"
    }];
  idsDict ["t85143"] = [{lat: 19.005401, lng: -98.237786}, 
    {
      direccion: "PROLONGACIÓN 11 SUR NO. 8316, COL. SAN JOSÉ MAYORAZGO, PUEBLA, PUEBLA, C.P. 72450",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 11:00-16:00",
      telefono: "2222192611",
      nombre: "11 Sur"
    },
    {
      idEstado: "PUE",
      estado: "Puebla"
    },
    {
      idMunicipio: "PUE02",
      municipio: "Puebla"
    }];
  idsDict ["t85016"] = [{lat: 19.036359, lng: -98.212447}, 
    {
      direccion: "31 PONIENTE NO. 914, COL. CHULAVISTA INSURGENTES, PUEBLA, PUEBLA, C.P. 72420",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "2222401560",
      nombre: "31 Poniente"
    },
    {
      idEstado: "PUE",
      estado: "Puebla"
    },
    {
      idMunicipio: "PUE02",
      municipio: "Puebla"
    }];
  idsDict ["t85126"] = [{lat: 19.046791, lng: -98.201259}, 
    {
      direccion: "5 NORTE NO. 7 ESQ. 2 PONIENTE, COL. CENTRO HISTÓRICO, PUEBLA, PUEBLA, C.P. 72000",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "2222426332",
      nombre: "5 Norte"
    },
    {
      idEstado: "PUE",
      estado: "Puebla"
    },
    {
      idMunicipio: "PUE02",
      municipio: "Puebla"
    }];
  idsDict ["t85114"] = [{lat: 18.967105, lng: -98.240972}, 
    {
      direccion: "VANGUARDIA REVOLUCIONARIA / 3 SUR NO.13535, COL. S.N.T.E., PUEBLA, PUEBLA, C.P. 72499",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 11:00-16:00",
      telefono: "2222416317",
      nombre: "Balcones"
    },
    {
      idEstado: "PUE",
      estado: "Puebla"
    },
    {
      idMunicipio: "PUE02",
      municipio: "Puebla"
    }];
  idsDict ["t85113"] = [{lat: 19.055266, lng: -98.1349}, 
    {
      direccion: "BLVD. ATEMPAN NO.15, COL. BOSQUES DE AMALUCAN, PUEBLA, PUEBLA, C.P. 72310",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "2222918850",
      nombre: "Billares"
    },
    {
      idEstado: "PUE",
      estado: "Puebla"
    },
    {
      idMunicipio: "PUE02",
      municipio: "Puebla"
    }];
  idsDict ["t85147"] = [{lat: 19.017314, lng: -98.2141}, 
    {
      direccion: "16 DE SEPTIEMBRE 5747 LOC. 1 COL. EL CERRITO,  PUEBLA, PUEBLA,  C.P. 72440",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "2222643785",
      nombre: "Bugambilias"
    },
    {
      idEstado: "PUE",
      estado: "Puebla"
    },
    {
      idMunicipio: "PUE02",
      municipio: "Puebla"
    }];
  idsDict ["t85164"] = [{lat: 19.073718, lng: -98.2002}, 
    {
      direccion: "BLVD. 5 DE MAYO NORTE NO.2523, COL. CLEOTILDE TORRES, PUEBLA, PUEBLA, C.P. 72050",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00 ",
      telefono: "2222209427",
      nombre: "Capu II"
    },
    {
      idEstado: "PUE",
      estado: "Puebla"
    },
    {
      idMunicipio: "PUE02",
      municipio: "Puebla"
    }];
  idsDict ["t85057"] = [{lat: 19.158298, lng: -98.406282}, 
    {
      direccion: "PLAZA PRINCIPAL NO.209, COL. SAN MARTÍN HUEJOTZINGO, HUEJOTZINGO, PUEBLA, C.P. 74160 ",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "2272760142",
      nombre: "Huejotzingo"
    },
    {
      idEstado: "PUE",
      estado: "Puebla"
    },
    {
      idMunicipio: "PUE01",
      municipio: "Huejotzingo"
    }];
  idsDict ["t85128"] = [{lat: 19.041553, lng: -98.145859}, 
    {
      direccion: "AV. INDEPENDENCIA NO.191 LOC. B, COL. CHAPULTEPEC, PUEBLA, PUEBLA, C.P. 72320",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "2222531431",
      nombre: "Independencia"
    },
    {
      idEstado: "PUE",
      estado: "Puebla"
    },
    {
      idMunicipio: "PUE02",
      municipio: "Puebla"
    }];
  idsDict ["t85119"] = [{lat: 19.084846, lng: -98.179074}, 
    {
      direccion: "CAMINO A TLALTEPANGO NO.10232 LOC. 3, COL. VILLA FRONTERA, PUEBLA, PUEBLA, C.P. 72200",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "2221228366",
      nombre: "Serviplaza"
    },
    {
      idEstado: "PUE",
      estado: "Puebla"
    },
    {
      idMunicipio: "PUE02",
      municipio: "Puebla"
    }];
  idsDict ["t85018"] = [{lat: 19.819094, lng: -97.359733}, 
    {
      direccion: "TEZIUTLÁN AV. JUÁREZ NO.609, COL. CENTRO, TEZIUTLÁN, PUEBLA, C.P. 73800",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "2313125744",
      nombre: "Teziutlán"
    },
    {
      idEstado: "PUE",
      estado: "Puebla"
    },
    {
      idMunicipio: "PUE03",
      municipio: "Teziutlán"
    }];
  idsDict ["t85056"] = [{lat: 19.416053, lng: -98.139298}, 
    {
      direccion: "AV. HIDALGO NO.20, COL. CENTRO, APIZACO, TLAXCALA, C.P. 90300",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 11:00-16:00",
      telefono: "2414179706",
      nombre: "Apizaco"
    },
    {
      idEstado: "TLA",
      estado: "Tlaxcala"
    },
    {
      idMunicipio: "TLA01",
      municipio: "Apizaco"
    }];
  idsDict ["t85310"] = [{lat: 19.312201, lng: -97.922284}, 
    {
      direccion: "AV. ZARAGOZA PTE. NO.102, COL. CENTRO, HUAMANTLA, TLAXCALA, C.P. 90500 ",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 11:00-16:00",
      telefono: "2474722030",
      nombre: "Huamantla"
    },
    {
      idEstado: "TLA",
      estado: "Tlaxcala"
    },
    {
      idMunicipio: "TLA02",
      municipio: "Huamantla"
    }];
  idsDict ["t85053"] = [{lat: 19.323227, lng: -98.232446}, 
    {
      direccion: "GUILLERMO VALLE NO.19, COL. CENTRO, TLAXCALA, TLAXCALA, C.P. 9000",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "2464629348",
      nombre: "Tlaxcala"
    },
    {
      idEstado: "TLA",
      estado: "Tlaxcala"
    },
    {
      idMunicipio: "TLA04",
      municipio: "Tlaxcala"
    }];
  idsDict ["t85400"] = [{lat: 18.767622, lng: -95.761277}, 
    {
      direccion: "CALLE IGNACIO DE LA LLAVE NO.76, COL. CENTRO, MUNICIPIO DE ALVARADO, VERACRUZ, C.P. 95270",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "2976882666",
      nombre: "Alvarado"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER03",
      municipio: "Alvarado"
    }];
  
   idsDict ["t85490 "] = [{lat: 18.806538, lng: -97.177992}, 
    {
      direccion: "AVENIDA MIGUEL HIDALGO NO. 311, COLONIA EL ÁGUILA, CIUDAD MENDOZA, VERACRUZ, 94734.",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "2726881313",
      nombre: "Ciudad Mendoza"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER22",
      municipio: "Veracruz"
    }];
  
  
   idsDict ["t85412 "] = [{lat: 17.909190, lng: -94.090639}, 
    {
      direccion: "CALLE 5 DE MAYO NO102, ESQ. CON 18 DE MARZO, LOTE NO.10-A, MANZANA 194 FRACCIÓN 1, COL. CENTRO, LAS CHOAPAS, VERACRUZ, C.P. 96980.",
      horario: "Lunes a Viernes: 09:00-19:00 h  Sábados: 09:00-15:00 h Domingos: 10:00-15:00 h",
      telefono: "9231060928",
      nombre: "Las Choapas"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER23",
      municipio: "Veracruz"
    }];
  
  
  idsDict ["t85111"] = [{lat: 19.207616, lng: -96.183819}, 
    {
      direccion: "AV. DTR. VÍCTOR SÁNCHEZ TAPIA NO.359 LOCAL 2, COL. ASTILLEROS,  VERACRUZ, VERACRUZ, C.P. 91800",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "2299801852",
      nombre: "Astilleros"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER18",
      municipio: "Veracruz"
    }];
  idsDict ["t85107"] = [{lat: 19.572135, lng: -96.922298}, 
    {
      direccion: "ATENAS VERACRUZANAS N° 121, COL. REVOLUCIÓN, XALAPA, VERACRUZ, C.P. 91100",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "2288436184",
      nombre: "Atenas Veracruzanas"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER19",
      municipio: "Xalapa"
    }];
  idsDict ["t85217"] = [{lat: 19.527878, lng: -96.926275}, 
    {
      direccion: "AV. MANUEL ÁVILA CAMACHO NO. 22, COL. CENTRO, XALAPA, VERACRUZ, C.P. 91000",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "2288179383",
      nombre: "Ávila Camacho"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER19",
      municipio: "Xalapa"
    }];
  idsDict ["t85095"] = [{lat: 19.144743, lng: -96.125989}, 
    {
      direccion: "PASEO EJÉRCITO MEXICANO NO.1764 D, COL. EJIDO 1RO DE MAYO, BOCA DEL RÍO, VERACRUZ, C.P. 94298",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "2291304324",
      nombre: "Boca del Río"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER04",
      municipio: "Boca del Río"
    }];
  idsDict ["t85112"] = [{lat: 19.100805, lng: -96.106586}, 
    {
      direccion: " AV. HIDALGO NO.601 ESQ.MIGUEL ALEMÁN, COL. CENTRO, BOCA DEL RÍO, VERACRUZ, C.P. 94290 ",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "2299863953",
      nombre: "Boca del Río 2"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER04",
      municipio: "Boca del Río"
    }];
  idsDict ["t85096"] = [{lat: 19.175156, lng: -96.126584}, 
    {
      direccion: "AV. SIMÓN BOLÍVAR NO.595, COL. I. ZARAGOZA, VERACRUZ, VERACRUZ, C.P. 91910",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "2299803471",
      nombre: "Bolívar"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER18",
      municipio: "Veracruz"
    }];
  idsDict ["t85041"] = [{lat: 19.370768, lng: -96.37404}, 
    {
      direccion: "EMILIANO ZAPATA NÚMERO 28, COL. CENTRO CARDEL, LA ANTIGUA, CARDEL, VERACRUZ, C.P. 91680",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "2969624446",
      nombre: "Cardel"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER05",
      municipio: "Cardel"
    }];
  idsDict ["t85439"] = [{lat: 19.455451, lng: -96.961512}, 
    {
      direccion: "CALLE MIGUEL LERDO NO.28, COL. CENTRO COATEPEC, COATEPEC, VERACRUZ. C.P. 91500 ",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "2281299351",
      nombre: "Coatepec"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER06",
      municipio: "Coatepec"
    }];
  idsDict ["t85154"] = [{lat: 18.8918, lng: -96.932783}, 
    {
      direccion: "CALLE 9 NO. 723, COL. CENTRO, CÓRDOBA, VERACRUZ, C.P. 94500",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "2717141440",
      nombre: "Córdoba"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER09",
      municipio: "Córdoba"
    }];
  idsDict ["t85363"] = [{lat: 16.720563, lng: -92.637221}, 
    {
      direccion: "ESQUINA AV. 11 Y CALLE 15 NO. 1501, COL. CENTRO, CÓRDOBA, VERACRUZ, C.P. 94500",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-19:00 Domingos: 11:00-16:00",
      telefono: "2717122142",
      nombre: "Córdoba Av. 11"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER09",
      municipio: "Córdoba"
    }];
  idsDict ["t85017"] = [{lat: 18.891236, lng: -96.930121}, 
    {
      direccion: "AV. 2 ENTRE CALLE 13 Y 15, NO.1315, COL. CENTRO, CÓRDOBA, VERACRUZ , C.P. 94500",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "2717127009",
      nombre: "Córdoba Av. 2"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER09",
      municipio: "Córdoba"
    }];
  idsDict ["t85193"] = [{lat: 18.36395, lng: -95.793922}, 
    {
      direccion: "AV. RUÍZ CORTÍNEZ NO.102, COL. CENTRO, COSAMALOAPAN, VERACRUZ, C.P. 95400",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-19:00 Domingos: 10:00-15:00",
      telefono: "2888825965",
      nombre: "Cosamaloapan"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER08",
      municipio: "Cosamaloapan"
    }];
  idsDict ["t85044"] = [{lat: 19.15866, lng: -96.131324}, 
    {
      direccion: "PROLONGACIÓN SALVADOR DÍAZ MIRÓN NO. 4251 (ANTES NO.127), COL. DEL MAESTRO, VERACRUZ, VER., C.P. 91920",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "2299227695",
      nombre: "Díaz Mirón"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER18",
      municipio: "Veracruz"
    }];
  idsDict ["t85094"] = [{lat: 19.196757, lng: -96.132833}, 
    {
      direccion: "GÓMEZ FARÍAS NO.88-A ESQ.VÍCTIMAS 25 JUNIO, COL. CENTRO, VERACRUZ, VERACRUZ, C.P. 91700",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "2299311842",
      nombre: "Gómez Farías"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER18",
      municipio: "Veracruz"
    }];
  idsDict ["t85021"] = [{lat: 19.186299, lng: -96.147371}, 
    {
      direccion: "MIGUEL ÁNGEL DE QUEVEDO NO.4851, COL. CENTRO  VERACRUZ, VERACRUZ, C.P. 91700",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "2291780586",
      nombre: "Juan Soto"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER18",
      municipio: "Veracruz"
    }];
  idsDict ["t85427"] = [{lat: 20.536906, lng: -97.471422}, 
    {
      direccion: "BLVD. LÁZARO CÁRDENAS NO.997, COL. IGNACIO DE LA LLAVE, POZA RICA, VERACRUZ, C.P. 93327",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 11:00-16:00",
      telefono: "7828265779",
      nombre: "Lázaro Cárdenas"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER14",
      municipio: "Poza Rica"
    }];
  idsDict ["t85043"] = [{lat: 20.064456, lng: -97.051886}, 
    {
      direccion: "MELCHOR OCAMPO NO.516, COL. CENTRO, MARTÍNEZ DE LA TORRE,  VERACRUZ, C.P. 93600",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "2323245017",
      nombre: "Martínez de la Torre"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER10",
      municipio: "Martínez de la Torre"
    }];
  idsDict ["t85382"] = [{lat: 20.447619, lng: -97.321429}, 
    {
      direccion: "AQUILES SERDÁN NO.201, COL. CENTRO, PAPANTLA, VERACRUZ, C.P. 93400",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "7848423260",
      nombre: "Papantla"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER12",
      municipio: "Papantla"
    }];
  idsDict ["t85103"] = [{lat: 19.560945, lng: -97.247888}, 
    {
      direccion: "LÁZARO CÁRDENAS NO.8, COL. AZTECA, PEROTE, VERACRUZ, C.P. 91270",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "2828254285",
      nombre: "Perote"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER13",
      municipio: "Perote"
    }];
  idsDict ["t85251"] = [{lat: 19.169063, lng: -96.226248}, 
    {
      direccion: "CALLE ABEDULES NO.80, LOTE 1, MANZANA 2, CD. INDUSTRIAL BRUNO PAGLIAI, VERACRUZ, VERACRUZ, C.P. 91697",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "2299812945",
      nombre: "Plaza Progreso"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER18",
      municipio: "Veracruz"
    }];
  idsDict ["t85019"] = [{lat: 20.529353, lng: -97.461713}, 
    {
      direccion: "12 ORIENTE S/N, COL. OBRERA, POZA RICA, VERACRUZ, C.P.93260",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 11:00-16:00",
      telefono: "7828244597",
      nombre: "Poza Rica"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER14",
      municipio: "Poza Rica"
    }];
  idsDict ["t85322"] = [{lat: 20.549351, lng: -97.450175}, 
    {
      direccion: "BLVD. RUIZ CORTÍNEZ NO.2311, COL. MANUEL ÁVILA CAMACHO, POZA RICA, VERACRUZ, C.P. 93220",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 11:00-16:00",
      telefono: "7828270363",
      nombre: "Poza Rica II"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER14",
      municipio: "Poza Rica"
    }];
  idsDict ["t85236"] = [{lat: 19.215913, lng: -96.17786}, 
    {
      direccion: "CALZ. DR. RAFAEL CUERVO NO.753 LOCAL 2, COL. PLAYA LINDA, VERACRUZ, VERACRUZ, C.P. 91810",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "2299245767",
      nombre: "Rafael Cuervo"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER18",
      municipio: "Veracruz"
    }];
  idsDict ["t85428"] = [{lat: 19.557126, lng: -96.932598}, 
    {
      direccion: "AV. ADOLFO RUIZ CORTÍNEZ NO.3214, COL. UNIDAD MAGISTERIAL, XALAPA, VERACRUZ, C.P. 91010",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "2288159191",
      nombre: "Ruiz Cortínez"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER19",
      municipio: "Xalapa"
    }];
  idsDict ["t85192"] = [{lat: 18.446199, lng: -96.36003}, 
    {
      direccion: "INDEPENDENCIA, NO.511 COL. CENTRO, TIERRA BLANCA, VERACRUZ, C.P. 95100",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 11:00-15:00",
      telefono: "2747435895",
      nombre: "Tierra Blanca"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER16",
      municipio: "Tierra Blanca"
    }];
  idsDict ["t85306"] = [{lat: 20.953002, lng: -97.400642}, 
    {
      direccion: "GENARO RODRÍGUEZ NO.39, COL. CENTRO, TUXPAN, VERACRUZ, C.P. 92800 ",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 11:00-16:00",
      telefono: "7838354615",
      nombre: "Tuxpan"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER17",
      municipio: "Tuxpan"
    }];
  idsDict ["t85098"] = [{lat: 19.537153, lng: -96.923376}, 
    {
      direccion: "AV. 20 DE NOVIEMBRE OTE. NO.1, COL. CENTRO, XALAPA, VERACRUZ, C.P. 91000",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "2288903396",
      nombre: "Xalapa 20 Nov."
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER19",
      municipio: "Xalapa"
    }];
  idsDict ["t85081"] = [{lat: 19.53631, lng: -96.907395}, 
    {
      direccion: "AV. ANTONIO CHEDRAUI CARAM NO.218, COL. ENCINAL,  XALAPA, VERACRUZ, C.P. 91180",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "2288905082",
      nombre: "Xalapa Cristal"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER19",
      municipio: "Xalapa"
    }];
  idsDict ["t85405"] = [{lat: 17.509237, lng: -91.981853}, 
    {
      direccion: "AV. BENITO JUÁREZ NO.71, COL. CENTRO, MUNICIPIO DE PALENQUE, PALENQUE, CHIAPAS, C.P. 29960",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00 Domingos: 09:00-15:00",
      telefono: "9166880330",
      nombre: "Palenque"
    },
    {
      idEstado: "CHP",
      estado: "Chiapas"
    },
    {
      idMunicipio: "CHP03",
      municipio: "Palenque"
    }];
  idsDict ["t85367"] = [{lat: 26.927188, lng: -101.452286}, 
    {
      direccion: "AV. FRANCISCO I. MADERO S/N, COL. FRONTERA CENTRO, FRONTERA, COAHUILA, C.P. 25600",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "8666346554",
      nombre: "Frontera"
    },
    {
      idEstado: "COA",
      estado: "Coahuila"
    },
    {
      idMunicipio: "COA01",
      municipio: "Frontera"
    }];
  idsDict ["t85357"] = [{lat: 25.515589, lng: -103.41462}, 
    {
      direccion: "CALZ. DIAGONAL DE LAS FUENTES NO.1, LOTE 1 MANZANA H SECTOR 28-A LOCAL A, COL. LA FUENTE, TORREÓN, COAHUILA, C.P. 27290  ",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "8717912893",
      nombre: "La Rosita"
    },
    {
      idEstado: "COA",
      estado: "Coahuila"
    },
    {
      idMunicipio: "COA04",
      municipio: "Torreón"
    }];
  idsDict ["t85365"] = [{lat: 25.547676, lng: -100.941627}, 
    {
      direccion: "BLVD. PLAN DE GUADALUPE MZ. 3 LT. 2 NO. 1371, COL. MOLINOS DEL REY, RAMOS ARIZPE, COAHUILA, C.P. 25093",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "8444884794",
      nombre: "Ramos Arizpe"
    },
    {
      idEstado: "COA",
      estado: "Coahuila"
    },
    {
      idMunicipio: "COA02",
      municipio: "Ramos Arizpe"
    }];
  idsDict ["t85351"] = [{lat: 25.402609, lng: -100.999901}, 
    {
      direccion: "BLVRD. ANTONIO CÁRDENAS NO.1740, COL. LOMAS DE CHAPULTEPEC, SALTILLO, COAHUILA, C.P. 25048",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "8444175187",
      nombre: "Saltillo Cárdenas"
    },
    {
      idEstado: "COA",
      estado: "Coahuila"
    },
    {
      idMunicipio: "COA03",
      municipio: "Saltillo"
    }];
  idsDict ["t85364"] = [{lat: 25.417168, lng: -100.986482}, 
    {
      direccion: "AV. FRANCISCO DE URDIÑOLA NO.348, LOTE 18 Y FRACCIÓN DE LT-19, MZ-1, FRACC. URDIÑOLA, SALTILLO, COAHUILA, C.P. 25020",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "8444102943",
      nombre: "Saltillo Urdiñola"
    },
    {
      idEstado: "COA",
      estado: "Coahuila"
    },
    {
      idMunicipio: "COA03",
      municipio: "Saltillo"
    }];
  idsDict ["t85404"] = [{lat: 21.143657, lng: -98.415151}, 
    {
      direccion: "CARRETERA NACIONAL MEXICO-TAMPICO NO.38, COL. LOS CANTORES, HUEJUTLA, HIDALGO, CP. 43000",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00 Domingos: 11:00-16:00",
      telefono: "7896880890",
      nombre: "Huejutla"
    },
    {
      idEstado: "HID",
      estado: "Hidalgo"
    },
    {
      idMunicipio: "HID03",
      municipio: "Huejutla"
    }];
  idsDict ["t85376"] = [{lat: 25.778506, lng: -100.187072}, 
    {
      direccion: "GRAL. IGNACIO ZARAGOZA NO.403, COL. APODACA CENTRO, NUEVO LEÓN, C.P. 66600",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "8183862124",
      nombre: "Apodaca"
    },
    {
      idEstado: "NLE",
      estado: "Nuevo León"
    },
    {
      idMunicipio: "NLE01",
      municipio: "Apodaca"
    }];
  idsDict ["t85391"] = [{lat: 25.666731, lng: -100.281846}, 
    {
      direccion: "CHAPULTEPEC OTE. NO.1808, COL. BUENOS AIRES, MONTERREY, NUEVO LEÓN, C.P. 64800",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "8183583826",
      nombre: "Buenos Aires"
    },
    {
      idEstado: "NLE",
      estado: "Nuevo León"
    },
    {
      idMunicipio: "NLE03",
      municipio: "Monterrey"
    }];
  idsDict ["t85246"] = [{lat: 25.685392, lng: -100.312527}, 
    {
      direccion: "AV. COLÓN NO.168, COL. CENTRO, MONTERREY, NUEVO LEÓN, C.P. 64100",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "8183751937",
      nombre: "Colón"
    },
    {
      idEstado: "NLE",
      estado: "Nuevo León"
    },
    {
      idMunicipio: "NLE03",
      municipio: "Monterrey"
    }];
  idsDict ["t85075"] = [{lat: 25.653994, lng: -100.208565}, 
    {
      direccion: "ELOY CAVAZOS NO.5310, COL. VILLA OLÍMPICA, GUADALUPE, NUEVO LEÓN, C.P. 67180",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "8183616225",
      nombre: "Eloy Cavazos"
    },
    {
      idEstado: "NLE",
      estado: "Nuevo León"
    },
    {
      idMunicipio: "NLE02",
      municipio: "Guadalupe"
    }];
  idsDict ["t85079"] = [{lat: 25.723993, lng: -100.192728}, 
    {
      direccion: "ACAPULCO NO.129, COL. JOSEFA ZOZAYA, GUADALUPE, NUEVO LEÓN, C.P. 67110",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "8183415448",
      nombre: "Monterrey Acapulco"
    },
    {
      idEstado: "NLE",
      estado: "Nuevo León"
    },
    {
      idMunicipio: "NLE02",
      municipio: "Guadalupe"
    }];
  idsDict ["t85080"] = [{lat: 25.758856, lng: -100.170359}, 
    {
      direccion: "RÍO PILÓN NO.906, COL. PUEBLO NUEVO, APODACA, NUEVO LEÓN, C.P. 66646",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "8183864165",
      nombre: "Pueblo Nuevo"
    },
    {
      idEstado: "NLE",
      estado: "Nuevo León"
    },
    {
      idMunicipio: "NLE01",
      municipio: "Apodaca"
    }];
  idsDict ["t85402"] = [{lat: 25.77065, lng: -100.264588}, 
    {
      direccion: "AV. SENDERO NORTE NO.445, COL. LOS JACALES, APODACA, NUEVO LEÓN, C.P. 66635",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "8183120304",
      nombre: "Sendero Norte"
    },
    {
      idEstado: "NLE",
      estado: "Nuevo León"
    },
    {
      idMunicipio: "NLE01",
      municipio: "Apodaca"
    }];
  idsDict ["t85249"] = [{lat: 16.18046, lng: -95.194735}, 
    {
      direccion: "AV. MANUEL ÁVILA CAMACHO NO. 203, COL. CENTRO, SALINA CRUZ, OAXACA, C.P. 70600",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00",
      telefono: "9717145017",
      nombre: "Salina Cruz"
    },
    {
      idEstado: "OAX",
      estado: "Oaxaca"
    },
    {
      idMunicipio: "OAX02",
      municipio: "Salina Cruz"
    }];
  idsDict ["t85024"] = [{lat: 17.989735, lng: -93.379173}, 
    {
      direccion: "ABRAHAM BANDALA NO.167, COL. CENTRO, CÁRDENAS, TABASCO, C.P. 86500",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 09:00-15:00",
      telefono: "9373724457",
      nombre: "Cárdenas "
    },
    {
      idEstado: "TAB",
      estado: "Tabasco"
    },
    {
      idMunicipio: "TAB03",
      municipio: "Cárdenas"
    }];
  idsDict ["t85179"] = [{lat: 18.261972, lng: -93.223178}, 
    {
      direccion: "BENITO JUAREZ NO.610 , COL. CENTRO, COMALCALCO, TABASCO, C.P. 86300",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 09:00-15:00",
      telefono: "9333348758",
      nombre: "Comalcalco"
    },
    {
      idEstado: "TAB",
      estado: "Tabasco"
    },
    {
      idMunicipio: "TAB01",
      municipio: "Comalcalco"
    }];
  idsDict ["t85011"] = [{lat: 17.996541, lng: -92.913414}, 
    {
      direccion: "AV. CONSTITUCIÓN NO.1148, COL. CENTRO, VILLAHERMOSA, TABASCO, C.P. 86000",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 09:00-15:00",
      telefono: "9933143806",
      nombre: "Constitución"
    },
    {
      idEstado: "TAB",
      estado: "Tabasco"
    },
    {
      idMunicipio: "TAB07",
      municipio: "Villahermosa"
    }];
  idsDict ["t85434"] = [{lat: 18.068463, lng: -93.175076}, 
    {
      direccion: "ANILLO PERIFÉRICO NO.106, COL. CENTRO, CUNDUACÁN, TABASCO, C.P. 86690",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00",
      telefono: "9143361516",
      nombre: "Cunduacán"
    },
    {
      idEstado: "TAB",
      estado: "Tabasco"
    },
    {
      idMunicipio: "TAB02",
      municipio: "Cunduacán"
    }];
  idsDict ["t85068"] = [{lat: 17.977657, lng: -92.93033}, 
    {
      direccion: "PASEO USUMACINTA NO.110, COL. PRIMERO DE MAYO, VILLAHERMOSA, TABASCO, C.P. 86190",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 09:00-15:00",
      telefono: "9933154178",
      nombre: "Fuente Maya"
    },
    {
      idEstado: "TAB",
      estado: "Tabasco"
    },
    {
      idMunicipio: "TAB07",
      municipio: "Villahermosa"
    }];
  idsDict ["t85225"] = [{lat: 17.833622, lng: -93.392248}, 
    {
      direccion: "BENITO JUÁREZ GARCÍA NO.162 ESQ. AV. RAFAEL MARTÍNEZ ESCOBAR Y REFORMA, COL. CENTRO, HUIMANGUILLO, TABASCO, C.P. 86400",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00",
      telefono: "9173750825",
      nombre: "Huimanguillo"
    },
    {
      idEstado: "TAB",
      estado: "Tabasco"
    },
    {
      idMunicipio: "TAB04",
      municipio: "Huimanguillo"
    }];
  idsDict ["t85137"] = [{lat: 17.996986, lng: -92.920925}, 
    {
      direccion: "AV. FRANCISCO JAVIER MINA NO.132, COL. CENTRO, VILLAHERMOSA, TABASCO,C.P. 86000",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00",
      telefono: "9933126218",
      nombre: "Javier Mina"
    },
    {
      idEstado: "TAB",
      estado: "Tabasco"
    },
    {
      idMunicipio: "TAB07",
      municipio: "Villahermosa"
    }];
  idsDict ["t85432"] = [{lat: 17.756182, lng: -92.594238}, 
    {
      direccion: "CALLE PLAZA DE LA CONSTITUCIÓN NO.107, COL. CENTRO, MACUSPANA, TABASCO, C.P. 86700",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 09:00-15:00",
      telefono: "9363624896",
      nombre: "Macuspana"
    },
    {
      idEstado: "TAB",
      estado: "Tabasco"
    },
    {
      idMunicipio: "TAB05",
      municipio: "Macuspana"
    }];
  idsDict ["t85031"] = [{lat: 18.39558, lng: -93.215123}, 
    {
      direccion: "GREGORIO MÉNDEZ MAGAÑA NO. 108, COL. CENTRO, PARAÍSO, TABASCO, C.P. 86600",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 10:00-15:00",
      telefono: "9333333378",
      nombre: "Paraíso"
    },
    {
      idEstado: "TAB",
      estado: "Tabasco"
    },
    {
      idMunicipio: "TAB06",
      municipio: "Paraíso"
    }];
  idsDict ["t85421"] = [{lat: 17.97216, lng: -92.95648}, 
    {
      direccion: "AV. GREGORIO MÉNDEZ NO.3112, COL. TAMULTÉ DE LAS BARRANCAS, VILLAHERMOSA, TABASCO, C.P. 86150",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00",
      telefono: "9933514708",
      nombre: "Tamulté"
    },
    {
      idEstado: "TAB",
      estado: "Tabasco"
    },
    {
      idMunicipio: "TAB07",
      municipio: "Villahermosa"
    }];
  idsDict ["t85431"] = [{lat: 18.014769, lng: -92.91633}, 
    {
      direccion: "AV. UNIVERSIDAD NO.329, COL. JOSE MARÍA PINO SUÁREZ, VILLAHERMOSA, TABASCO, C.P. 86029",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00",
      telefono: "9931421337",
      nombre: "Villahermosa Universidad"
    },
    {
      idEstado: "TAB",
      estado: "Tabasco"
    },
    {
      idMunicipio: "TAB07",
      municipio: "Villahermosa"
    }];
  idsDict ["t85445"] = [{lat: 22.246381, lng: -97.836173}, 
    {
      direccion: "EMILIO CARRANZA NO.201 ESQUINA CALLE 13 DE ENERO LOTE 5 MZA A-1, ZONA CENTRO, CD. MADERO, TAMAULIPAS, C.P. 89400",
      horario: "Lunes a Viernes: 10:00-20:00 Sábados: 10:00-17:00 Domingos: 11:00-16:00",
      telefono: "8331260560",
      nombre: "Ciudad Madero"
    },
    {
      idEstado: "TAM",
      estado: "Tamaulipas"
    },
    {
      idMunicipio: "TAM01",
      municipio: "Ciudad Madero"
    }];
  idsDict ["t85447"] = [{lat: 23.730444, lng: -99.144389}, 
    {
      direccion: "CALLE JUAN B. TIJERINA 8 NO.147 ESQUINA JUÁREZ, ZONA CENTRO, CIUDAD VICTORIA, TAMAULIPAS, C.P. 8700",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00 Domingos: 11:00-16:00",
      telefono: "8343127520",
      nombre: "Ciudad Victoria"
    },
    {
      idEstado: "TAM",
      estado: "Tamaulipas"
    },
    {
      idMunicipio: "TAM02",
      municipio: "Ciudad Victoria"
    }];
  idsDict ["t85438"] = [{lat: 22.317905, lng: -97.878546}, 
    {
      direccion: "AV. HIDALGO LOTE 6 MANZANA 16 ESQ. AV DE LAS TORRES, COL. NIÑOS HÉROES, TAMPICO, TAMAULIPAS, C.P. 89359",
      horario: "Lunes a Viernes: 10:00-20:00 Sábados: 10:00-17:00 Domingos: 11:00-16:00",
      telefono: "8331259488",
      nombre: "Las Torres Norte"
    },
    {
      idEstado: "TAM",
      estado: "Tamaulipas"
    },
    {
      idMunicipio: "TAM06",
      municipio: "Tampico"
    }];
  idsDict ["t85001"] = [{lat: 25.856541, lng: -97.504789}, 
    {
      direccion: "PZA. SAN PATRICIO SEXTA 1503/L13 ESQ.MARINA NACIONAL, FRACC. MODERNO, MATAMOROS, TAMAULIPAS, C.P 87350",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "(01868) 8194733",
      nombre: "Matamoros"
    },
    {
      idEstado: "TAM",
      estado: "Tamaulipas"
    },
    {
      idMunicipio: "TAM03",
      municipio: "Matamoros"
    }];
  idsDict ["t85004"] = [{lat: 25.881625, lng: -97.504684}, 
    {
      direccion: "C. SEXTA NO.1300 ENTRE ABASOLO Y MATAMOROS, COL. CENTRO, MATAMOROS, TAMAULIPAS, C.P. 87300",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "8681490896",
      nombre: "Matamoros 2"
    },
    {
      idEstado: "TAM",
      estado: "Tamaulipas"
    },
    {
      idMunicipio: "TAM03",
      municipio: "Matamoros"
    }];
  idsDict ["t85116"] = [{lat: 25.878791, lng: -97.522438}, 
    {
      direccion: "AV. PROL. GONZÁLEZ NO.2035 ESQ. LEYES DE REFORMA, COL. PARQUE INDUSTRIAL,  MATAMOROS, TAMAULIPAS, C.P. 87479",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos 11:00-16:00",
      telefono: "8688167773",
      nombre: "Matamoros 3"
    },
    {
      idEstado: "TAM",
      estado: "Tamaulipas"
    },
    {
      idMunicipio: "TAM03",
      municipio: "Matamoros"
    }];
  idsDict ["t85002"] = [{lat: 26.088454, lng: -98.279593}, 
    {
      direccion: "BLVD.COLÓN 380-B ENTRE HIDALGO Y PORFIRIO DÍAZ, COL. CENTRO, REYNOSA, TAMAULIPAS C.P. 88500",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos 11:00-16:00",
      telefono: "8999228646",
      nombre: "Reynosa"
    },
    {
      idEstado: "TAM",
      estado: "Tamaulipas"
    },
    {
      idMunicipio: "TAM04",
      municipio: "Reynosa"
    }];
  idsDict ["t85003"] = [{lat: 25.987348, lng: -98.099924}, 
    {
      direccion: "FRANCISCO I. MADERO NO.424, FRACC. RÍO BRAVO, RÍO BRAVO, TAMAULIPAS, C.P. 88900",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos 11:00-16:00",
      telefono: "8998533452",
      nombre: "Río Bravo"
    },
    {
      idEstado: "TAM",
      estado: "Tamaulipas"
    },
    {
      idMunicipio: "TAM05",
      municipio: "Río Bravo"
    }];
  idsDict ["t85006"] = [{lat: 25.987193, lng: -98.11023}, 
    {
      direccion: "AV. FCO. MADERO NO.1157, FRACC. RÍO BRAVO, RÍO BRAVO, TAMAULIPAS, C.P 88900",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "8998533837",
      nombre: "Río Bravo 2"
    },
    {
      idEstado: "TAM",
      estado: "Tamaulipas"
    },
    {
      idMunicipio: "TAM05",
      municipio: "Río Bravo"
    }];
  idsDict ["t85437"] = [{lat: 22.215397, lng: -97.855941}, 
    {
      direccion: "EMILIO CARRANZA NO.301 Y 302, COL. CENTRO, TAMPICO, TAMAULIPAS, C.P. 89000",
      horario: "Lunes a Viernes: 10:00-20:00 Sábados: 10:00-17:00 Domingos: 11:00-16:00",
      telefono: "8331900319",
      nombre: "Tampico Centro"
    },
    {
      idEstado: "TAM",
      estado: "Tamaulipas"
    },
    {
      idMunicipio: "TAM06",
      municipio: "Tampico"
    }];
  idsDict ["t85433"] = [{lat: 17.952421, lng: -94.917082}, 
    {
      direccion: "CALLE JUAN DE LA LUZ ENRÍQUEZ NO.501 ESQUINA CALLEJÓN JAZMÍN, COL. LA PALMA, ACAYUCÁN, VERACRUZ, C.P. 96056",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 09:00-15:00",
      telefono: "9242456465",
      nombre: "Acayucan"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER01",
      municipio: "Acayucan"
    }];
  idsDict ["t85408"] = [{lat: 18.14109, lng: -94.141927}, 
    {
      direccion: "AV. FRANCISCO I. MADERO, NO.443, LOTE 48, FRACCIÓN XX, COLONIA CENTRO, AGUA DULCE, VERACRUZ, C.P. 96600",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 10:00-15:00",
      telefono: "9231060455",
      nombre: "Agua Dulce"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER02",
      municipio: "Agua Dulce"
    }];
  idsDict ["t85136"] = [{lat: 18.146071, lng: -94.413079}, 
    {
      direccion: "AV. HIDALGO NO.204, COL. CENTRO,  COATZACOALCOS, VERACRUZ, C.P. 96400",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 10:00-15:00",
      telefono: "9212125104",
      nombre: "Coatza. Independencia"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER07",
      municipio: "Coatzacoalcos"
    }];
  idsDict ["t85025"] = [{lat: 18.14271, lng: -94.431071}, 
    {
      direccion: "MIGUEL HIDALGO NO.1223, COL. CENTRO, COATZACOALCOS, VERACRUZ, C.P. 96400",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 10:00-15:00",
      telefono: "9212141193",
      nombre: "Coatzacoalcos III"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER07",
      municipio: "Coatzacoalcos"
    }];
  idsDict ["t85424"] = [{lat: 18.123492, lng: -94.456786}, 
    {
      direccion: "BLVD. JUAN OSORIO LÓPEZ NO.409, COL. FRANCISCO VILLA, COATZACOALCOS, VERACRUZ, C.P. 96566",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 10:00-15:00",
      telefono: "9212157166",
      nombre: "Francisco Villa"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER07",
      municipio: "Coatzacoalcos"
    }];
  idsDict ["t85419"] = [{lat: 17.98488, lng: -94.544558}, 
    {
      direccion: "AV. MIGUEL HIDALGO NO.99, COL. CENTRO, MINATITLÁN, VERACRUZ, C.P. 96700",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 10:00-15:00",
      telefono: "9222241389",
      nombre: "Minatitlán Centro"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER11",
      municipio: "Minatitlán"
    }];
  idsDict ["t85180"] = [{lat: 17.993141, lng: -94.57651}, 
    {
      direccion: "KM 264 DE LA CARRETERA TRANSÍSTMICA, LT. 18, MZA. 10, COL. INSURGENTES SUR,  MINATITLÁN, VERACRUZ, C.P. 96710 ",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 10:00-15:00",
      telefono: "9222417413",
      nombre: "Minatitlán II"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER11",
      municipio: "Minatitlán"
    }];
  idsDict ["t85061"] = [{lat: 18.447162, lng: -95.213461}, 
    {
      direccion: "FRANCISCO I. MADERO NO. 21, COL. CENTRO, SAN ANDRÉS TUXTLA, VERACRUZ, C.P. 95700",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 10:00-15:00",
      telefono: "2949426398",
      nombre: "San Andrés Tuxtla"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER15",
      municipio: "San Andrés Tuxtla"
    }];
  idsDict ["t85130"] = [{lat: 18.141474, lng: -94.473597}, 
    {
      direccion: "AV. UNIVERSIDAD VERACRUZANA NO.2401, COL. RANCHO ALEGRE II, COATZACOALCOS, VERACRUZ, C.P. 96558",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 10:00-15:00",
      telefono: "9212109731",
      nombre: "Univ. Veracruzana"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER07",
      municipio: "Coatzacoalcos"
    }];
  idsDict ["t85129"] = [{lat: 21.866317, lng: -102.298634}, 
    {
      direccion: "AV. CIRCUNVALACIÓN SUR, NO.409 Y 411, FRACC. LAS AMÉRICAS, AGUASCALIENTES, AGUASCALIENTES, C.P.20230",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "4499789750",
      nombre: "Convención"
    },
    {
      idEstado: "AGU",
      estado: "Aguascalientes"
    },
    {
      idMunicipio: "AGU01",
      municipio: "Aguascalientes"
    }];
  idsDict ["t85131"] = [{lat: 21.882174, lng: -102.294691}, 
    {
      direccion: "MORELOS NO.213 ESQ. HOSPITALIDAD, COL. CENTRO, AGUASCALIENTES, AGUASCALIENTES, C.P. 20000",
      horario: "Lunes a Viernes: 09:00-17:00 Sábados: 09:00-17:00 Domingos: 10:00-15:00",
      telefono: "4499941302",
      nombre: "Hospitalidad"
    },
    {
      idEstado: "AGU",
      estado: "Aguascalientes"
    },
    {
      idMunicipio: "AGU01",
      municipio: "Aguascalientes"
    }];
  idsDict ["t85140"] = [{lat: 21.894299, lng: -102.311459}, 
    {
      direccion: "AV. CONVENCION NO.2005, COL. MIRAVALLE,  AGUASCALIENTES, AGUASCALIENTES, C.P. 20040",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-17:00",
      telefono: "4499966952",
      nombre: "San Marcos"
    },
    {
      idEstado: "AGU",
      estado: "Aguascalientes"
    },
    {
      idMunicipio: "AGU01",
      municipio: "Aguascalientes"
    }];
  idsDict ["t85132"] = [{lat: 21.88703, lng: -102.250262}, 
    {
      direccion: "AV. SIGLO XXI NO.5202 LOC. 2, FRACC. HACIENDAS DE AGUASCALIENTES, AGUASCALIENTES, AGUASCALIENTES, C.P. 20196",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-17:00 Domingos: 10:00-15:00",
      telefono: "4499171011",
      nombre: "Siglo XXI"
    },
    {
      idEstado: "AGU",
      estado: "Aguascalientes"
    },
    {
      idMunicipio: "AGU01",
      municipio: "Aguascalientes"
    }];
  idsDict ["t85215"] = [{lat: 20.032276, lng: -100.723109}, 
    {
      direccion: "ALDAMA NO.31, COLONIA CENTRO, ACÁMBARO, GUANAJUATO, C.P. 38600",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "4171727462",
      nombre: "Acámbaro"
    },
    {
      idEstado: "GUA",
      estado: "Guanajuato"
    },
    {
      idMunicipio: "GUA01",
      municipio: "Acámbaro"
    }];
  idsDict ["t85124"] = [{lat: 21.10235, lng: -101.613796}, 
    {
      direccion: "AV. OLÍMPICA NO.1501-2, COL. PRADERAS DE AGUA AZUL, LEÓN, GUANAJUATO, C.P. 37290",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "4777410356",
      nombre: "Agua Azul"
    },
    {
      idEstado: "GUA",
      estado: "Guanajuato"
    },
    {
      idMunicipio: "GUA06",
      municipio: "León"
    }];
  idsDict ["t85174"] = [{lat: 21.082, lng: -101.629126}, 
    {
      direccion: "BLVD. DELTA NO. 1019, FRACCIONAMIENTO VALLE DELTA, LEÓN, GUANAJUATO, C.P. 37530",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "4771946269",
      nombre: "Delta"
    },
    {
      idEstado: "GUA",
      estado: "Guanajuato"
    },
    {
      idMunicipio: "GUA06",
      municipio: "León"
    }];
  idsDict ["t85087"] = [{lat: 21.12268, lng: -101.67921}, 
    {
      direccion: "PEDRO MORENO NO.212 ESQ. DONATO GUERRA, COL. CENTRO, LEÓN, GUANAJUATO, C.P. 37000",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "4777146531",
      nombre: "Donato Guerra"
    },
    {
      idEstado: "GUA",
      estado: "Guanajuato"
    },
    {
      idMunicipio: "GUA06",
      municipio: "León"
    }];
  idsDict ["t85117"] = [{lat: 21.121945, lng: -101.73007}, 
    {
      direccion: "BLVD. MARIANO ESCOBEDO NO.5514, COL. LAS HILAMAS, LEÓN, GUANAJUATO, C.P. 37407",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "4771007518",
      nombre: "Hilamas"
    },
    {
      idEstado: "GUA",
      estado: "Guanajuato"
    },
    {
      idMunicipio: "GUA06",
      municipio: "León"
    }];
  idsDict ["t85088"] = [{lat: 21.116851, lng: -101.706833}, 
    {
      direccion: "BLVD. MARIANO ESCOBEDO PTE. NO.3301, COL. ROBERT KENNEDY, LEÓN, GUANAJUATO, C.P. 37410",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "4777778030",
      nombre: "León Kennedy"
    },
    {
      idEstado: "GUA",
      estado: "Guanajuato"
    },
    {
      idMunicipio: "GUA06",
      municipio: "León"
    }];
  idsDict ["t85160"] = [{lat: 20.135379, lng: -101.187858}, 
    {
      direccion: "GONZÁLEZ ORTEGA NO.2 ESQ. CALLE H. COLEGIO MILITAR, COL. CENTRO, MOROLEÓN, GUANAJUATO, C.P. 38800",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "4454586562",
      nombre: "Moroleón"
    },
    {
      idEstado: "GUA",
      estado: "Guanajuato"
    },
    {
      idMunicipio: "GUA07",
      municipio: "Moroleón"
    }];
  idsDict ["t85115"] = [{lat: 21.133271, lng: -101.65967}, 
    {
      direccion: "BLVD. HILARIO MEDINA NO. 2201 ESQ. PORTO ALEGRE, COL. LA CARMONA, LEÓN, GUANAJUATO, C.P. 37250",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "4771956493",
      nombre: "Obelisco"
    },
    {
      idEstado: "GUA",
      estado: "Guanajuato"
    },
    {
      idMunicipio: "GUA06",
      municipio: "León"
    }];
  idsDict ["t85456"] = [{lat: 20.345194, lng: -102.019361}, 
    {
      direccion: "AV. PADRE HIDALGO, NO. 229, COL. CENTRO, PÉNJAMO, GUANAJUATO. C.P. 36910",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00",
      telefono: "3525241007",
      nombre: "Padre Hidalgo"
    },
    {
      idEstado: "GUA",
      estado: "Guanajuato"
    },
    {
      idMunicipio: "GUA12",
      municipio: "Pénjamo"
    }];
  idsDict ["t85452"] = [{lat: 20.431043, lng: -101.722253}, 
    {
      direccion: "CALLE ALDAMA NO.3 A, COL. CENTRO, PÉNJAMO, GUANAJUATO, C.P. 36900",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00",
      telefono: "4696927383",
      nombre: "Pénjamo"
    },
    {
      idEstado: "GUA",
      estado: "Guanajuato"
    },
    {
      idMunicipio: "GUA12",
      municipio: "Pénjamo"
    }];
  idsDict ["t85127"] = [{lat: 21.132516, lng: -101.692998}, 
    {
      direccion: "VALVERDE Y TÉLLEZ N° 515, COL. INDUSTRIAL, LEÓN, GUANAJUATO, C.P. 37340",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "4777177919",
      nombre: "Valverde"
    },
    {
      idEstado: "GUA",
      estado: "Guanajuato"
    },
    {
      idMunicipio: "GUA06",
      municipio: "León"
    }];
  idsDict ["t85380"] = [{lat: 20.628712, lng: -103.369003}, 
    {
      direccion: "AV. 8 DE JULIO NO.3221, LT-32, MZ -59, FRACC. LOMAS DE POLANCO, GUADALAJARA, JALISCO, C.P. 44960",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "3336635824",
      nombre: "8 de Julio"
    },
    {
      idEstado: "JAL",
      estado: "Jalisco"
    },
    {
      idMunicipio: "JAL01",
      municipio: "Guadalajara"
    }];
  idsDict ["t85184"] = [{lat: 20.682399, lng: -103.347883}, 
    {
      direccion: "AV. FRAY ANTONIO ALCALDE NO.379, COL. CENTRO, SECTOR HIDALGO, GUADALAJARA, JALISCO, C.P. 44100",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "3336582270",
      nombre: "Alcalde"
    },
    {
      idEstado: "JAL",
      estado: "Jalisco"
    },
    {
      idMunicipio: "JAL01",
      municipio: "Guadalajara"
    }];
  idsDict ["t85138"] = [{lat: 20.649102, lng: -103.386998}, 
    {
      direccion: "AV. PASE DE LA ARBOLEDA NO.2478, COL. BOSQUES DE LA VICTORIA, GUADALAJARA, JALISCO, C.P. 44540",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "3336715318",
      nombre: "Arboledas"
    },
    {
      idEstado: "JAL",
      estado: "Jalisco"
    },
    {
      idMunicipio: "JAL01",
      municipio: "Guadalajara"
    }];
  idsDict ["t85186"] = [{lat: 20.673009, lng: -103.342791}, 
    {
      direccion: "CALZ. INDEPENDENCIA SUR NO.59, COL. CENTRO, SECTOR REFORMA, GUADALAJARA, JALISCO, C.P. 44100",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "3336170401",
      nombre: "Calzada Independencia"
    },
    {
      idEstado: "JAL",
      estado: "Jalisco"
    },
    {
      idMunicipio: "JAL01",
      municipio: "Guadalajara"
    }];
  idsDict ["t85123"] = [{lat: 20.714893, lng: -103.354262}, 
    {
      direccion: "AV. FEDERALISMO NTE. NO.2380 A, COL. JARDINES DE ATEMAJAC,  ZONA HUENTITÁN, GUADALAJARA, JALISCO, C.P. 44227",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-15:00",
      telefono: "3338242340",
      nombre: "Federalismo"
    },
    {
      idEstado: "JAL",
      estado: "Jalisco"
    },
    {
      idMunicipio: "JAL01",
      municipio: "Guadalajara"
    }];
  idsDict ["t85420"] = [{lat: 20.712551, lng: -103.322075}, 
    {
      direccion: "CALZADA INDEPENDENCIA S/N LOCAL 10 Y 11 ESQ. CALLE LEGALIDAD, COL. LOMAS DE INDEPENDENCIA, GUADALAJARA, JALISCO, C.P. 44240",
      horario: "Lunes a Viernes: 10:00-20:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "3336033295",
      nombre: "Flores Magón"
    },
    {
      idEstado: "JAL",
      estado: "Jalisco"
    },
    {
      idMunicipio: "JAL01",
      municipio: "Guadalajara"
    }];
  idsDict ["t85165"] = [{lat: 20.727035, lng: -103.368575}, 
    {
      direccion: " MANUEL M. DIEGUEZ NO.385, COL. CONSTITUCIÓN, SECTOR HIDALGO, ZAPOPAN, JALISCO, C.P. 45180",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "3333666850",
      nombre: "La Bola"
    },
    {
      idEstado: "JAL",
      estado: "Jalisco"
    },
    {
      idMunicipio: "JAL06",
      municipio: "Zapopan"
    }];
  idsDict ["t85158"] = [{lat: 21.358039, lng: -101.930211}, 
    {
      direccion: "5 DE MAYO NO.215 Y 225, COL. CENTRO, LAGOS DE MORENO, JALISCO, C.P. 47400",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-17:00 Domingos: 09:00-15:00",
      telefono: "4747420099",
      nombre: "Lagos de Moreno"
    },
    {
      idEstado: "JAL",
      estado: "Jalisco"
    },
    {
      idMunicipio: "JAL02",
      municipio: "Lagos de Moreno"
    }];
  idsDict ["t85152"] = [{lat: 20.690481, lng: -103.302246}, 
    {
      direccion: "BLVR. CIRCUNVALACIÓN OBLATOS NO. 2165 MZ. 56 ESQ. FRANCISCO GONZALEZ BOCANEGRA, COLONIA OBLATOS, SECTOR LIBERTAD , GUADALAJARA, JALISCO.C.P. 44700.",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "3336439625",
      nombre: "Oblatos"
    },
    {
      idEstado: "JAL",
      estado: "Jalisco"
    },
    {
      idMunicipio: "JAL01",
      municipio: "Guadalajara"
    }];
  idsDict ["t85194"] = [{lat: 20.646179, lng: -103.305132}, 
    {
      direccion: "AV. REVOLUCIÓN NO.2816, COL. JARDINES DE LA PAZ,  GUADALAJARA, JALISCO, C.P. 44860",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "3336592475",
      nombre: "Revolución"
    },
    {
      idEstado: "JAL",
      estado: "Jalisco"
    },
    {
      idMunicipio: "JAL01",
      municipio: "Guadalajara"
    }];
  idsDict ["t85377"] = [{lat: 20.730001, lng: -103.422902}, 
    {
      direccion: "AV. SANTA MARGARITA NO. 517, COL. SANTA MARGARITA, ZAPOPAN, JALISCO, C.P. 45140",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "3336856630",
      nombre: "Santa Margarita"
    },
    {
      idEstado: "JAL",
      estado: "Jalisco"
    },
    {
      idMunicipio: "JAL06",
      municipio: "Zapopan"
    }];
  idsDict ["t85346"] = [{lat: 20.815119, lng: -102.759736}, 
    {
      direccion: "INDEPENDENCIA NO. 44, COL. TEPATITLÁN DE MORELOS CENTRO, TEPATITLÁN, JALISCO, C.P. 47600",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "3787154799",
      nombre: "Tepatitlán"
    },
    {
      idEstado: "JAL",
      estado: "Jalisco"
    },
    {
      idMunicipio: "JAL03",
      municipio: "Tepatitlán de Morelos"
    }];
  idsDict ["t85361"] = [{lat: 20.729966, lng: -103.402794}, 
    {
      direccion: "AV. TESISTÁN NO.718, FRACC. EL BAJÍO, ZAPOPAN, JALISCO, C.P 45017",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "3336369971",
      nombre: "Tesistán"
    },
    {
      idEstado: "JAL",
      estado: "Jalisco"
    },
    {
      idMunicipio: "JAL06",
      municipio: "Zapopan"
    }];
  idsDict ["t85435"] = [{lat: 20.638525, lng: -103.311378}, 
    {
      direccion: "AV. JUÁREZ NO.99, COL. SAN PEDRO TLAQUEPAQUE, MPO. DE TLAQUEPAQUE, JALISCO, C.P. 45500",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-19:00 Domingos: 10:00-15:00",
      telefono: "3338520379",
      nombre: "Tlaquepaque"
    },
    {
      idEstado: "JAL",
      estado: "Jalisco"
    },
    {
      idMunicipio: "JAL05",
      municipio: "Tlaquepaque"
    }];
  idsDict ["t85173"] = [{lat: 20.528674, lng: -103.379227}, 
    {
      direccion: "AV. DE LA CONCEPCIÓN NO. 22, COL. CONCEPCIÓN DEL VALLE, TLAJOMULCO DE ZÚÑIGA, JALISCO, C.P. 45653",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "3311895085",
      nombre: "Toluquilla"
    },
    {
      idEstado: "JAL",
      estado: "Jalisco"
    },
    {
      idMunicipio: "JAL04",
      municipio: "Tlajomulco de Zúñiga"
    }];
  idsDict ["t85121"] = [{lat: 20.634399, lng: -103.283518}, 
    {
      direccion: "AV. ÁLVAREZ DEL CASTILLO NO.379 ESQ. AV.PATRIA, COL. INFONAVIT LA SOLEDAD, TONALÁ, JALISCO, C.P. 45403",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-19:00 Domingos: 10:00-15:00",
      telefono: "3336803126",
      nombre: "Tonalá"
    },
    {
      idEstado: "JAL",
      estado: "Jalisco"
    },
    {
      idMunicipio: "JAL01",
      municipio: "Guadalajara"
    }];
  idsDict ["t85122"] = [{lat: 20.657637, lng: -103.42424}, 
    {
      direccion: "MANUEL J. CLOUTHIER NO. 1552 ESQ AV. PATRIA 1020, COL. JARDINES DEL TEPEYAC,  ZAPOPAN, JALISCO, C.P. 45030",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-19:00 Domingos: 10:00-15:00",
      telefono: "3331254877",
      nombre: "Zapopan"
    },
    {
      idEstado: "JAL",
      estado: "Jalisco"
    },
    {
      idMunicipio: "JAL06",
      municipio: "Zapopan"
    }];
  idsDict ["t85118"] = [{lat: 19.695992, lng: -101.192932}, 
    {
      direccion: "BENEDICTO LÓPEZ NO.144, COL. CENTRO, MORELIA, MICHOACÁN, C.P. 58260",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "4433126702",
      nombre: "Carrillo"
    },
    {
      idEstado: "MIC",
      estado: "Michoacán"
    },
    {
      idMunicipio: "MIC01",
      municipio: "Morelia"
    }];
  idsDict ["t85125"] = [{lat: 19.695263, lng: -101.166817}, 
    {
      direccion: "AV. LÁZARO CÁRDENAS NO.S 2960, 2970 Y 2980, COL. CHAPULTEPEC SUR, MORELIA, MICHOACÁN, C.P 58260",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "4433247955",
      nombre: "Chapultepec"
    },
    {
      idEstado: "MIC",
      estado: "Michoacán"
    },
    {
      idMunicipio: "MIC01",
      municipio: "Morelia"
    }];
  idsDict ["t85451"] = [{lat: 20.341361, lng: -102.023194}, 
    {
      direccion: "CALLE MARIANO JIMÉNEZ NO.101 ESQ. PLAZUELA CABOADO, COL. CENTRO, LA PIEDAD, MICHOACÁN, C.P. 59300",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00",
      telefono: "3525224459",
      nombre: "La Piedad"
    },
    {
      idEstado: "MIC",
      estado: "Michoacán"
    },
    {
      idMunicipio: "MIC06",
      municipio: "La Piedad"
    }];
  idsDict ["t85199"] = [{lat: 19.684658, lng: -101.216113}, 
    {
      direccion: "VIRGO NO. EXTERIOR 24 ESQUINA CON CALLE GALAXIA, COL. COSMOS, MORELIA,MICHOACÁN, C.P. 58050",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "4433347079",
      nombre: "Morelia La Huerta"
    },
    {
       idEstado: "MIC",
      estado: "Michoacán"
    },
    {
      idMunicipio: "MIC01",
      municipio: "Morelia"
    }];
  idsDict ["t85423"] = [{lat: 19.701933, lng: -101.209189}, 
    {
      direccion: "AV. FRANCISO I. MADERO PONIENTE NO.1564, COL. NUEVA VALLADOLID, MORELIA, MICHOACÁN, C.P. 58190 ",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "4433260914",
      nombre: "Nueva Valladolid"
    },
    {
      idEstado: "MIC",
      estado: "Michoacán"
    },
    {
      idMunicipio: "MIC01",
      municipio: "Morelia"
    }];
  idsDict ["t85213"] = [{lat: 20.057329, lng: -102.71844}, 
    {
      direccion: "CONSTITUCIÓN NO.205, COL. CENTRO, SAHUAYO, MICHOACÁN, C.P. 59000",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "3535328234",
      nombre: "Sahuayo"
    },
    {
      idEstado: "MIC",
      estado: "Michoacán"
    },
    {
      idMunicipio: "MIC02",
      municipio: "Sahuayo"
    }];
  idsDict ["t85185"] = [{lat: 19.418106, lng: -102.055654}, 
    {
      direccion: "FRANCISCO VILLA NO.54, ENTRE LAS CALLES DE SARABIA Y MORELOS, COL. MORELOS, URUAPAN, MICHOACÁN, C.P. 60050",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "4525246159",
      nombre: "Uruapan"
    },
    {
      idEstado: "MIC",
      estado: "Michoacán"
    },
    {
      idMunicipio: "MIC03",
      municipio: "Uruapan"
    }];
  idsDict ["t85212"] = [{lat: 19.816897, lng: -101.788538}, 
    {
      direccion: "AV. MORELOS NO.385, COL. CENTRO, ZACAPU, MICHOACÁN, C.P. 58600",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "4363636574",
      nombre: "Zacapu"
    },
    {
      idEstado: "MIC",
      estado: "Michoacán"
    },
    {
      idMunicipio: "MIC04",
      municipio: "Zacapu"
    }];
  idsDict ["t85162"] = [{lat: 19.980689, lng: -102.283526}, 
    {
      direccion: "AV. 5 DE MAYO NO. 490, COL. JARDINES DE CATEDRAL, ZAMORA, MICHOACÁN, C.P. 59670",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "3515121201",
      nombre: "Zamora"
    },
    {
      idEstado: "MIC",
      estado: "Michoacán"
    },
    {
      idMunicipio: "MIC05",
      municipio: "Zamora"
    }];
  idsDict ["t85422"] = [{lat: 22.152369, lng: -100.973497}, 
    {
      direccion: "AV. PROLONGACIÓN CONSTITUCIÓN NO.215, ESQUINA CALLE MANUEL JOSÉ OTHÓN, COL. CENTRO, SAN LUIS POTOSÍ, S.L.P., C.P. 78000",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-19:00 Domingos: 11:00-16:00",
      telefono: "4448145343",
      nombre: "Alameda SLP"
    },
    {
      idEstado: "SLP",
      estado: "San Luis Potosí"
    },
    {
      idMunicipio: "SLP01",
      municipio: "San Luis Potosí"
    }];
  idsDict ["t85139"] = [{lat: 22.135087, lng: -100.980109}, 
    {
      direccion: "AV. HIMNO NACIONAL NO.4017, COL. HIMNO NACIONAL, SAN LUIS POTOSÍ, SAN LUIS POTOSÍ, C.P. 78280",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "4448208821",
      nombre: "Himno Nacional"
    },
    {
      idEstado: "SLP",
      estado: "San Luis Potosí"
    },
    {
      idMunicipio: "SLP01",
      municipio: "San Luis Potosí"
    }];
  idsDict ["t85303"] = [{lat: 19.843321, lng: -90.531925}, 
    {
      direccion: "AV. GOBERNADORES NO.564 (ANTES 49-C),COL. CENTRO, CAMPECHE, CAMPECHE, C.P. 24000",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 09:00-15:00",
      telefono: "9818112498",
      nombre: "Baluartes"
    },
    {
      idEstado: "CAM",
      estado: "Campeche"
    },
    {
      idMunicipio: "CAM01",
      municipio: "Campeche"
    }];
  idsDict ["t85426"] = [{lat: 19.83038662, lng: -90.53447071}, 
    {
      direccion: "AV. LUIS DONALDO COLOSIO LOTE 28 ESQUINA CON AV. CENTRAL, FRACC. SAN JUAN I, CAMPECHE, CAMPECHE, C.P. 24026",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 09:00-15:00",
      telefono: "9818111363",
      nombre: "Campeche Colosio"
    },
    {
      idEstado: "CAM",
      estado: "Campeche"
    },
    {
      idMunicipio: "CAM01",
      municipio: "Campeche"
    }];
  idsDict ["t85425"] = [{lat: 19.338643, lng: -90.726317}, 
    {
      direccion: "AV. LUIS DONALDO COLOSIO MURRIETA NO.409, COL. LOS MANGUITOS, CIUDAD DE CHAMPOTÓN, CAMPECHE, C.P. 24400",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 09:00-15:00",
      telefono: "9828283397",
      nombre: "Champotón "
    },
    {
      idEstado: "CAM",
      estado: "Campeche"
    },
    {
      idMunicipio: "CAM02",
      municipio: "Champotón"
    }];
  idsDict ["t85407"] = [{lat: 18.605719, lng: -90.732148}, 
    {
      direccion: "CALLE 31 NO.52, ENTRE AV. JUSTO SIERRA MÉNDEZ Y AV. HÉCTOR PÉREZ MARTÍNEZ, MANZANA 314, COLONIA CENTRO, ESCÁRCEGA, CAMPECHE, C.P. 24350",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 09:00-15:00",
      telefono: "9826881726",
      nombre: "Escárcega"
    },
    {
      idEstado: "CAM",
      estado: "Campeche"
    },
    {
      idMunicipio: "CAM04",
      municipio: "Escárcega"
    }];
  idsDict ["t85226"] = [{lat: 19.842983, lng: -90.524278}, 
    {
      direccion: "AV. GOBERNADORES NO.423 INT. 1 ALTOS, ENTRE LAS CALLES VENEZUELA Y ARGENTINA, COL. SANTA ANA, CAMPECHE, CAMPECHE, C.P. 24050",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 09:00-15:00",
      telefono: "9818163374",
      nombre: "Gobernadores"
    },
    {
      idEstado: "CAM",
      estado: "Campeche"
    },
    {
      idMunicipio: "CAM01",
      municipio: "Campeche"
    }];
  idsDict ["t85062"] = [{lat: 18.645772, lng: -91.783661}, 
    {
      direccion: "PUERTO DE CAMPECHE S/N, ENTRE PUERTO PROGRESO Y NEVADO DE TOLUCA, COL. VOLCANES, CIUDAD DEL CARMEN, CAMPECHE, C.P. 24150",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 09:00-15:00",
      telefono: "9381188626",
      nombre: "Mi Plaza"
    },
    {
      idEstado: "CAM",
      estado: "Campeche"
    },
    {
      idMunicipio: "CAM03",
      municipio: "Ciudad del Carmen"
    }];
  idsDict ["t85237"] = [{lat: 19.845096, lng: -90.50056}, 
    {
      direccion: "AV. ALVARO OBREGON NO.242,BARRIO DE SANTA LUCÍA, CAMPECHE, CAMPECHE, C.P. 24020",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 09:00-15:00",
      telefono: "9818153645",
      nombre: "Pablo García"
    },
    {
      idEstado: "CAM",
      estado: "Campeche"
    },
    {
      idMunicipio: "CAM01",
      municipio: "Campeche"
    }];
  idsDict ["t85227"] = [{lat: 16.697608, lng: -93.721187}, 
    {
      direccion: "AV. CENTRAL SUR ESQ. CON CALLE CENTRAL S/N,COL. CENTRO, C.P. 30400, CINTALAPA, CHIS.",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 09:00-15:00",
      telefono: "9686846627",
      nombre: "Cintalapa"
    },
    {
      idEstado: "CHP",
      estado: "Chiapas"
    },
    {
      idMunicipio: "CHP01",
      municipio: "Cintalapa"
    }];
  idsDict ["t85454"] = [{lat: 16.239142, lng: -92.136506}, 
    {
      direccion: "BLVD. BELISARIO DOMÍNGUEZ SUR NO.1012-D, COL. BARIO NIKALOCOC, COMITÁN DE DOMÍNGUEZ, C.P. 3000",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00",
      telefono: "9631106955",
      nombre: "Comitán"
    },
    {
      idEstado: "CHP",
      estado: "Chiapas"
    },
    {
      idMunicipio: "CHP08",
      municipio: "Comitán"
    }];
  idsDict ["t85134"] = [{lat: 16.75481, lng: -93.122526}, 
    {
      direccion: "AV. CENTRAL PONIENTE NO. 838, COL. CENTRO,  TUXTLA GUTIÉRREZ, CHIAPAS, C.P. 29000",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 09:00-15:00",
      telefono: "9616124308",
      nombre: "Marimba"
    },
    {
      idEstado: "CHP",
      estado: "Chiapas"
    },
    {
      idMunicipio: "CHP06",
      municipio: "Tuxtla Gutiérrez"
    }];
  idsDict ["t85331"] = [{lat: 16.742599, lng: -93.102071}, 
    {
      direccion: "AV. 9 SUR ORIENTE, NO.1872, COL. CAMINERA, TUXTLA GUTIÉRREZ, CHIAPAS, C.P. 29090",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 09:00-15:00",
      telefono: "9616387420",
      nombre: "Mercado de los Ancianos"
    },
    {
      idEstado: "CHP",
      estado: "Chiapas"
    },
    {
      idMunicipio: "CHP06",
      municipio: "Tuxtla Gutiérrez"
    }];
  idsDict ["t85010"] = [{lat: 16.761891, lng: -93.374433}, 
    {
      direccion: "AV. CENTRAL ORIENTE NO.31, COL. CENTRO, OCOZOCOAUTLA DE ESPINOSA, CHIAPAS, C.P. 29140 ",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 9:00-15:00 Domingos: 9:00-15:00",
      telefono: "9686883472",
      nombre: "Ocozocoautla"
    },
    {
      idEstado: "CHP",
      estado: "Chiapas"
    },
    {
      idMunicipio: "CHP02",
      municipio: "Ocozocoautla"
    }];
  idsDict ["t85086"] = [{lat: 16.763309, lng: -93.139848}, 
    {
      direccion: "5A. AVENIDA NORTE PONIENTE NO.2438, COL. LOS ELECTRICISTAS, TUXTLA GUTIÉRREZ, CHIAPAS, C.P. 29040",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00",
      telefono: "9611251254",
      nombre: "Plaza Tuxtla"
    },
    {
      idEstado: "CHP",
      estado: "Chiapas"
    },
    {
      idMunicipio: "CHP06",
      municipio: "Tuxtla Gutiérrez"
    }];
  idsDict ["t85362"] = [{lat: 16.720563, lng: -92.637221}, 
    {
      direccion: "PROLONGACIÓN INSURGENTES NO. 107 ESQ. EJE VIAL UNO, COL. MARÍA AUXILIADORA, SAN CRISTÓBAL DE LAS CASAS, CHIAPAS, C.P. 29290",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 09:00-15:00",
      telefono: "9671160894",
      nombre: "San Cristóbal de las Casas"
    },
    {
      idEstado: "CHP",
      estado: "Chiapas"
    },
    {
      idMunicipio: "CHP04",
      municipio: "San Cristóbal de las Casas"
    }];
  idsDict ["t85073"] = [{lat: 16.088557, lng: -93.75226}, 
    {
      direccion: "INDEPENDENCIA NO.25, COL.BARRIO DE NICATÁN, TONALÁ, CHIAPAS C.P. 30500",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00",
      telefono: "9666632378",
      nombre: "Tonalá Chiapas"
    },
    {
      idEstado: "CHP",
      estado: "Chiapas"
    },
    {
      idMunicipio: "CHP05",
      municipio: "Tonalá"
    }];
  idsDict ["t85378"] = [{lat: 21.166753, lng: -86.826428}, 
    {
      direccion: "LOTE NO.10 AV. TULUM SUPERMANZANA 23, ZONA URBANA DE CANCÚN, QUINTANA ROO, C.P. 77500",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 09:00-15:00",
      telefono: "9988841350",
      nombre: "Bomberos"
    },
    {
      idEstado: "ROO",
      estado: "Quintana Roo"
    },
    {
      idMunicipio: "ROO01",
      municipio: "Benito Juárez, Cancún"
    }];
  idsDict ["t85446"] = [{lat: 18.49718, lng: -88.296534}, 
    {
      direccion: "AV. DE LOS HÉROES NO.63, COL. PLUTARCO ELÍAS CALLES, CHETUMAL, QUNTANA ROO, C.P. 77090",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 09:00-15:00",
      telefono: "9831293192",
      nombre: "Chetumal Centro"
    },
    {
      idEstado: "ROO",
      estado: "Quintana Roo"
    },
    {
      idMunicipio: "ROO03",
      municipio: "Chetumal"
    }];
  idsDict ["t85395"] = [{lat: 20.500511, lng: -86.951583}, 
    {
      direccion: "11 AV. SUR ENTRE 25 AV. SUR Y 30 AV. SUR, COL. ANDRÉS QUINTANA ROO, COZUMEL, QUINTANA ROO, C.P. 77664",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00",
      telefono: "9878691387",
      nombre: "Cozumel"
    },
    {
      idEstado: "ROO",
      estado: "Quintana Roo"
    },
    {
      idMunicipio: "ROO02",
      municipio: "Cozumel"
    }];
  idsDict ["t85372"] = [{lat: 21.166728, lng: -86.842422}, 
    {
      direccion: "LOTES 1 Y 2, AV. JOSÉ LÓPEZ PORTILLO, MANZANA 21, SUPERMANZANA 91, ZONA URBANA DE CANCÚN, QUINTANA ROO, C.P. 77516",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 09:00-15:00",
      telefono: "9988883085",
      nombre: "López Portillo"
    },
    {
      idEstado: "ROO",
      estado: "Quintana Roo"
    },
    {
      idMunicipio: "ROO01",
      municipio: "Benito Juárez, Cancún"
    }];
  idsDict ["t85440"] = [{lat: 20.625774, lng: -87.080928}, 
    {
      direccion: "AV. BENITO JUÁREZ GARCÍA S/N, LT. 001, MZ. 022, LOCAL A, ENTRE 35 Y AV. SUR Y 40 AV. SUR, COL. AVIACIÓN, PLAYA DEL CARMEN, MUNICIPIO DE SOLIDARIDAD, QUINTANA ROO, C.P. 77710",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 09:00-15:00",
      telefono: "9848030379",
      nombre: "Playa Centro"
    },
    {
      idEstado: "ROO",
      estado: "Quintana Roo"
    },
    {
      idMunicipio: "ROO04",
      municipio: "Playa del Carmen"
    }];
  idsDict ["t85370"] = [{lat: 20.638856, lng: -87.070098}, 
    {
      direccion: "CALLE 30 AV. NORTE (ENTRE CALLE 38 NORTE Y CALLE 40 NORTE) MZ. 108 LTS. 19, 20 Y 21; LOCALES 7 Y 8, FRACC. INFONAVIT COLOSIO, PLAYA DEL CARMEN, QUINTANA ROO, C.P. 77720",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 09:00-15:00",
      telefono: "9842673446",
      nombre: "Plaza Sofía"
    },
    {
      idEstado: "ROO",
      estado: "Quintana Roo"
    },
    {
      idMunicipio: "ROO04",
      municipio: "Playa del Carmen"
    }];
  idsDict ["t85536"] = [{lat: 19.515862, lng: -99.134854}, 
    {
      direccion: "CALLE ESCUADRÓN 201 NO.369, COL. SANTA MARÍA TICOMÁN, DEL.GUSTAVO A. MADERO, CDMX, C.P. 07280",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00",
      telefono: "5516611347",
      nombre: "Ticomán"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX07",
      municipio: "Gustavo A. Madero"
    }];
  idsDict ["t85520"] = [{lat: 19.569672, lng: -99.053949}, 
    {
      direccion: "CALLE LIENZO CHARRO S/N, LT 02, COL. AMPLIACIÓN SANTA MARÍA, ECATEPEC DE MORELOS, ESTADO DE MÉXICO, C.P. 552108",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00",
      telefono: "5551260226",
      nombre: "Tulpetlac"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX08",
      municipio: "Ecatepec de Morelos"
    }];
  idsDict ["t85512"] = [{lat: 19.423713, lng: -99.064515}, 
    {
      direccion: "CALLE CIRCUNVALACIÓN MZ 22, LT 14, COL. ARENAL, DEL. VENUSTIANO CARRANZA, CDMX, C.P. 15600",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00 Domingos: 11:00-16:00",
      telefono: "5557562976",
      nombre: "Arenal"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX14",
      municipio: "Venustiano Carranza"
    }];
  idsDict ["t85511"] = [{lat: 19.475832, lng: -99.084672}, 
    {
      direccion: "CALLE PUERTO DE ACAPULCO NO.40, COL. FERNANDO CASAS ALEMÁN, DEL. GUSTAVO A. MADERO, CDMX, C.P. 07580",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00 Domingos: 11:00-16:00",
      telefono: "5591305384",
      nombre: "Casas Alemán"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX07",
      municipio: "Gustavo A. Madero"
    }];
  idsDict ["t85513"] = [{lat: 19.346257, lng: -99.072813}, 
    {
      direccion: "CALLE CLAVELLINA NO.100, COL. LOS ÁNGELES, DELEGACIÓN IZTAPALAPA, CDMX, C.P. 09830",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00",
      telefono: "5522911064",
      nombre: "El Rosal"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX09",
      municipio: "Iztapalapa"
    }];
  idsDict ["t85528"] = [{lat: 19.358289, lng: -99.088661}, 
    {
      direccion: "CALZADA ERMITA IZTAPALAPA NO.1342 LOCAL A, COL. SAN PABLO, DEL. IZTAPALAPA, CDMX, C.P. 09830",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00",
      telefono: "5512720600",
      nombre: "Ermita"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX09",
      municipio: "Iztapalapa"
    }];
  idsDict ["t85516"] = [{lat: 19.382478, lng: -99.061536}, 
    {
      direccion: "CALLE EJE 4 SUR AV. CANAL DE TEZONTLE LT 2215, COL. EJIDAL IZTAPALAPA, DEL. IZTAPALAPA, CDMX, C.P. 09310",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00",
      telefono: "5558333064",
      nombre: "Marina"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX09",
      municipio: "Iztapalapa"
    }];
  idsDict ["t85524"] = [{lat: 19.498568, lng: -99.095752}, 
    {
      direccion: "AV. CENTENARIO NO.2035, COL. ATZACOALCO, DEL. GUSTAVO A. MADERO, CDMX, C.P. 07040",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00",
      telefono: "5527340929",
      nombre: "Nueva Atzacoalco"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX07",
      municipio: "Gustavo A. Madero"
    }];
  idsDict ["t85515"] = [{lat: 19.334881, lng: -99.042759}, 
    {
      direccion: "VILLA ASCASUBI NO.L-63, COL. DESARROLLO URBANO QUETZALCÓATL, DEL. IZTAPALAPA, CDMX, C.P. 9700",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00 Domingos: 11:00-16:00",
      telefono: "5515460611",
      nombre: "Quetzalcóatl"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX09",
      municipio: "Iztapalapa"
    }];
  idsDict ["t85537"] = [{lat: 19.257281, lng: -99.01062}, 
    {
      direccion: "AV. TLÁHUAC NO.5778, COL. SAN SEBASTIÁN, DEL. TLÁHUAC, CDMX, C.P. 09800",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00 Domingos: 11:00-16:00",
      telefono: "5515474621",
      nombre: "San Sebastián"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX13",
      municipio: "Tláhuac"
    }];
  idsDict ["t85508"] = [{lat: 19.354644, lng: -99.008964}, 
    {
      direccion: "CALZADA ERMITA IZTAPALAPA NO. 4197, COL. PUEBLO SANTIAGO ACAHUALTEPEC, DEL. IZTAPALAPA, CDMX, C.P. 09608",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00 Domingos: 11:00-16:00",
      telefono: "5558326026",
      nombre: "Santa Martha"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX09",
      municipio: "Iztapalapa"
    }];
  idsDict ["t85518"] = [{lat: 19.39359, lng: -99.066194}, 
    {
      direccion: "CALLE SUR 16 NO.468, COL. AGRÍCOLA ORIENTAL, DEL. IZTACALCO, CDMX, C.P. 08500",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00 Domingos: 11:00-16:00",
      telefono: "5550883091",
      nombre: "Sur 16"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX08",
      municipio: "Iztacalco"
    }];
  idsDict ["t85535"] = [{lat: 19.39157, lng: -99.045983}, 
    {
      direccion: "CALZADA IGNACIO ZARAGOZA NO.1646, COL. JUAN ESCUTIA, DEL. IZTAPALAPA, CDMX, C.P. 09510",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00",
      telefono: "5526330586",
      nombre: "Tepalcates"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX09",
      municipio: "Iztapalapa"
    }];
  idsDict ["t85539"] = [{lat: 19.521914, lng: -99.164755}, 
    {
      direccion: "CALLE PROGRESO NACIONAL NO.322, COL. PROGRESO NACIONAL, DEL. GUSTAVO A. MADERO, CDMX, C.P. 07650",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00",
      telefono: "5513260196",
      nombre: "Vallejo"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX07",
      municipio: "Gustavo A. Madero"
    }];
  idsDict ["t85523"] = [{lat: 19.437273, lng: -98.936714}, 
    {
      direccion: "CALLE LAUREL MZ 76, LT 53, COL. ACUITLAPILCO, CHIMALHUACÁN, ESTADO DE MÉXICO, C.P. 56335",
      horario: "Lunes a Viernes: 09:00-1 Sábados: 09:00-16:00 Domingos: 11:00-16:00",
      telefono: "5526358274",
      nombre: "Acuitlapilco"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX05",
      municipio: "Chimalhuacán"
    }];
  idsDict ["t85501"] = [{lat: 19.453675, lng: -99.048752}, 
    {
      direccion: "AV. AEROPUERTO NO. 10, COL. CIUDAD LAGO, NEZAHUALCÓYOTL, ESTADO DE MÉXICO, C.P. 57180",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00",
      telefono: "5550869957",
      nombre: "Aeropuerto"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX15",
      municipio: "Nezahualcóyotl"
    }];
  idsDict ["t85500"] = [{lat: 19.304055, lng: -98.866774}, 
    {
      direccion: "COLINAS DE BAJAMARES MZ NO.5 LT 8, FRAC. SAN BUENA AVENTURA, IXTAPALUCA, ESTADO DE MÉXICO, C.P. 56530",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00 Domingos: 11:00-16:00",
      telefono: "5522303061",
      nombre: "Aventura"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX10",
      municipio: "Ixtapaluca"
    }];
  idsDict ["t85526"] = [{lat: 19.416847, lng: -98.94282}, 
    {
      direccion: "CALLE 16 DE SEPTIEMBRE NO.10, COL. CABECERA MUNICIPAL, CHIMALHUACÁN, ESTADO DE MÉXICO, C.P. 56330",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00",
      telefono: "5558539830",
      nombre: "Chimalhuacán Centro"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX05",
      municipio: "Chimalhuacán"
    }];
  idsDict ["t85538"] = [{lat: 19.283601, lng: -98.951202}, 
    {
      direccion: "AV. CUAUHTÉMOC ESQ. SUR 8 MZ 258 LT 12, COL. NIÑOS HÉROES PRIMERA SECCIÓN, VALLE DE CHALCO SOLIDARIDAD, ESTADO DE MÉXICO, C.P. 56640",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00 Domingos: 11:00-16:00",
      telefono: "5522307579",
      nombre: "Cuauhtémoc"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX24",
      municipio: "Valle de Chalco Solidaridad"
    }];
  idsDict ["t85510"] = [{lat: 19.619943, lng: -99.040831}, 
    {
      direccion: "BOSQUES DE OZUMBILLA MZ 27 LT 15, FRACC. LOS HÉROES TECÁMAC II, TECÁMAC DE FELIPE VILLANUEVA, ESTADO DE MÉXICO, C.P. 55764",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00 Domingos: 11:00-16:00",
      telefono: "5559208805",
      nombre: "Héroes Tecámac"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX13",
      municipio: "Tecámac de Felipe Villanueva"
    }];
  idsDict ["t85502"] = [{lat: 19.593903, lng: -98.998393}, 
    {
      direccion: "AV. JARDINES DE MORELOS NO. 198 MZ 862, LT 3 SECCIÓN RIOS, COL. JARDINES DE MORELOS, ECATEPEC DE MORELOS, ESTADO DE MÉXICO, C.P. 55070",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00 Domingos: 11:00-16:00",
      telefono: "5558372090",
      nombre: "Jardines"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX08",
      municipio: "Ecatepec de Morelos"
    }];
  idsDict ["t85514"] = [{lat: 19.361921, lng: -98.979215}, 
    {
      direccion: "CALLE 7 MZ NO.63 LT 28, COL. VALLE DE LOS REYES, LOS REYES LA PAZ, ESTADO DE MÉXICO, C.P. 56430",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00",
      telefono: "5558560132",
      nombre: "La Paz"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX11",
      municipio: "Los Reyes La Paz"
    }];
  idsDict ["t85519"] = [{lat: 19.376632, lng: -99.007146}, 
    {
      direccion: "CALLE UNO NO.15 MZ 11, LT 2, COL. LAS ÁGUILAS, NEZAHUALCÓYOTL, ESTADO DE MÉXICO C.P. 57900",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00",
      telefono: "5557322020",
      nombre: "Las Águilas"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX15",
      municipio: "Nezahualcóyotl"
    }];
  idsDict ["t85517"] = [{lat: 19.470373, lng: -99.24866}, 
    {
      direccion: "AV. DE LOS ARCOS NO.37 LOTE 5 MZ 86, COL. AMPLIACIÓN DE LOS REMEDIOS (EL BEATO), NAUCALPAN DE JUÁREZ, ESTADO DE MÉXICO, C.P. 53400",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00",
      telefono: "5552664833",
      nombre: "Los Remedios"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX14",
      municipio: "Naucalpan de Juárez"
    }];
  idsDict ["t85529"] = [{lat: 19.530863, lng: -99.046412}, 
    {
      direccion: "CARRETERA FEDERAL MEXICO-PUEBLA KM 18.5 COL. AMPLIACIÓN LOS REYES, LOS REYES LA PAZ, ESTADO DE MÉXICO, C.P. 56400",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00",
      telefono: "5557497115",
      nombre: "Lourdes"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX08",
      municipio: "Ecatepec de Morelos"
    }];
  idsDict ["t85530"] = [{lat: 19.407029, lng: -98.997587}, 
    {
      direccion: "AV. GUSTAVO BAZ NO.209, MZ 330, LT 27, COLONIA AURORA, CHIMALHUACÁN, ESTADO DE MÉXICO, C.P. 57000 ",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00 Domingos: 11:00-16:00",
      telefono: "5557340034",
      nombre: "Madrugada"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX05",
      municipio: "Chimalhuacán"
    }];
  idsDict ["t85503"] = [{lat: 19.415142, lng: -99.052117}, 
    {
      direccion: "AV. CUAUHTÉMOC NO. 28, COL. MARAVILLAS, NEZAHUALCÓYOTL, ESTADO DE MÉXICO, C.P. 57410",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00",
      telefono: "5515455421",
      nombre: "Maravillas"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX15",
      municipio: "Nezahualcóyotl"
    }];
  idsDict ["t85531"] = [{lat: 19.414535, lng: -99.033338}, 
    {
      direccion: "AV. JORGE LUKE LOYOLA NO.202, COL. AGUA AZUL, NEZAHUALCÓYOTL, ESTADO DE MÉXICO, C.P. 57500",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00",
      telefono: "5550852618",
      nombre: "México"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX15",
      municipio: "Nezahualcóyotl"
    }];
  idsDict ["t85504"] = [{lat: 19.497294, lng: -99.031808}, 
    {
      direccion: "AV. GUADIANA MZ 33 LT 15 S/N, COL. GRANJAS INDEPENDENCIA, ECATEPEC DE MORELOS, ESTADO DE MÉXICO, C.P. 55290",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00 Domingos: 11:00-16:00",
      telefono: "5557802215",
      nombre: "Muzquiz"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX08",
      municipio: "Ecatepec de Morelos"
    }];
  idsDict ["t85505"] = [{lat: 19.482236, lng: -99.048007}, 
    {
      direccion: "CALLE HACIENDA DE COTE NO. 113, COL. IMPULSORA POPULAR AVÍCOLA, NEZAHUALCÓYOTL, ESTADO DE MÉXICO, C.P. 57130",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00 Domingos: 11:00-16:00",
      telefono: "5550867343",
      nombre: "Noria"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX15",
      municipio: "Nezahualcóyotl"
    }];
  idsDict ["t85506"] = [{lat: 19.52119, lng: -99.031988}, 
    {
      direccion: "CALLE AZUCENAS MZ NO.06, LT 13, COL. JARDINES DE ARAGÓN, ECATEPEC DE MORELOS, ESTADO DE MÉXICO, C.P. 55140",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00",
      telefono: "5550856055",
      nombre: "Olímpica"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX08",
      municipio: "Ecatepec de Morelos"
    }];
  idsDict ["t85532"] = [{lat: 19.380492, lng: -98.987865}, 
    {
      direccion: "CALLE PONIENTE 12 NO.308, COL. LA PERLA REFORMA, NEZAHUALCÓYOTL, ESTADO DE MÉXICO, C.P. 57820",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00 Domingos: 11:00-16:00",
      telefono: "5522378931",
      nombre: "Pantitlán"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX15",
      municipio: "Nezahualcóyotl"
    }];
  idsDict ["t85507"] = [{lat: 19.511286, lng: -99.067266}, 
    {
      direccion: "AV. ADOLFO LÓPEZ MATEOS MZ 57, LT 14, COL. GRANJAS VALLE DE GUADALUPE, ECATEPEC DE MORELOS, ESTADO DE MÉXICO, C.P. 55270",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00",
      telefono: "5558300136",
      nombre: "R-1"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX08",
      municipio: "Ecatepec de Morelos"
    }];
  idsDict ["t85533"] = [{lat: 19.396644, lng: -99.042867}, 
    {
      direccion: "AV. MÉXICO NO.56, COL. RAÚL ROMERO, NEZAHUALCÓYOTL, ESTADO DE MÉXICO, C.P. 57630",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00",
      telefono: "5522320741",
      nombre: "Romero"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX15",
      municipio: "Nezahualcóyotl"
    }];
  idsDict ["t85534"] = [{lat: 19.434561, lng: -98.965444}, 
    {
      direccion: "AV. ORGANIZACIÓN POPULAR MZ 2 LT 19, COL. SANTA ELENA, CHIMALHUACÁN, ESTADO DE MÉXICO, C.P. 56366",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00 Domingos: 11:00-16:00",
      telefono: "5521260584",
      nombre: "Santa Elena"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX05",
      municipio: "Chimalhuacán"
    }];
  idsDict ["t85509"] = [{lat: 19.396173, lng: -99.019694}, 
    {
      direccion: "AV. SOR JUANA INÉS DE LA CRUZ NO.291, COL. EVOLUCIÓN, NEZAHUALCÓYOTL, ESTADO DE MÉXICO, C.P. 57700",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00",
      telefono: "5522320466",
      nombre: "Sor Juana"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX15",
      municipio: "Nezahualcóyotl"
    }];
  idsDict ["t85527"] = [{lat: 19.506032, lng: -99.054846}, 
    {
      direccion: "AV. CARLOS HANK GONZÁLEZ NO.154, COL. GRANJAS VALLE DE GUADALUPE, ECATEPEC DE MORELOS, ESTADO DE MÉXICO, C.P. 55270",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00",
      telefono: "5515530425",
      nombre: "Valle de Gdpe."
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX08",
      municipio: "Ecatepec de Morelos"
    }];
  idsDict ["t85525"] = [{lat: 19.264358, lng: -98.899993}, 
    {
      direccion: "PROL. VICENTE GUERRERO NO. 4, COL. CENTRO, CHALCO, ESTADO DE MÉXICO, C.P. 56600",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00 Domingos: 11:00-16:00",
      telefono: "5513146378",
      nombre: "Vicente Guerrero"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX03",
      municipio: "Chalco"
    }];
  idsDict ["t85522"] = [{lat: 19.534241, lng: -99.120244}, 
    {
      direccion: "AV. VOLCANES MZ 421 LT 4038, COL. LÁZARO CÁRDENAS, TLALNEPANTLA DE BAZ, ESTADO DE MÉXICO, C.P. 54189 ",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00",
      telefono: "5521241412",
      nombre: "Volcanes  "
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX21",
      municipio: "Tlalnepantla de Baz"
    }];
  idsDict ["t85521"] = [{lat: 19.491717, lng: -99.057271}, 
    {
      direccion: "VALLE GANGES NO.89, COL. VALLE DE ARAGÓN, NEZAHUALCÓYOTL, ESTADO DE MÉXICO, C.P. 57100",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00",
      telefono: "5515530041",
      nombre: "Yang Tse"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX15",
      municipio: "Nezahualcóyotl"
    }];
  idsDict ["t85471"] = [{lat: 20.546053, lng: -100.688579}, 
    {
      direccion: "AV. GUADALUPE VICTORIA NO. 108-A COL CENTRO C.P. 38797",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-15:00 Domingos: 09:00-14:00",
      telefono: "4131582519",
      nombre: "Apaseo"
    },
    {
      idEstado: "GUA",
      estado: "Guanajuato"
    },
    {
      idMunicipio: "GUA02",
      municipio: "Apaseo el Grande"
    }];
  idsDict ["t85472"] = [{lat: 20.720452, lng: -100.761475}, 
    {
      direccion: "PLAZA PRINCIPAL 5 DE FEBRERO NO. 20 LOCAL C COL. CENTRO C.P. 38200",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-15:00 Domingos: 10:00-14:00",
      telefono: "4121571562",
      nombre: "Comonfort"
    },
    {
      idEstado: "GUA",
      estado: "Guanajuato"
    },
    {
      idMunicipio: "GUA04",
      municipio: "Comonfort"
    }];
  idsDict ["t85474"] = [{lat: 20.643142, lng: -100.994539}, 
    {
      direccion: "AV. 16 DE SEPTIEMBRE NO.705 LOCAL 103, COL. CENTRO, STA. CRUZ JUVENTINO ROSAS, GUANAJUATO, C.P. 38240",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-15:00 Domingos: 10:00-14:00",
      telefono: "4121575583",
      nombre: "Juventino "
    },
    {
      idEstado: "GUA",
      estado: "Guanajuato"
    },
    {
      idMunicipio: "GUA11",
      municipio: "Santa Cruz Juventino Rosas"
    }];
  idsDict ["t85473"] = [{lat: 21.478317, lng: -101.216009}, 
    {
      direccion: "PLAZA PRINCIPAL NO.132, COL. CENTRO, SAN FELIPE, GUANAJUATO, C.P. 37600",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-15:00 Domingos: 10:00-14:00",
      telefono: "4286852349",
      nombre: "San Felipe"
    },
    {
      idEstado: "GUA",
      estado: "Guanajuato"
    },
    {
      idMunicipio: "GUA09",
      municipio: "San Felipe"
    }];
  idsDict ["t85477"] = [{lat: 21.297672, lng: -100.515158}, 
    {
      direccion: "AV. NIÑOS HÉROES NO.116 A, COL. CENTRO, SAN LUIS DE LA PAZ, GUANAJUATO, C.P. 37900",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-15:00 Domingos: 10:00-14:00",
      telefono: "4686886972",
      nombre: "San Luis de la Paz"
    },
    {
      idEstado: "GUA",
      estado: "Guanajuato"
    },
    {
      idMunicipio: "GUA10",
      municipio: "San Luis de la Paz"
    }];
  idsDict ["t85482"] = [{lat: 19.708696, lng: -98.45002}, 
    {
      direccion: "CALLE MORELOS ORIENTE NO.14-B Y C, COL. CENTRO, APAN, HIDALGO, C.P. 43900",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-14:00",
      telefono: "7489121194",
      nombre: "Apan"
    },
    {
      idEstado: "HID",
      estado: "Hidalgo"
    },
    {
      idMunicipio: "HID01",
      municipio: "Apán"
    }];
  idsDict ["t85481"] = [{lat: 19.837695, lng: -98.979439}, 
    {
      direccion: "AV. JUÁREZ NORTE NO.13, COL. BARRIO DE CUXTITLA, TIZAYUCA, HIDALGO, C.P. 43800",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-14:00",
      telefono: "7791006454",
      nombre: "Catedral"
    },
    {
      idEstado: "HID",
      estado: "Hidalgo"
    },
    {
      idMunicipio: "HID09",
      municipio: "Tizayuca"
    }];
  idsDict ["t85469"] = [{lat: 20.036254, lng: -98.309976}, 
    {
      direccion: "AV. JUÁREZ NO. 144, COL. CENTRO, CUAUTEPEC, HIDALGO, C.P. 43740",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-16:00 Domingos: 10:00-16:00",
      telefono: "7757703605",
      nombre: "Hinojosa"
    },
    {
      idEstado: "HID",
      estado: "Hidalgo"
    },
    {
      idMunicipio: "HID02",
      municipio: "Cuautepec"
    }];
  idsDict ["t85463"] = [{lat: 20.374393, lng: -99.650476}, 
    {
      direccion: "PLAZA DE LA REFORMA NO.3 LOCAL A Y D, COL. CENTRO, HUICHAPAN, HIDALGO, C.P. 42400",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-15:00 Domingos: 10:00-14:00",
      telefono: "7617822804",
      nombre: "Huichapan"
    },
    {
      idEstado: "HID",
      estado: "Hidalgo"
    },
    {
      idMunicipio: "HID04",
      municipio: "Huichapan"
    }];
  idsDict ["t85460"] = [{lat: 19.775213, lng: -98.580325}, 
    {
      direccion: "IGNACIO ALLENDE 11 LOCAL 1 A PLANTA ALTA Y BAJA, COL. CENTRO, SAHAGÚN, HIDALGO,  C.P. 43990",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-14:00",
      telefono: "7919135757",
      nombre: "Sahagún "
    },
    {
      idEstado: "HID",
      estado: "Hidalgo"
    },
    {
      idMunicipio: "HID06",
      municipio: "Sahagún"
    }];
  idsDict ["t85479"] = [{lat: 19.785179, lng: -98.553803}, 
    {
      direccion: "PLAZA DE LA CONSTITUCIÓN NO.4 LOCAL A, COL. CENTRO, TEPEAPULCO, HIDALGO, C.P. 43970",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-17:00",
      telefono: "7919132199",
      nombre: " Tepeapulco"
    },
    {
      idEstado: "HID",
      estado: "Hidalgo"
    },
    {
      idMunicipio: "HID07",
      municipio: "Tepeapulco"
    }];
  idsDict ["t85465"] = [{lat: 20.737688, lng: -99.382492}, 
    {
      direccion: "PLAZA CONSTITUCIÓN NO.8, COL. CENTRO, ZIMAPÁN, HIDALGO, C.P. 42330",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-15:00 Domingos: 10:00-14:00",
      telefono: "7597282333",
      nombre: "Zimapán"
    },
    {
      idEstado: "HID",
      estado: "Hidalgo"
    },
    {
      idMunicipio: "HID12",
      municipio: "Zimapán"
    }];
  idsDict ["t85475"] = [{lat: 20.18559, lng: -100.14172}, 
    {
      direccion: "AV. IV CENTENARIO NO.320, COL. CENTRO, AMEALCO, QUERÉTARO, C.P. 76850",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-16:00 Domingos: 10:00-14:00",
      telefono: "4482789203",
      nombre: "Amealco"
    },
    {
      idEstado: "QUE",
      estado: "Querétaro"
    },
    {
      idMunicipio: "QUE01",
      municipio: "Amealco"
    }];
  idsDict ["t85464"] = [{lat: 20.500404, lng: -100.143062}, 
    {
      direccion: "CARRETERA PANAMERICANA NO. 35 LOCAL A, COL. CENTRO, PEDRO ESCOBEDO, QUERÉTARO, C.P. 76700",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-15:00 Domingos: 10:00-14:00",
      telefono: "4482751986",
      nombre: "Pedro Escobedo"
    },
    {
      idEstado: "QUE",
      estado: "Querétaro"
    },
    {
      idMunicipio: "QUE02",
      municipio: "Pedro Escobedo"
    }];
  idsDict ["t85466"] = [{lat: 19.321612, lng: -99.221868}, 
    {
      direccion: "AV. CONTRERAS NO.386 LOCAL 8, COL. SAN JERÓNIMO LÍDICE DEL. MAGDALENA CONTRERAS, CDMX, C.P. 70200",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-16:00 Domingos: 10:00-14:00",
      telefono: "5556819759",
      nombre: "San Jerónimo"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX10",
      municipio: "Magdalena Contreras"
    }];
  idsDict ["t85462"] = [{lat: 19.370074, lng: -99.759622}, 
    {
      direccion: "AV. MIGUEL HIDALGO Y COSTILLA NO. 1-C, COL. CENTRO, ALMOLOYA DE JUÁREZ, ESTADO DE MÉXICO, C.P. 50900",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-15:00 Domingos: 09:00-15:00",
      telefono: "7251363397",
      nombre: "Almoloya"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX01",
      municipio: "Almoloya"
    }];
  idsDict ["t85480"] = [{lat: 19.832747, lng: -99.204635}, 
    {
      direccion: "AV. NIÑOS HÉROES NO. 116 A, COL. CENTRO, HUEHUETOCA, ESTADO DE MÉXICO, C.P. 37900",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-16:00 Domingos: 10:00-15:00",
      telefono: "5939181018",
      nombre: "Huehuetoca"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX09",
      municipio: "Huehuetoca"
    }];
  idsDict ["t85461"] = [{lat: 19.745238, lng: -99.179339}, 
    {
      direccion: "AV. HIDALGO NO.6, COL. BARRIO DE TLATILCO, TEOLOYUCAN, ESTADO DE MÉXICO, C.P. 54770",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-15:00 Domingos: 10:00-15:00",
      telefono: "5939141356",
      nombre: "Teoloyucan 2"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX17",
      municipio: "Teoloyucan"
    }];
  idsDict ["t85478"] = [{lat: 19.713181, lng: -99.22418}, 
    {
      direccion: "PLAZA VIRREINAL NO. 12-C BARRIO DE SAN MARTÍN, MUNICIPIO DE TEPOTZOTLÁN, ESTADO DE MÉXICO, C.P. 54600",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-17:00 ",
      telefono: "5558769170",
      nombre: "Tepotzotlán"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX19",
      municipio: "Tepotzotlán"
    }];
  idsDict ["t85467"] = [{lat: 18.986297, lng: -99.101495}, 
    {
      direccion: "AV. 5 DE MAYO NO.12 LOCAL 2, COL. CENTRO, TEPOZTLÁN, MORELOS, C.P. 62520",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-17:00",
      telefono: "7393954692",
      nombre: "Tepoztlán"
    },
    {
      idEstado: "MOR",
      estado: "Morelos"
    },
    {
      idMunicipio: "MOR06",
      municipio: "Tepoztlán"
    }];
  idsDict ["t85470"] = [{lat: 18.782286, lng: -99.230607}, 
    {
      direccion: "CALLE JARDÍN EMILIANO ZAPATA NO.1 ESQ. REP. DE NICARAGUA, COL. CENTRO, XOCHITEPEC, MORELOS, C.P. 62790",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-17:00 Domingos: 10:00-14:00",
      telefono: "7773656728",
      nombre: "Xochitepec"
    },
    {
      idEstado: "MOR",
      estado: "Morelos"
    },
    {
      idMunicipio: "MOR07",
      municipio: "Xochitepec"
    }];
  idsDict ["t85468"] = [{lat: 19.851383, lng: -97.496836}, 
    {
      direccion: "AV. REFORMA NO.64-B, COL. CENTRO, TLATLAUQUITEPEC, PUEBLA, C.P. 73900",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-14:00 Domingos: 10:00-14:00",
      telefono: "2333181859",
      nombre: "Tlatlauquitepec"
    },
    {
      idEstado: "PUE",
      estado: "Puebla"
    },
    {
      idMunicipio: "PUE04",
      municipio: "Tlatlauquitepec"
    }];
  idsDict ["t85476"] = [{lat: 20.030431, lng: -100.721085}, 
    {
      direccion: "AV. HIDALGO 872 C, COL. CENTRO, ACÁMBARO, GUANAJUATO, C.P. 38600",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "4171721938",
      nombre: "Acámbaro Hidalgo"
    },
    {
      idEstado: "GUA",
      estado: "Guanajuato"
    },
    {
      idMunicipio: "GUA01",
      municipio: "Acámbaro"
    }];
  idsDict ["t85485"] = [{lat: 19.316832, lng: -98.202194}, 
    {
      direccion: "AV. DÍAZ VARELA NO.127, LOCALES 1 Y 3, COL. CENTRO, CHIAUTEMPAN, TLAXCALA, C.P. 90800",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 11:00-16:00",
      telefono: "2463270542",
      nombre: "Santa Ana Chiautempan"
    },
    {
      idEstado: "TLA",
      estado: "Tlaxcala"
    },
    {
      idMunicipio: "TLA03",
      municipio: "Santa Ana Chiautempan"
    }];
      idsDict ["t85487"] = [{lat: 18.847673, lng: -97.099633}, 
    {
      direccion: "ORIZABA 604-528, COLONIA CENTRO, ORIZABA, VERACRUZ, CP 94300",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "2726883006",
      nombre: "Orizaba"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER20",
      municipio: "Orizaba"
    }];
      idsDict ["t85488"] = [{lat: 16.234437, lng: -93.267390}, 
    {
      direccion: "CALLE CENTRAL Y 1ª AVENIDA SUR NO. 1, MZA. 17, LOTE 20, BARRIO CENTRO, VILLAFLORES, CHIAPAS, CP 30470",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 09:00-15:00",
      telefono: "9656881234",
      nombre: "Villaflores"
    },
    {
      idEstado: "CHP",
      estado: "Chiapas"
    },
    {
      idMunicipio: "CHP07",
      municipio: "Villaflores"
    }];
      idsDict ["t85411"] = [{lat: 18.639054, lng: -91.832197}, 
    {
      direccion: "CALLE 31 NO.57, ESQ. CON CALLE 32, COL. CENTRO, CIUDAD DEL CARMEN, CAMPECHE, C.P. 24350",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 09:00-15:00",
      telefono: "9231060455",
      nombre: "Ciudad del Carmen"
    },
    {
      idEstado: "CAM",
      estado: "Campeche"
    },
    {
      idMunicipio: "CAM03",
      municipio: "Ciudad del Carmen"
    }];
      idsDict ["t85486"] = [{lat: 19.3661192, lng: -99.2103821}, 
    {
      direccion: "AV. CENTENARIO NO. 436, COL. MERCED GÓMEZ, DEL. ÁLVARO OBREGÓN, CDMX, C.P. 01600",
      horario: "Lunes a Viernes: 09:00-20:00 Sábados: 09:00-20:00 Domingos: 12:00-16:00",
      telefono: "5550866623",
      nombre: "Plateros"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX01",
      municipio: "Álvaro Obregón"
    }];
    
  // mapa centrado en:
  map = new google.maps.Map(
      document.getElementById('map'), {zoom: 5, center: idsDict["t85437"] [0]});

  for (var tID in idsDict)
  {
    // markers configuration
    var marker = new google.maps.Marker ({position: idsDict [tID] [0], map: map});
  }
}

function centerMap(id)
{
  map.setCenter(idsDict [id] [0]);
  map.setZoom(17);
}

function DisplayTiendasInfo (municipioID)
{
  var tiendasInfoContainer = document.getElementById("tiendasInfoContainer");

  tiendasInfoContainer.innerHTML = "";

  for (var tID in idsDict)
  {
    if (idsDict [tID] [3].idMunicipio == municipioID)
    {
      var tiendaInfoDiv = document.createElement ("div");
      tiendaInfoDiv.id = tID;
      tiendaInfoDiv.innerHTML = 
 '<div class="container" onclick="centerMap (\'' + tID + '\')">'+
             '<div class="col-md-12" style="background-color: #1d3492; color: #ffffff; border-style: solid; border-radius: 25px;">'+
                '<div class="row">'+
                    '<div class="col-md-12" style="padding-bottom: 10px;">'+
                        '<br><span style="font-size: 20px;"><img src="http://pruebasezqualo.com.mx/img/favicon.ico" style="max-height: 25px;"> <strong>' + idsDict [tID] [1].nombre + '</strong></span><br>'+
                    '</div>'+
              '</div>'+
                '<div class="row">'+
                    '<div class="col-md-6" style="background-color: #485aa7; border-style: solid transparent; border-radius: 15px; padding-left: 15px; float: left;">'+
                        '<span style="font-size: 15px;"><center>' + idsDict [tID] [1].direccion + '<br><br><i class="fa fa-map-marker" aria-hidden="true" style="font-size: 20px;"></i></center></span>'+
                   '</div>'+
                    '<br><br>'+
                    '<div class="col-md-6">'+
                        '<div class="row">'+
                            '<div style="background-color: #485aa7; border-style: solid transparent; border-radius: 15px; padding-left: 15px;">'+
                                '<div class="col-md-12">'+
                                    '<span style="font-size: 15px;">' + idsDict [tID] [1].horario + '<br>'+
                                   '<center><i class="fa fa-clock-o" aria-hidden="true" style="font-size: 20px;"></i></center></span>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        '<br>'+
                        '<div class="row vertical-center" style="background-color: #485aa7; border-style: solid transparent; border-radius: 15px; padding-left: 15px; min-height: 35px;">'+
                            '<div class="col-md-12 vertical-center">'+
                                '<span style="font-size: 18px;"><i class="fa fa-phone" aria-hidden="true"></i>' +
           idsDict [tID] [1].telefono + '</span>'+
                            '</div>'+
                            '<br>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
"</div>";
      tiendaInfoDiv.childNodes [0].style.cursor = "pointer";

      tiendasInfoContainer.appendChild (tiendaInfoDiv);
    }
  }

  //tiendasSelect.onchange = map.setCenter (idsDict [tiendasSelect.options [tiendasSelect.selectedIndex].value]);
}




    /* var tiendaInfoDiv = document.createElement ("div");
      tiendaInfoDiv.id = tID;
      tiendaInfoDiv.innerHTML = '<div class="container" onclick="centerMap (\'' + tID + '\')">' + idsDict [tID] [1].nombre +
          "<br> DIRECCIÓN: " + idsDict [tID] [1].direccion + "<br> TELÉFONO: " + idsDict [tID] [1].telefono + "<br> HORARIO DE ATENCIÓN: " +
           idsDict [tID] [1].horario + "<br>------------------------------------------------------------------------------------------<br></div>";*/


