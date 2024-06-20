import { useContext } from "react";
import "./panelUsuario.css";
import UserContext from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { removeTrip, sendMail } from "../../utils/fetch";

const panelUsuario = ({ user }) => {
  const { handlefetchUserData, logOut } = useContext(UserContext);
  const navigate = useNavigate();

  const handledeletefavoritos = async (trip) => {
    if (user) {
      console.log("trip._id", trip._id);
      console.log("user", user._id);
      const deleteFavoritos = await removeTrip(user._id, trip._id);
      handlefetchUserData();
    } else {
      alert("Debes iniciar sesión");
      navigate("/register");
    }
  };

  const handleBuyTrip = async (trip) => {
    if (user) {
      try {
        const response = await sendMail( {
          to: user.email,
          subject: 'Confirmación de compra',
          text: `Hola ${user.username},\n\nGracias por comprar el viaje a ${trip.name}. Disfruta de tu aventura!\n\nSaludos,\nEl equipo de Horizontes Lejanos`
        });
        alert(`Correo de confirmación enviado a ${user.email}!`);
        handledeletefavoritos(trip);
      } catch (error) {
        console.error("Error enviando el correo de confirmación", error);
        alert("Hubo un error al enviar el correo de confirmación.");
      }
    } else {
      alert("Debes iniciar sesión");
      navigate("/register");
    }
  };


  return (
    <div className="panel_usuario">
      <div className="cabecera_panel">
        <h1 className="userName">{user.username}</h1>
        <button className="logout_button" onClick={logOut}>
          Logout
        </button>
      </div>
      <h2>Trips:</h2>
      <div className="user_favoritos">
        <ul className="favoritos">
          {user.trips.map((trip) => (
            <li>
              <p>{trip.name}</p>
              <img
                src={trip.imagen}
                alt={trip.name}
                className="trip-card__image"
              />
              <div className="favoritos__buttons">
                <button className="button_trips" onClick={() => handleBuyTrip(trip)}>Comprar</button>
                <button
                  className="button_trips"
                  onClick={() => handledeletefavoritos(trip)}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default panelUsuario;
