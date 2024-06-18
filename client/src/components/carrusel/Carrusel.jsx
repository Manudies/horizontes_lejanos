import React, { useState } from 'react';
import './Carrusel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      opinion: "“Un viaje de incentivos no puede fallar. Después de trabajar duro para conseguir unos objetivos no es suficiente con que la recompensa simplemente cumpla con las expectativas. Debe superarlas y así convertirse en un aliciente adicional para continuar con el esfuerzo diario. Y para organizar un viaje así no sirve cualquiera: se necesita conocimiento, cercanía, implicación y honradez. El equipo de Horizontes Lejanos nos aporta todo esto. Con creces.”",
      author: "Jorge González Revilla"
    },
    {
      opinion: "“Trabajar con Horizontes Lejanos es sinónimo de eficiencia y tranquilidad. Los viajes de clientes, y tenemos muchos al año, los organizan en su totalidad y tenemos plena confianza ya que se ocupan de todos los detalles. El trato es cercano y la respuesta es rápida y siempre resolutiva.  Se puede trabajar con ellos con la garantía de que el resultado va a ser el óptimo.”",
      author: "Danel Lafuente"
    },
    {
      opinion: "“Algunos motivos para llevar trabajando tantos años y continuar con Horizontes Lejanos son lo exigentes que sois con vosotros mismos a la hora de cerrar el programa de viaje en su conjunto atendiendo las necesidades y características marcadas por nosotros, para que el resultado final sea lo más óptimo posible.”",
      author: "Jesús Cabado Edesa"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <h3>{slides[currentSlide].author}</h3>
        <p>{slides[currentSlide].opinion}</p>
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
