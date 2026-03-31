import React from "react";
import "../styles/privacyTerms.css";

const PrivacyTerms = () => {
  return (
    <main className="privacy-terms-page">
      <header className="privacy-terms-header">
        <span className="privacy-terms-kicker">LEGAL</span>
        <h1>Política de Privacidad y Términos de Servicio</h1>
        <p>
          En esta sección presentamos información general sobre cómo tratamos los
          datos personales y las condiciones básicas de uso de nuestros
          servicios digitales.
        </p>
      </header>

      <section className="privacy-terms-section">
        <h2>Política de Privacidad</h2>
        <p>
          Recopilamos únicamente la información necesaria para responder
          consultas, brindar nuestros servicios y mejorar la experiencia del
          usuario en nuestras plataformas.
        </p>
        <p>
          Los datos personales se tratan con medidas de seguridad razonables y
          no se comparten con terceros, salvo obligación legal o cuando sea
          necesario para la prestación del servicio.
        </p>
        <p>
          El usuario puede solicitar acceso, actualización o eliminación de sus
          datos mediante nuestros canales de contacto oficiales.
        </p>
      </section>

      <section className="privacy-terms-section">
        <h2>Términos de Servicio</h2>
        <p>
          El uso de este sitio y de nuestros servicios implica la aceptación de
          estas condiciones generales. El usuario se compromete a realizar un
          uso lícito, responsable y respetuoso de los contenidos y
          funcionalidades disponibles.
        </p>
        <p>
          SEOdigital puede actualizar, modificar o suspender contenidos,
          funcionalidades y condiciones cuando sea necesario para mejorar el
          servicio o cumplir obligaciones legales.
        </p>
        <p>
          Para más detalle legal complementario, también puede consultar las
          secciones de Aviso Legal y Política de Cookies disponibles en el
          footer del sitio.
        </p>
      </section>

      <section className="privacy-terms-section">
        <h2>Contacto legal</h2>
        <p>
          Si necesitás realizar una consulta sobre privacidad o condiciones de
          uso, podés escribirnos a través de la página de contacto.
        </p>
      </section>
    </main>
  );
};

export default PrivacyTerms;
