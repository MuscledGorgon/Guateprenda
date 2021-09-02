var idsDict = new Object ();
var map;

function initMap() {
  // Posción de tiendas
  
  idsDict ["t85906"] = [{lat: 24.806607, lng: -107.395757}, 
    {
      direccion: "CALLE MARIANO ESCOBEDO PTE. NO.167 ENTRE LAS CALLES DOMINGO RUBÍ Y JUAN CARRASCO COL. CENTRO, CULIACÁN, SINALOA, C.P.80000",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "6677167626",
      nombre: "Escobedo",
      promo: "14 de Febrero",
      marca: "BZ",
      tienda: "85906"
    },
    {
      idEstado: "SIN",
      estado: "Sinaloa"
    },
    {
      idMunicipio: "SIN02",
      municipio: "Culiacán"
    }];
  idsDict ["t85916"] = [{lat: 24.793028, lng: -107.366017}, 
    {
      direccion: "AV. REVOLUCIÓN SUR NO. 1401 ENTRE LAS CALLES MARIANO AZUELA Y JOSÉ VASCONCELOS, COL. GUADALUPE VICTORIA, CULIACÁN, SINALOA, C.P. 80240",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "6677183219",
      nombre: "Mariano Azuela",
      promo: "14 de Febrero",
      marca: "BZ",
      tienda: "85916"
    },
    {
      idEstado: "SIN",
      estado: "Sinaloa"
    },
    {
      idMunicipio: "SIN04",
      municipio: "Culiacán"
    }];
  idsDict ["t85910"] = [{lat: 24.7788706, lng: -107.4401089}, 
    {
      direccion: "BLVD. EMILIANO ZAPATA NO.4988 ENTRE LAS CALLES FRAY MARCOS DE NIZA Y DIEGO FERNÁNDEZ DE PROAÑO, COL. SAN RAFAEL, CULIACÁN, SINALOA, C.P.80150",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "6677610111",
      nombre: "Zapata",
      promo: "14 de Febrero",
      marca: "BZ",
      tienda: "85910"
    },
    {
      idEstado: "SIN",
      estado: "Sinaloa"
    },
    {
      idMunicipio: "SIN01",
      municipio: "Culiacán"
    }];
  idsDict ["t85196"] = [{lat: 20.54201, lng: -100.820247}, 
    {
      direccion: "AV. TECNOLÓGICO NO.633, COL. CIUDAD INDUSTRIAL, CELAYA, GUANAJUATO, C.P. 38010",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "4616119209",
      nombre: "Celaya Tecnológico",
      promo: "14 y 15 de Febrero",
      marca: "EF",
      tienda: "85196"
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
      nombre: "Irapuato",
      promo: "14 y 15 de Febrero",
      marca: "EF",
      tienda: "85082"
    },
    {
      idEstado: "GUA",
      estado: "Guanajuato"
    },
    {
      idMunicipio: "GUA05",
      municipio: "Irapuato"
    }];
  idsDict ["t85442"] = [{lat: 19.842469, lng: -98.977874}, 
    {
      direccion: "AV. JUÁREZ SUR NO.59, BARRIO NACOZARI, TIZAYUCA, HIDALGO, C.P. 43800",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-17:00",
      telefono: "7791006920",
      nombre: "Tizayuca",
      promo: "14 y 15 de Febrero",
      marca: "EF",
      tienda: "85442"
    },
    {
      idEstado: "HID",
      estado: "Hidalgo"
    },
    {
      idMunicipio: "HID09",
      municipio: "Tizayuca"
    }];
  idsDict ["t85108"] = [{lat: 20.546716, lng: -100.396417}, 
    {
      direccion: "AV. PROLONGACIÓN CANDILES 204 LOCAL D-32, PLAZACANDILES, FRACC. CAMINO REAL, CORREGIDORA, QRO. C.P. 76093",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-19:00 Domingos: 11:00-16:00",
      telefono: "4422993483",
      nombre: "Candiles",
      promo: "14 y 15 de Febrero",
      marca: "EF",
      tienda: "85108"
    },
    {
      idEstado: "QUE",
      estado: "Querétaro"
    },
    {
      idMunicipio: "QUE01",
      municipio: "Querétaro"
    }];
  idsDict ["t85189"] = [{lat: 20.387083, lng: -99.996803}, 
    {
      direccion: "BENITO JUAREZ NO. 5 ORIENTE, COL. CENTRO. SAN JUAN DEL RIO, QUERETARO ,C.P 76800",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-16:00 Domingos: 10:00-14:00",
      telefono: "4272729638",
      nombre: "San Juan del Río",
      promo: "14 y 15 de Febrero",
      marca: "EF",
      tienda: "85189"
    },
    {
      idEstado: "QUE",
      estado: "Querétaro"
    },
    {
      idMunicipio: "QUE04",
      municipio: "San Juan del Río"
    }];
  idsDict ["t85436"] = [{lat: 19.479034, lng: -99.186985}, 
    {
      direccion: "AV. AZCAPOTZALCO NO.562, COL. CENTRO AZCAPOTZALCO, DEL. AZCAPOTZALCO, CDMX, C.P. 02000",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5553471154",
      nombre: "Azcapotzalco Centro",
      promo: "14 y 15 de Febrero",
      marca: "EF",
      tienda: "85436"
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
      nombre: "Calz. Guadalupe",
      promo: "14 y 15 de Febrero",
      marca: "EF",
      tienda: "85089"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX03",
      municipio: "Gustavo A. Madero"
    }];
  idsDict ["t85106"] = [{lat: 19.426064, lng: -99.142429}, 
    {
      direccion: "EJE CENTRAL LÁZARO CÁRDENAS 13 LOC. H, COL. DOCTORES,  DEL CUAUHTÉMOC ,MÉXICO, D.F.CP 06720",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5555782851",
      nombre: "Salto del Agua",
      promo: "14 y 15 de Febrero",
      marca: "EF",
      tienda: "85106"
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
      nombre: "San Ángel",
      promo: "14 y 15 de Febrero",
      marca: "EF",
      tienda: "85197"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX07",
      municipio: "Álvaro Obregón"
    }];
  idsDict ["t85030"] = [{lat: 19.382956, lng: -99.236044}, 
    {
      direccion: "AV. VASCO DE QUIROGA NO.1540 (ANTES NO. 9), COLONIA SANTA FE, DELEGACIÓN ÁLVARO OBREGÓN, CDMX, C.P. 01250",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5552574001",
      nombre: "Vasco de Quiroga",
      promo: "14 y 15 de Febrero",
      marca: "EF",
      tienda: "85030"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX08",
      municipio: "Álvaro Obregón"
    }];
  idsDict ["t85218"] = [{lat: 19.634534, lng: -99.100303}, 
    {
      direccion: "VÍA LÓPEZ PORTILLO NO.196 COACALCO BERRIOZABAL, ESTADO DE MÉXICO, C.P. 55707",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5515421742",
      nombre: "Coacalco",
      promo: "14 y 15 de Febrero",
      marca: "EF",
      tienda: "85218"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX06",
      municipio: "Coacalco de Berriozabal"
    }];
  idsDict ["t85244"] = [{lat: 19.660524, lng: -99.081023}, 
    {
      direccion: "AV. MAGNOLIAS S/N LOTE 53, COL. GRANJAS SAN PABLO TULTITLÁN, ESTADO DE MÉXICO, C.P. 54930",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 10:00-17:00",
      telefono: "5558799656",
      nombre: "Magnolias",
      promo: "14 y 15 de Febrero",
      marca: "EF",
      tienda: "85244"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX04",
      municipio: "Tultitlán"
    }];
  idsDict ["t85072"] = [{lat: 19.622638, lng: -99.316523}, 
    {
      direccion: "AV. 16 DE SEPTIEMBRE NO.54, COL. HIDALGO, PRIMERA  SECCIÓN, NICOLÁS ROMERO, ESTADO DE MÉXICO, C.P. 54400",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5558214889",
      nombre: "Nicolás Romero",
      promo: "14 y 15 de Febrero",
      marca: "EF",
      tienda: "85072"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX05",
      municipio: "Nicolás Romero"
    }];
  idsDict ["t85444"] = [{lat: 25.7882884, lng: -108.993513}, 
    {
      direccion: "AV. MIGUEL HIDALGO NO.243 PONIENTE, COL. CENTRO, LOS MOCHIS, SINALOA, C.P. 81200",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "6686887159",
      nombre: "Los Mochis",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85444"
    },
    {
      idEstado: "SIN",
      estado: "Sinaloa"
    },
    {
      idMunicipio: "SIN03",
      municipio: "Los Mochis"
    }];
  idsDict ["t85126"] = [{lat: 19.046791, lng: -98.201259}, 
    {
      direccion: "5 NORTE NO. 7 ESQ. 2 PONIENTE, COL. CENTRO HISTÓRICO, PUEBLA, PUEBLA, C.P. 72000",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "2222426332",
      nombre: "5 Norte",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85126"
    },
    {
      idEstado: "PUE",
      estado: "Puebla"
    },
    {
      idMunicipio: "PUE05",
      municipio: "Puebla"
    }];
  idsDict ["t85114"] = [{lat: 18.967105, lng: -98.240972}, 
    {
      direccion: "VANGUARDIA REVOLUCIONARIA / 3 SUR NO.13535, COL. S.N.T.E., PUEBLA, PUEBLA, C.P. 72499",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 11:00-16:00",
      telefono: "2222416317",
      nombre: "Balcones",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85114"
    },
    {
      idEstado: "PUE",
      estado: "Puebla"
    },
    {
      idMunicipio: "PUE04",
      municipio: "Puebla"
    }];
  idsDict ["t85113"] = [{lat: 19.055266, lng: -98.1349}, 
    {
      direccion: "BLVD. ATEMPAN NO.15, COL. BOSQUES DE AMALUCAN, PUEBLA, PUEBLA, C.P. 72310",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "2222918850",
      nombre: "Billares",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85113"
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
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 11:00-16:00",
      telefono: "2222209427",
      nombre: "Capu II",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85164"
    },
    {
      idEstado: "PUE",
      estado: "Puebla"
    },
    {
      idMunicipio: "PUE03",
      municipio: "Puebla"
    }];
  idsDict ["t85057"] = [{lat: 19.158298, lng: -98.406282}, 
    {
      direccion: "PLAZA PRINCIPAL NO.209, COL. SAN MARTÍN HUEJOTZINGO, HUEJOTZINGO, PUEBLA, C.P. 74160 ",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "2272760142",
      nombre: "Huejotzingo",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85057"
    },
    {
      idEstado: "PUE",
      estado: "Puebla"
    },
    {
      idMunicipio: "PUE01",
      municipio: "Huejotzingo"
    }];
  idsDict ["t85310"] = [{lat: 19.312201, lng: -97.922284}, 
    {
      direccion: "AV. ZARAGOZA PTE. NO.102, COL. CENTRO, HUAMANTLA, TLAXCALA, C.P. 90500 ",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 11:00-16:00",
      telefono: "2474722030",
      nombre: "Huamantla",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85310"
    },
    {
      idEstado: "TLA",
      estado: "Tlaxcala"
    },
    {
      idMunicipio: "TLA02",
      municipio: "Huamantla"
    }];
  idsDict ["t85111"] = [{lat: 19.207616, lng: -96.183819}, 
    {
      direccion: "AV. DTR. VÍCTOR SÁNCHEZ TAPIA NO.359 LOCAL 2, COL. ASTILLEROS,  VERACRUZ, VERACRUZ, C.P. 91800",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "2299801852",
      nombre: "Astilleros",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85111"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER01",
      municipio: "Veracruz"
    }];
  idsDict ["t85107"] = [{lat: 19.572135, lng: -96.922298}, 
    {
      direccion: "ATENAS VERACRUZANAS N° 121, COL. REVOLUCIÓN, XALAPA, VERACRUZ, C.P. 91100",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "2288436184",
      nombre: "Atenas Veracruzanas",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85107"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER02",
      municipio: "Xalapa"
    }];
  idsDict ["t85217"] = [{lat: 19.527878, lng: -96.926275}, 
    {
      direccion: "AV. MANUEL ÁVILA CAMACHO NO. 22, COL. CENTRO, XALAPA, VERACRUZ, C.P. 91000",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "2288179383",
      nombre: "Ávila Camacho",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85217"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER03",
      municipio: "Xalapa"
    }];
  idsDict ["t85095"] = [{lat: 19.144743, lng: -96.125989}, 
    {
      direccion: "PASEO EJÉRCITO MEXICANO NO.1764 D, COL. EJIDO 1RO DE MAYO, BOCA DEL RÍO, VERACRUZ, C.P. 94298",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "2291304324",
      nombre: "Boca del Río",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85095"
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
      nombre: "Boca del Río 2",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85112"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER10",
      municipio: "Boca del Río"
    }];
  idsDict ["t85041"] = [{lat: 19.370768, lng: -96.37404}, 
    {
      direccion: "EMILIANO ZAPATA NÚMERO 28, COL. CENTRO CARDEL, LA ANTIGUA, CARDEL, VERACRUZ, C.P. 91680",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "2969624446",
      nombre: "Cardel",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85041"
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
      nombre: "Coatepec",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85439"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER06",
      municipio: "Coatepec"
    }];
  idsDict ["t85044"] = [{lat: 19.15866, lng: -96.131324}, 
    {
      direccion: "PROLONGACIÓN SALVADOR DÍAZ MIRÓN NO. 4251 (ANTES NO.127), COL. DEL MAESTRO, VERACRUZ, VER., C.P. 91920",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "2299227695",
      nombre: "Díaz Mirón",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85044"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER09",
      municipio: "Veracruz"
    }];
  idsDict ["t85094"] = [{lat: 19.196757, lng: -96.132833}, 
    {
      direccion: "GÓMEZ FARÍAS NO.88-A ESQ.VÍCTIMAS 25 JUNIO, COL. CENTRO, VERACRUZ, VERACRUZ, C.P. 91700",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "2299311842",
      nombre: "Gómez Farías",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85094"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER12",
      municipio: "Veracruz"
    }];
  idsDict ["t85427"] = [{lat: 20.536906, lng: -97.471422}, 
    {
      direccion: "BLVD. LÁZARO CÁRDENAS NO.997, COL. IGNACIO DE LA LLAVE, POZA RICA, VERACRUZ, C.P. 93327",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 11:00-16:00",
      telefono: "7828265779",
      nombre: "Lázaro Cárdenas",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85427"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER13",
      municipio: "Poza Rica"
    }];
  idsDict ["t85251"] = [{lat: 19.169063, lng: -96.226248}, 
    {
      direccion: "CALLE ABEDULES NO.80, LOTE 1, MANZANA 2, CD. INDUSTRIAL BRUNO PAGLIAI, VERACRUZ, VERACRUZ, C.P. 91697",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 10:00-17:00",
      telefono: "2299812945",
      nombre: "Plaza Progreso",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85251"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER16",
      municipio: "Veracruz"
    }];
  idsDict ["t85019"] = [{lat: 20.529353, lng: -97.461713}, 
    {
      direccion: "12 ORIENTE S/N, COL. OBRERA, POZA RICA, VERACRUZ, C.P.93260",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 11:00-16:00",
      telefono: "7828244597",
      nombre: "Poza Rica",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85019"
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
      nombre: "Poza Rica II",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85322"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER17",
      municipio: "Poza Rica"
    }];
  idsDict ["t85428"] = [{lat: 19.557126, lng: -96.932598}, 
    {
      direccion: "AV. ADOLFO RUIZ CORTÍNEZ NO.3214, COL. UNIDAD MAGISTERIAL, XALAPA, VERACRUZ, C.P. 91010",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "2288159191",
      nombre: "Ruiz Cortínez",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85428"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER20",
      municipio: "Xalapa"
    }];
  idsDict ["t85306"] = [{lat: 20.953002, lng: -97.400642}, 
    {
      direccion: "GENARO RODRÍGUEZ NO.39, COL. CENTRO, TUXPAN, VERACRUZ, C.P. 92800 ",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "7838354615",
      nombre: "Tuxpan",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85306"
    },
                        {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER22",
      municipio: "Veracruz"
    }];
  idsDict ["t85490"] = [{lat: 18.806538, lng: -97.177992}, 
    {
      direccion: "Avenida Miguel Hidalgo No. 311, Colonia El Águila, Ciudad Mendoza, Veracruz, 94734.",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "26881313",
      nombre: "Atenas Veracruzanas"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER08",
      municipio: "Tuxpan"
    }];
  idsDict ["t85098"] = [{lat: 19.537153, lng: -96.923376}, 
    {
      direccion: "AV. 20 DE NOVIEMBRE OTE. NO.1, COL. CENTRO, XALAPA, VERACRUZ, C.P. 91000",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "2288903396",
      nombre: "Xalapa 20 Nov.",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85098"
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
      nombre: "Xalapa Cristal",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85081"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER18",
      municipio: "Xalapa"
    }];
  idsDict ["t85367"] = [{lat: 26.927188, lng: -101.452286}, 
    {
      direccion: "AV. FRANCISCO I. MADERO S/N, COL. FRONTERA CENTRO, FRONTERA, COAHUILA, C.P. 25600",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "8666346554",
      nombre: "Frontera",
      promo: "14 y 15 de Febrero",
      marca: "EF",
      tienda: "85367"
    },
    {
      idEstado: "COA",
      estado: "Coahuila"
    },
    {
      idMunicipio: "COA01",
      municipio: "Frontera"
    }];
  idsDict ["t85075"] = [{lat: 25.653994, lng: -100.208565}, 
    {
      direccion: "ELOY CAVAZOS NO.5310, COL. VILLA OLÍMPICA, GUADALUPE, NUEVO LEÓN, C.P. 67180",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "8183616225",
      nombre: "Eloy Cavazos",
      promo: "14 y 15 de Febrero",
      marca: "EF",
      tienda: "85075"
    },
    {
      idEstado: "NLE",
      estado: "Nuevo León"
    },
    {
      idMunicipio: "NLE01",
      municipio: "Guadalupe"
    }];
  idsDict ["t85079"] = [{lat: 25.723993, lng: -100.192728}, 
    {
      direccion: "ACAPULCO NO.129, COL. JOSEFA ZOZAYA, GUADALUPE, NUEVO LEÓN, C.P. 67110",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "8183415448",
      nombre: "Monterrey Acapulco",
      promo: "14 y 15 de Febrero",
      marca: "EF",
      tienda: "85079"
    },
    {
      idEstado: "NLE",
      estado: "Nuevo León"
    },
    {
      idMunicipio: "NLE02",
      municipio: "Guadalupe"
    }];
  idsDict ["t85068"] = [{lat: 17.977657, lng: -92.93033}, 
    {
      direccion: "PASEO USUMACINTA NO.110, COL. PRIMERO DE MAYO, VILLAHERMOSA, TABASCO, C.P. 86190",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 09:00-15:00",
      telefono: "9933154178",
      nombre: "Fuente Maya",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85068"
    },
    {
      idEstado: "TAB",
      estado: "Tabasco"
    },
    {
      idMunicipio: "TAB07",
      municipio: "Villahermosa"
    }];
  idsDict ["t85031"] = [{lat: 18.39558, lng: -93.215123}, 
    {
      direccion: "GREGORIO MÉNDEZ MAGAÑA NO. 108, COL. CENTRO, PARAÍSO, TABASCO, C.P. 86600",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 10:00-15:00",
      telefono: "9333333378",
      nombre: "Paraíso",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85031"
    },
    {
      idEstado: "TAB",
      estado: "Tabasco"
    },
    {
      idMunicipio: "TAB06",
      municipio: "Paraíso"
    }];
  idsDict ["t85001"] = [{lat: 25.856541, lng: -97.504789}, 
    {
      direccion: "PZA. SAN PATRICIO SEXTA 1503/L13 ESQ.MARINA NACIONAL, FRACC. MODERNO, MATAMOROS, TAMAULIPAS, C.P 87350",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "(01868) 8194733",
      nombre: "Matamoros",
      promo: "14 y 15 de Febrero",
      marca: "EF",
      tienda: "85001"
    },
    {
      idEstado: "TAM",
      estado: "Tamaulipas"
    },
    {
      idMunicipio: "TAM01",
      municipio: "Matamoros"
    }];
  idsDict ["t85004"] = [{lat: 25.881625, lng: -97.504684}, 
    {
      direccion: "C. SEXTA NO.1300 ENTRE ABASOLO Y MATAMOROS, COL. CENTRO, MATAMOROS, TAMAULIPAS, C.P. 87300",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "8681490896",
      nombre: "Matamoros 2",
      promo: "14 y 15 de Febrero",
      marca: "EF",
      tienda: "85004"
    },
    {
      idEstado: "TAM",
      estado: "Tamaulipas"
    },
    {
      idMunicipio: "TAM02",
      municipio: "Matamoros"
    }];
  idsDict ["t85437"] = [{lat: 22.215397, lng: -97.855941}, 
    {
      direccion: "EMILIO CARRANZA NO.301 Y 302, COL. CENTRO, TAMPICO, TAMAULIPAS, C.P. 89000",
      horario: "Lunes a Viernes: 10:00-20:00 Sábados: 10:00-17:00 Domingos: 11:00-16:00",
      telefono: "8331900319",
      nombre: "Tampico Centro",
      promo: "14 y 15 de Febrero",
      marca: "EF",
      tienda: "85437"
    },
    {
      idEstado: "TAM",
      estado: "Tamaulipas"
    },
    {
      idMunicipio: "TAM06",
      municipio: "Tampico"
    }];
  idsDict ["t85424"] = [{lat: 18.123492, lng: -94.456786}, 
    {
      direccion: "BLVD. JUAN OSORIO LÓPEZ NO.409, COL. FRANCISCO VILLA, COATZACOALCOS, VERACRUZ, C.P. 96566",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 10:00-15:00",
      telefono: "9212157166",
      nombre: "Francisco Villa",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85424"
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
      nombre: "Minatitlán Centro",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85419"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER15",
      municipio: "Minatitlán"
    }];
  idsDict ["t85180"] = [{lat: 17.993141, lng: -94.57651}, 
    {
      direccion: "KM 264 DE LA CARRETERA TRANSÍSTMICA, LT. 18, MZA. 10, COL. INSURGENTES SUR,  MINATITLÁN, VERACRUZ, C.P. 96710 ",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 10:00-15:00",
      telefono: "9222417413",
      nombre: "Minatitlán II",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85180"
    },
    {
      idEstado: "VER",
      estado: "Veracruz"
    },
    {
      idMunicipio: "VER11",
      municipio: "Minatitlán"
    }];
  idsDict ["t85132"] = [{lat: 21.88703, lng: -102.250262}, 
    {
      direccion: "AV. SIGLO XXI NO.5202 LOC. 2, FRACC. HACIENDAS DE AGUASCALIENTES, AGUASCALIENTES, AGUASCALIENTES, C.P. 20196",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "4499171011",
      nombre: "Siglo XXI",
      promo: "14 y 15 de Febrero",
      marca: "EF",
      tienda: "85132"
    },
    {
      idEstado: "AGU",
      estado: "Aguascalientes"
    },
    {
      idMunicipio: "AGU01",
      municipio: "Aguascalientes"
    }];
  idsDict ["t85124"] = [{lat: 21.10235, lng: -101.613796}, 
    {
      direccion: "AV. OLÍMPICA NO.1501-2, COL. PRADERAS DE AGUA AZUL, LEÓN, GUANAJUATO, C.P. 37290",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "4777410356",
      nombre: "Agua Azul",
      promo: "14 y 15 de Febrero",
      marca: "EF",
      tienda: "85124"
    },
    {
      idEstado: "GUA",
      estado: "Guanajuato"
    },
    {
      idMunicipio: "GUA02",
      municipio: "León"
    }];
  idsDict ["t85117"] = [{lat: 21.121945, lng: -101.73007}, 
    {
      direccion: "BLVD. MARIANO ESCOBEDO NO.5514, COL. LAS HILAMAS, LEÓN, GUANAJUATO, C.P. 37407",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "4771007518",
      nombre: "Hilamas",
      promo: "14 y 15 de Febrero",
      marca: "EF",
      tienda: "85117"
    },
    {
      idEstado: "GUA",
      estado: "Guanajuato"
    },
    {
      idMunicipio: "GUA01",
      municipio: "León"
    }];
  idsDict ["t85456"] = [{lat: 20.345194, lng: -102.019361}, 
    {
      direccion: "AV. PADRE HIDALGO, NO. 229, COL. CENTRO, PÉNJAMO, GUANAJUATO. C.P. 36910",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00",
      telefono: "3525241007",
      nombre: "Padre Hidalgo",
      promo: "13 y 14 de Febrero",
      marca: "EF",
      tienda: "85456"
    },
    {
      idEstado: "GUA",
      estado: "Guanajuato"
    },
    {
      idMunicipio: "GUA06",
      municipio: "Pénjamo"
    }];
  idsDict ["t85452"] = [{lat: 20.431043, lng: -101.722253}, 
    {
      direccion: "CALLE ALDAMA NO.3 A, COL. CENTRO, PÉNJAMO, GUANAJUATO, C.P. 36900",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00",
      telefono: "4696927383",
      nombre: "Pénjamo",
      promo: "7 y 8 de Febrero",
      marca: "EF",
      tienda: "85452"
    },
    {
      idEstado: "GUA",
      estado: "Guanajuato"
    },
    {
      idMunicipio: "GUA04",
      municipio: "Pénjamo"
    }];
  idsDict ["t85123"] = [{lat: 20.714893, lng: -103.354262}, 
    {
      direccion: "AV. FEDERALISMO NTE. NO.2380 A, COL. JARDINES DE ATEMAJAC,  ZONA HUENTITÁN, GUADALAJARA, JALISCO, C.P. 44227",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "3338242340",
      nombre: "Federalismo",
      promo: "14, 15, 29 de Febrero",
      marca: "EF",
      tienda: "85123"
    },
    {
      idEstado: "JAL",
      estado: "Jalisco"
    },
    {
      idMunicipio: "JAL01",
      municipio: "Guadalajara"
    }];
  idsDict ["t85173"] = [{lat: 20.528674, lng: -103.379227}, 
    {
      direccion: "AV. DE LA CONCEPCIÓN NO. 22, COL. CONCEPCIÓN DEL VALLE, TLAJOMULCO DE ZÚÑIGA, JALISCO, C.P. 45653",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "3311895085",
      nombre: "Toluquilla",
      promo: "14, 16, 29 de Febrero",
      marca: "EF",
      tienda: "85173"
    },
    {
      idEstado: "JAL",
      estado: "Jalisco"
    },
    {
      idMunicipio: "JAL02",
      municipio: "Tlajomulco de Zúñiga"
    }];
  idsDict ["t85121"] = [{lat: 20.634399, lng: -103.283518}, 
    {
      direccion: "AV. ÁLVAREZ DEL CASTILLO NO.379 ESQ. AV.PATRIA, COL. INFONAVIT LA SOLEDAD, TONALÁ, JALISCO, C.P. 45403",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-19:00 Domingos: 10:00-15:00",
      telefono: "3336803126",
      nombre: "Tonalá",
      promo: "14, 15, 29 de Febrero",
      marca: "EF",
      tienda: "85121"
    },
    {
      idEstado: "JAL",
      estado: "Jalisco"
    },
    {
      idMunicipio: "JAL03",
      municipio: "Guadalajara"
    }];
  idsDict ["t85451"] = [{lat: 20.341361, lng: -102.023194}, 
    {
      direccion: "CALLE MARIANO JIMÉNEZ NO.101 ESQ. PLAZUELA CABOADO, COL. CENTRO, LA PIEDAD, MICHOACÁN, C.P. 59300",
      horario: "Lunes a Viernes: 09:00-18:00 Sábados: 09:00-16:00",
      telefono: "3525224459",
      nombre: "La Piedad",
      promo: "13 y 14 de Febrero",
      marca: "EF",
      tienda: "85451"
    },
    {
      idEstado: "MIC",
      estado: "Michoacán"
    },
    {
      idMunicipio: "MIC06",
      municipio: "La Piedad"
    }];
  idsDict ["t85185"] = [{lat: 19.418106, lng: -102.055654}, 
    {
      direccion: "FRANCISCO VILLA NO.54, ENTRE LAS CALLES DE SARABIA Y MORELOS, COL. MORELOS, URUAPAN, MICHOACÁN, C.P. 60050",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00 Domingos: 10:00-15:00",
      telefono: "4525246159",
      nombre: "Uruapan",
      promo: "7, 8, 13, 14 de Febrero",
      marca: "EF",
      tienda: "85185"
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
      nombre: "Zacapu",
      promo: "7 y 8 de Febrero",
      marca: "EF",
      tienda: "85212"
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
      nombre: "Zamora",
      promo: "7, 8, 13, 14 de Febrero",
      marca: "EF",
      tienda: "85162"
    },
    {
      idEstado: "MIC",
      estado: "Michoacán"
    },
    {
      idMunicipio: "MIC05",
      municipio: "Zamora"
    }];
  idsDict ["t85425"] = [{lat: 19.338643, lng: -90.726317}, 
    {
      direccion: "AV. LUIS DONALDO COLOSIO MURRIETA NO.409, COL. LOS MANGUITOS, CIUDAD DE CHAMPOTÓN, CAMPECHE, C.P. 24400",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00 Domingos: 10:00-15:00",
      telefono: "9828283397",
      nombre: "Champotón",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85425"
    },
    {
      idEstado: "CAM",
      estado: "Campeche"
    },
    {
      idMunicipio: "CAM02",
      municipio: "Champotón"
    }];
  idsDict ["t85086"] = [{lat: 16.763309, lng: -93.139848}, 
    {
      direccion: "5A. AVENIDA NORTE PONIENTE NO.2438, COL. LOS ELECTRICISTAS, TUXTLA GUTIÉRREZ, CHIAPAS, C.P. 29040",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00",
      telefono: "9611251254",
      nombre: "Plaza Tuxtla",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85086"
    },
    {
      idEstado: "CHP",
      estado: "Chiapas"
    },
    {
      idMunicipio: "CHP06",
      municipio: "Tuxtla Gutiérrez"
    }];
  idsDict ["t85372"] = [{lat: 21.166728, lng: -86.842422}, 
    {
      direccion: "LOTES 1 Y 2, AV. JOSÉ LÓPEZ PORTILLO, MANZANA 21, SUPERMANZANA 91, ZONA URBANA DE CANCÚN, QUINTANA ROO, C.P. 77516",
      horario: "Lunes a Viernes: 09:00-19:00 Sábados: 09:00-15:00",
      telefono: "9988883085",
      nombre: "López Portillo",
      promo: "14 de Febrero",
      marca: "EF",
      tienda: "85372"
    },
    {
      idEstado: "ROO",
      estado: "Quintana Roo"
    },
    {
      idMunicipio: "ROO01",
      municipio: "Benito Juárez, Cancún"
    }];
  idsDict ["t85512"] = [{lat: 19.423713, lng: -99.064515}, 
    {
      direccion: "CALLE CIRCUNVALACIÓN MZ 22, LT 14, COL. ARENAL, DEL. VENUSTIANO CARRANZA, CDMX, C.P. 15600",
      horario: "Lunes a Viernes: 09:00-17:45 Sábados: 09:00-16:00 Domingos: 11:00-16:00",
      telefono: "5557562976",
      nombre: "Arenal",
      promo: "14 y 15 de Febrero",
      marca: "SP",
      tienda: "85512"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX01",
      municipio: "Venustiano Carranza"
    }];
  idsDict ["t85511"] = [{lat: 19.475832, lng: -99.084672}, 
    {
      direccion: "CALLE PUERTO DE ACAPULCO NO.40, COL. FERNANDO CASAS ALEMÁN, DEL. GUSTAVO A. MADERO, CDMX, C.P. 07580",
      horario: "Lunes a Viernes: 09:00-17:45 Sábados: 09:00-16:00 Domingos: 11:00-16:00",
      telefono: "5591305384",
      nombre: "Casas Alemán",
      promo: "14 y 15 de Febrero",
      marca: "SP",
      tienda: "85511"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX04",
      municipio: "Gustavo A. Madero"
    }];
  idsDict ["t85515"] = [{lat: 19.334881, lng: -99.042759}, 
    {
      direccion: "VILLA ASCASUBI NO.L-63, COL. DESARROLLO URBANO QUETZALCÓATL, DEL. IZTAPALAPA, CDMX, C.P. 9700",
      horario: "Lunes a Viernes: 09:00-17:45 Sábados: 09:00-16:00 Domingos: 11:00-16:00",
      telefono: "5515460611",
      nombre: "Quetzalcóatl",
      promo: "14 y 15 de Febrero",
      marca: "SP",
      tienda: "85515"
    },
    {
      idEstado: "CMX",
      estado: "Ciudad de México"
    },
    {
      idMunicipio: "CMX05",
      municipio: "Iztapalapa"
    }];
  idsDict ["t85501"] = [{lat: 19.453675, lng: -99.048752}, 
    {
      direccion: "AV. AEROPUERTO NO. 10, COL. CIUDAD LAGO, NEZAHUALCÓYOTL, ESTADO DE MÉXICO, C.P. 57180",
      horario: "Lunes a Viernes: 09:00-17:45 Sábados: 09:00-16:00",
      telefono: "5550869957",
      nombre: "Aeropuerto",
      promo: "14 y 15 de Febrero",
      marca: "SP",
      tienda: "85501"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX01",
      municipio: "Nezahualcóyotl"
    }];
  idsDict ["t85500"] = [{lat: 19.304055, lng: -98.866774}, 
    {
      direccion: "COLINAS DE BAJAMARES MZ NO.5 LT 8, FRAC. SAN BUENA AVENTURA, IXTAPALUCA, ESTADO DE MÉXICO, C.P. 56530",
      horario: "Lunes a Viernes: 09:00-17:45 Sábados: 09:00-16:00 Domingos: 11:00-16:00",
      telefono: "5522303061",
      nombre: "Aventura",
      promo: "14 y 15 de Febrero",
      marca: "SP",
      tienda: "85500"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX02",
      municipio: "Ixtapaluca"
    }];
  idsDict ["t85398"] = [{lat: 19.532912, lng: -99.118339}, 
    {
      direccion: "LOTE 2 MANZANA 361 LOTE 3, 328 A (HOY MANZANA 361-A LOTE 3328, CALLE EXCURSIONISTAS TONATIUH), COL. LÁZARO CÁRDENAS, TLALNEPANTLA, ESTADO DE MÉXICO, C.P. 54189",
      horario: "Lunes a Viernes: 10:00-19:00 Sábados: 10:00-17:00",
      telefono: "5553848039",
      nombre: "La Presa",
      promo: "14 y 15 de Febrero",
      marca: "EF",
      tienda: "85398"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX03",
      municipio: "Tlalnepantla de Baz"
    }];
  idsDict ["t85534"] = [{lat: 19.434561, lng: -98.965444}, 
    {
      direccion: "AV. ORGANIZACIÓN POPULAR MZ 2 LT 19, COL. SANTA ELENA, CHIMALHUACÁN, ESTADO DE MÉXICO, C.P. 56366",
      horario: "Lunes a Viernes: 09:00-17:45 Sábados: 09:00-16:00 Domingos: 11:00-16:00",
      telefono: "5521260584",
      nombre: "Santa Elena",
      promo: "14 y 15 de Febrero",
      marca: "SP",
      tienda: "85534"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX07",
      municipio: "Chimalhuacán"
    }];
  idsDict ["t85527"] = [{lat: 19.506032, lng: -99.054846}, 
    {
      direccion: "AV. CARLOS HANK GONZÁLEZ NO.154, COL. GRANJAS VALLE DE GUADALUPE, ECATEPEC DE MORELOS, ESTADO DE MÉXICO, C.P. 55270",
      horario: "Lunes a Viernes: 09:00-17:45 Sábados: 09:00-16:00",
      telefono: "5515530425",
      nombre: "Valle de Gdpe.",
      promo: "14 y 15 de Febrero",
      marca: "SP",
      tienda: "85527"
    },
    {
      idEstado: "MEX",
      estado: "Estado de México"
    },
    {
      idMunicipio: "MEX08",
      municipio: "Ecatepec de Morelos"
    }];
    
  // mapa centrado en:
  map = new google.maps.Map(
      document.getElementById('map'), {zoom: 5, center: idsDict["t85132"] [0]});

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
      switch (idsDict[tID][1].marca) 
      { 
        case "SP": 
      var tiendaInfoDiv = document.createElement ("div");
      tiendaInfoDiv.id = tID;
      tiendaInfoDiv.innerHTML = 
    '<style type="text/css">'+
  '.enjoy-css {'+
  '-webkit-box-sizing: content-box;'+
  '-moz-box-sizing: content-box;'+
  'box-sizing: content-box;'+
  'padding: 2vw;'+
  'overflow: hidden;'+
  'border: none;'+
  'font-family: Helvetica;'+
  '-webkit-border-radius: 0 50px 50px 0;'+
  'border-radius: 0 50px 50px 0;'+
  'font-size: 1.5vw;'+
  'color: rgba(255,255,255,1);'+
  'text-align: center;'+
  '-o-text-overflow: ellipsis;'+
  'text-overflow: ellipsis;'+
  'background: #C14049;'+
  '-webkit-box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3) ;'+
  'box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3) ;'+
  'text-shadow: 1px 1px 1px rgba(0,0,0,0.2) ;'+
'}'+
'.enjoy-cssb {'+
  '-webkit-box-sizing: content-box;'+
  '-moz-box-sizing: content-box;'+
  'box-sizing: content-box;'+
  'padding: 2vw;'+
  'overflow: hidden;'+
  'border: 0 solid;'+
  'border-left: 1.3vw solid #E6E6E6;'+
  '-webkit-border-radius: 0 6px 6px 0;'+
  'border-radius: 0 15px 15px 0;'+
  'font-family: Helvetica;'+
  'font-size: 1.5vw;'+
  'color: rgba(255,255,255,1);'+
  '-o-text-overflow: ellipsis;'+
  'text-overflow: ellipsis;'+
  'background: #C14049;'+
  '-webkit-box-shadow: 0 0 0 0 rgba(0,0,0,0.3) ;'+
  'box-shadow: 0 0 0 0 rgba(0,0,0,0.3) ;'+
  'text-shadow: 1px 1px 1px rgba(0,0,0,0.2) ;'+
'}'+
'</style>'+
 '<div class="container" onclick="centerMap (\'' + tID + '\')">'+
   '<br>'+
    '<div style="padding-top: 1vw;">'+
        '<center><img src="https://empenofacil.com/img/EF_Montepio.png" style="width: 20vw;"></center>'+
    '</div><br>'+
    '<div class="enjoy-css">'+
        '<span style="font-size: 2vw;">' + idsDict [tID] [2].estado + '</span>'+
    '</div><br>'+
    '<div class="enjoy-cssb">'+
        '<i class="fa fa-shopping-cart" aria-hidden="true" style="font-size: 2.2vw;"></i><span style="font-size: 2vw;"><strong> '+
         idsDict [tID] [1].nombre + ' / </strong></span><span style="font-size: 1.8vw;"> Dirección: ' + idsDict [tID] [1].direccion + '</span><br><br>'+
        '<i class="fa fa-calendar" aria-hidden="true" style="font-size: 2.2vw;"></i><span style="font-size: 2vw;"><strong>'+
         ' VENTA ESPECIAL: </strong></span><span style="font-size: 1.8vw;">' + idsDict [tID] [1].promo + '</span>'+
    '</div>'+
  '</div>';
      tiendaInfoDiv.childNodes [0].style.cursor = "pointer";

      tiendasInfoContainer.appendChild (tiendaInfoDiv); 
        break;

        case "BZ": 
      var tiendaInfoDiv = document.createElement ("div");
      tiendaInfoDiv.id = tID;
      tiendaInfoDiv.innerHTML =
      '<style type="text/css">' +
      '.enjoy-css3 {' + 
        '-webkit-box-sizing: content-box;' +
        '-moz-box-sizing: content-box;'+
        'box-sizing: content-box;'+
        'padding: 2vw;' +
        'overflow: hidden;' +
        'border: none;' +
        '-webkit-border-radius: 0 50px 50px 0;' +
        'border-radius: 0 50px 50px 0;' +
        'font-family: Helvetica;' +
        'font-size: 1.5vw;'+ 
        'color: rgba(255,255,255,1);'+
        'text-align: center;'+
        '-o-text-overflow: ellipsis;' +
        'text-overflow: ellipsis;' +
        'background: #EE452F;'+
        '-webkit-box-shadow: 0 0 0 0 rgba(0,0,0,0.3) ;' +
        'box-shadow: 0 0 0 0 rgba(0,0,0,0.3) ;' + 
        'text-shadow: 1px 1px 1px rgba(0,0,0,0.2) ;'+
      '}'+
      '.enjoy-cssc {' +
        '-webkit-box-sizing: content-box;' +
        '-moz-box-sizing: content-box;'+
        'box-sizing: content-box;'+
        'padding: 2vw;'+
        'overflow: hidden;'+
        'border: 0 solid;'+
        'border-left: 1.3vw solid #FFF333;'+
        '-webkit-border-radius: 0 6px 6px 0;'+
        'border-radius: 0 15px 15px 0;'+
        'font-family: Helvetica;'+
        'font-size: 1.5vw;'+
        'color: rgba(255,255,255,1);'+
        '-o-text-overflow: ellipsis;'+
        'text-overflow: ellipsis;'+
        'background: #EE452F;'+
        '-webkit-box-shadow: 0 0 0 0 rgba(0,0,0,0.3) ;'+
        'box-shadow: 0 0 0 0 rgba(0,0,0,0.3) ;'+
        'text-shadow: 1px 1px 1px rgba(0,0,0,0.2) ;'+
      '}'+
      '</style>'+
       '<div class="container" onclick="centerMap (\'' + tID + '\')">'+
          '<div class="col-xl-12 col-md-12">' +
            '<div>'+
                '<img src="" width="180px">' +
            '</div><br>' +
            '<div class="enjoy-css3">' + 
                '<img src="https://empenofacil.com/img/EF_Bazaren%CC%83o.png" style="width: 3.5vw;">' + 
                '<span style="font-size: 2vw;">' + idsDict [tID] [2].estado + '</span>' +
            '</div><br>' + 
            '<div class="enjoy-cssc">' + 
                '<i class="fa fa-shopping-cart" aria-hidden="true" style="font-size: 2.2vw;"></i><span style="font-size: 2vw;"><strong> ' +
                idsDict [tID] [1].nombre + ' / </strong></span><span style="font-size: 1.8vw;"> Dirección: ' + idsDict [tID] [1].direccion + '</span><br><br>' +
                '<i class="fa fa-calendar" aria-hidden="true" style="font-size: 2.2vw;"></i><span style="font-size: 2vw;"><strong>' + 
                ' VENTA ESPECIAL: </strong></span><span style="font-size: 1.8vw;">' + idsDict [tID] [1].promo + '</span>' + 
            '</div>' + 
        '</div>' + 
      '</div>';
      tiendaInfoDiv.childNodes [0].style.cursor = "pointer";

      tiendasInfoContainer.appendChild (tiendaInfoDiv); 
        break; 
        default: 
      var tiendaInfoDiv = document.createElement ("div");
      tiendaInfoDiv.id = tID;
      tiendaInfoDiv.innerHTML = 
      '<style type="text/css">'+
      '.enjoy-css2 {'+
        '-webkit-box-sizing: content-box;'+
        '-moz-box-sizing: content-box;'+
        'box-sizing: content-box;'+
        'padding: 2vw;'+
        'overflow: hidden;'+
        'border: none;'+
        '-webkit-border-radius: 0 50px 50px 0;'+
        'border-radius: 0 50px 50px 0;'+
        'font-family: Helvetica;'+
        'font-size: 1.5vw;'+
        'color: rgba(255,255,255,1);'+
        'text-align: center;'+
        '-o-text-overflow: ellipsis;'+
        'text-overflow: ellipsis;'+
        'background: #052487;'+
        '-webkit-box-shadow: 0 0 0 0 rgba(0,0,0,0.3) ;'+
        'box-shadow: 0 0 0 0 rgba(0,0,0,0.3) ;'+
        'text-shadow: 1px 1px 1px rgba(0,0,0,0.2) ;'+
      '}'+
      '.enjoy-cssc {'+
        '-webkit-box-sizing: content-box;'+
        '-moz-box-sizing: content-box;'+
        'box-sizing: content-box;'+
        'padding: 2vw;'+
        'overflow: hidden;'+
        'border: 0 solid;'+
        'border-left: 1.3vw solid #FFF333;'+
        '-webkit-border-radius: 0 6px 6px 0;'+
        'border-radius: 0 15px 15px 0;'+
        'font-family: Helvetica;'+
        'font-size: 1.5vw;'+
        'color: rgba(255,255,255,1);'+
        '-o-text-overflow: ellipsis;'+
        'text-overflow: ellipsis;'+
        'background: #EE452F;'+
        '-webkit-box-shadow: 0 0 0 0 rgba(0,0,0,0.3);'+
        'box-shadow: 0 0 0 0 rgba(0,0,0,0.3);'+
       ' text-shadow: 1px 1px 1px rgba(0,0,0,0.2);'+
      '}'+
      '</style>'+
       '<div class="container" onclick="centerMap (\'' + tID + '\')">'+
        '<div class="col-xl-12 col-md-12">' +
            '<div>' +
                '<img src="" width="180px">' +
            '</div><br>' +
            '<div class="enjoy-css2">' +
                '<img src="https://empenofacil.com/img/favicon.ico" style="width: 3vw;">' +
                '<span style="font-size: 2vw;">' + idsDict [tID] [2].estado + '</span>' +
            '</div><br>' +
            '<div class="enjoy-cssc">' +
                '<i class="fa fa-shopping-cart" aria-hidden="true" style="font-size: 2.2vw;"></i><span style="font-size: 2vw;"><strong> ' +
                 idsDict [tID] [1].nombre + ' / </strong></span><span style="font-size: 1.8vw;"> Dirección: ' + idsDict [tID] [1].direccion + '</span><br><br>' +
                '<i class="fa fa-calendar" aria-hidden="true" style="font-size: 2.2vw;"></i><span style="font-size: 2vw;"><strong>' + 
                ' VENTA ESPECIAL: </strong></span><span style="font-size: 1.8vw;">' + idsDict [tID] [1].promo + '</span>' +
          '</div>' +
        '</div>';
      tiendaInfoDiv.childNodes [0].style.cursor = "pointer";

      tiendasInfoContainer.appendChild (tiendaInfoDiv);
        break; 
      }
    }
  }

  //tiendasSelect.onchange = map.setCenter (idsDict [tiendasSelect.options [tiendasSelect.selectedIndex].value]);
}



