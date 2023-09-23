import L from "leaflet";
console.log(L);
(L as any).drawLocal = {
  draw: {
    toolbar: {
      actions: {
        title: "Annuler le dessin",
        text: "Annuler",
      },
      finish: {
        title: "Terminer le dessin",
        text: "Terminer",
      },
      undo: {
        title: "Supprimer le dernier point tracé",
        text: "Supprimer le dernier point",
      },
      buttons: {
        polyline: "Dessiner une polyligne",
        polygon: "Dessiner un polygone",
        rectangle: "Dessiner un rectangle",
        circle: "Dessiner un cercle",
        marker: "Dessiner un marqueur",
        circlemarker: "Dessiner un marqueur circulaire",
      },
    },
    handlers: {
      circle: {
        tooltip: {
          start: "Cliquez et faites glisser pour dessiner un cercle.",
        },
        radius: "Rayon",
      },
      circlemarker: {
        tooltip: {
          start: "Cliquez sur la carte pour placer le marqueur circulaire.",
        },
      },
      marker: {
        tooltip: {
          start: "Cliquez sur la carte pour placer le marqueur.",
        },
      },
      polygon: {
        tooltip: {
          start: "Cliquez pour commencer la forme du dessin.",
          cont: "Cliquez pour continuer la forme du dessin.",
          end: "Cliquez sur le premier point pour fermer cette forme.",
        },
      },
      polyline: {
        error:
          "<strong>Error:</strong> les bords de la forme ne peuvent pas se croiser!",
        tooltip: {
          start: "Cliquez pour commencer la ligne du dessin.",
          cont: "Cliquez pour continuer la ligne du dessin.",
          end: "Cliquez sur le dernier point pour terminer la ligne.",
        },
      },
      rectangle: {
        tooltip: {
          start: "Cliquez et glissez pour dessiner un rectangle.",
        },
      },
      simpleshape: {
        tooltip: {
          end: "Relâchez la souris pour terminer le dessin.",
        },
      },
    },
  },
  edit: {
    toolbar: {
      actions: {
        save: {
          title: "Enregistrer les modifications",
          text: "Enregistrer",
        },
        cancel: {
          title:
            "Annuler les modifications, supprimer toutes les modifications",
          text: "Annuler",
        },
        clearAll: {
          title: "Effacer toutes les calques",
          text: "Tout effacer",
        },
      },
      buttons: {
        edit: "Editer les calques",
        editDisabled: "Pas de calques à modifier",
        remove: "Supprimer les calques",
        removeDisabled: "Pas de calques à supprimer",
      },
    },
    handlers: {
      edit: {
        tooltip: {
          text: "Faites glisser les marqueurs pour modifier les fonctionnalités.",
          subtext: "Cliquez sur Annuler pour annuler les modifications.",
        },
      },
      remove: {
        tooltip: {
          text: "Cliquez sur une fonctionnalité à supprimer.",
        },
      },
    },
  },
};
