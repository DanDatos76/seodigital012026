// Casos de Estudio - SEOdigital
// Array con 11 proyectos reales destacados

export const casesData = [
  {
    id: 1,
    title: "Estudio Verax",
    client: "Estudio Verax",
    industry: "InsurTech / Seguros",
    duration: "4 meses",
    teamSize: "20 profesionales",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "API REST"
    ],
    problem: "Estudio especializado en gestión, análisis y cierre de siniestros de seguros con procesos completamente manuales. Generación manual de informes PDF, uso de herramientas no seguras como Google Drive y Discord, asignación manual de casos, ausencia de métricas en tiempo real y escasa trazabilidad. Alto riesgo de pérdida de información sensible en un sector que demanda máxima confidencialidad.",
    solution: "Desarrollamos Verax Sys, una plataforma privada y centralizada que elimina dependencia de herramientas externas. Sistema integral con gestión completa del ciclo de vida de siniestros, formularios inteligentes estandarizados, generación automática de reportes PDF, gestión documental multimedia, chat interno privado por caso (separación admin/operativo), asignación inteligente por carga de trabajo, roles granulares y dashboard con KPIs en tiempo real.",
    modules: [
      "Gestión centralizada de casos (ciclo completo)",
      "Formularios inteligentes estandarizados",
      "Generación automática de reportes PDF",
      "Gestión documental multimedia",
      "Chat interno privado por caso",
      "Asignación inteligente por carga de trabajo",
      "Roles granulares (analista, admin, dirección)",
      "Dashboard con KPIs y proyecciones en tiempo real"
    ],
    impact: [
      "Eliminación total de herramientas externas (Drive, Discord)",
      "Triplicaron su equipo operativo sin perder control",
      "Incremento de capacidad de gestión de casos > 300%",
      "Automatización completa de informes",
      "Máxima seguridad y trazabilidad de información sensible"
    ],
    image: "/cases/verax.jpg"
  },
  {
    id: 2,
    title: "Cuidatech",
    client: "Cuidatech HealthCare",
    industry: "HealthTech / Telemedicina",
    duration: "6 meses",
    teamSize: "7 profesionales",
    technologies: [
      "React Native",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "WebSockets",
      "JWT",
      "APIs Geolocation",
      "Wearables APIs"
    ],
    problem: "Consultorio especializado en adultos mayores sin capacidad de monitoreo remoto, con total dependencia de atención presencial. Familias sin información en tiempo real sobre sus seres queridos, ausencia de geolocalización de seguridad y comunicación dispersa por canales externos no integrados.",
    solution: "Desarrollamos una plataforma integral con app móvil (iOS/Android), panel web para familiares y backend robusto. Sistema completo de monitoreo remoto con sincronización de smartwatch para seguimiento cardíaco, oxígeno y sueño, geolocalización en tiempo real con geocercas de seguridad, botón SOS con notificación inmediata, videollamadas y chat familiar encriptado, biblioteca multimedia autogestionable y e-commerce integrado para venta de insumos.",
    modules: [
      "App Pacientes con sincronización smartwatch",
      "Monitoreo cardíaco, oxígeno y sueño",
      "Geolocalización en tiempo real con geocercas",
      "Botón SOS con notificación inmediata",
      "Videollamadas y chat familiar encriptado",
      "Panel Web para familiares con métricas",
      "Biblioteca multimedia autogestionable",
      "E-commerce integrado para insumos"
    ],
    impact: [
      "Modelo de suscripción escalable implementado",
      "Generación de ingresos recurrentes",
      "Incremento significativo en retención de pacientes",
      "Nueva unidad de negocio digital creada",
      "Tranquilidad para familias con monitoreo 24/7"
    ],
    image: "/cases/cuidatech.jpg"
  },
  {
    id: 3,
    title: "DI-MI-GAS",
    client: "Distribuidora DI-MI-GAS",
    industry: "Logística / Distribución Gas",
    duration: "5 meses",
    teamSize: "6 profesionales",
    technologies: [
      "React Native",
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Google Maps API",
      "WebSockets"
    ],
    problem: "Distribuidora de gas envasado con flota de 7 camiones operando con asignación manual de rutas, choferes perdidos sin GPS, alto consumo de combustible, ausencia total de métricas operativas, dependencia crítica de personal administrativo y sin confirmación digital de entregas. Pérdida constante de eficiencia y costos elevados.",
    solution: "Implementamos un Sistema Logístico Integral con app móvil para choferes y dashboard web en tiempo real. Motor de asignación inteligente de rutas por zonas, capacidad y carga. App con navegación GPS, confirmación digital de entrega y reporte de incidencias. Dashboard con visualización de 7 camiones en tiempo real, estado de pedidos, gestión de recursos y auditoría completa. Métricas de consumo de combustible y rendimiento.",
    modules: [
      "App Choferes con GPS y navegación",
      "Confirmación digital de entrega",
      "Motor de asignación inteligente",
      "Dashboard Real-Time con tracking flota",
      "Gestión de recursos y zonas",
      "Reporte de incidencias",
      "Auditoría de acciones y cambios",
      "Métricas: combustible, rendimiento, facturación"
    ],
    impact: [
      "Incremento de facturación > 200%",
      "Reducción significativa de costos de combustible",
      "Visibilidad total de flota en tiempo real",
      "Eliminación completa de procesos manuales",
      "Control de 7 camiones simultáneos sin esfuerzo"
    ],
    image: "/cases/dimigas.jpg"
  },
  {
    id: 4,
    title: "Combis a la Costa",
    client: "Combis a la Costa S.R.L.",
    industry: "Transporte / SaaS",
    duration: "6 meses",
    teamSize: "7 profesionales",
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "API REST",
      "Integración Email"
    ],
    problem: "Empresa de transporte de pasajeros con 25 años de trayectoria operando con sistema legacy obsoleto. Sin venta online efectiva, pérdida constante de pasajeros, problemas de sobreventa por falta de control de inventario, ausencia de métricas financieras consolidadas y procesos completamente manuales que frenaban el crecimiento.",
    solution: "Desarrollamos Plataforma SaaS Privada integral que unifica Ventas, Operación y Finanzas. Dashboard completo de gestión de viajes con control de rutas, ocupación y estado en tiempo real. Sistema de venta de pasajes con control automático de inventario que elimina sobreventa. Portal de reservas online integrado, gestión de adicionales (mascotas, encomiendas), hojas de ruta digitales, facturación integrada con ARCA y notificaciones automáticas.",
    modules: [
      "Dashboard gestión de viajes y rutas",
      "Venta de pasajes con control inventario",
      "Portal Reservas Online en tiempo real",
      "Gestión de adicionales (mascotas, encomiendas)",
      "Hojas de ruta digitales para choferes",
      "Facturación ARCA integrada",
      "Gestión de caja y control financiero",
      "Notificaciones email automáticas"
    ],
    impact: [
      "Reducción drástica de pérdida de pasajeros",
      "Incremento exponencial de reservas online",
      "Control financiero total en tiempo real",
      "Eliminación completa de papel",
      "Escalabilidad operativa sin límites"
    ],
    image: "/cases/combis.jpg"
  },
  {
    id: 5,
    title: "BC Cancún Transportation",
    client: "BC Transportation Services",
    industry: "Turismo / Transporte Ejecutivo",
    duration: "5 meses",
    teamSize: "6 profesionales",
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT"
    ],
    problem: "Empresa de transporte turístico y ejecutivo en Cancún y Riviera Maya con reservas fragmentadas en múltiples herramientas, información dispersa y sin consolidar, ausencia de métricas operativas, dificultad extrema para asignar vehículos y conductores de manera eficiente, e información sensible de clientes dispersa en sistemas no seguros.",
    solution: "Desarrollamos Web App Privada (Stack MERN) para gestión 100% centralizada. Sistema unificado para crear y modificar reservas, gestión multi-zona (aeropuerto, hoteles, zonas turísticas), asignación eficiente de vehículos y conductores, dashboard con métricas de ocupación por zona y viajes completados, roles diferenciados (Admin, Operadores, Dirección) y comunicación estructurada con clientes.",
    modules: [
      "Gestión centralizada de reservas",
      "Gestión multi-zona turística",
      "Asignación inteligente vehículos/conductores",
      "Dashboard métricas operativas",
      "Sistema de roles y permisos",
      "Comunicación estructurada clientes",
      "Confirmaciones automáticas",
      "Control disponibilidad en tiempo real"
    ],
    impact: [
      "Centralización total de operaciones",
      "Reducción drástica de errores operativos",
      "Capacidad de crecimiento ordenado",
      "Control real de disponibilidad",
      "Información sensible protegida y organizada"
    ],
    image: "/cases/bccancun.jpg"
  },
  {
    id: 6,
    title: "SaludLibre",
    client: "SaludLibre Marketplace",
    industry: "HealthTech / Marketplace Médico",
    duration: "7 meses",
    teamSize: "8 profesionales",
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "WebSockets",
      "API Videollamadas"
    ],
    problem: "Iniciativa HealthTech que necesitaba conectar pacientes con médicos en un marketplace funcional. Gestión manual de turnos, ausencia de videoconsultas integradas en la plataforma, falta de modelo de monetización SaaS recurrente y sin sistema de historial clínico digital.",
    solution: "Desarrollamos Plataforma SaaS con 3 Paneles especializados (Admin, Médico, Paciente). Buscador avanzado por especialidad, ubicación y disponibilidad con visualización en mapa. Panel paciente con agenda de turnos, historial, recetas y videoconsultas. Panel médico con gestión de agenda, historia clínica, emisión de recetas digitales y seguimiento de referidos. Videollamadas integradas nativamente. Modelo de suscripción con planes Free, Medium y Premium para médicos.",
    modules: [
      "Buscador avanzado con mapa interactivo",
      "Panel Paciente (turnos, historial, recetas)",
      "Panel Médico (agenda, historia clínica)",
      "Videollamadas integradas en plataforma",
      "Emisión de recetas digitales",
      "Modelo Suscripción (Free, Medium, Premium)",
      "Sistema de referidos entre profesionales",
      "Dashboard de administración completo"
    ],
    impact: [
      "Creación de marketplace médico funcional",
      "Modelo SaaS con ingresos recurrentes implementado",
      "Digitalización completa de atención médica",
      "Recetas digitales y trazabilidad",
      "Escalabilidad con múltiples especialidades"
    ],
    image: "/cases/saludlibre.jpg"
  },
  {
    id: 7,
    title: "CF Motos",
    client: "CF Motos Argentina",
    industry: "Automotriz / CRM con IA",
    duration: "6 meses",
    teamSize: "7 profesionales",
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Motor IA Conversacional",
      "Procesamiento Video",
      "WebSockets"
    ],
    problem: "Concesionaria de motos importadas con taller propio enfrentando alto volumen de consultas sin trazabilidad, ausencia de métricas por vendedor, leads mezclados sin diferenciar origen (pauta/orgánico), y taller sin registro visual para mostrar al cliente el trabajo realizado. Pérdida de oportunidades comerciales y falta de transparencia.",
    solution: "Desarrollamos CRM Inteligente potenciado con IA y Módulo Taller innovador. Ficha Cliente 360 con historial completo de consultas, compras y postventa. Motor de IA conversacional que detecta intención, responde preguntas frecuentes y deriva automáticamente a vendedor cuando necesario. Pipeline comercial con asignación automática de leads y medición de conversión por canal. Módulo Taller con VIDEO: grabación del proceso de reparación, compresión automática y envío al cliente. Dashboard con ROI de campañas.",
    modules: [
      "Ficha Cliente 360 completa",
      "Motor IA Conversacional inteligente",
      "Pipeline comercial con asignación auto",
      "Medición conversión por canal",
      "Módulo Taller con VIDEO",
      "Grabación y compresión automática",
      "Envío automático a cliente",
      "Dashboard ROI campañas y ticket promedio"
    ],
    impact: [
      "Incremento significativo de tasa de conversión",
      "Optimización de pauta publicitaria con data real",
      "Transparencia total en taller (efecto confianza)",
      "Automatización de respuestas frecuentes",
      "Medición precisa de ROI por canal"
    ],
    image: "/cases/cfmotos.jpg"
  },
  {
    id: 8,
    title: "Paggus Hotel Command Center",
    client: "Paggus Hospitality Group",
    industry: "Hotelería / Sostenibilidad",
    duration: "5 meses",
    teamSize: "6 profesionales",
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT"
    ],
    problem: "Administrador de hoteles gestionando operaciones ‘por intuición’ sin datos consolidados. Información de sostenibilidad completamente dispersa, falta de auditoría y control de usuarios, imposibilidad de certificar normas ambientales sin métricas válidas. Necesidad urgente de gestión basada en datos.",
    solution: "Desarrollamos Web App Modular tipo ‘Command Center’ para administración hotelera inteligente. Dashboard ejecutivo con métricas clave: Huella CO2, Energía (kWh), Agua, Residuos, Compras Km0, Biodiversidad. Módulo de metas por área, módulo de certificación con gestión de evidencias, seguimiento financiero y ROI de iniciativas sustentables, capacitación con gamification para staff y seguimiento de reputación.",
    modules: [
      "Dashboard Ejecutivo sostenibilidad",
      "Métricas: CO2, Energía, Agua, Residuos",
      "Módulo Metas por área",
      "Módulo Certificación con evidencias",
      "Finanzas y ROI de iniciativas",
      "Capacitación con Gamification",
      "Seguimiento de Reputación",
      "Control total de usuarios y auditoría"
    ],
    impact: [
      "Gestión basada en datos reales (no intuición)",
      "Trazabilidad completa para certificaciones",
      "Métricas de sostenibilidad en tiempo real",
      "Control total de operación hotelera",
      "Evidencia documentada para auditorías"
    ],
    image: "/cases/paggus.jpg"
  },
  {
    id: 9,
    title: "Inmobiliaria Confidencial - España",
    client: "Confidencial",
    industry: "PropTech / Inmobiliario",
    duration: "6 meses",
    teamSize: "7 profesionales",
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "API Firma Digital",
      "API Hacienda España"
    ],
    problem: "Inmobiliaria en España con desorden documental crítico, alto riesgo fiscal ante Hacienda, pérdida frecuente de facturas, contratos en PDF sueltos sin control, ausencia total de alertas de vencimientos y dificultad extrema para cumplir con normativa fiscal española.",
    solution: "Desarrollamos CRM Inmobiliario especializado con Integración Fiscal oficial. Gestión completa de propiedades e inquilinos con ficha detallada e historial de pagos. Firma electrónica integrada para contratos digitales. Validación Fiscal directa con Hacienda: facturas con QR oficial cumpliendo normativa vigente. Alertas automáticas de vencimientos de contratos, renovaciones y pagos. Dashboard de rentabilidad por inmueble y repositorio documental centralizado.",
    modules: [
      "Gestión Propiedades e Inquilinos completa",
      "Firma Electrónica Integrada",
      "Validación Fiscal Hacienda España",
      "Facturas con QR oficial",
      "Alertas Vencimientos automáticas",
      "Rentabilidad por Inmueble",
      "Repositorio Documental centralizado",
      "Control de pagos y morosidad"
    ],
    impact: [
      "Cumplimiento fiscal y legal 100%",
      "Eliminación total de errores documentales",
      "Reducción drástica de morosidad",
      "Trazabilidad completa ante auditorías",
      "Tranquilidad fiscal y organizacional"
    ],
    image: "/cases/inmobiliaria.jpg"
  },
  {
    id: 10,
    title: "Laboratorio Confidencial - Argentina",
    client: "Confidencial",
    industry: "Salud / Laboratorio Clínico",
    duration: "8 meses",
    teamSize: "9 profesionales",
    technologies: [
      "React Native",
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "WebSockets"
    ],
    problem: "Laboratorio clínico e importador de insumos con sistemas completamente fragmentados (turnos separados de laboratorio, separados de facturación), sin app para pacientes, largas colas en recepción, gestión de stock desconectada de consumo real de estudios. Pérdida de eficiencia y experiencia del paciente deficiente.",
    solution: "Implementamos Ecosistema Integral multiplataforma (App Pacientes + Web + Tótem Autogestión). App móvil con gestión de turnos, historial clínico completo y descarga de resultados. Tótem de Autogestión en recepción para check-in automático. Módulo Laboratorio con trazabilidad de muestras y validación de resultados. Gestión inteligente de Stock/Importación con alertas de reposición según consumo de estudios. Facturación integrada con Obras Sociales y particulares. Notificaciones automáticas.",
    modules: [
      "App Pacientes (Turnos, Historial, Resultados)",
      "Tótem Autogestión en Recepción",
      "Módulo Laboratorio con trazabilidad",
      "Validación de resultados",
      "Gestión Stock/Importación inteligente",
      "Alertas reposición según consumo",
      "Facturación Obras Sociales integrada",
      "Notificaciones automáticas turnos/resultados"
    ],
    impact: [
      "Reducción drástica de tiempos de espera",
      "Optimización de inventario de insumos",
      "Integración total de áreas",
      "Autogestión de pacientes exitosa",
      "Mejora sustancial en experiencia del paciente"
    ],
    image: "/cases/laboratorio.jpg"
  },
  {
    id: 11,
    title: "Taller Automotriz Confidencial - Argentina",
    client: "Confidencial",
    industry: "Automotriz / Service",
    duration: "5 meses",
    teamSize: "6 profesionales",
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Generador QR"
    ],
    problem: "Taller mecánico de alta demanda con control total en papel, historial de vehículos disperso, clientes desconfían o pierden documentación, imposibilidad de medir rentabilidad por servicio y ausencia de estrategia de retención y recurrencia de clientes.",
    solution: "Desarrollamos Web App Operativa con innovador Sistema de CÓDIGO QR Único por cliente. El cliente escanea su QR y accede instantáneamente a historial completo de su auto, repuestos instalados, próximos services recomendados. Gestión de Turnos Online con asignación de mecánicos. Órdenes de Trabajo Digitales con detalle de tareas, tiempos y repuestos. Control de Stock asociado a órdenes. Recordatorios automáticos de vencimiento de garantía y próximo service. Dashboard de productividad y rentabilidad.",
    modules: [
      "Sistema CÓDIGO QR Único por cliente",
      "Historial completo del vehículo",
      "Gestión Turnos Online",
      "Órdenes de Trabajo Digitales",
      "Control Stock Repuestos",
      "Recordatorios Automáticos",
      "Dashboard Productividad mecánicos",
      "Rentabilidad por servicio"
    ],
    impact: [
      "Transparencia total con efecto 'wow' en clientes",
      "Incremento significativo de recurrencia",
      "Control preciso de stock y costos",
      "Eliminación total de papel",
      "Fidelización de clientes maximizada"
    ],
    image: "/cases/taller.jpg"
  }
];

// Exportar también por categoría para futuros filtros
export const getCasesByIndustry = (industry) => {
  return casesData.filter(caseItem => caseItem.industry.includes(industry));
};

// Obtener un caso por ID
export const getCaseById = (id) => {
  return casesData.find(caseItem => caseItem.id === id);
};
