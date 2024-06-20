import { useEffect, useRef } from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './Mapa.css';


const Mapa = ({trip, activeDay}) => {
  const markersRef = useRef([]);

  useEffect(() => {
    if (activeDay !== null && markersRef.current[activeDay]) {
      markersRef.current[activeDay].openPopup();
    }
  }, [activeDay]);

return(
    <MapContainer center={trip.itinerario[0].coordenadas} zoom={5} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {trip.itinerario.map((lugar, index) =>(
          <Marker key={lugar.dia} position={lugar.coordenadas}ref={(el) => (markersRef.current[index] = el)}
          >
            <Popup>
              {lugar.dia}
            </Popup>
          </Marker>
      ))}
    </MapContainer>
  );
};
export default Mapa;