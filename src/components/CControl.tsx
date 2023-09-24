import L from "leaflet";
import { useMap } from "react-leaflet";

declare module "leaflet" {
  namespace Control {
    class Test extends Control {
      constructor(options: any);
    }
  }
  namespace control {
    function test(options: any): Control.Test;
  }
}

function CControl() {
  const map = useMap();
  const t = L.Control.extend({
    onAdd: () => {
      const div = L.DomUtil.create("div");
      div.style.width = "50px";
      div.style.height = "50px";
      div.style.backgroundColor = "red";
    },
    onRemove: () => {},
  });

  L.control.test = (opts: any) => new L.Control.Test(opts);
  map.addControl(new t());
  return null;
}

export default CControl;
