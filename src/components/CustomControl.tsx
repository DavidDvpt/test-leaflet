import { useMap } from "react-leaflet";

function CustomControl() {
  const map = useMap();

  const handleClick = () => {
    // Mettez ici le code à exécuter lorsque le contrôle est cliqué.
    alert("Contrôle personnalisé cliqué !");
  };

  return (
    <div className="custom-control">
      <button onClick={handleClick}>Cliquez ici</button>
    </div>
  );
}

export default CustomControl;
