import { useNavigate, redirect, useLoaderData } from "react-router-dom"
import TripCard from "../../components/trips/tripCardAdmin";
import "./tripListAdmin.css";
import { useState, useContext, useEffect } from "react";
import Modal from "../../components/modal/modal";
import CreateTrips from "../../componentsAdmin/trips/CreateTrips";
import UserContext from "../../context/userContext";

const TripsList = () => {
    const trips = useLoaderData();
    const {user, loadingUser} = useContext(UserContext);
    const [creatingTrip, setCreatingTrip] = useState(false);
    const [selectTrip, setSelectTrip] = useState(null);
    const navigate = useNavigate();

    useEffect (() => {
        console.log ("usuario", user)
        if (loadingUser) return
        if (!user || user.role !== "admin") {
            navigate("/register");
            
        }
        
    }, [user,loadingUser]);

    const handleTripClick = (trip) => {
        setSelectTrip(trip);
    };

    const tripsHtml = trips.map(trip => (
        <article className="trips-list-element" key={trip._id} onClick={() => handleTripClick(trip)}>
            <section className="trips_container">
                    <TripCard key={trip._id} trip={trip} />
            </section>
        </article>
    ));

    return (
        <div className="trip-list">

                <>
                    {creatingTrip ? (
                        <Modal onClose={() => setCreatingTrip(false)}>
                            <CreateTrips onCreate={() => setCreatingTrip(false)} />
                        </Modal>
                    ) : (
                        <button className="create-trip-button" onClick={() => setCreatingTrip(true)}>Nuevo Viaje</button>
                    )}
                </>
            <section className="trips-list">
                {tripsHtml}
            </section>

            {selectTrip && (
                <Modal onClose={() => setSelectTrip(null)}>
                    <h2>{selectTrip.name}</h2>
                    <p>{selectTrip.description}</p>
                </Modal>
            )}
        </div>
    );
}

export default TripsList;
