import { casesData, getCaseBySlug, getCasesByIndustry } from './data/casesData';

describe('Casos de Estudio y Clientes - SEOdigital', () => {
  const requiredSlugs = [
    'plasticmap',
    'zontes-motos',
    'cfmotos',
    'logistica-control-volumetrico',
    'transporte-muzio-neumaticos',
    'ecommerce-mercado-libre',
    'biomaxx',
    'monica-aparicio-contabilidad',
    'app-inmobiliaria-marcos'
  ];

  test('todos los 9 clientes o soluciones requeridos están contemplados', () => {
    requiredSlugs.forEach((slug) => {
      const caseItem = getCaseBySlug(slug);
      expect(caseItem).toBeDefined();
      expect(caseItem.title).toBeTruthy();
      expect(caseItem.heroTitle).toBeTruthy();
      expect(caseItem.summary).toBeTruthy();
      expect(caseItem.technologies.length).toBeGreaterThan(0);
      expect(caseItem.modules.length).toBeGreaterThan(0);
      expect(caseItem.impact.length).toBeGreaterThan(0);
    });
  });

  test('restricción estricta de contenido para logística: omite a Luciano e información identificatoria sanitaria', () => {
    const logisticaCase = getCaseBySlug('logistica-control-volumetrico');
    expect(logisticaCase).toBeDefined();

    const caseString = JSON.stringify(logisticaCase).toLowerCase();
    expect(caseString).not.toContain('luciano');
  });

  test('no contiene advertencias públicas de validación interna con Juan / Gustavo', () => {
    const allDataString = JSON.stringify(casesData);
    expect(allDataString).not.toContain('Control de Calidad y Validación de Datos Corporativos');
    expect(allDataString).not.toContain('En validación con Juan / Gustavo');
  });

  test('el filtrado por industria funciona correctamente', () => {
    const autoCases = getCasesByIndustry('Automotriz');
    expect(autoCases.length).toBeGreaterThanOrEqual(2);
    expect(autoCases.some((c) => c.slug === 'cfmotos')).toBe(true);
    expect(autoCases.some((c) => c.slug === 'zontes-motos')).toBe(true);
  });
});
