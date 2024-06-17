import { useState } from "react";
import "./tripCard.css";
import Modal from "../modal/modal";
import Mapa from "../mapa/Mapa";
import { useContext } from "react";
import UserContext from "../../context/userContext";
import { addTrip } from "../../utils/fetch";
import { Link } from "react-router-dom";
import ActionButton from "../actionButton/actionButton";


const TripCard = ({ trip }) => {
  const { user, handlefetchUserData } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  function openModal() {
    setIsModalOpen(true);
  }
  const handlefavoritos = async () => {
    if (user) {
      const newFavoritos = await addTrip(user._id, trip._id);
      setIsFavorite(!isFavorite);
      handlefetchUserData();
    } else {
      return alert("Debes iniciar sesión");
    }
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
        <ActionButton label={isFavorite ? "Eliminar de favoritos" : "Añadir a favoritos"} onClick={handlefavoritos} className="trip-card__button" />
        {/* <button onClick={handlefavoritos} className="trip-card__button">Favoritos</button> */}
        <button onClick={openModal} className="trip-card__button">
          Ver Tour{" "}
        </button>

        {isModalOpen && (
          <Modal
            isOpen={true}
            onClose={() => {
              setIsModalOpen(false);
            }}
          >
            <img
              src={trip.imagen}
              alt={trip.name}
              className="trip-card_image"
            />
            <div className="trip-card_content">
              <div className="trip-card_price">Desde: {trip.precio} € </div>
              <h2 className="trip-card_title">{trip.name}</h2>
              <p className="trip-card_description">{trip.descripcion}</p>
              <div className="trip-card_details">
                <div className="trip-card_duration">
                  <span role="img" aria-label="calendar">
                    📅
                  </span>{" "}
                  Duración {trip.duracion} días
                  <div className="trip-card__itinerary">
                    {trip.itinerario.map((agenda) => (
                      <div key={agenda.dia}>{agenda.dia}</div>
                    ))}
                    <Mapa trip={trip}></Mapa>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default TripCard;
