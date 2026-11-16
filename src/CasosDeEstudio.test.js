import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import CasosDeEstudio from './components/CasosDeEstudio';
import CaseStudyDetail from './components/CaseStudyDetail';

describe('Componente CasosDeEstudio (Listado Principal)', () => {
  const renderPage = () => {
    return render(
      <MemoryRouter initialEntries={['/casos-de-estudio']}>
        <Routes>
          <Route path="/casos-de-estudio" element={<CasosDeEstudio />} />
          <Route path="/casos-de-estudio/:slug" element={<CaseStudyDetail />} />
        </Routes>
      </MemoryRouter>
    );
  };

  test('renderiza el hero corporativo y el título con el punto de acento', () => {
    renderPage();
    expect(screen.getByText(/NUESTROS CLIENTES & CASOS DE ÉXITO/i)).toBeInTheDocument();
    expect(screen.getByText(/Más de 10 Años de Entrega/i)).toBeInTheDocument();
    expect(screen.getByText(/Sobresaliente/i)).toBeInTheDocument();
  });

  test('renderiza las tarjetas de los 9 clientes o soluciones requeridos', () => {
    renderPage();

    // 1. PlasticMap
    expect(screen.getAllByText(/PlasticMap/i).length).toBeGreaterThan(0);
    // 2. Zontes Motos
    expect(screen.getAllByText(/Zontes Motos/i).length).toBeGreaterThan(0);
    // 3. CFMotos
    expect(screen.getAllByText(/CFMotos/i).length).toBeGreaterThan(0);
    // 4. Logística y control volumétrico
    expect(screen.getAllByText(/Logística y Control Volumétrico/i).length).toBeGreaterThan(0);
    // 5. Transporte Muzio
    expect(screen.getAllByText(/Transporte Muzio/i).length).toBeGreaterThan(0);
    // 6. Ecommerce con Mercado Libre
    expect(screen.getAllByText(/Ecommerce con Mercado Libre/i).length).toBeGreaterThan(0);
    // 7. Biomaxx
    expect(screen.getAllByText(/Biomaxx/i).length).toBeGreaterThan(0);
    // 8. Mónica Aparicio
    expect(screen.getAllByText(/Mónica Aparicio - Contabilidad/i).length).toBeGreaterThan(0);
    // 9. App inmobiliaria de Marcos
    expect(screen.getAllByText(/App Inmobiliaria de Marcos/i).length).toBeGreaterThan(0);
  });

  test('restricción de logística: omite a Luciano y confidencialidad sanitaria', () => {
    renderPage();
    const pageText = document.body.textContent;
    expect(pageText).not.toMatch(/luciano/i);
  });

  test('filtrado por búsqueda funciona en tiempo real en la grilla', () => {
    renderPage();
    const searchInput = screen.getByPlaceholderText(/Buscar por cliente, tecnología o palabras clave/i);
    const grid = document.querySelector('.corporate-clients-grid');

    fireEvent.change(searchInput, { target: { value: 'neumáticos' } });
    expect(within(grid).getAllByText(/Transporte Muzio/i).length).toBeGreaterThan(0);
    expect(within(grid).queryByText(/PlasticMap/i)).not.toBeInTheDocument();

    // Limpiar búsqueda
    fireEvent.change(searchInput, { target: { value: '' } });
    expect(within(grid).getAllByText(/PlasticMap/i).length).toBeGreaterThan(0);
  });

  test('filtrado por industria funciona correctamente en la grilla', () => {
    renderPage();
    const select = screen.getByLabelText(/Filtrar por industria:/i);
    const grid = document.querySelector('.corporate-clients-grid');

    fireEvent.change(select, { target: { value: 'Automotriz & Movilidad' } });
    expect(within(grid).getAllByText(/CFMotos/i).length).toBeGreaterThan(0);
    expect(within(grid).getAllByText(/Zontes Motos/i).length).toBeGreaterThan(0);
    expect(within(grid).queryByText(/PlasticMap/i)).not.toBeInTheDocument();
  });

  test('muestra logos oficiales de CFMotos y Combis a la Costa desde /images/cases', () => {
    renderPage();
    const cfmotosImg = screen.getByAltText(/CFMotos Argentina/i);
    expect(cfmotosImg).toBeInTheDocument();
    expect(cfmotosImg.getAttribute('src')).toMatch(/\/images\/cases\/.*cfmoto.*\.png/i);

    const combisImg = screen.getByAltText(/Combis a la Costa/i);
    expect(combisImg).toBeInTheDocument();
    expect(combisImg.getAttribute('src')).toMatch(/\/images\/cases\/combis-logo\.jpg/i);
  });
});

describe('Componente CaseStudyDetail (Página Individual)', () => {
  const renderDetail = (slug) => {
    return render(
      <MemoryRouter initialEntries={[`/casos-de-estudio/${slug}`]}>
        <Routes>
          <Route path="/casos-de-estudio/:slug" element={<CaseStudyDetail />} />
          <Route path="/casos-de-estudio" element={<CasosDeEstudio />} />
        </Routes>
      </MemoryRouter>
    );
  };

  test('renderiza el detalle de Transporte Muzio / Neumáticos con toda la arquitectura', () => {
    renderDetail('transporte-muzio-neumaticos');

    expect(screen.getByText(/ERP de Cargas Pesadas y Control Telemétrico Avanzado de Neumáticos de Flota/i)).toBeInTheDocument();
    expect(screen.getByText(/El resumen/i)).toBeInTheDocument();
    expect(screen.getByText(/El desafío/i)).toBeInTheDocument();
    expect(screen.getAllByText(/La solución/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Resultados obtenidos/i)).toBeInTheDocument();

    // Tecnologías
    expect(screen.getAllByText('Next.js 16 (App Router)').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Gestya GPS Telemetry').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Inversify (DI)').length).toBeGreaterThan(0);

    // Módulos
    expect(screen.getByText(/Inventario de neumáticos con marcado físico a máquina a fuego/i)).toBeInTheDocument();
    expect(screen.getByText(/Diagrama visual de ejes y posiciones/i)).toBeInTheDocument();
  });

  test('no muestra el banner de validación interna en ningún caso', () => {
    renderDetail('plasticmap');

    expect(screen.queryByText(/Control de Calidad y Validación de Datos Corporativos/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/En validación con Juan \/ Gustavo/i)).not.toBeInTheDocument();
  });

  test('formulario interactivo de descarga de PDF funciona y muestra confirmación', () => {
    renderDetail('cfmotos');

    const emailInputs = screen.getAllByPlaceholderText(/tu.nombre@empresa.com/i);
    const submitBtns = screen.getAllByRole('button', { name: /Solicitar PDF/i });

    fireEvent.change(emailInputs[0], { target: { value: 'ejecutivo@empresa.com' } });
    fireEvent.click(submitBtns[0]);

    expect(screen.getAllByText(/¡Solicitud recibida!/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/ejecutivo@empresa.com/i).length).toBeGreaterThan(0);
  });

  test('detalle de Logística y Control Volumétrico respeta la restricción de identidad', () => {
    renderDetail('logistica-control-volumetrico');

    const detailText = document.body.textContent;
    expect(detailText).not.toMatch(/luciano/i);
    expect(screen.getAllByText(/Operador Logístico de Cargas y Paquetería Especializada/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Plataforma de Control Volumétrico, Gestión de Envíos y Trazabilidad de Carga Crítica/i)).toBeInTheDocument();
  });
});
