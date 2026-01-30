import React, { useRef } from "react";

import '../styles/TestimonialsSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    company: 'Rolls-Royce',
    person: 'Brad Mabry',
    position: 'Product Manager at Rolls-Royce',
    quote:
      'Repeat Business is the best testament to a team’s ability to perform, and I have no hesitation in hiring them again. BairesDev’s pleasant collaboration style and high-level acumen rapidly catalyzed significant momentum towards achieving our objectives.',
  },
  {
    company: 'IQVIA',
    person: 'Adam Isley',
    position: 'Director of Digital Strategy',
    quote:
      'BairesDev provides amazing development and design resourcing, along with best in class account management support. We were able to speed up product and design and delivery while reducing our costs.',
  },
  {
    company: 'INSTRUCTURE',
    person: 'Matt Mecham',
    position: 'Program Manager',
    quote:
      'BairesDev is a trustworthy, knowledgeable, and adaptable development partner. They also know how to push back and ask questions when appropriate, which is a cornerstone of our corporate culture.',
  },
  {
    company: 'NextRoll',
    person: 'Patrick Mee',
    position: 'VP of Engineering',
    quote:
      'By seamlessly integrating with the internal team, BairesDev helped achieve key objectives by performing to the same expectations as full-time employees.',
  },
  {
    company: 'R/GA',
    person: 'Roqa Rovagnati',
    position: 'SVP, Managing Director, LATAM',
    quote:
      'Having access to such a vast talent pool, BairesDev has allowed us to staff our teams with solid engineers and execute our projects faster than ever.',
  },
  {
    company: 'Univision',
    person: 'Viveek Sankar',
    position: 'VP of Engineering',
    quote:
      'BairesDev being in a similar timezone has helped us tremendously in our productivity, especially in an agile structure.',
  },
  {
    company: 'AP',
    person: 'Lana Shaova',
    position: 'Sr. Director, Business Technology',
    quote:
      'We have been successfully working with BairesDev for the last 7 years. I was impressed by the flexibility and cooperation of the management.',
  },
];

const TestimonialsSlider = () => {
  return (
    <section className="testimonials-container">
      <div className="testimonial-image-block">
        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" alt="Happy clients" />
      </div>

      <div className="testimonial-content-block">
        <h2>We've stopped counting. Over 500 brands count on us.</h2>
        <p>1,200+ projects executed successfully and an average relationship of over 3 years.</p>
        <a href="#" className="hits-link">Our greatest hits →</a>

        <Swiper
          modules={[Navigation]}
          navigation={true}
          slidesPerView={3}
          spaceBetween={30}
          className="testimonial-swiper"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="testimonial-logo">{item.company}</div>
                <p className="testimonial-quote">“{item.quote}”</p>
                <div className="testimonial-author">
                  <strong>{item.person}</strong>
                  <br />
                  <span>{item.position}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
