import { useContext } from "react";
import "./panelUsuario.css";
import UserContext from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { removeTrip } from "../../utils/fetch";

const panelUsuario = ({ user }) => {
    const { handlefetchUserData, logOut } = useContext(UserContext);
    const navigate = useNavigate();

    const handledeletefavoritos = async (trip) => {
        if (user) {
          console.log("trip._id",trip._id)
          console.log("user",user._id)
          const deleteFavoritos = await removeTrip(user._id, trip._id);
          handlefetchUserData();
        } else {
          alert("Debes iniciar sesión")
          navigate("/register");
        }
      };


    return (
    <div>
        <h1 className="userName">{user.username}</h1>
        <h2>Trips:</h2>
        <div className="user_favoritos">
        <ul>
            {user.trips.map((trip) => (
            <li>
                {trip.name}
                <img
                src={trip.imagen}
                alt={trip.name}
                className="trip-card__image"
                />
                <button className="button_trips">Comprar</button>
                <button
                className="button_trips"
                onClick={() => handledeletefavoritos(trip)}
                >
                Eliminar
                </button>
            </li>
            ))}
        </ul>
        </div>
        <button className='button_trips' onClick={logOut}>Logout</button> 
    </div>
    );
}

export default panelUsuario