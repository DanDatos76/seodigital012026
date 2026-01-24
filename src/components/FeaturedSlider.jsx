 import React from "react";
import "../styles/FeaturedSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "FINANCIAL TIMES",
    description:
      "Fuimos reconocidos por Financial Times en la lista de las Empresas de Más Rápido Crecimiento en América de 2024, destacando un crecimiento significativo de ingresos entre 2019 y 2022.",
  },
  {
    title: "FORBES",
    description:
      "Fuimos destacados por Forbes como una empresa líder en outsourcing de software nearshore en LATAM por nuestra innovación tecnológica y capacidad de entrega.",
  },
  {
    title: "INSIDER",
    description:
      "Insider cubrió nuestra expansión hacia nuevos mercados y nuestro papel en la transformación de equipos de software a nivel global.",
  },
  {
    title: "CNBC",
    description:
      "CNBC reconoció nuestras contribuciones a la aceleración digital y soluciones empresariales en el mercado de EE. UU.",
  },
];

const FeaturedSlider = () => {
  return (
    <section className="featured-section">
      <div className="featured-header">
        <span>Mencionados en...</span>
        <div className="media-logos">
          <span>CNBC</span>
          <span>Forbes</span>
          <span>INSIDER</span>
          <span>Bloomberg</span>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={40}
        slidesPerView={1}
        className="swiper-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-card">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FeaturedSlider;