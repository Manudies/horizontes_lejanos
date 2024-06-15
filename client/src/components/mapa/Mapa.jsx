import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './Mapa.css';


const Mapa = ({trip}) => {

return(
    <MapContainer center={trip.itinerario[0].coordenadas} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {trip.itinerario.map(lugar =>(
          <Marker key={lugar.dia} position={lugar.coordenadas}>
            <Popup>
              {lugar.dia}
            </Popup>
          </Marker>
      ))}
    </MapContainer>
  );
};
export default Mapa;