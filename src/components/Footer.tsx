import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

function Footer() {
    const position = [37.2982, -113.0263]
    return (
        <>
            <br />
            <div id="map">
            <MapContainer  
                center={position} 
                zoom={11} 
                scrollWheelZoom={false}
                style={{ height: '180px'}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        Zion. <br /> Go to here.
                    </Popup>
                </Marker>
            </MapContainer>
            </div>
        </>
    );
}
export default Footer;