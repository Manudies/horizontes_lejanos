import './Trip.css'
const Trip = ({trip}) => {
    
    return(
        <section className="trip-card">
            <h2>{trip.name}</h2>
            <p>{trip.descripcion}</p>
            
        </section>
    )
}

export default Trip