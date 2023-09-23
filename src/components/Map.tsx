import { LatLngExpression } from "leaflet";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import CustomControl from "./CustomControl";
import EditControlLayer from "./EditControlLayer";
const position: LatLngExpression = [43.492949, -1.474841];

const Map = () => {
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: "1000px", height: "500px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <DynamicLine /> */}
      <EditControlLayer />
      <CustomControl />
    </MapContainer>
  );
};

export default Map;
