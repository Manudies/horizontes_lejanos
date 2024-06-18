import { useLoaderData } from "react-router-dom"
import TripCard from "../../components/trips/tripCard";
import "./tripList.css";

const tripList = () => {
    const trips = useLoaderData();
    console.log("trips",trips)
    return (
        <div>
            <h1>{trips.name}</h1>
            <section className="trips_container">
                {trips.map((trip) => (
                    <TripCard key={trip._id} trip={trip} />
                ))}
            </section>

        </div>
    )
}

export default tripList