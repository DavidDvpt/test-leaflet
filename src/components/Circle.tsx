import L from "leaflet";
import { useMap } from "react-leaflet";
function Circle() {
  const map = useMap();
  const circle = L.circle([43.492949, -1.474841], {
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.5,
    radius: 500,
  }).addTo(map);

  console.log(circle);
  return null;
}

export default Circle;
