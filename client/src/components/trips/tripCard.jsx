import React from 'react';
import './tripCard.css';

const TripCard = ({trip}) => {

  return (
    <div className="trip-card">
      <img 
        src={trip.imagen} 
        alt={trip.name} 
        className="trip-card__image" 
      />
      <div className="trip-card__content">
        <div className="trip-card__price">Desde: {trip.precio}</div>
        <h2 className="trip-card__title">
          {trip.name}
        </h2>
        <p className="trip-card__description">
          {trip.descripcion}
        </p>
        <div className="trip-card__details">
          <div className="trip-card__duration">
            <span role="img" aria-label="calendar">📅</span> Duración  {trip.duracion} días
          </div>
        </div>
        <button className="trip-card__button">Ver Tour</button>
      </div>
    </div>
  );
}

export default TripCard;
