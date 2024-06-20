import { useNavigate, redirect, useLoaderData } from "react-router-dom"
import TripCard from "../../components/trips/tripCardAdmin";
import "./tripListAdmin.css";
import { useState, useContext, useEffect } from "react";
import Modal from "../../components/modal/modal";
import CreateTrips from "../../componentsAdmin/trips/CreateTrips";
import UserContext from "../../context/userContext";
import { remove, update } from "../../utils/fetch";


const TripsList = () => {
    const [trips, setTrips] = useState(useLoaderData());
    const {user, loadingUser} = useContext(UserContext);
    const [creatingTrip, setCreatingTrip] = useState(false);
    const [selectTrip, setSelectTrip] = useState(null);
    const navigate = useNavigate();

    // useEffect (() => {
    //     console.log ("usuario", user)
    //     if (loadingUser) return
    //     if (!user || user.role !== "admin") {
    //         navigate("/register");
            
    //     }
        
    // }, [user,loadingUser]);

    const handleRemove = async (trip) => {
        const result = await remove(trip._id);
        const filteredTrips = trips.filter (viaje=> viaje._id !== trip._id)
        setTrips(filteredTrips)
      }
      const handleCreate = async (trip) => {
        console.log("Creartrip", trip)
        setTrips([...trips,trip])
        setCreatingTrip(false)
      }
      const handleUpdate = async(trip) => {
        //const result = await update(trip._id, trip);
        setTrips(trips.map(t=> t._id === trip._id ? trip: t))
        setSelectTrip(null)
      }
      

    const handleTripClick = (trip) => {
        setSelectTrip(trip);
    };

    const tripsHtml = trips.map(trip => (
        <article className="trips-list-element" key={trip._id} onClick={() => handleTripClick(trip)}>
            <section className="trips_container">
                    <TripCard key={trip._id} trip={trip} onRemove={handleRemove} onUpdate={handleUpdate} />
            </section>
        </article>
    ));

    return (
        <div className="trip-list">
                <>
                    {creatingTrip ? (
                        <Modal onClose={() => setCreatingTrip(false)}>
                            <CreateTrips onCreate={handleCreate} />
                        </Modal>
                    ) : (
                        <button className="create-trip-button" onClick={() => setCreatingTrip(true)}>Nuevo Viaje</button>
                    )}
                </>
            <section className="trips-list">
                {tripsHtml}
            </section>
        </div>
    );
}

export default TripsList;
