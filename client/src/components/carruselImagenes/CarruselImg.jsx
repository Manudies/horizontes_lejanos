import React, { useState } from 'react';
import './CarruselImg.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      src: "playa.jpeg",
      alt: "imagen 1"
    },
    {
      src: "montana.jpeg",
      alt: "imagen 2"
    },
    {
      src: "familia.jpeg",
      alt: "imagen 3"
    },
    {
      src: "cabaña.jpeg",
      alt: "imagen 4"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-item">
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>

      <span className="carousel-button left" onClick={prevSlide}>&#10094;</span>
      <span className="carousel-button right" onClick={nextSlide}>&#10095;</span>
    </div>
  );
};

export default Carousel;
