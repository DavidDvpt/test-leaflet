import { LatLngExpression } from "leaflet";
import { useState } from "react";
import { Polyline, useMapEvents } from "react-leaflet";

function DynamicLine() {
  const [lineCoordinates, setLineCoordinates] = useState<LatLngExpression[]>(
    []
  );
  const addPoint = (e: any) => {
    console.log(e);
    const newCoordinates = [
      ...lineCoordinates,
      [e.latlng.lat, e.latlng.lng],
    ] as LatLngExpression[];
    setLineCoordinates(newCoordinates);
  };
  useMapEvents({
    async click(e) {
      addPoint(e);
    },
  });

  return (
    <Polyline pathOptions={{ color: "blue" }} positions={lineCoordinates} />
  );
}

export default DynamicLine;
