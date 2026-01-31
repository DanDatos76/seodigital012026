 import React, { useState } from "react";
import "../styles/faq.css";

const faqData = [
  {
    category: "General",
    items: [
      {
        question: "¿Qué hace SEOdigital?",
        answer:
          "SEOdigital es una empresa global de desarrollo de software que ofrece servicios de outsourcing, equipos dedicados y soluciones tecnológicas personalizadas. Ayudamos a empresas de todos los tamaños a escalar sus capacidades tecnológicas con talento de primer nivel."
      },
      {
        question: "¿Cómo ayuda SEOdigital a las empresas a escalar sus equipos de ingeniería?",
        answer:
          "Proveemos ingenieros altamente calificados que se integran rápidamente a los equipos existentes, alineados a la zona horaria del cliente y con dominio del idioma inglés, garantizando una colaboración eficiente y continua."
      },
      {
        question: "¿Por qué las empresas eligen externalizar el desarrollo?",
        answer:
          "La externalización permite reducir costos, acelerar tiempos de entrega y acceder a talento especializado sin los desafíos asociados a la contratación local."
      },
      {
        question: "¿Qué servicios de desarrollo de software ofrece SEOdigital?",
        answer:
          "Ofrecemos desarrollo de software a medida, aplicaciones web y móviles, QA & testing, DevOps, soluciones en la nube, inteligencia artificial y más."
      }
    ]
  },
  {
    category: "Industrias",
    items: [
      {
        question: "¿Con qué industrias trabaja SEOdigital?",
        answer:
          "Trabajamos con industrias como fintech, healthcare, retail, logística, educación, telecomunicaciones, gaming y software empresarial, entre otras."
      }
    ]
  },
  {
    category: "Modelos de Contratación",
    items: [
      {
        question: "¿Cuál es la diferencia entre staff augmentation, equipos dedicados y outsourcing?",
        answer:
          "El staff augmentation suma talento a tu equipo existente. Los equipos dedicados funcionan como una extensión independiente de tu empresa. El outsourcing delega completamente el desarrollo del proyecto a SEOdigital."
      }
    ]
  },
  {
    category: "Tecnologías / Soluciones",
    items: [
      {
        question: "¿Qué tecnologías utiliza SEOdigital?",
        answer:
          "Trabajamos con tecnologías como JavaScript, React, Angular, Node.js, Java, .NET, Python, AWS, Azure, Google Cloud, IA, Big Data y más."
      },
      {
        question: "¿Puede SEOdigital integrarse con flujos de trabajo existentes?",
        answer:
          "Sí. Nuestros equipos se adaptan a tus herramientas, metodologías ágiles y procesos internos sin fricciones."
      },
      {
        question: "¿Cómo asegura SEOdigital la calidad de sus ingenieros?",
        answer:
          "Aplicamos un riguroso proceso de selección donde solo el 1% de los candidatos supera todas las evaluaciones técnicas, de comunicación y experiencia."
      },
      {
        question: "¿Cómo se compara el costo con la contratación local?",
        answer:
          "Ofrecemos una alternativa más rentable que la contratación local, sin sacrificar calidad, experiencia ni productividad."
      }
    ]
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let counter = 0;

  return (
    <div className="faq-wrapper">
      <section className="faq-hero">
        <div>
          <span className="section-label">FAQ</span>
          <h1>Preguntas Frecuentes</h1>
        </div>
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Equipo trabajando"
        />
      </section>

      <div className="faq-content">
        {faqData.map((section) => (
          <div key={section.category} className="faq-section">
            <h3>{section.category}</h3>

            {section.items.map((item) => {
              const index = counter++;
              const isOpen = openIndex === index;

              return (
                <div key={index} className={`faq-item ${isOpen ? "open" : ""}`}>
                  <button
                    className="faq-question"
                    onClick={() => toggle(index)}
                  >
                    {item.question}
                    <span className="icon">{isOpen ? "−" : "+"}</span>
                  </button>

                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
