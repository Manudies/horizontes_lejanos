import React from 'react';
import './tripCard.css';

const TripCard = () => {
  return (
    <div className="trip-card">
      <img 
        src="path/to/your/image.jpg" 
        alt="Viaje a Egipto" 
        className="trip-card__image" 
      />
      <div className="trip-card__content">
        <div className="trip-card__price">Desde: €1670</div>
        <div className="trip-card__availability">Disponibilidad: Cada Día</div>
        <h2 className="trip-card__title">
          Viaje a Egipto de 14 Días en El Cairo, Luxor, Hurgada y Los Oasis
        </h2>
        <p className="trip-card__description">
          Vive la aventura en los oasis de Egipto con otras visitas en El Cairo, Luxor y Hurgada y descubrir las ma...
        </p>
        <div className="trip-card__details">
          <div className="trip-card__duration">
            <span role="img" aria-label="calendar">📅</span> 14 Días/13 Noches
          </div>
          <div className="trip-card__type">
            <span role="img" aria-label="classic">🗺️</span> Viaje Clásico
          </div>
        </div>
        <button className="trip-card__button">Ver Tour</button>
      </div>
    </div>
  );
}

export default TripCard;
