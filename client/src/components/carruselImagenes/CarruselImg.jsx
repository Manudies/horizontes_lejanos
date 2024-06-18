import { useState, useEffect } from 'react';
import './CarruselImg.css';

const CarouselImg = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      src: "imagenesCarrusel/foto.jpg",
      alt: "imagen 0"
    },
    {
      src: "imagenesCarrusel/sabana.jpeg",
      alt: "imagen 1"
    },
    {
      src: "imagenesCarrusel/glamping.jpeg",
      alt: "imagen 2"
    },
    {
      src: "imagenesCarrusel/familia.jpeg",
      alt: "imagen 3"
    },
    {
      src: "imagenesCarrusel/islandia.jpeg",
      alt: "imagen 4"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carouselImg-container">
      <div className="carouselImg-slide" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="carouselImg-item">
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>

      <div className="carouselImg-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>

      <span className="carouselImg-button left" onClick={prevSlide}>&#10094;</span>
      <span className="carouselImg-button right" onClick={nextSlide}>&#10095;</span>
    </div>
  );
};

export default CarouselImg;
