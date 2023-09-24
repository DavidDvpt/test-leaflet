import { useMapEvents } from "react-leaflet";

function MapEvent() {
  useMapEvents({
    async click(e: any) {},
  });

  return null;
}

export default MapEvent;
