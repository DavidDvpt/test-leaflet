import { FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "../utils/drawToolbar";

function EditControlLayer() {
  const handleEdited = () => {};
  const handleCreated = () => {};
  const handleDeleted = () => {};
  return (
    <FeatureGroup>
      <EditControl
        position="topleft"
        onEdited={handleEdited}
        onCreated={handleCreated}
        onDeleted={handleDeleted}
        draw={{
          rectangle: false,
          polyline: false,
          polygon: {
            shapeOptions: {
              stroke: true,
              color: "#ff0000",
              weight: 2,
              opacity: 0.2,
              fill: true,
              clickable: true,
            },
          },
          circle: false,
          circlemarker: false,
          marker: false,
        }}
        edit={{
          selectedPathOptions: {
            shapeOptions: {
              stroke: true,
              color: "#ffff00",
              weight: 10,
              opacity: 0.6,
              fill: true,
              clickable: false,
            },
          },
        }}
      />
    </FeatureGroup>
  );
}

export default EditControlLayer;
