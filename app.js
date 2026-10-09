/**
 * MUNDO TOTAL - Interactive Web Application Logic
 * Full functionality: Brand tabs, Accordion Drawer, Dynamic Cart,
 * Product Modals, Live Search, Hero Carousel, and Multi-Currency calculation.
 */

// Exchange rate USD -> Bs (Official rate requested: Bs 875.65 x 1$)
const BS_RATE = 875.65;

// Complete Product Catalog with Official Images from tumundototal.com
const catalogData = {
  LG: [
    {
      id: "lg-1",
      brand: "LG",
      title: "Nevera Top Freezer 266L Smart Inverter Plateada",
      originalPrice: 99.99,
      price: 99.99,
      image: "https://totalmundo.vteximg.com.br/arquivos/ids/274851/LGG19UG10B40UN.png?v=639223092068570000",
      category: "Electrodomésticos",
      description: "Nevera LG con tecnología Smart Inverter Compressor que ahorra energía y garantiza máxima durabilidad. Capacidad de 266 litros con sistema Multi Air Flow y enfriamiento uniforme.",
      specs: ["Capacidad: 266 Litros", "Motor Smart Inverter con 10 años de garantía", "Acabado en Acero Inoxidable Plateado", "Sistema Multi Air Flow"]
    },
    {
      id: "lg-2",
      brand: "LG",
      title: "Nevera Top Freezer 266L Smart Inverter Plateada",
      originalPrice: 99.99,
      price: 99.99,
      image: "https://totalmundo.vteximg.com.br/arquivos/ids/274851/LGG19UG10B40UN.png?v=639223092068570000",
      category: "Electrodomésticos",
      description: "Nevera LG con tecnología Smart Inverter Compressor que ahorra energía y garantiza máxima durabilidad. Capacidad de 266 litros con sistema Multi Air Flow.",
      specs: ["Capacidad: 266 Litros", "Motor Smart Inverter", "Acabado en Acero Inoxidable", "Garantía oficial"]
    },
    {
      id: "lg-3",
      brand: "LG",
      title: "Microondas NeoChef Smart Inverter 25L Negro",
      originalPrice: 119.99,
      price: 89.99,
      image: "https://totalmundo.vteximg.com.br/arquivos/ids/259712/LG-MICROONDAS-30L-NEGRO-LGG19UG12B40UN.png?v=639157614610500000",
      category: "Electrodomésticos",
      description: "Descongelado y cocción uniforme con recubrimiento EasyClean antibacterial que elimina el 99.99% de bacterias.",
      specs: ["Capacidad: 25 Litros", "Tecnología Smart Inverter", "Recubrimiento EasyClean", "Luz LED interior"]
    },
    {
      id: "lg-4",
      brand: "LG",
      title: "Smart TV LG 43' UHD 4K ThinQ AI HDR10",
      originalPrice: 299.99,
      price: 249.99,
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&auto=format&fit=crop&q=80",
      category: "Tecnología",
      description: "Procesador α5 Gen5 AI con resolución 4K real, webOS inteligente y compatibilidad con Apple AirPlay y Alexa.",
      specs: ["43 Pulgadas 4K UHD", "Sistema webOS 23", "Procesador α5 AI 4K", "HDR10 Pro"]
    },
    {
      id: "lg-5",
      brand: "LG",
      title: "Lavadora Carga Frontal 14kg AI DD Vapor",
      originalPrice: 520.00,
      price: 459.99,
      image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500&auto=format&fit=crop&q=80",
      category: "Electrodomésticos",
      description: "Inteligencia artificial AI DD que detecta el peso y suavidad del tejido para proteger tus prendas un 18% más.",
      specs: ["Capacidad: 14 kg", "Motor Inverter Direct Drive", "Tecnología Steam (Vapor)", "TurboWash rápido"]
    }
  ],
  Admiral: [
    {
      id: "admiral-1",
      brand: "Admiral",
      title: "Freidora de Aire 5L Digital Acero Inoxidable",
      originalPrice: 49.99,
      price: 39.98,
      image: "https://totalmundo.vteximg.com.br/arquivos/ids/274703/ADMIRAL-FREIDORA-DE-AIRE-5L-ADM19D408-ADM19D408B40UN.png?v=639224146655170000",
      category: "Electrodomésticos",
      description: "Cocina saludable con hasta 85% menos de grasa. 8 programas preestablecidos con pantalla táctil digital y cesta antiadherente libre de BPA.",
      specs: ["Capacidad: 5 Litros", "Panel digital táctil LED", "Temperatura regulable hasta 200°C", "Cesta extraíble antiadherente"]
    },
    {
      id: "admiral-2",
      brand: "Admiral",
      title: "Olla de Presión Multifuncional 6 Litros Digital",
      originalPrice: 85.00,
      price: 69.98,
      image: "https://totalmundo.vteximg.com.br/arquivos/ids/281245/ADMIRAL-OLLA-D-PRES-MULTIFUN-6L-ADM197Q0-ADM197Q03B60UN.png?v=639246468588700000",
      category: "Electrodomésticos",
      description: "Cocina rápida, segura y deliciosa. 12 programas inteligentes para carnes, granos, sopas, arroz y vaporera.",
      specs: ["Capacidad: 6 Litros", "Válvula de seguridad múltiple", "Olla interior antiadherente", "Programable 24h"]
    },
    {
      id: "admiral-3",
      brand: "Admiral",
      title: "Ventilador de Mesa 14\" Potente 3 Velocidades",
      originalPrice: 32.00,
      price: 24.98,
      image: "https://totalmundo.vteximg.com.br/arquivos/ids/282499/ADMIRAL-VENTILADOR-DE-MESA-14-ADM199S0-ADM199S08VE0UN.png?v=639248148991500000",
      category: "Electrodomésticos",
      description: "Flujo de aire continuo y silencioso para el hogar u oficina. Rejilla de seguridad y oscilación de 90 grados.",
      specs: ["Diámetro: 14 pulgadas (48 cm)", "3 velocidades ajustables", "Oscilación automática", "Motor silencioso de alta eficiencia"]
    },
    {
      id: "admiral-4",
      brand: "Admiral",
      title: "Licuadora de Inmersión 4 en 1 con Picatodo",
      originalPrice: 28.00,
      price: 21.99,
      image: "https://totalmundo.vteximg.com.br/arquivos/ids/274641/PREMIER-BATIDORA-PMI19WV23--ED-9618--PMI19WV23B60UN.png?v=639220482524500000",
      category: "Electrodomésticos",
      description: "Incluye batidor de globo, vaso medidor y picatodo de acero inoxidable con motor de 500W.",
      specs: ["Potencia: 500W", "Accesorios 4 en 1", "Cuchillas de titanio", "Control de 2 velocidades"]
    },
    {
      id: "admiral-5",
      brand: "Admiral",
      title: "Sanduchera Grill Antiadherente 2 Porciones",
      originalPrice: 22.00,
      price: 16.99,
      image: "https://totalmundo.vteximg.com.br/arquivos/ids/274585/11119PP09B40UN-2.png.png?v=639219670004600000",
      category: "Electrodomésticos",
      description: "Placas tipo parrilla con revestimiento antiadherente de fácil limpieza y luces indicadoras de temperatura.",
      specs: ["Capacidad 2 panes", "Placas tipo Grill", "Cierre de seguridad", "Termostato automático"]
    }
  ],
  PREMIER: [
    {
      id: "premier-1",
      brand: "PREMIER",
      title: "Batidora de Mano 5 Velocidades Roja Ergonómica",
      originalPrice: 18.00,
      price: 13.98,
      image: "https://totalmundo.vteximg.com.br/arquivos/ids/274641/PREMIER-BATIDORA-PMI19WV23--ED-9618--PMI19WV23B60UN.png?v=639220482524500000",
      category: "Electrodomésticos",
      description: "Batidora de mano Premier con potente motor silencioso. Incluye batidores tradicionales y ganchos amasadores de acero cromado.",
      specs: ["5 velocidades + botón Turbo", "Motor de 300W", "Batidores y ganchos de masa incluidos", "Botón de fácil expulsión"]
    },
    {
      id: "premier-2",
      brand: "PREMIER",
      title: "Arepera 2 Porciones Antiadherente Negra",
      originalPrice: 16.50,
      price: 13.59,
      image: "https://totalmundo.vteximg.com.br/arquivos/ids/274585/11119PP09B40UN-2.png.png?v=639219670004600000",
      category: "Electrodomésticos",
      description: "Prepara auténticas arepas crujientes en minutos. Placas de cocción antiadherentes de fácil limpieza.",
      specs: ["Capacidad: 2 arepas", "Placas antiadherentes", "Indicadores luminosos de encendido y listo", "Cierre de seguridad"]
    },
    {
      id: "premier-3",
      brand: "PREMIER",
      title: "Cafetera Comercial 30 Tazas Acero Inoxidable",
      originalPrice: 58.00,
      price: 47.99,
      image: "https://totalmundo.vteximg.com.br/arquivos/ids/198773/PMI196678B60UN.png?v=638864591016630000",
      category: "Electrodomésticos",
      description: "Ideal para reuniones, oficinas y negocios. Mantiene el café caliente automáticamente con grifo antigoteo.",
      specs: ["Capacidad: 30 Tazas", "Cuerpo de acero inoxidable", "Grifo dispensador antigoteo", "Filtro permanente lavable"]
    }
  ],
  Oster: [
    {
      id: "oster-1",
      brand: "Oster",
      title: "Minibar Nevera Ejecutiva Oster 84L Acero",
      originalPrice: 149.99,
      price: 129.99,
      image: "https://totalmundo.vteximg.com.br/arquivos/ids/289980/OSTER-MINIBAR-84LT-OST197C30-OST197C30B40UN.png?v=639265475364430000",
      category: "Electrodomésticos",
      description: "Minibar compacto y silencioso ideal para habitaciones, oficinas o apartamentos. Eficiencia energética A.",
      specs: ["Capacidad: 84 Litros", "Compartimiento congelador", "Control mecánico de temperatura", "Puerta reversible"]
    },
    {
      id: "oster-2",
      brand: "Oster",
      title: "Licuadora Clásica Osterizer Cromada 1.25L",
      originalPrice: 59.99,
      price: 49.99,
      image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&auto=format&fit=crop&q=80",
      category: "Electrodomésticos",
      description: "La legendaria licuadora Oster con acople metálico All-Metal Drive. Vaso de vidrio Boroclass resistente a choques térmicos.",
      specs: ["Motor de 700W", "Acople All-Metal Drive", "Vaso de vidrio Boroclass", "Cuchilla trituradora de hielo"]
    },
    {
      id: "oster-3",
      brand: "Oster",
      title: "Tostadora Eléctrica de Acero 2 Rebanadas",
      originalPrice: 32.00,
      price: 25.99,
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&auto=format&fit=crop&q=80",
      category: "Electrodomésticos",
      description: "Ranuras extra anchas para todo tipo de pan. 7 niveles de tostado con función de descongelar y recalentar.",
      specs: ["7 niveles de tostado", "Ranuras anchas", "Bandeja para migas removible", "Acabado acero cepillado"]
    }
  ],
  Samsung: [
    {
      id: "samsung-1",
      brand: "Samsung",
      title: "Smart TV Samsung 55' Crystal UHD 4K",
      originalPrice: 450.00,
      price: 389.99,
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&auto=format&fit=crop&q=80",
      category: "Tecnología",
      description: "Experimenta colores reales con Crystal Processor 4K y diseño sin bordes AirSlim.",
      specs: ["Pantalla 55 Pulgadas 4K", "Crystal Processor 4K", "Sistema Tizen OS", "Soporte HDR10+"]
    },
    {
      id: "samsung-2",
      brand: "Samsung",
      title: "Smartphone Samsung Galaxy A15 128GB LTE",
      originalPrice: 160.00,
      price: 139.99,
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&auto=format&fit=crop&q=80",
      category: "Tecnología",
      description: "Pantalla Super AMOLED de 90Hz, cámara triple de 50MP y batería de 5000 mAh con carga rápida.",
      specs: ["Pantalla 6.5' Super AMOLED", "Memoria 128GB + 4GB RAM", "Cámara 50MP", "Batería 5000mAh"]
    },
    {
      id: "samsung-3",
      brand: "Samsung",
      title: "Barra de Sonido Samsung con Subwoofer Inalámbrico",
      originalPrice: 110.00,
      price: 89.99,
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&auto=format&fit=crop&q=80",
      category: "Tecnología",
      description: "Sonido envolvente con graves potentes gracias al subwoofer inalámbrico incluido.",
      specs: ["Potencia: 150W", "Subwoofer inalámbrico", "Bluetooth integrado", "Modo juego"]
    }
  ],
  Mabe: [
    {
      id: "mabe-1",
      brand: "Mabe",
      title: "Nevera Mabe No Frost 250L Grafito Elegance",
      originalPrice: 340.00,
      price: 289.99,
      image: "https://totalmundo.vteximg.com.br/arquivos/ids/259837/AS-NEVERA-2-PUERTAS-266L-AS219VC07-AS219VC07B40UN.png?v=639161774882530000",
      category: "Electrodomésticos",
      description: "Tecnología Home Energy Saver que ahorra hasta 45% de energía. Dispensador de agua exterior y cajón para legumbres.",
      specs: ["Capacidad: 250 Litros", "Sistema No Frost", "Dispensador de agua", "Garantía oficial"]
    },
    {
      id: "mabe-2",
      brand: "Mabe",
      title: "Cocina a Gas Mabe 4 Hornillas con Horno Panorámico",
      originalPrice: 230.00,
      price: 199.99,
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&auto=format&fit=crop&q=80",
      category: "Electrodomésticos",
      description: "Cubierta sellada de acero inoxidable, encendido electrónico y ventana panorámica en el horno.",
      specs: ["4 quemadores estándar", "Cubierta de acero inoxidable", "Horno con termostato", "Parrillas esmaltadas"]
    },
    {
      id: "mabe-3",
      brand: "Mabe",
      title: "Lavadora Automática Mabe 16kg con Sistema Aqua Saver",
      originalPrice: 380.00,
      price: 329.99,
      image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500&auto=format&fit=crop&q=80",
      category: "Electrodomésticos",
      description: "Ahorra hasta 76% de agua por lavada con tecnología Aqua Saver Green. 11 ciclos de lavado automáticos.",
      specs: ["Capacidad: 16 kg", "Tecnología Aqua Saver Green", "Tina de acero inoxidable", "11 ciclos automáticos"]
    }
  ],
  Xiaomi: [
    {
      id: "xiaomi-1",
      brand: "Xiaomi",
      title: "Xiaomi Smart Air Fryer 3.5L Wi-Fi OLED",
      originalPrice: 75.00,
      price: 59.99,
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=80",
      category: "Electrodomésticos",
      description: "Cocina inteligente conectada por app Mi Home con pantalla táctil OLED y más de 100 recetas guiadas.",
      specs: ["Capacidad: 3.5 Litros", "Control por App Wi-Fi", "Pantalla táctil OLED", "Rango 40°C a 200°C"]
    },
    {
      id: "xiaomi-2",
      brand: "Xiaomi",
      title: "Smartphone Xiaomi Redmi Note 13 256GB Dual SIM",
      originalPrice: 220.00,
      price: 189.99,
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=80",
      category: "Tecnología",
      description: "Pantalla AMOLED 120Hz de 6.67 pulgadas, cámara ultra nítida de 108MP y carga rápida de 33W.",
      specs: ["Pantalla 6.67' AMOLED 120Hz", "Memoria 256GB / 8GB RAM", "Cámara 108MP", "Batería 5000 mAh"]
    },
    {
      id: "xiaomi-3",
      brand: "Xiaomi",
      title: "Smart Band 8 Xiaomi Pantalla AMOLED 60Hz",
      originalPrice: 48.00,
      price: 39.99,
      image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=500&auto=format&fit=crop&q=80",
      category: "Tecnología",
      description: "Monitor de ritmo cardíaco, oxígeno en sangre, más de 150 modos deportivos y batería de hasta 16 días.",
      specs: ["Pantalla AMOLED 1.62' 60Hz", "Resistencia 5 ATM (50m)", "Batería hasta 16 días", "+150 modos deportivos"]
    }
  ],
  Daewoo: [
    {
      id: "daewoo-1",
      brand: "Daewoo",
      title: "Smart TV Daewoo 43' Full HD Android TV",
      originalPrice: 260.00,
      price: 219.99,
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&auto=format&fit=crop&q=80",
      category: "Tecnología",
      description: "Sistema oficial Google Android TV con control por voz Google Assistant y acceso a Netflix, YouTube y Disney+.",
      specs: ["43 Pulgadas Full HD", "Android TV oficial", "Chromecast integrado", "Control por voz"]
    },
    {
      id: "daewoo-2",
      brand: "Daewoo",
      title: "Microondas Daewoo 20L Panel Espejado",
      originalPrice: 85.00,
      price: 69.99,
      image: "https://totalmundo.vteximg.com.br/arquivos/ids/259712/LG-MICROONDAS-30L-NEGRO-LGG19UG12B40UN.png?v=639157614610500000",
      category: "Electrodomésticos",
      description: "Diseño elegante con frontal de vidrio espejado y 10 niveles de potencia para calentar y descongelar al instante.",
      specs: ["Capacidad: 20 Litros", "Frontal espejado", "Descongelamiento por peso", "Bloqueo para niños"]
    },
    {
      id: "daewoo-3",
      brand: "Daewoo",
      title: "Licuadora Daewoo Potente Vaso de Vidrio 1.5L",
      originalPrice: 38.00,
      price: 29.99,
      image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500&auto=format&fit=crop&q=80",
      category: "Electrodomésticos",
      description: "Motor reforzado de 600W con 4 velocidades y función de pulso. Vaso de vidrio resistente a choques térmicos.",
      specs: ["Potencia: 600 Watts", "Vaso de vidrio 1.5 Litros", "Cuchillas de acero inox", "4 velocidades + pulso"]
    }
  ],
  Philips: [
    {
      id: "philips-1",
      brand: "Philips",
      title: "Afeitadora Eléctrica Philips AquaTouch Wet&Dry",
      originalPrice: 55.00,
      price: 42.99,
      image: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=500&auto=format&fit=crop&q=80",
      category: "Belleza",
      description: "Cabezales flexibles en 3 direcciones que se adaptan a las curvas de tu rostro para una afeitada suave y precisa.",
      specs: ["Cuchillas ComfortCut", "Uso en seco o con espuma", "Batería recargable 45 min", "Lavable bajo el grifo"]
    },
    {
      id: "philips-2",
      brand: "Philips",
      title: "Airfryer Philips Esencial XL 4.1L RapidAir",
      originalPrice: 110.00,
      price: 89.99,
      image: "https://totalmundo.vteximg.com.br/arquivos/ids/274703/ADMIRAL-FREIDORA-DE-AIRE-5L-ADM19D408-ADM19D408B40UN.png?v=639224146655170000",
      category: "Electrodomésticos",
      description: "Tecnología RapidAir exclusiva para freír con aire y obtener alimentos crujientes por fuera y tiernos por dentro.",
      specs: ["Capacidad: 4.1 Litros", "Tecnología RapidAir", "Fácil de limpiar QuickClean", "Piezas aptas para lavavajillas"]
    },
    {
      id: "philips-3",
      brand: "Philips",
      title: "Plancha de Vapor Philips ComfortGlide 2000W",
      originalPrice: 34.00,
      price: 26.99,
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&auto=format&fit=crop&q=80",
      category: "Hogar",
      description: "Golpe de vapor constante de hasta 25g/min y suela antiadherente para un deslizamiento óptimo en cualquier tela.",
      specs: ["Potencia: 2000W", "Suela antiadherente", "Sistema antical integrado", "Punta de precisión triple"]
    }
  ],
  BlackDecker: [
    {
      id: "bd-1",
      brand: "Black+Decker",
      title: "Cafetera Programable 12 Tazas Sneak-A-Cup",
      originalPrice: 45.00,
      price: 34.99,
      image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&auto=format&fit=crop&q=80",
      category: "Electrodomésticos",
      description: "Programa tu café la noche anterior con el temporizador digital QuickTouch y función Sneak-A-Cup para servir a mitad de colado.",
      specs: ["Capacidad: 12 Tazas", "Programable 24 horas", "Placa calefactora antiadherente", "Filtro permanente lavable"]
    },
    {
      id: "bd-2",
      brand: "Black+Decker",
      title: "Plancha de Vapor Ceramic Glide Antigoteo",
      originalPrice: 29.00,
      price: 22.99,
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&auto=format&fit=crop&q=80",
      category: "Hogar",
      description: "Suela de cerámica de alta durabilidad con vapor variable y rocío fino para alisar arrugas difíciles en segundos.",
      specs: ["Suela con infusión de cerámica", "Tecnología antigoteo", "Control de vapor variable", "Apagado de seguridad"]
    },
    {
      id: "bd-3",
      brand: "Black+Decker",
      title: "Tostadora 2 Rebanadas con Ranuras Extra Anchas",
      originalPrice: 32.00,
      price: 24.99,
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format&fit=crop&q=80",
      category: "Electrodomésticos",
      description: "Ranuras amplias para pan artesanal o bagels. 6 niveles de tostado y botones de cancelar y descongelar.",
      specs: ["Ranuras extra anchas", "6 niveles de tostado", "Bandeja para migas", "Palanca de elevación extra"]
    }
  ],
  Aiwa: [
    {
      id: "aiwa-1",
      brand: "Aiwa",
      title: "Corneta Bluetooth Flame Party 60W con Luces LED",
      originalPrice: 65.00,
      price: 49.99,
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&auto=format&fit=crop&q=80",
      category: "Tecnología",
      description: "Potencia estéreo de 60W con efecto de flama de luces LED dinámicas, entrada de micrófono y radio FM.",
      specs: ["Potencia: 60W RMS", "Bluetooth 5.0 + TWS", "Batería recargable 8h", "Efectos de luz LED RGB"]
    },
    {
      id: "aiwa-2",
      brand: "Aiwa",
      title: "Smart TV Aiwa 32' HD Diseño Frameless Sin Bordes",
      originalPrice: 180.00,
      price: 149.99,
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&auto=format&fit=crop&q=80",
      category: "Tecnología",
      description: "Pantalla HD sin marcos con sonido estéreo Dolby Audio y aplicaciones oficiales preinstaladas.",
      specs: ["32 Pulgadas HD", "Diseño Frameless", "Sonido Dolby Audio", "Puertos HDMI y USB"]
    },
    {
      id: "aiwa-3",
      brand: "Aiwa",
      title: "Auriculares Inalámbricos Aiwa Noise Isolation",
      originalPrice: 39.00,
      price: 29.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80",
      category: "Tecnología",
      description: "Aislamiento pasivo de ruido con almohadillas acolchadas, micrófono manos libres y hasta 20 horas de reproducción.",
      specs: ["Bluetooth 5.1", "Autonomía de 20 horas", "Almohadillas ergonómicas", "Micrófono integrado"]
    }
  ],
  Sony: [
    {
      id: "sony-1",
      brand: "Sony",
      title: "Auriculares Sony WH-CH520 Inalámbricos 50 Horas",
      originalPrice: 68.00,
      price: 54.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80",
      category: "Tecnología",
      description: "Batería descomunal de hasta 50 horas de reproducción continua, tecnología DSEE para restaurar sonido y conexión multipunto.",
      specs: ["Hasta 50 horas de batería", "Carga rápida (3 min = 1.5h)", "Tecnología DSEE Sony", "Conexión multipunto"]
    },
    {
      id: "sony-2",
      brand: "Sony",
      title: "Consola Sony PlayStation 5 Slim 1TB Digital",
      originalPrice: 550.00,
      price: 499.99,
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&auto=format&fit=crop&q=80",
      category: "Tecnología",
      description: "La nueva PlayStation 5 Slim con diseño más compacto, disco SSD ultra veloz de 1TB y mando DualSense con respuesta háptica.",
      specs: ["Almacenamiento SSD 1TB", "Audio 3D Tempest", "Gráficos 4K 120 FPS", "Control DualSense incluido"]
    },
    {
      id: "sony-3",
      brand: "Sony",
      title: "Barra de Sonido Sony HT-S100F 120W Bluetooth",
      originalPrice: 145.00,
      price: 119.99,
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&auto=format&fit=crop&q=80",
      category: "Tecnología",
      description: "Barra de sonido de 2 canales con altavoz Bass Reflex para un audio nítido y envolvente en tu sala o dormitorio.",
      specs: ["Potencia: 120W", "Conexión HDMI ARC y Óptica", "Sonido S-Force Front Surround", "Bluetooth integrado"]
    }
  ],
  trending: [
    {
      id: "trend-1",
      brand: "Mundo Total",
      title: "Maleta de Viaje Rígida 24' con Ruedas 360°",
      originalPrice: 65.00,
      price: 49.99,
      image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=500&auto=format&fit=crop&q=80",
      category: "Accesorios",
      description: "Maleta ultraligera de polipropileno de alta resistencia con candado numérico integrado y 4 ruedas multidireccionales silenciosas.",
      specs: ["Tamaño 24 pulgadas", "Cerradura de seguridad TSA", "Ruedas giratorias 360°", "Divisor interior con cremallera"]
    },
    {
      id: "trend-2",
      brand: "Mundo Total",
      title: "Mochila Urbana Táctica Impermeable",
      originalPrice: 35.00,
      price: 24.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80",
      category: "Accesorios",
      description: "Diseño ergonómico para uso diario, viajes o trabajo. Compartimento acolchado para laptop de hasta 15.6 pulgadas y puerto USB externo.",
      specs: ["Material impermeable", "Capacidad: 25 Litros", "Compartimiento para Laptop", "Bolsillos antirrobo"]
    },
    {
      id: "trend-3",
      brand: "Mundo Total",
      title: "Peluche Capibara Gigante con Mochila Tortuga",
      originalPrice: 25.00,
      price: 18.99,
      image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=500&auto=format&fit=crop&q=80",
      category: "Hogar",
      description: "El peluche más viral y adorable. Felpa ultrasuave hipoalergénica con detalle de mochilita desmontable.",
      specs: ["Altura: 45 cm", "Material Felpa Premium", "Relleno hipoalergénico", "Accesorio desmontable"]
    },
    {
      id: "trend-4",
      brand: "Mundo Total",
      title: "Juego de Sábanas Queen 1800 Hilos Microfibra",
      originalPrice: 22.00,
      price: 15.99,
      image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&auto=format&fit=crop&q=80",
      category: "Hogar",
      description: "Tacto ultra suave tipo seda con ajuste profundo para colchones altos. Hipoalergénico y transpirable.",
      specs: ["Tamaño Queen", "Microfibra 1800 Hilos", "4 Piezas", "Lavable en máquina"]
    },
    {
      id: "trend-5",
      brand: "Mundo Total",
      title: "Set de Maquillaje Profesional 12 Piezas",
      originalPrice: 21.50,
      price: 12.99,
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&auto=format&fit=crop&q=80",
      category: "Belleza",
      description: "Brochas de alta densidad, paleta de sombras y labial de larga duración con 40% OFF de temporada.",
      specs: ["12 Piezas completas", "Brochas sintéticas suaves", "Cruelty Free", "Estuche incluido"]
    },
    {
      id: "trend-6",
      brand: "Mundo Total",
      title: "Zapatos Deportivos Casuales Unisex Blancos",
      originalPrice: 35.00,
      price: 24.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=80",
      category: "Calzado",
      description: "Suela de goma antideslizante con plantilla memory foam para máxima comodidad todo el día.",
      specs: ["Tallas 36 a 44", "Suela Memory Foam", "Material transpirable", "Diseño ergonómico"]
    },
    {
      id: "trend-7",
      brand: "Mundo Total",
      title: "Aspiradora Inalámbrica Portátil para Auto y Hogar",
      originalPrice: 28.00,
      price: 19.99,
      image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500&auto=format&fit=crop&q=80",
      category: "Hogar",
      description: "Potencia de succión de 8000Pa con batería recargable USB y filtro HEPA lavable.",
      specs: ["Potencia 8000Pa", "Batería recargable USB", "Filtro HEPA lavable", "Accesorios incluidos"]
    },
    {
      id: "trend-8",
      brand: "Mundo Total",
      title: "Corneta Inalámbrica Resistente al Agua IPX6",
      originalPrice: 26.00,
      price: 18.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=80",
      category: "Tecnología",
      description: "Sonido 360 grados resistente a salpicaduras y lluvia con batería para 10 horas de música continua.",
      specs: ["Resistencia IPX6", "Bluetooth 5.3", "Batería 10 horas", "Graves reforzados"]
    }
  ]
};

