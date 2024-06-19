import { useState, useContext, useEffect } from "react";
import "./tripCard.css";
import Modal from "../modal/modal";
import Mapa from "../mapa/Mapa";
import UserContext from "../../context/userContext";
import { addTrip } from "../../utils/fetch";
import { Link, useNavigate } from "react-router-dom";
import ActionButton from "../actionButton/actionButton";
import CreateTrip from "../../componentsAdmin/trips/CreateTrips";



const TripCard = ({ trip, onRemove, onUpdate }) => {
  const { user, handlefetchUserData } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  function openModal() {
    setIsModalOpen(true);
  }
  const handleUpdate = (newtrip) => {
    onUpdate(newtrip);
    setIsModalOpen(false);

  };


  return (
    <div className="trip-card">
      <img src={trip.imagen} alt={trip.name} className="trip-card__image" />
      <div className="trip-card__content">
        <div className="trip-card__price">Desde: {trip.precio} € </div>
        <h2 className="trip-card__title">{trip.name}</h2>
        <p className="trip-card__description">{trip.descripcion}</p>
        <div className="trip-card__details">
          <div className="trip-card__duration">
            <span role="img" aria-label="calendar">
              📅
            </span>{" "}
            Duración {trip.duracion} días
          </div>
        </div>
        <div className="button_container">
        <ActionButton label="Editar" onClick={(openModal)}  className="trip-card__button" />
        
        <ActionButton label="Borrar" onClick={()=>onRemove(trip)} className="trip-card__button" />
        </div>

        {isModalOpen && (
          <Modal
            isOpen={true}
            onClose={() => {
              setIsModalOpen(false);
            }}
          >
            <CreateTrip trip={trip} onUpdate={handleUpdate}/>
               
          </Modal>
        )}
      </div>
    </div>
  );
};

export default TripCard;
