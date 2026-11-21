// src/data/casesData.js
// Base de datos corporativa de Casos de Éxito y Clientes de SEOdigital
// Cumple con la presentación corporativa estilo BairesDev y directivas de validación

export const casesData = [
  // 1. PLASTICMAP
  {
    id: 1,
    slug: "plasticmap",
    title: "PlasticMap",
    client: "PlasticMap",
    industry: "Sostenibilidad & Cleantech",
    categoryTag: "PLASTICMAP CASO DE ESTUDIO — SOSTENIBILIDAD & CLEANTECH",
    heroTitle: "Plataforma Inteligente de Geolocalización y Trazabilidad Circular para la Industria Plástica",
    heroSubtitle: "Digitalización de la cadena de valor del reciclaje conectando generadores industriales, centros de acopio y plantas de transformación.",
    summary: "PlasticMap nació con el objetivo de convertir el desafío de la gestión de residuos plásticos en una oportunidad de economía circular medible y transparente. SEOdigital diseñó e implementó una solución georreferenciada integral que mapea puntos de recolección, optimiza la logística de recuperación y proporciona a las empresas trazabilidad documental sobre el destino sustentable de sus materiales.",
    duration: "6 meses",
    teamSize: "7 especialistas",
    engagementModel: "Desarrollo End-to-End & Arquitectura Cloud",
    featured: true,
    logo: "/images/cases/plasticmap-logo.png",
    coverImage: "/images/cases/plasticmap.jpg",
    coverGradient: "linear-gradient(135deg, #0d9488 0%, #115e59 100%)",
    accentColor: "#0d9488",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Leaflet & OpenStreetMap",
      "Tailwind CSS",
      "RESTful API"
    ],
    quote: "La plataforma transformó una cadena de recolección fragmentada en un ecosistema geolocalizado con datos claros y trazabilidad verificable.",
    quoteAuthor: "Equipo Directivo",
    quoteRole: "PlasticMap",
    problem: "La gestión y recuperación de residuos plásticos post-industriales y de consumo operaba históricamente sin centralización digital: industrias generadoras sin saber a dónde derivar sus descartes, centros de acopio con capacidad ociosa no publicitada y total carencia de auditoría sobre el volumen efectivamente reciclado frente al desechado. Esta opacidad dificultaba cumplir con regulaciones ambientales y reportes ESG corporativos.",
    solution: "Desarrollamos una plataforma web interactiva y modular basada en geolocalización avanzada. Los usuarios corporativos pueden registrar plantas generadoras, consultar mapas inteligentes con filtros multicapa por tipo de polímero (PET, PEAD, PVC, PEBD, PP, PS), coordinar despachos con transportistas homologados y obtener certificaciones digitales de entrega y valorización del residuo.",
    modules: [
      "Mapa interactivo con capas de clasificación por tipo de polímero",
      "Directorio geolocalizado de centros de acopio y recicladores homologados",
      "Módulo de trazabilidad de lotes y cadena de custodia del residuo",
      "Panel de administración central y moderación de puntos verificados",
      "Generación de reportes de impacto ambiental y reducción de huella de carbono",
      "API de integración para sistemas corporativos ERP"
    ],
    impact: [
      "Visibilidad geográfica en tiempo real de nodos de reciclaje y acopio",
      "Trazabilidad documental completa de materiales plásticos recuperados",
      "Optimización de costos logísticos al seleccionar centros de proximidad",
      "Estandarización de información para auditorías ambientales y reportes ESG"
    ],
  },

  // 2. ZONTES MOTOS
  {
    id: 2,
    slug: "zontes-motos",
    title: "Zontes Motos",
    client: "Zontes Argentina (Sucursal San Isidro / Grupo Sauma)",
    industry: "Automotriz & Movilidad",
    categoryTag: "ZONTES MOTOS CASO DE ESTUDIO — AUTOMOTRIZ & IA",
    heroTitle: "CRM Inteligente con Asistente Virtual IA y Automatización Comercial Omnicanal",
    heroSubtitle: "Captura, calificación y derivación prioritaria de prospectos en WhatsApp, Instagram y Facebook hacia los asesores del showroom San Isidro.",
    summary: "Zontes San Isidro enfrentaba un volumen creciente de consultas comerciales a través de canales digitales que saturaba la capacidad de respuesta manual. SEOdigital desarrolló un sistema CRM integral con Asistente Virtual potenciado por Inteligencia Artificial, integrando las APIs de Meta y Qlaro para responder de inmediato, calificar el interés de compra y asignar al lead al vendedor adecuado con ficha técnica y cotización preconfigurada.",
    duration: "5 meses",
    teamSize: "6 profesionales",
    engagementModel: "Desarrollo a Medida & Asistente IA Dedicado",
    featured: true,
    coverImage: "/automo.jpg",
    coverGradient: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
    accentColor: "#ef4444",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Qlaro API",
      "Meta Cloud API",
      "WebSockets"
    ],
    quote: "Pasamos de demorar horas en responder consultas en redes a contestar en segundos con la información exacta que el cliente busca sobre cada modelo Zontes.",
    quoteAuthor: "Gerencia Comercial",
    quoteRole: "Zontes San Isidro",
    problem: "El alto interés en los modelos de media y alta cilindrada de Zontes generaba cientos de mensajes diarios por Instagram DM, Facebook Messenger y WhatsApp. La atención dependía de operadores que respondían manualmente preguntas reiterativas (precios de lista, planes de financiación, disponibilidad de colores). Los prospectos con alta intención de compra se perdían por demoras en la respuesta, y la gerencia carecía de métricas sobre la conversión por canal o rendimiento por vendedor.",
    solution: "Implementamos una arquitectura robusta con un Asistente Virtual IA entrenado específicamente en el catálogo Zontes y sus opciones financieras. El motor procesa el mensaje entrante, identifica el modelo y el interés (compra al contado, permuta, crédito prendario), saluda institucionalmente y deriva con notificación push al asesor comercial disponible de la sucursal San Isidro. El vendedor recibe la conversación lista para cerrar la operación.",
    modules: [
      "Bandeja de entrada omnicanal unificada (WhatsApp, Instagram, Facebook)",
      "Asistente Virtual IA para atención inmediata 24/7 y filtrado de intención",
      "Motor de derivación inteligente a asesores comerciales de San Isidro",
      "Pipeline de ventas por etapas (Lead, Cotizando, Visita a Salón, Venta Cerrada)",
      "Historial de conversaciones y ficha 360 del cliente",
      "Dashboard analítico de tiempo de respuesta y origen del prospecto"
    ],
    impact: [
      "Respuesta inicial inmediata las 24 horas del día sin intervención humana",
      "Calificación automática de prospectos antes de llegar al vendedor",
      "Trazabilidad completa desde el anuncio digital hasta la firma del boleto",
      "Eliminación de la pérdida de leads por saturación de canales"
    ],
  },

  // 3. CFMOTOS
  {
    id: 3,
    slug: "cfmotos",
    title: "CFMotos",
    client: "CFMotos Argentina (Sucursal Martínez / Grupo Sauma)",
    industry: "Automotriz & Movilidad",
    categoryTag: "CFMOTOS CASO DE ESTUDIO — AUTOMOTRIZ & DMS SAUMA",
    heroTitle: "Ecosistema Integral: CRM Comercial con IA y Digitalización de Taller con Video",
    heroSubtitle: "Sincronización bidireccional con el DMS Sauma Motors por VIN y registro audiovisual de reparaciones para máxima transparencia con el cliente.",
    summary: "Para CFMoto Martínez, SEOdigital construyó una solución tecnológica integral que une la venta de motovehículos con la posventa oficial. El sistema combina un CRM omnicanal potenciado por IA con la integración directa al sistema de gestión Sauma Motors a través del código VIN (17 caracteres), sumando un módulo exclusivo de taller donde los mecánicos graban diagnósticos en video y los envían automáticamente al cliente con el presupuesto de servicio.",
    duration: "6 meses",
    teamSize: "7 profesionales",
    engagementModel: "Desarrollo Integral & Integración de Sistemas Legacy",
    featured: true,
    logo: "/images/cases/logo-cfmoto-full.png",
    coverImage: "/images/cases/logo-cfmoto-full.png",
    coverGradient: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
    accentColor: "#0284c7",
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Sauma DMS API REST",
      "Motor de Video & Compresión",
      "WebSockets"
    ],
    quote: "El módulo de video en el taller cambió radicalmente la relación con el cliente: cuando ven el estado real de su moto grabado por el mecánico, aprueban el service sin dudar.",
    quoteAuthor: "Dirección de Posventa",
    quoteRole: "CFMoto Martínez",
    problem: "La concesionaria operaba con silos de información entre el área de ventas y el taller mecánico oficial. Los registros de servicios se volcaban manualmente en el DMS Sauma, generando demoras administrativas. Por otro lado, los clientes de posventa solían desconfiar de los presupuestos de reparación de fallas complejas sin una evidencia tangible, lo que ralentizaba la aprobación de órdenes de trabajo.",
    solution: "Diseñamos e implementamos una plataforma modular que se comunica en tiempo real con Sauma Motors mediante webhooks y API REST, validando el VIN para identificar cada vehículo, historial de servicios y garantías. En el taller, se implementó una interfaz táctil optimizada para que el mecánico grabe un video de hasta 60 segundos explicando el problema. El sistema comprime el video en la nube y envía un enlace seguro al cliente por WhatsApp junto con el detalle de repuestos y mano de obra para su aprobación online.",
    modules: [
      "Ficha de cliente y vehículo 360 identificada por VIN oficial",
      "Integración bidireccional Sauma Motors (clientes, motos y turnos de taller)",
      "Módulo de Taller con Video: grabación guiada, compresión y distribución",
      "Aprobación digital de presupuestos con firma de conformidad",
      "Agenda de turnos para services periódicos con recordatorios automáticos",
      "Dashboard de rendimiento de mecánicos, tiempos por orden y facturación"
    ],
    impact: [
      "Eliminación de la doble carga de datos entre el CRM y el DMS de Sauma",
      "Aumento drástico en la velocidad de aprobación de órdenes de trabajo gracias a la evidencia en video",
      "Mayor índice de fidelización y recurrencia a servicios oficiales post-garantía",
      "Trazabilidad de auditoría en cada intervención mecánica realizada"
    ],
  },

  // 4. LOGÍSTICA Y CONTROL VOLUMÉTRICO
  {
    id: 4,
    slug: "logistica-control-volumetrico",
    title: "Logística y Control Volumétrico",
    client: "Operador Logístico de Cargas y Paquetería Especializada",
    industry: "Logística & Cadena de Suministro",
    categoryTag: "LOGÍSTICA CASO DE ESTUDIO — CUBICAJE & DISTRIBUCIÓN ESPECIALIZADA",
    heroTitle: "Plataforma de Control Volumétrico, Gestión de Envíos y Trazabilidad de Carga Crítica",
    heroSubtitle: "Optimización de aforo volumétrico y despacho seguro para paquetería general y distribución de insumos con estricta cadena de custodia.",
    summary: "Un operador logístico de referencia en distribución de paquetería y suministros críticos necesitaba digitalizar de punta a punta su operativa de almacén y transporte. SEOdigital desarrolló un sistema integral de cubicaje y control volumétrico que calcula el aforo exacto de cada paquete, elimina discrepancias en la tarificación del flete y garantiza la trazabilidad rigurosa requerida para productos del sector sanitario y paquetería urgente.",
    duration: "6 meses",
    teamSize: "7 profesionales",
    engagementModel: "Desarrollo End-to-End & Aplicación Móvil Operativa",
    featured: true,
    coverImage: "/suministr.jpg",
    coverGradient: "linear-gradient(135deg, #1e3a8a 0%, #172554 100%)",
    accentColor: "#3b82f6",
    technologies: [
      "React Native",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Lector Barcode / QR",
      "WebSockets",
      "APIs de Geolocalización"
    ],
    quote: "El control volumétrico en la recepción de bodega erradicó las pérdidas por aforo incorrecto y nos dio seguridad operativa total en envíos delicados.",
    quoteAuthor: "Gerente de Operaciones Logísticas",
    quoteRole: "Operador Logístico Especializado",
    problem: "La discrepancia entre el peso físico de los paquetes y su volumen real en bodega generaba pérdidas económicas considerables al tarificar fletes de forma inadecuada. Asimismo, la paquetería vinculada al sector sanitario demandaba protocolos especiales de manipulación, plazos de entrega innegociables y confirmaciones fehacientes de recepción que el sistema tradicional en papel no lograba respaldar.",
    solution: "Desarrollamos una suite modular compuesta por un panel de control de tráfico en tiempo real y una aplicación móvil para operadores de depósito y choferes. El sistema incorpora un módulo de cubicaje volumétrico automático que procesa alto, ancho, largo y peso para determinar el factor de aforo tarifario óptimo. Cada bulto recibe una etiqueta inteligente con código de barras/QR que se escanea en cada traspaso, culminando con la prueba de entrega digital (POD) firmada en pantalla con geolocalización.",
    modules: [
      "Motor de cálculo de cubicaje volumétrico y tarificación por aforo",
      "Módulo de gestión de envíos con protocolos para insumos sanitarios y paquetería crítica",
      "App móvil de depósito con escaneo de código de barras para clasificación ágil",
      "App de choferes con hoja de ruta dinámica y navegación optimizada",
      "Prueba de entrega digital (Proof of Delivery - POD) con firma y coordenadas GPS",
      "Portal de clientes para seguimiento en tiempo real y descarga de remitos"
    ],
    impact: [
      "Corrección del 100% de los desvíos tarifarios por discrepancia de volumen vs. peso",
      "Trazabilidad ininterrumpida de bultos desde la recepción hasta el destinatario final",
      "Cumplimiento riguroso de tiempos de entrega en insumos sensibles",
      "Eliminación total del remito en papel y agilización de la liquidación de fletes"
    ],
  },

  // 5. TRANSPORTE MUZIO / NEUMÁTICOS
  {
    id: 5,
    slug: "transporte-muzio-neumaticos",
    title: "Transporte Muzio",
    client: "Transporte Muzio S.A.",
    industry: "Logística & Transporte Pesado",
    categoryTag: "TRANSPORTE MUZIO CASO DE ESTUDIO — FLOTA PESADA & TELEMETRÍA IOT",
    heroTitle: "ERP de Cargas Pesadas y Control Telemétrico Avanzado de Neumáticos de Flota",
    heroSubtitle: "Trazabilidad individual con marcado a máquina a fuego, odómetro telemétrico con Gestya GPS y gestión integral de viajes, choferes y combustible.",
    summary: "Transporte Muzio, referente en transporte de cargas pesadas por carretera, requería profesionalizar el control de su principal costo operativo después del combustible: los neumáticos. SEOdigital desarrolló una plataforma integral construida con arquitectura modular moderna (Next.js 16, TypeScript, Inversify, PostgreSQL), que incorpora un sistema inédito de seguimiento de cubiertas con marcado a fuego físico, telemetría por odómetro de camión y control del ciclo de vida y recapado.",
    duration: "7 meses",
    teamSize: "8 especialistas",
    engagementModel: "Arquitectura Empresarial, Desarrollo Web & Telemetría IoT",
    featured: true,
    coverImage: "/camion.jpg",
    coverGradient: "linear-gradient(135deg, #374151 0%, #111827 100%)",
    accentColor: "#f59e0b",
    technologies: [
      "Next.js 16 (App Router)",
      "TypeScript",
      "Tailwind CSS v4",
      "PostgreSQL",
      "Inversify (DI)",
      "Gestya GPS Telemetry",
      "AWS S3",
      "Vitest"
    ],
    quote: "Ahora parado al lado del camión sé exactamente qué cubierta tengo puesta por su marcado a fuego y cuántos kilómetros reales lleva rodados, sin tocar una sola planilla.",
    quoteAuthor: "Dirección de Operaciones",
    quoteRole: "Transporte Muzio S.A.",
    problem: "Con decenas de unidades y semirremolques rodando por todo el país, el control de neumáticos se realizaba en hojas de cálculo propensas a errores. Las cubiertas se cambiaban de eje o se enviaban al pañol sin registro del kilometraje acumulado, perdiendo la oportunidad de recaparlas a tiempo o descartándolas prematuramente. La falta de vinculación con la telemetría satelital impedía conocer el rendimiento real por marca y modelo de neumático.",
    solution: "Implementamos un sistema web integral de gestión de flota con un módulo exclusivo de neumáticos basado en doble identificación: código interno de sistema (NEU-xxx) y el número de marcado físico que la empresa graba a fuego en cada cubierta. El sistema se sincroniza con el webservice de Gestya GPS para computar automáticamente los kilómetros recorridos por unidad y asignarlos a la posición exacta de cada rueda (eje direccional, tracción, remolque). Además, gestiona viajes, choferes, combustible y comprobantes respaldados en AWS S3.",
    modules: [
      "Inventario de neumáticos con marcado físico a máquina a fuego y código de sistema",
      "Diagrama visual de ejes y posiciones por camión y semirremolque",
      "Cálculo de desgaste por odómetro telemétrico en tiempo real (Gestya GPS)",
      "Historial de rotaciones, traslados a pañol y ciclo completo de recapado",
      "Gestión de viajes con clientes, tarifas vigentes y liquidaciones a choferes",
      "Control telemétrico de consumo de combustible y gastos con comprobantes en S3"
    ],
    impact: [
      "Control visual y telemétrico del ciclo de vida de cada neumático de la flota",
      "Eliminación de la pérdida de cubiertas en talleres externos o pañol",
      "Decisiones de compra basadas en el costo por kilómetro real de cada marca",
      "Unificación de viajes, conductores, combustible y mantenimiento en un único ERP"
    ],
  },

  // 6. ECOMMERCE CON MERCADO LIBRE
  {
    id: 6,
    slug: "ecommerce-mercado-libre",
    title: "Ecommerce con Mercado Libre",
    client: "E-Commerce Multicanal de Consumo Masivo",
    industry: "Comercio Electrónico & Retail",
    categoryTag: "RETAIL CASO DE ESTUDIO — E-COMMERCE & MERCADO LIBRE API",
    heroTitle: "E-Commerce Omnicanal con Sincronización en Tiempo Real de Mercado Libre",
    heroSubtitle: "Catálogo centralizado, inventario unificado sin riesgo de sobreventa y procesamiento automatizado de órdenes con webhooks de Mercado Pago y Mercado Envíos.",
    summary: "Vender en una tienda online propia y en Mercado Libre al mismo tiempo suele generar constantes dolores de cabeza por desfasaje de inventario y sobreventa. SEOdigital diseñó una arquitectura de comercio electrónico omnicanal conectada de forma nativa a la API oficial de Mercado Libre, asegurando que cada movimiento de stock, cambio de precio u orden recibida se refleje en milisegundos en todas las plataformas.",
    duration: "5 meses",
    teamSize: "6 profesionales",
    engagementModel: "Desarrollo de Plataforma E-Commerce & Conectores API",
    featured: false,
    coverImage: "/retail.jpg",
    coverGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    accentColor: "#f59e0b",
    technologies: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "Mercado Libre REST API & Webhooks",
      "Mercado Pago SDK",
      "MongoDB",
      "Tailwind CSS"
    ],
    quote: "La sincronización instantánea nos liberó del miedo a la sobreventa en días de alta demanda como CyberMonday y Hot Sale.",
    quoteAuthor: "Líder de E-Commerce",
    quoteRole: "Retail Multicanal",
    problem: "La empresa comercializaba miles de SKUs simultáneamente en su tienda web y en Mercado Libre. Cuando un producto se agotaba en uno de los canales, la actualización manual demoraba hasta varias horas, provocando cancelaciones de compra, reclamos de clientes y penalizaciones que degradaban la reputación de la cuenta en el marketplace líder.",
    solution: "Construimos una plataforma e-commerce con un motor bidireccional de sincronización impulsado por eventos (Webhooks). Cuando se produce una venta o se edita un precio en el panel administrativo, el sistema propaga la modificación inmediatamente a Mercado Libre. Igualmente, las compras realizadas en Mercado Libre descuentan stock en la tienda web al instante y generan la orden de preparación con etiqueta de Mercado Envíos lista para despacho.",
    modules: [
      "Motor bidireccional de sincronización de stock y precios en tiempo real",
      "Mapeo inteligente de categorías, atributos y variantes de producto",
      "Bandeja centralizada de órdenes de compra con emisión de etiquetas de envío",
      "Checkout integrado con Mercado Pago y pasarelas de cobro adicionales",
      "Gestión de preguntas y mensajería post-venta centralizada",
      "Panel de reportería de rentabilidad y comisiones por canal de venta"
    ],
    impact: [
      "Eliminación total del error humano y de cancelaciones por quiebre de stock",
      "Mantenimiento de la máxima categoría de reputación verde en Mercado Libre",
      "Ahorro de decenas de horas semanales en la actualización de precios masivos",
      "Escalabilidad para procesar miles de transacciones concurrentes en picos de venta"
    ],
  },

  // 7. BIOMAXX
  {
    id: 7,
    slug: "biomaxx",
    title: "Biomaxx",
    client: "Biomaxx / Godial Trading Company",
    industry: "Biotecnología & Comercio Exterior",
    categoryTag: "BIOMAXX CASO DE ESTUDIO — BIOTECNOLOGÍA & COMERCIO GLOBAL",
    heroTitle: "Plataforma Corporativa y Catálogo Tecnológico para Operaciones de Comercio Exterior",
    heroSubtitle: "Presencia digital de nivel institucional para un conglomerado global de biotecnología, materias primas sostenibles e importación/exportación.",
    summary: "Biomaxx y su grupo comercial Godial Trading Company lideran la producción y distribución internacional de soluciones sostenibles, nanotecnología (Nanodak), carbón vegetal ecológico (Pampa Grill) e insumos industriales de alta prestación. SEOdigital desarrolló su ecosistema corporativo con los más rigurosos estándares visuales y de rendimiento, facilitando acuerdos comerciales y certificaciones B2B a escala internacional.",
    duration: "4 meses",
    teamSize: "6 profesionales",
    engagementModel: "Desarrollo Corporativo & Estrategia Digital B2B",
    featured: true,
    logo: "/images/cases/biomaxx-logo.webp",
    coverImage: "/images/cases/biomaxx-logo.webp",
    coverGradient: "linear-gradient(135deg, #13783e 0%, #0d542b 100%)",
    accentColor: "#13783e",
    technologies: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Sharp",
      "Responsive UI",
      "Vercel Edge Network"
    ],
    quote: "Nuestra plataforma comunica exactamente la solvencia, rigurosidad científica y vocación global que nuestros clientes en el exterior exigen.",
    quoteAuthor: "Dirección de Comercio Exterior",
    quoteRole: "Biomaxx & Godial Trading",
    problem: "El grupo gestionaba un portafolio de productos altamente especializados —desde recubrimientos con nanotecnología para minería y transporte hasta biocombustibles certificados para exportación—. Sin embargo, carecían de un entorno digital unificado y de alto impacto que proyectara credibilidad corporativa ante compradores mayoristas y organismos internacionales de certificación.",
    solution: "Desarrollamos una arquitectura web corporativa moderna, elegante y de carga ultrarrápida. La plataforma estructura las distintas divisiones del conglomerado con identidades bien definidas (Biomaxx, Nanodak, Pampa Grill, Noram-SX, Dyneema), ofreciendo fichas técnicas descargables, documentación de sustentabilidad, especificaciones de logística aduanera y formularios de cotización adaptados a clientes corporativos.",
    modules: [
      "Catálogo técnico interactivo de nanotecnología y materiales de alta exigencia (Nanodak)",
      "Portal de productos sustentables y biocombustibles certificados (Pampa Grill)",
      "División de suministros industriales pesados y protección balística (Dyneema)",
      "Módulo de certificaciones internacionales y cumplimiento aduanero",
      "Canal de cotización y negociación directa B2B para importación/exportación",
      "Optimización de rendimiento Lighthouse 95+ en todos los dispositivos"
    ],
    impact: [
      "Posicionamiento de marca consolidado en mercados de exportación",
      "Presentación profesional e inobjetable de fichas técnicas para licitaciones",
      "Canalización ordenada de consultas comerciales de compradores extranjeros",
      "Experiencia de navegación ágil y accesible para ejecutivos internacionales"
    ],
  },

  // 8. MÓNICA APARICIO: CONTABILIDAD EN ESPAÑA
  {
    id: 8,
    slug: "monica-aparicio-contabilidad",
    title: "Mónica Aparicio - Contabilidad",
    client: "Mónica Aparicio - Asesoría Fiscal & Contable en España",
    industry: "Finanzas & LegalTech",
    categoryTag: "MÓNICA APARICIO CASO DE ESTUDIO — GESTIÓN FISCAL & AEAT ESPAÑA",
    heroTitle: "Portal de Gestión Contable, Facturación con QR Oficial y Cumplimiento Fiscal AEAT",
    heroSubtitle: "Digitalización de trámites contables para autónomos y pymes españolas, integrando validación tributaria, modelos oficiales y firma electrónica.",
    summary: "Para el despacho de Mónica Aparicio en España, SEOdigital diseñó un portal privado para clientes y un panel de administración contable que agiliza la recopilación de facturas, emite comprobantes conformes a los requisitos de la Agencia Tributaria española (AEAT / VeriFactu) y automatiza el seguimiento de calendarios fiscales trimestrales y anuales.",
    duration: "5 meses",
    teamSize: "6 profesionales",
    engagementModel: "Desarrollo a Medida & Adaptación Regulatoria Española",
    featured: false,
    coverImage: "/finanza.jpg",
    coverGradient: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
    accentColor: "#6366f1",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Generador QR AEAT",
      "API Firma Digital",
      "Tailwind CSS",
      "JWT"
    ],
    quote: "Los cierres de trimestre dejaron de ser una pesadilla de papeles perdidos: los clientes suben sus facturas al portal y el sistema las clasifica al instante.",
    quoteAuthor: "Mónica Aparicio",
    quoteRole: "Titular de Asesoría Fiscal y Contable",
    problem: "Los despachos contables en España enfrentan una alta carga de estrés al cierre de cada trimestre (Modelos 303, 111, 115) debido a que clientes autónomos y pequeñas empresas entregan sus facturas en formatos dispares, desordenadas o fuera de plazo. Además, las recientes exigencias de la normativa antifraude y facturación verificable (VeriFactu / código QR obligatorio) demandaban una modernización tecnológica urgente.",
    solution: "Creamos un portal web intuitivo donde cada cliente del despacho dispone de un casillero virtual seguro. El cliente sube facturas de ingresos y gastos (PDF o imagen), el sistema extrae fechas e importes de IVA e IRPF, y genera comprobantes de venta con código QR oficial validado. El despacho cuenta con un panel que totaliza las bases imponibles en tiempo real, anticipa la liquidación impositiva y envía recordatorios automáticos de fechas límite.",
    modules: [
      "Portal privado para clientes con buzón de facturas y tickets clasificados",
      "Generación de facturas electrónicas con código QR oficial según normativa AEAT",
      "Cálculo preliminar automático de liquidaciones trimestrales de IVA e IRPF",
      "Calendario fiscal interactivo con notificaciones de vencimiento a clientes",
      "Módulo de firma digital de documentación y contratos de prestación",
      "Repositorio documental seguro organizado por ejercicio fiscal y trimestre"
    ],
    impact: [
      "Reducción drástica del tiempo administrativo dedicado a ordenar comprobantes",
      "Cero sanciones a clientes gracias al cumplimiento estricto de los calendarios tributarios",
      "Adaptación completa y anticipada a los requerimientos de facturación electrónica en España",
      "Fidelización de la cartera de clientes con una experiencia digital moderna y transparente"
    ],
  },

  // 9. APP INMOBILIARIA DE MARCOS
  {
    id: 9,
    slug: "app-inmobiliaria-marcos",
    title: "App Inmobiliaria de Marcos",
    client: "Marcos Inmobiliaria & Desarrollos",
    industry: "PropTech & Real Estate",
    categoryTag: "PROPTECH CASO DE ESTUDIO — GESTIÓN INMOBILIARIA & CONTRATOS",
    heroTitle: "Plataforma Integral PropTech para Gestión de Propiedades, Contratos y Cobranzas",
    heroSubtitle: "Administración centralizada de cartera de alquileres y ventas, cálculo de ajustes por inflación y seguimiento de prospectos en un pipeline comercial.",
    summary: "Para la inmobiliaria liderada por Marcos, SEOdigital diseñó una solución PropTech integral que unifica la gestión de propiedades en oferta, el seguimiento comercial de interesados y la administración operativa de contratos de locación con cobranzas automatizadas y cálculo de actualizaciones periódicas.",
    duration: "5 meses",
    teamSize: "6 especialistas",
    engagementModel: "Desarrollo Web & Móvil para Gestión Inmobiliaria",
    featured: false,
    coverImage: "/bienes.jpg",
    coverGradient: "linear-gradient(135deg, #0f766e 0%, #115e59 100%)",
    accentColor: "#0f766e",
    technologies: [
      "React.js",
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloud Media Storage",
      "RESTful API",
      "Tailwind CSS"
    ],
    quote: "La plataforma nos permitió pasar de un manejo informal a tener control estricto de cada contrato, actualización de alquiler y prospecto en un solo lugar.",
    quoteAuthor: "Marcos",
    quoteRole: "Director General",
    problem: "La administración de decenas de contratos de alquiler con diferentes esquemas de ajuste periódico (ICL, IPC), sumada a la atención de consultas de compra y venta repartidas en portales y mensajes sueltos, generaba olvidos en la aplicación de aumentos, demoras en las liquidaciones a propietarios y falta de seguimiento a clientes con intención firme de compra.",
    solution: "Desarrollamos una plataforma accesible desde web y dispositivos móviles. El sistema incluye un catálogo exhaustivo de propiedades con galerías multimedia, ficha técnica y estado de disponibilidad. El módulo de administración gestiona contratos vigentes, calcula aumentos automáticamente según el índice correspondiente, emite avisos de cobro a inquilinos y genera resúmenes mensuales para propietarios con acreditación de pagos.",
    modules: [
      "Catálogo digital de propiedades con filtros avanzados y fichas multimedia",
      "Pipeline comercial para interesados (Consulta, Visita, Reserva, Boleto/Firma)",
      "Módulo de contratos con cálculo automático de ajustes periódicos",
      "Alertas automáticas de vencimiento de contratos, garantías y renovaciones",
      "Panel de liquidación a propietarios con desglose de expensas y honorarios",
      "App móvil para visitas con registro de firmas y observaciones in situ"
    ],
    impact: [
      "Actualización rigurosa y a tiempo del 100% de los alquileres administrados",
      "Transparencia total para propietarios mediante liquidaciones claras y descargables",
      "Aceleración en el ciclo de cierre de operaciones de venta y locación",
      "Ordenamiento documental de garantías, escrituras y contratos en la nube"
    ],
  },

  // 10. ESTUDIO VERAX (Existente validado)
  {
    id: 10,
    slug: "estudio-verax",
    title: "Estudio Verax",
    client: "Estudio Verax",
    industry: "InsurTech & Seguros",
    categoryTag: "ESTUDIO VERAX CASO DE ESTUDIO — INSURTECH & AUTOMATIZACIÓN",
    heroTitle: "Plataforma Privada Centralizada para Liquidación y Gestión Integral de Siniestros",
    heroSubtitle: "Eliminación de herramientas externas no seguras, automatización de informes PDF periciales y asignación inteligente por carga de trabajo.",
    summary: "Estudio Verax, referente en peritajes y liquidación de siniestros para las principales compañías aseguradoras, reemplazó el uso de planillas y carpetas compartidas por Verax Sys: una plataforma confidencial construida por SEOdigital que centraliza expedientes, peritajes multimedia y reportes automáticos.",
    duration: "4 meses",
    teamSize: "7 profesionales",
    engagementModel: "Desarrollo a Medida & Seguridad de la Información",
    featured: false,
    coverImage: "/seguro.jfif",
    coverGradient: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
    accentColor: "#6223cc",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Generador PDF"],
    quote: "Verax Sys nos permitió triplicar nuestro equipo operativo manteniendo la máxima confidencialidad que exigen las aseguradoras.",
    quoteAuthor: "Socio Director",
    quoteRole: "Estudio Verax",
    problem: "Manejo manual de expedientes, envío de peritajes por canales no corporativos y alta demanda de horas para compaginar informes en PDF.",
    solution: "Sistema privado integral con formularios periciales estandarizados, repositorio multimedia encriptado, asignación de carga de trabajo por perito y dashboard en tiempo real.",
    modules: [
      "Gestión de ciclo completo del siniestro",
      "Generación automática de dictámenes en PDF",
      "Chat interno confidencial por expediente",
      "Control granular de permisos y roles periciales",
      "Dashboard de siniestros abiertos y tiempos de cierre"
    ],
    impact: [
      "Eliminación total del uso de carpetas compartidas y canales informales",
      "Capacidad operativa ampliada en más de un 300%",
      "Estandarización y auditoría en cada dictamen emitido"
    ],
  },

  // 11. COMBIS A LA COSTA (Existente validado)
  {
    id: 11,
    slug: "combis-a-la-costa",
    title: "Combis a la Costa",
    client: "Combis a la Costa S.R.L.",
    industry: "Transporte & Movilidad",
    categoryTag: "COMBIS A LA COSTA CASO DE ESTUDIO — TRANSPORTE SAAS & RESERVAS",
    heroTitle: "Plataforma SaaS de Venta de Pasajes, Ocupación en Tiempo Real y Facturación ARCA",
    heroSubtitle: "Transformación digital completa de una empresa tradicional de transporte con venta online y hojas de ruta para choferes.",
    summary: "Con 25 años de trayectoria en el traslado interurbano de pasajeros, Combis a la Costa modernizó toda su operativa con un sistema SaaS integral desarrollado por SEOdigital que unifica venta online, control estricto de butacas sin sobreventa y facturación electrónica oficial.",
    duration: "6 meses",
    teamSize: "7 profesionales",
    engagementModel: "Desarrollo SaaS Integral & Facturación Electrónica",
    featured: false,
    logo: "/images/cases/combis-logo.jpg",
    coverImage: "/viajes.jpg",
    coverGradient: "linear-gradient(135deg, #0369a1 0%, #0c4a6e 100%)",
    accentColor: "#0284c7",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Integración ARCA", "Email Engine"],
    quote: "La sobreventa de pasajes desapareció por completo y nuestros clientes compran cómodamente desde el celular a cualquier hora.",
    quoteAuthor: "Gerencia General",
    quoteRole: "Combis a la Costa S.R.L.",
    problem: "Venta telefónica saturada, planillas en papel propensas a sobreventa de asientos y falta de control financiero en tiempo real.",
    solution: "Plataforma SaaS con portal de reservas web para pasajeros, control automático de inventario de asientos, asignación de choferes y unidades, y facturación automática con ARCA.",
    modules: [
      "Portal público de reservas con selección de butaca",
      "Control de inventario de asientos en tiempo real",
      "Hojas de ruta digitales para choferes",
      "Facturación electrónica integrada con ARCA",
      "Gestión de encomiendas y adicionales"
    ],
    impact: [
      "Cero sobreventas de butacas desde el lanzamiento",
      "Crecimiento exponencial en reservas directas online",
      "Control financiero consolidado al cierre de cada servicio"
    ],
  },

  // 12. DI-MI-GAS (Existente validado)
  {
    id: 12,
    slug: "di-mi-gas",
    title: "DI-MI-GAS",
    client: "Distribuidora DI-MI-GAS",
    industry: "Logística & Distribución",
    categoryTag: "DI-MI-GAS CASO DE ESTUDIO — DISTRIBUCIÓN & LOGÍSTICA DE GAS",
    heroTitle: "Sistema Logístico Móvil y Dashboard de Control de Flota para Distribución de Gas",
    heroSubtitle: "Rutas dinámicas, tracking en tiempo real de unidades y confirmación digital de entrega para camiones de gas envasado.",
    summary: "Distribuidora de gas envasado que implementó una plataforma logística integral con app móvil para choferes y panel de despacho en tiempo real, optimizando el consumo de combustible y la puntualidad en los repartos.",
    duration: "5 meses",
    teamSize: "6 especialistas",
    engagementModel: "Desarrollo Web & App Móvil con GPS",
    featured: false,
    coverImage: "/camion.jpg",
    coverGradient: "linear-gradient(135deg, #b45309 0%, #78350f 100%)",
    accentColor: "#d97706",
    technologies: ["React Native", "React.js", "Node.js", "Express", "MongoDB", "Google Maps API", "WebSockets"],
    quote: "Vemos la posición exacta de cada camión y qué pedidos entregó en el acto, eliminando las demoras en el despacho.",
    quoteAuthor: "Responsable de Logística",
    quoteRole: "DI-MI-GAS",
    problem: "Asignación manual de pedidos, falta de localización de los choferes y consumo excesivo de combustible por rutas ineficientes.",
    solution: "App móvil para conductores con GPS integrado, motor de asignación por proximidad geográfica y confirmación digital de entrega.",
    modules: [
      "App móvil de chofer con navegación guiada",
      "Despacho inteligente de pedidos por zona",
      "Mapa en vivo con ubicación de camiones",
      "Registro digital de cobranzas y garrafas entregadas"
    ],
    impact: [
      "Optimización de rutas y disminución del gasto en combustible",
      "Visibilidad 100% en tiempo real del estado de los pedidos",
      "Eliminación de reclamos por entregas no registradas"
    ],
  }
];

// Categorías / Industrias para filtros corporativos
export const industriesList = [
  "Todas las industrias",
  "Automotriz & Movilidad",
  "Logística & Transporte Pesado",
  "Logística & Cadena de Suministro",
  "Sostenibilidad & Cleantech",
  "Comercio Electrónico & Retail",
  "Biotecnología & Comercio Exterior",
  "Finanzas & LegalTech",
  "PropTech & Real Estate",
  "InsurTech & Seguros"
];

// Funciones de consulta
export const getAllCases = () => casesData;

export const getFeaturedCases = () => casesData.filter((c) => c.featured);

export const getCaseBySlug = (slug) => casesData.find((c) => c.slug === slug);

export const getCaseById = (id) => casesData.find((c) => c.id === Number(id));

export const getCasesByIndustry = (industry) => {
  if (!industry || industry === "Todas las industrias") return casesData;
  return casesData.filter((c) => c.industry.toLowerCase().includes(industry.toLowerCase()));
};

export const getRelatedCases = (currentSlug, count = 3) => {
  return casesData
    .filter((c) => c.slug !== currentSlug)
    .slice(0, count);
};
