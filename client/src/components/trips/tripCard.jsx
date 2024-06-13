import { useState } from 'react';
import './tripCard.css';
import Modal from '../modal/modal'

const TripCard = ({trip}) => {
  const[isModalOpen, setIsModalOpen] = useState(false)
  function openModal(){
    setIsModalOpen(true)
  }

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
        <button className="trip-card__button">Comprar</button>
        <button onClick = {openModal}className="trip-card__button">Ver Tour </button>

        {isModalOpen &&
          <Modal isOpen={true} onClose={()=> {
            setIsModalOpen(false)
            }}>
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
              </div>
          </Modal>
        }
        
      </div>
    </div>
  );
}

export default TripCard;