// Global Application State
const state = {
  activeBrand: "LG",
  cart: [],
  favorites: new Set(),
  currentSlide: 0,
  slideInterval: null,
  activeDepartment: "Moda y Estilo"
};

// App Controller Object
const app = {
  init() {
    this.loadState();
    this.renderBrandProducts(state.activeBrand);
    this.renderSecondaryProducts();
    this.setupBrandSwitchers();
    this.setupDrawerAccordion();
    this.setupHeroCarousel();
    this.setupSolutionsCarousel();
    this.setupBrandsPillsRow();
    this.setupSearch();
    this.setupModals();
    this.setupBottomNav();
    this.setupHeaderLogo();
    this.updateCartUi();
  },

  loadState() {
    try {
      const saved = localStorage.getItem('mundo_total_cart');
      if (saved) state.cart = JSON.parse(saved);
      const favs = localStorage.getItem('mundo_total_favs');
      if (favs) state.favorites = new Set(JSON.parse(favs));
    } catch (e) {
      console.warn('Error loading state:', e);
    }
  },

  saveState() {
    try {
      localStorage.setItem('mundo_total_cart', JSON.stringify(state.cart));
      localStorage.setItem('mundo_total_favs', JSON.stringify([...state.favorites]));
    } catch (e) {
      console.warn('Error saving state:', e);
    }
  },

  formatBs(usdAmount) {
    const totalBs = usdAmount * BS_RATE;
    return `Bs ${totalBs.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  },

  formatUsd(amount) {
    return `USD ${amount.toFixed(2).replace('.', ',')}`;
  },

  // 1. DYNAMIC BRAND TABS & CONNECTED SHELF SWITCHING
  setupBrandSwitchers() {
    const brandCards = document.querySelectorAll('.brand-select-card');
    const brandDots = document.querySelectorAll('.brand-selector-dots .b-dot');

    const switchBrand = (selectedBrand) => {
      state.activeBrand = selectedBrand;

      // Update Top Selector Cards
      brandCards.forEach(card => {
        if (card.dataset.brandTab === selectedBrand) {
          card.classList.add('active');
          card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
          card.classList.remove('active');
        }
      });

      // Update Dots
      brandDots.forEach(dot => {
        if (dot.dataset.brandTab === selectedBrand) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });

      // Update Enclosure Title
      const titleEl = document.getElementById('shelfActiveBrandTitle');
      if (titleEl) titleEl.textContent = `Productos Destacados ${selectedBrand}`;

      // Animate Enclosure Glow & Tab Connector Class
      const enclosure = document.getElementById('brandShelfEnclosure');
      if (enclosure) {
        enclosure.className = `brand-shelf-enclosure active-tab-${selectedBrand.toLowerCase()}`;
        enclosure.style.transform = 'scale(0.99)';
        setTimeout(() => { enclosure.style.transform = 'scale(1)'; }, 150);
      }

      // Render Products
      this.renderBrandProducts(selectedBrand);
    };

    brandCards.forEach(card => {
      card.addEventListener('click', () => {
        switchBrand(card.dataset.brandTab);
      });
    });

    brandDots.forEach(dot => {
      dot.addEventListener('click', () => {
        switchBrand(dot.dataset.brandTab);
      });
    });

    // Brand Pills Row Filter
    const pills = document.querySelectorAll('.brand-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const b = pill.dataset.brand;
        if (b === 'all' || b === 'LG') {
          switchBrand('LG');
        } else if (catalogData[b]) {
          switchBrand(b);
        } else {
          this.showToast(`Filtrando catálogo por marca: ${b}`);
        }
      });
    });
  },

  // Renders the 3 connected products for selected brand
  renderBrandProducts(brandKey) {
    const container = document.getElementById('brandProductsContainer');
    if (!container) return;

    const products = catalogData[brandKey] || catalogData.LG;
    container.innerHTML = '';

    products.forEach(prod => {
      const card = this.createProductCardHtml(prod);
      container.appendChild(card);
    });
  },

  renderSecondaryProducts() {
    const container = document.getElementById('secondaryProductsContainer');
    if (!container) return;

    container.innerHTML = '';
    catalogData.trending.forEach(prod => {
      const card = this.createProductCardHtml(prod);
      container.appendChild(card);
    });
  },

  createProductCardHtml(prod) {
    const isFav = state.favorites.has(prod.id);
    const card = document.createElement('div');
    card.className = 'product-card';
    card.id = `card-${prod.id}`;

    card.innerHTML = `
      <button class="favorite-btn ${isFav ? 'favorited' : ''}" onclick="app.toggleFavorite('${prod.id}', event)" title="Añadir a Favoritos">
        <svg viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.8">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </button>

      <div class="product-image-wrap" onclick="app.openProductModal('${prod.id}')">
        <img src="${prod.image}" alt="${prod.title}" class="product-thumb" loading="lazy">
      </div>
      <div class="product-ground-shadow"></div>

      <div class="product-brand-tag">${prod.brand}</div>
      <div class="product-title" onclick="app.openProductModal('${prod.id}')" title="${prod.title}">
        ${prod.title}
      </div>

      <div class="product-pricing" onclick="app.openProductModal('${prod.id}')" style="cursor: pointer;">
        <span class="old-price">${this.formatUsd(prod.originalPrice)}</span>
        <div class="main-price-usd">${this.formatUsd(prod.price)}</div>
        <div class="rate-bs-price">${this.formatBs(prod.price)}</div>
      </div>

      <div class="card-actions-row">
        <button class="add-cart-btn" onclick="app.addToCart('${prod.id}', event)" title="Agregar al carrito">
          <svg viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
          <span>Agregar</span>
        </button>
        <button class="card-chat-btn" onclick="app.consultProduct('${prod.id}', event)" title="Consultar con Asesor Virtual">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      </div>
    `;

    return card;
  },

  // 2. ACCORDION SIDE DRAWER ("DEPARTAMENTOS" - Exact user requirement)
  setupDrawerAccordion() {
    const drawer = document.getElementById('departmentsDrawer');
    const overlay = document.getElementById('drawerOverlay');
    const openBtn = document.getElementById('openDrawerBtn');
    const closeBtn = document.getElementById('closeDrawerBtn');

    const openDrawer = () => {
      drawer.classList.add('open');
      overlay.classList.add('active');
    };

    const closeDrawer = () => {
      drawer.classList.remove('open');
      overlay.classList.remove('active');
    };

    openBtn.addEventListener('click', openDrawer);
    closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);

    // Accordion Logic: Clicking an item expands it and collapses any other open item
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
      const trigger = item.querySelector('.accordion-trigger');
      const panel = item.querySelector('.accordion-panel');

      trigger.addEventListener('click', () => {
        const isCurrentlyExpanded = item.classList.contains('expanded');

        // Close ALL other accordion items smoothly
        accordionItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('expanded');
            const otherPanel = otherItem.querySelector('.accordion-panel');
            if (otherPanel) {
              otherPanel.style.maxHeight = '0px';
            }
          }
        });

        // Toggle the clicked one
        if (isCurrentlyExpanded) {
          item.classList.remove('expanded');
          panel.style.maxHeight = '0px';
        } else {
          item.classList.add('expanded');
          panel.style.maxHeight = `${panel.scrollHeight + 20}px`;
        }
      });
    });

    // Subcategory clicks
    const subcats = document.querySelectorAll('.subcat-list li');
    subcats.forEach(sub => {
      sub.addEventListener('click', () => {
        const subName = sub.dataset.subcat;
        closeDrawer();
        this.showToast(`Cargando departamento: ${subName}`);
        this.scrollToProducts();
      });
    });

    // Drawer search input
    const drawerSearch = document.getElementById('drawerSearchInput');
    if (drawerSearch) {
      drawerSearch.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
          const query = drawerSearch.value.trim();
          if (query) {
            closeDrawer();
            this.performSearch(query);
          }
        }
      });
    }
  },

  // 3. HERO CAROUSEL WITH NATIVE TOUCH SWIPE & SCROLL-SNAP SUPPORT
  setupHeroCarousel() {
    const sliderViewport = document.getElementById('heroSlider');
    const dots = document.querySelectorAll('#heroDots .dot');
    if (!sliderViewport || !dots.length) return;

    let isInteracting = false;

    const updateActiveDot = () => {
      const width = sliderViewport.clientWidth || 360;
      const idx = Math.round(sliderViewport.scrollLeft / width);
      state.currentSlide = Math.min(Math.max(idx, 0), dots.length - 1);
      dots.forEach((d, i) => d.classList.toggle('active', i === state.currentSlide));
    };

    sliderViewport.addEventListener('scroll', updateActiveDot, { passive: true });

    const nextSlide = () => {
      if (isInteracting) return;
      const total = dots.length;
      const next = (state.currentSlide + 1) % total;
      sliderViewport.scrollTo({
        left: next * sliderViewport.clientWidth,
        behavior: 'smooth'
      });
    };

    let autoInterval = setInterval(nextSlide, 4500);

    const resetAutoPlay = () => {
      clearInterval(autoInterval);
      autoInterval = setInterval(nextSlide, 4500);
    };

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        sliderViewport.scrollTo({
          left: idx * sliderViewport.clientWidth,
          behavior: 'smooth'
        });
        resetAutoPlay();
      });
    });

    // Pause auto-rotation on touch/mouse interaction
    sliderViewport.addEventListener('touchstart', () => { isInteracting = true; }, { passive: true });
    sliderViewport.addEventListener('touchend', () => { setTimeout(() => { isInteracting = false; }, 2000); }, { passive: true });
    sliderViewport.addEventListener('mouseenter', () => { isInteracting = true; });
    sliderViewport.addEventListener('mouseleave', () => { isInteracting = false; });
  },

  // 3b. SOLUTIONS CAROUSEL (Ahorro y Soluciones - Swipeable)
  setupSolutionsCarousel() {
    const viewport = document.getElementById('solutionsSlider');
    const dots = document.querySelectorAll('#solutionsDots .dot');
    if (!viewport || !dots.length) return;

    viewport.addEventListener('scroll', () => {
      const width = viewport.clientWidth || 360;
      const idx = Math.round(viewport.scrollLeft / width);
      const activeIdx = Math.min(Math.max(idx, 0), dots.length - 1);
      dots.forEach((d, i) => d.classList.toggle('active', i === activeIdx));
    }, { passive: true });

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        viewport.scrollTo({
          left: idx * viewport.clientWidth,
          behavior: 'smooth'
        });
      });
    });
  },

  // 3c. DRAGGABLE BRAND PILLS ROW
  setupBrandsPillsRow() {
    const pillsRow = document.getElementById('brandsPillsRow');
    if (!pillsRow) return;

    let isPillDown = false;
    let startPillX = 0;
    let scrollLeft = 0;

    pillsRow.addEventListener('mousedown', (e) => {
      isPillDown = true;
      startPillX = e.pageX - pillsRow.offsetLeft;
      scrollLeft = pillsRow.scrollLeft;
    });
    pillsRow.addEventListener('mouseleave', () => { isPillDown = false; });
    pillsRow.addEventListener('mouseup', () => { isPillDown = false; });
    pillsRow.addEventListener('mousemove', (e) => {
      if (!isPillDown) return;
      e.preventDefault();
      const x = e.pageX - pillsRow.offsetLeft;
      const walk = (x - startPillX) * 1.5;
      pillsRow.scrollLeft = scrollLeft - walk;
    });
  },

  // 4. SEARCH FUNCTIONALITY
  setupSearch() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');

    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        this.performSearch(query);
      }
    });
  },

  performSearch(query) {
    const lower = query.toLowerCase();
    const allProducts = this.getAllProducts();

    const results = allProducts.filter(p => 
      p.title.toLowerCase().includes(lower) ||
      p.brand.toLowerCase().includes(lower) ||
      p.category.toLowerCase().includes(lower) ||
      p.description.toLowerCase().includes(lower)
    );

    if (results.length > 0) {
      this.showToast(`Encontrados ${results.length} productos para "${query}"`);
      const container = document.getElementById('brandProductsContainer');
      container.innerHTML = '';
      results.slice(0, 6).forEach(p => {
        container.appendChild(this.createProductCardHtml(p));
      });
      this.scrollToProducts();
    } else {
      this.showToast(`No se encontraron productos para "${query}"`);
    }
  },

  // 5. SHOPPING CART SYSTEM
  addToCart(productId, event) {
    if (event) event.stopPropagation();

    const product = this.findProductById(productId);
    if (!product) return;

    const existing = state.cart.find(item => item.id === productId);
    if (existing) {
      existing.quantity += 1;
    } else {
      state.cart.push({ ...product, quantity: 1 });
    }

    this.updateCartUi();
    this.saveState();
    this.showToast(`¡${product.title.slice(0, 24)}... agregado al carrito!`);
  },

  removeFromCart(productId) {
    state.cart = state.cart.filter(item => item.id !== productId);
    this.updateCartUi();
    this.saveState();
  },

  changeQuantity(productId, delta) {
    const item = state.cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeFromCart(productId);
    } else {
      this.updateCartUi();
      this.saveState();
    }
  },

  updateCartUi() {
    const badge = document.getElementById('cartCountBadge');
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';

    // Render Flyout Content
    const container = document.getElementById('cartItemsContainer');
    if (!container) return;

    if (state.cart.length === 0) {
      container.innerHTML = `
        <div class="cart-empty-state">
          <svg viewBox="0 0 24 24" width="48" height="48" fill="#cbd5e1" style="margin-bottom: 10px;">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
          <p>Tu carrito está vacío</p>
          <small>Explora las ofertas y agrega tus favoritos</small>
        </div>
      `;
    } else {
      container.innerHTML = '';
      state.cart.forEach(item => {
        const itemRow = document.createElement('div');
        itemRow.className = 'cart-item-row';
        itemRow.innerHTML = `
          <img src="${item.image}" alt="${item.title}" class="cart-item-thumb">
          <div class="cart-item-details">
            <div class="cart-item-name">${item.title}</div>
            <div class="cart-item-price">${app.formatUsd(item.price * item.quantity)}</div>
          </div>
          <div class="cart-qty-controls">
            <button class="qty-btn" onclick="app.changeQuantity('${item.id}', -1)">-</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn" onclick="app.changeQuantity('${item.id}', 1)">+</button>
          </div>
        `;
        container.appendChild(itemRow);
      });
    }

    // Update Totals
    const totalUsd = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const subtotalUsdEl = document.getElementById('cartSubtotalUsd');
    const subtotalBsEl = document.getElementById('cartSubtotalBs');

    if (subtotalUsdEl) subtotalUsdEl.textContent = this.formatUsd(totalUsd);
    if (subtotalBsEl) subtotalBsEl.textContent = this.formatBs(totalUsd);
  },

  // 6. FAVORITES
  toggleFavorite(productId, event) {
    if (event) event.stopPropagation();

    if (state.favorites.has(productId)) {
      state.favorites.delete(productId);
      this.showToast('Producto eliminado de favoritos');
    } else {
      state.favorites.add(productId);
      this.showToast('¡Guardado en tus favoritos! ❤️');
    }

    // Update heart icons on cards
    const cardHeart = document.querySelector(`#card-${productId} .favorite-btn`);
    if (cardHeart) {
      cardHeart.classList.toggle('favorited', state.favorites.has(productId));
      const svg = cardHeart.querySelector('svg');
      if (svg) svg.setAttribute('fill', state.favorites.has(productId) ? 'currentColor' : 'none');
    }

    // Update Bottom Nav pill
    const favPill = document.getElementById('favCountPill');
    if (favPill) {
      favPill.textContent = state.favorites.size;
      favPill.classList.toggle('show', state.favorites.size > 0);
    }
  },

  // 7. MODALS SETUP & PRODUCT DETAIL
  setupModals() {
    // Cart Flyout
    const cartBtn = document.getElementById('openCartBtn');
    const cartCloseBtn = document.getElementById('closeCartBtn');
    const cartModal = document.getElementById('cartFlyout');
    const cartBackdrop = document.getElementById('cartBackdrop');

    const openCart = () => {
      cartModal.classList.add('open');
      cartBackdrop.classList.add('active');
    };

    const closeCart = () => {
      cartModal.classList.remove('open');
      cartBackdrop.classList.remove('active');
    };

    if (cartBtn) cartBtn.addEventListener('click', openCart);
    if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
    if (cartBackdrop) cartBackdrop.addEventListener('click', closeCart);

    // Product Detail Modal
    const prodModal = document.getElementById('productDetailModal');
    const prodBackdrop = document.getElementById('productModalBackdrop');
    const prodCloseBtn = document.getElementById('closeDetailBtn');

    const closeProductModal = () => {
      prodModal.classList.remove('open');
      prodBackdrop.classList.remove('active');
    };

    if (prodCloseBtn) prodCloseBtn.addEventListener('click', closeProductModal);
    if (prodBackdrop) prodBackdrop.addEventListener('click', closeProductModal);

    // Checkout button - Navigates to dedicated checkout.html
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        if (state.cart.length === 0) {
          this.showToast('Tu carrito está vacío. Agrega productos para pagar.');
          return;
        }
        this.saveState();
        window.location.href = 'checkout.html';
      });
    }

    const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
    const checkoutBackdrop = document.getElementById('checkoutModalBackdrop');
    if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', () => this.closeCheckoutModal());
    if (checkoutBackdrop) checkoutBackdrop.addEventListener('click', () => this.closeCheckoutModal());

    // WhatsApp Order Button
    const waOrderBtn = document.getElementById('whatsappOrderBtn');
    if (waOrderBtn) {
      waOrderBtn.addEventListener('click', () => {
        if (state.cart.length === 0) {
          this.showToast('El carrito está vacío');
          return;
        }
        let orderSummary = "¡Hola Mundo Total! 👋 Quisiera hacer el siguiente pedido:\n\n";
        state.cart.forEach(item => {
          orderSummary += `• ${item.title} (x${item.quantity}) - ${app.formatUsd(item.price * item.quantity)}\n`;
        });
        const total = state.cart.reduce((s, i) => s + (i.price * i.quantity), 0);
        orderSummary += `\nTotal: ${app.formatUsd(total)} (${app.formatBs(total)})`;

        const waUrl = `https://wa.me/584120000000?text=${encodeURIComponent(orderSummary)}`;
        window.open(waUrl, '_blank');
      });
    }

    // Chat Modal
    const chatModal = document.getElementById('chatAdvisorModal');
    const chatBackdrop = document.getElementById('chatModalBackdrop');
    const chatCloseBtn = document.getElementById('closeChatBtn');
    const chatForm = document.getElementById('chatForm');

    const closeChat = () => {
      chatModal.classList.remove('open');
      chatBackdrop.classList.remove('active');
    };

    if (chatCloseBtn) chatCloseBtn.addEventListener('click', closeChat);
    if (chatBackdrop) chatBackdrop.addEventListener('click', closeChat);

    if (chatForm) {
      chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('chatInput');
        const text = input.value.trim();
        if (text) {
          this.appendChatMessage(text, 'user');
          input.value = '';
          setTimeout(() => {
            this.appendChatMessage("¡Gracias por escribirnos! Nuestro equipo de atención al cliente de Mundo Total te responderá de inmediato o puedes comunicarte por nuestro WhatsApp oficial.", 'bot');
          }, 800);
        }
      });
    }
  },

  openProductModal(productId) {
    const prod = this.findProductById(productId);
    if (!prod) return;

    // Close other flyouts so there are no overlapping or obscured modals
    const chatModal = document.getElementById('chatAdvisorModal');
    const chatBackdrop = document.getElementById('chatModalBackdrop');
    if (chatModal) chatModal.classList.remove('open');
    if (chatBackdrop) chatBackdrop.classList.remove('active');

    const cartModal = document.getElementById('cartFlyout');
    const cartBackdrop = document.getElementById('cartBackdrop');
    if (cartModal) cartModal.classList.remove('open');
    if (cartBackdrop) cartBackdrop.classList.remove('active');

    const modal = document.getElementById('productDetailModal');
    const backdrop = document.getElementById('productModalBackdrop');
    const body = document.getElementById('detailModalBody');

    const cleanTitle = prod.title.replace(/'/g, "");
    const waUrl = `https://wa.me/584120000000?text=${encodeURIComponent(`¡Hola Mundo Total! Deseo consultar disponibilidad y comprar: ${cleanTitle} (${this.formatUsd(prod.price)})`)}`;

    body.innerHTML = `
      <div class="detail-image-box">
        <img src="${prod.image}" alt="${cleanTitle}" style="max-width: 100%;">
      </div>
      <div class="detail-brand-badge">${prod.brand} Oficial</div>
      <h3 class="detail-title">${prod.title}</h3>
      <div class="detail-price-box">
        <div class="detail-price-usd">${this.formatUsd(prod.price)}</div>
        <div class="detail-price-bs">${this.formatBs(prod.price)}</div>
      </div>
      <p class="detail-desc">${prod.description}</p>
      <div class="detail-specs-list">
        <strong>Especificaciones y Garantía:</strong>
        ${prod.specs.map(s => `<div>• ${s}</div>`).join('')}
      </div>
      <div class="detail-actions">
        <div class="detail-actions-primary">
          <button class="checkout-btn" style="flex:1;" onclick="app.addToCart('${prod.id}'); document.getElementById('closeDetailBtn').click();">
            🛒 Agregar al Carrito
          </button>
          <button class="checkout-btn" style="flex:1; background:#16a34a;" onclick="app.addToCart('${prod.id}'); app.saveState(); window.location.href='checkout.html';">
            ⚡ Comprar Ahora
          </button>
        </div>
        <div class="detail-actions-secondary">
          <button class="detail-contact-btn whatsapp" onclick="window.open('${waUrl}', '_blank')">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.19-.09-1.11-.55-1.28-.61-.17-.07-.3-.1-.43.1-.13.19-.5 0.61-.61.73-.11.13-.23.15-.42.05-.19-.09-.81-.3-1.54-.95-.57-.51-.95-1.14-1.06-1.33-.11-.19-.01-.3.08-.39.09-.09.19-.23.29-.35.09-.11.13-.19.19-.32.06-.13.03-.25-.01-.34-.05-.09-.43-1.04-.59-1.42-.16-.38-.32-.33-.44-.33h-.37c-.13 0-.34.05-.52.24-.18.19-.69.67-.69 1.64 0 .97.71 1.9 1.01 2.1.3.2 1.4 2.14 3.39 3 1.99.85 1.99.57 2.35.53.36-.04 1.15-.47 1.31-.93.16-.46.16-.86.11-.93-.05-.07-.18-.12-.37-.21z"/></svg>
            WhatsApp
          </button>
          <button class="detail-contact-btn asesor" onclick="app.consultProduct('${prod.id}', event); document.getElementById('closeDetailBtn').click();">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            Asesor Virtual
          </button>
        </div>
      </div>
    `;

    modal.classList.add('open');
    backdrop.classList.add('active');
  },

  openCheckoutModal() {
    if (state.cart.length === 0) {
      this.showToast('Tu carrito está vacío. Agrega productos para pagar.');
      return;
    }

    // Close cart flyout if open
    const cartModal = document.getElementById('cartFlyout');
    const cartBackdrop = document.getElementById('cartBackdrop');
    if (cartModal) cartModal.classList.remove('open');
    if (cartBackdrop) cartBackdrop.classList.remove('active');

    const modal = document.getElementById('checkoutModal');
    const backdrop = document.getElementById('checkoutModalBackdrop');
    const content = document.getElementById('checkoutModalContent');
    if (!modal || !content) return;

    let totalUsd = 0;
    let itemsHtml = '';
    state.cart.forEach(item => {
      const line = item.price * item.quantity;
      totalUsd += line;
      itemsHtml += `
        <div class="order-summary-row">
          <span>${item.quantity}x ${item.title}</span>
          <strong>${this.formatUsd(line)}</strong>
        </div>
      `;
    });

    state.selectedPaymentMethod = state.selectedPaymentMethod || 'Pago Móvil';

    content.innerHTML = `
      <form id="checkoutForm" onsubmit="app.processOrder(event)">
        <div class="order-summary-box">
          <h4 style="font-size:13px; font-weight:800; margin-bottom:8px; color:#111827;">Resumen de tu compra</h4>
          ${itemsHtml}
          <div class="order-summary-row total">
            <span>Total a Pagar:</span>
            <span>${this.formatUsd(totalUsd)} (${this.formatBs(totalUsd)})</span>
          </div>
        </div>

        <div class="checkout-form-group">
          <label>Nombre y Apellido *</label>
          <input type="text" id="orderName" class="checkout-input" required placeholder="Ej. Carlos Pérez">
        </div>

        <div class="checkout-form-group">
          <label>Teléfono / WhatsApp *</label>
          <input type="tel" id="orderPhone" class="checkout-input" required placeholder="Ej. 0412-1234567">
        </div>

        <div class="checkout-form-group">
          <label>Ciudad y Dirección de Entrega *</label>
          <input type="text" id="orderAddress" class="checkout-input" required placeholder="Ej. Caracas, Las Mercedes">
        </div>

        <div class="checkout-form-group">
          <label>Método de Pago Preferido *</label>
          <div class="payment-method-selector" id="paymentSelector">
            <button type="button" class="payment-method-btn active" onclick="app.selectPaymentMethod(this, 'Pago Móvil')">📲 Pago Móvil</button>
            <button type="button" class="payment-method-btn" onclick="app.selectPaymentMethod(this, 'Zelle')">💵 Zelle</button>
            <button type="button" class="payment-method-btn" onclick="app.selectPaymentMethod(this, 'Efectivo Tienda')">🤝 Efectivo en Tienda</button>
          </div>
        </div>

        <button type="submit" class="submit-order-btn">
          Confirmar y Procesar Pedido
        </button>
      </form>
    `;

    modal.classList.add('open');
    if (backdrop) backdrop.classList.add('active');
  },

  selectPaymentMethod(btn, method) {
    document.querySelectorAll('#paymentSelector .payment-method-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.selectedPaymentMethod = method;
  },

  processOrder(e) {
    e.preventDefault();
    const name = document.getElementById('orderName').value.trim();
    const phone = document.getElementById('orderPhone').value.trim();
    const address = document.getElementById('orderAddress').value.trim();
    const payment = state.selectedPaymentMethod || 'Pago Móvil';

    const orderId = `MT-${Math.floor(10000 + Math.random() * 90000)}`;

    let totalUsd = 0;
    let itemsText = '';
    state.cart.forEach(item => {
      const line = item.price * item.quantity;
      totalUsd += line;
      itemsText += `• ${item.quantity}x ${item.title} (${this.formatUsd(line)})\n`;
    });

    const waMsg = `¡Hola Mundo Total! 👋 He confirmado el pedido #${orderId} en mundototal.com:

*Cliente:* ${name}
*Teléfono:* ${phone}
*Dirección:* ${address}
*Pago:* ${payment}

*Productos:*
${itemsText}
*TOTAL:* USD ${totalUsd.toFixed(2)} (${this.formatBs(totalUsd)})

Por favor confírmenme los datos de pago y número de guía.`;

    const content = document.getElementById('checkoutModalContent');
    content.innerHTML = `
      <div class="order-success-screen">
        <div class="success-badge-icon">✓</div>
        <h3 style="font-size:20px; font-weight:900; color:#111827; margin-bottom:6px;">¡Pedido Confirmado!</h3>
        <p style="font-size:13px; color:#4b5563; margin-bottom:12px;">Tu número de orden es: <strong style="color:var(--primary-cyan);">${orderId}</strong></p>
        
        <div style="background:#f8fafc; border-radius:14px; padding:12px; margin-bottom:16px; text-align:left; font-size:12.5px; color:#334155;">
          <p><strong>Cliente:</strong> ${name}</p>
          <p><strong>Teléfono:</strong> ${phone}</p>
          <p><strong>Destino:</strong> ${address}</p>
          <p><strong>Método de pago:</strong> ${payment}</p>
          <p style="margin-top:6px; font-weight:800; color:var(--primary-cyan);">Total: ${this.formatUsd(totalUsd)} (${this.formatBs(totalUsd)})</p>
        </div>

        <a href="https://wa.me/584120000000?text=${encodeURIComponent(waMsg)}" target="_blank" class="submit-order-btn" style="display:inline-block; text-decoration:none; margin-bottom:10px; background:#25d366;">
          Enviar Comprobante por WhatsApp 📲
        </a>

        <button type="button" onclick="app.closeCheckoutModal()" style="background:#f1f5f9; border:none; padding:10px 18px; border-radius:20px; font-weight:700; color:#475569; cursor:pointer;">
          Seguir Comprando
        </button>
      </div>
    `;

    // Clear cart
    state.cart = [];
    this.updateCartUi();
  },

  closeCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    const backdrop = document.getElementById('checkoutModalBackdrop');
    if (modal) modal.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
  },

  consultProduct(productId, event) {
    if (event) event.stopPropagation();
    const prod = this.findProductById(productId);
    if (!prod) return;

    const chatModal = document.getElementById('chatAdvisorModal');
    const chatBackdrop = document.getElementById('chatModalBackdrop');
    chatModal.classList.add('open');
    chatBackdrop.classList.add('active');

    this.appendChatMessage(`Hola, me interesa conocer más sobre: "${prod.title}" (${this.formatUsd(prod.price)}). ¿Tienen disponibilidad y delivery?`, 'user');
    setTimeout(() => {
      this.appendChatMessage(`¡Hola! Sí, tenemos disponibilidad inmediata de la **${prod.title}**. Hacemos envíos con cobro a destino o delivery en Caracas y principales ciudades. ¿Deseas reservarla?`, 'bot');
    }, 700);
  },

  appendChatMessage(text, sender) {
    const container = document.getElementById('chatMessages');
    const msg = document.createElement('div');
    msg.className = `chat-msg ${sender}`;
    msg.innerHTML = text;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
  },

  sendQuickReply(text) {
    this.appendChatMessage(text, 'user');
    setTimeout(() => {
      if (text.includes('envíos')) {
        this.appendChatMessage("🚚 Realizamos envíos a toda Venezuela a través de MRW, Zoom, Tealca y Domesa. En Caracas contamos con servicio delivery express el mismo día.", 'bot');
      } else if (text.includes('pago')) {
        this.appendChatMessage("💳 Aceptamos Pago Móvil (a tasa oficial BCV), transferencias bancarias nacionales, Zelle, Binance Pay y pagos en efectivo USD en tiendas.", 'bot');
      } else {
        this.appendChatMessage("📲 ¡Perfecto! Haz clic aquí para chatear con un operador en vivo: <a href='https://wa.me/584120000000' target='_blank' style='color:#00A7D6;font-weight:700;'>Abrir WhatsApp Mundo Total</a>", 'bot');
      }
    }, 700);
  },

  // 8. BOTTOM NAVIGATION ACTIONS (All buttons 100% functional, NO Asesor)
  setupBottomNav() {
    const navItems = document.querySelectorAll('.bottom-nav-bar .nav-item');
    const navChat = document.getElementById('navChat') || document.getElementById('navAsesoria');
    const navDestacados = document.getElementById('navDestacados');
    const navHome = document.getElementById('navHome');
    const navFavoritos = document.getElementById('navFavoritos');
    const navOfertas = document.getElementById('navOfertas');

    const setActive = (target) => {
      navItems.forEach(n => n.classList.remove('active'));
      if (target) target.classList.add('active');
    };

    if (navHome) {
      navHome.addEventListener('click', () => {
        setActive(navHome);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const screen = document.getElementById('appScreen');
        if (screen) screen.scrollTo({ top: 0, behavior: 'smooth' });
        this.showToast('Inicio - Explorando Mundo Total');
      });
    }

    if (navChat) {
      navChat.addEventListener('click', () => {
        setActive(navChat);
        const chatModal = document.getElementById('chatAdvisorModal');
        const chatBackdrop = document.getElementById('chatModalBackdrop');
        if (chatModal) chatModal.classList.add('open');
        if (chatBackdrop) chatBackdrop.classList.add('active');
      });
    }

    if (navDestacados) {
      navDestacados.addEventListener('click', () => {
        setActive(navDestacados);
        this.scrollToProducts();
        this.showToast('Mostrando Productos Destacados');
      });
    }

    if (navFavoritos) {
      navFavoritos.addEventListener('click', () => {
        setActive(navFavoritos);
        if (state.favorites.size === 0) {
          this.showToast('No tienes productos favoritos aún. ¡Toca el corazón en cualquier producto!');
        } else {
          const favProducts = [];
          state.favorites.forEach(id => {
            const p = this.findProductById(id);
            if (p) favProducts.push(p);
          });

          const container = document.getElementById('brandProductsContainer');
          if (container) {
            container.innerHTML = '';
            favProducts.forEach(p => container.appendChild(this.createProductCardHtml(p)));
            const titleEl = document.getElementById('shelfActiveBrandTitle');
            if (titleEl) titleEl.textContent = `Tus Favoritos (${favProducts.length})`;
          }
          this.showToast(`Mostrando ${favProducts.length} productos favoritos`);
          this.scrollToProducts();
        }
      });
    }

    if (navOfertas) {
      navOfertas.addEventListener('click', () => {
        setActive(navOfertas);
        const all = this.getAllProducts();
        const promoProducts = all.filter(p => p.originalPrice > p.price);
        const container = document.getElementById('brandProductsContainer');
        if (container) {
          container.innerHTML = '';
          promoProducts.slice(0, 6).forEach(p => container.appendChild(this.createProductCardHtml(p)));
          const titleEl = document.getElementById('shelfActiveBrandTitle');
          if (titleEl) titleEl.textContent = 'Grandes Ofertas y Descuentos';
        }
        this.showToast('40% OFF y Descuentos de Temporada');
        this.scrollToProducts();
      });
    }
  },

  // 9. HEADER LOGO SCROLL TO TOP
  setupHeaderLogo() {
    const homeLogo = document.getElementById('headerHomeLogo');
    if (homeLogo) {
      homeLogo.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  },

  // UTILITY HELPERS
  getAllProducts() {
    let all = [];
    for (const key in catalogData) {
      if (Array.isArray(catalogData[key])) {
        all = all.concat(catalogData[key]);
      }
    }
    return all;
  },

  findProductById(id) {
    for (const key in catalogData) {
      if (Array.isArray(catalogData[key])) {
        const found = catalogData[key].find(p => p.id === id);
        if (found) return found;
      }
    }
    return null;
  },

  filterByDept(deptName) {
    this.showToast(`Cargando sección: ${deptName}`);
    this.scrollToProducts();
  },

  showAllProducts() {
    this.showToast('Cargando todo el catálogo de Mundo Total');
    this.scrollToProducts();
  },

  scrollToProducts() {
    const section = document.querySelector('.brand-ecosystem-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  },

  showToast(message) {
    const toast = document.getElementById('toastNotification');
    const msgEl = document.getElementById('toastMessage');
    if (!toast || !msgEl) return;

    msgEl.textContent = message;
    toast.classList.add('show');

    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  },

  updateClock() {
    const clockEl = document.getElementById('statusClock');
    if (!clockEl) return;
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const mins = now.getMinutes().toString().padStart(2, '0');
    clockEl.textContent = `${hours}:${mins}`;
  }
};

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
