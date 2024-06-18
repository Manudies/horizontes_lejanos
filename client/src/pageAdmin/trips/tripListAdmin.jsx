import { useState } from "react";
import {useLoaderData} from "react-router-dom";
import Modal from "../../components/modal/modal";
import CreateTrips from "../../componentsAdmin/trips/CreateTrips";
import './Trip.css'
import './tripList.css'

const TripsList = ({}) =>{
    const trips = useLoaderData();
    const [creatingTrip, setCreatingTrip] = useState(false);
    const [selectTrip, setSelectTrip] = useState(null);

    const hanleTripClick = (trip) =>{
        setSelectTrip(trip)
    };

    const tripsHtml = trips.map (trip =>{
        return(
            <article className="trips-list-element" key={trip._id0} onClick={()=>hanleTripClick(trip)}>
                <h3>{trip.name}</h3>
            </article>
        )
    })
    return (
        <>
        {creatingTrip ?
            <Modal onClose={()=>setCreatingTrip(false)}>
               <CreateTrips onCreate={()=>setCreatingTrip(false)}/>
           </Modal>
           :
           <button className="create-trip-button" onClick={()=>setCreatingTrip(true)}>Nuevo Viaje</button>
       }
            
        <section className="trips-list">
            {tripsHtml}
        </section>

        {selectTrip && 
            <Modal onClose={()=>setSelectTrip(null)}>
                <h2>{selectTrip.name}</h2>
                <p>{selectTrip.description}</p>
            </Modal>
        }
        </>
)}

export default TripsList