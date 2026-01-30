 import "../styles/nuestroslideres.css";

const leaders = [
  { name: "Gustavo Gravgna", role: "CEO", img: "gustavo.png" },
  { name: "Paul Jones", role: "Líder en Estrategia de IA", img: " gustavo.png" },
  { name: "Robert Walters", role: "Consultor Principal", img: " gustavo.png" },
  { name: "Sofia Ortega", role: "Coach de Negocios", img: " gustavo.png" },
  { name: "Ana Vidal", role: "Directora de Analítica de Talento", img: " gustavo.png" },
  { name: "James Cameron", role: "Director de Datos y Transformación Digital", img: " gustavo.png" },
  
];

export default function IndustrySection() {
  return (
    <section className="industry">
      <h1 className="industry-title">
        Reconocidos por la industria.<br />Premiados.
      </h1>

      <div className="industry-cards">
        <div className="industry-image-card">
          <img src="univ.jpg" alt="Aula" />
          <span className="industry-caption">
            Universidad de Stanford<br />
            <strong>
              Gustavo compartiendo su recorrido emprendedor con estudiantes del MBA de Stanford.
            </strong>
          </span>
        </div>

        <div className="industry-quote-card">
          <p>
            “Gustavo tiene excelentes habilidades interpersonales, sabe exactamente
            qué necesitan las personas, qué problemas enfrentan y cómo ayudarlas
            a alcanzar sus objetivos.”
          </p>
          <div className="industry-quote-author">
            Gustavo Gravagna, CEO<br />
            ⭐⭐⭐⭐⭐
          </div>
        </div>
      </div>

      <div className="leaders">
        <h2>
          Conocé <span>a nuestros líderes.</span>{" "}
          <small>
            Bajo su liderazgo, obtuvimos numerosos reconocimientos de la industria.
          </small>
        </h2>

        <div className="leaders-grid">
          {leaders.map((l, i) => (
            <div key={i} className="leader-card">
              <img src={l.img} alt={l.name} />
              <h4>{l.name}</h4>
              <p>{l.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
