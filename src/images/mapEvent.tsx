import { useMapEvents } from "react-leaflet";

function MapEvent() {
  useMapEvents({
    async click(e) {},
  });

  return null;
}

export default MapEvent;
