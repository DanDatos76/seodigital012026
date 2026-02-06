// src/components/CookiesPolicy.jsx
import React from "react";
import "../styles//cookies.css";

const CookiesPolicy = () => {
  return (
    <div className="cookies-container">
      <h1 className="cookies-title">POLÍTICA DE COOKIES</h1>

      <p className="cookies-text">
        En este sitio web utilizamos cookies de terceros y propias para mejorar
        nuestros servicios y mostrarle publicidad relacionada con sus
        preferencias mediante el análisis de sus hábitos de navegación.
      </p>

      <p className="cookies-text">
        Si continúa navegando, consideramos que acepta su uso. Puede obtener más
        información, o bien conocer cómo cambiar la configuración, en nuestra
        Política de Cookies.
      </p>

      <h2 className="cookies-subtitle">Entidad Responsable</h2>

      <p className="cookies-text">
        La entidad responsable de la recogida, procesamiento y utilización de sus
        datos personales es:
      </p>

      <p className="cookies-text">
        <strong>SEO Digital</strong>
        <br />
        Cosquín 4062, Ciudad Autónoma de Buenos Aires
      </p>

      <h2 className="cookies-subtitle">¿Qué son las cookies?</h2>

      <p className="cookies-text">
        Las cookies son pequeños archivos que se descargan en el dispositivo del
        usuario al acceder a determinadas páginas web. Permiten almacenar y
        recuperar información sobre los hábitos de navegación del usuario.
      </p>

      <h2 className="cookies-subtitle">¿Qué tipos de cookies existen?</h2>

      <p className="cookies-text">
        Las cookies pueden clasificarse según quién las gestione, el tiempo que
        permanecen activas o su finalidad.
      </p>

      {/* Tabla */}
      <div className="cookies-table-wrapper">
        <table className="cookies-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Caducidad</th>
              <th>Finalidad</th>
              <th>Clase</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>_ga</td>
              <td>De terceros (Google)</td>
              <td>2 años</td>
              <td>Analítica de tráfico web</td>
              <td>No exenta</td>
            </tr>

            <tr>
              <td>_gid</td>
              <td>De terceros (Google)</td>
              <td>24 horas</td>
              <td>Distinguir usuarios</td>
              <td>No exenta</td>
            </tr>

            <tr>
              <td>_gat</td>
              <td>De terceros (Google)</td>
              <td>1 minuto</td>
              <td>Limitar solicitudes</td>
              <td>No exenta</td>
            </tr>

            <tr>
              <td>PHPSESSID</td>
              <td>Propia</td>
              <td>Sesión</td>
              <td>Gestión de sesión del usuario</td>
              <td>Exenta</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Secciones */}
      <h2 className="cookies-section-title">Cookies de rendimiento</h2>
      <p className="cookies-text">
        Estas cookies permiten mejorar el rendimiento del sitio web y ofrecer
        una mejor experiencia al usuario.
      </p>

      <h2 className="cookies-section-title">Cookies de geo-localización</h2>
      <p className="cookies-text">
        Se utilizan para identificar la ubicación aproximada del usuario y
        ofrecer contenidos personalizados.
      </p>

      <h2 className="cookies-section-title">Cookies de registro</h2>
      <p className="cookies-text">
        Permiten al usuario permanecer identificado y acceder a servicios
        personalizados.
      </p>

      <h2 className="cookies-section-title">Cookies de analíticas</h2>
      <p className="cookies-text">
        Son cookies que permiten cuantificar el número de usuarios y realizar
        medición y análisis estadístico.
      </p>

      <h2 className="cookies-section-title">Cookies de publicidad</h2>
      <p className="cookies-text">
        Estas cookies permiten gestionar los espacios publicitarios y mostrar
        anuncios relevantes.
      </p>

      <h2 className="cookies-section-title">
        Cookies publicitarias de terceros
      </h2>
      <p className="cookies-text">
        Algunos servicios externos como Google Ads pueden instalar cookies para
        mostrar anuncios personalizados.
      </p>

      <h2 className="cookies-subtitle">
        ¿Cómo puede deshabilitar las cookies en su navegador?
      </h2>

      <p className="cookies-text">
        Puede configurar su navegador para permitir, bloquear o eliminar las
        cookies instaladas. Consulte la sección de ayuda de su navegador para
        más información.
      </p>
    </div>
  );
};

export default CookiesPolicy;
