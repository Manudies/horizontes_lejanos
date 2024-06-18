import { useState, useEffect } from "react";
import "./tripCard.css";
import Modal from "../modal/modal";
import Mapa from "../mapa/Mapa";
import { useContext } from "react";
import UserContext from "../../context/userContext";
import { addTrip } from "../../utils/fetch";
import { Link, useNavigate } from "react-router-dom";
import ActionButton from "../actionButton/actionButton";
import { removeTrip } from "../../utils/fetch";


const TripCard = ({ trip }) => {
  const { user, handlefetchUserData } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    setIsFavorite(userHadTrip())
  },[trip, user])
  
  function openModal() {
    setIsModalOpen(true);
  }
  const handlefavoritos = async () => {
    if (user) {
      const newFavoritos = await addTrip(user._id, trip._id);
      if (isFavorite)
        await handledeletefavoritos(trip)
      setIsFavorite(!isFavorite);
      handlefetchUserData();
    } else {
      alert("Debes iniciar sesión")
      navigate("/register");

    }
  };
  const handledeletefavoritos = async (trip) => {
    if (user) {
      console.log("trip._id", trip._id);
      console.log("user", user._id);
      const deleteFavoritos = await removeTrip(user._id, trip._id);
      // handlefetchUserData();
    } else {
      alert("Debes iniciar sesión");
      navigate("/register");
    }
  };
  const userHadTrip = () => {
    if (!user) 
      return false
    return (user.trips.some(userTrip=> userTrip._id === trip._id))
  }

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
        <ActionButton label={isFavorite ? "Eliminar de favoritos" : "Añadir a favoritos"} onClick={handlefavoritos} className="trip-card__button" />
        {/* <button onClick={handlefavoritos} className="trip-card__button">Favoritos</button> */}
        <ActionButton label="Ver Tour" onClick={openModal} className="trip-card__button" />
        {/* <button onClick={openModal} className="trip-card__button"> */}
        {/* </button> */}
        </div>

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
