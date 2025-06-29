import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function MapaLeaflet() {
  useEffect(() => {
    // Initialize the map
    const map = L.map("map").setView([40.63409, 0.29759], 15);

    // Add a tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add a marker
    L.marker([40.63463976109688, 0.3077001743660219])
      .addTo(map)
      .bindPopup(
        '<h3>Cartonfast, S.A.</h3><p>Ctra. Sánta Bárbara, Km 20.2 - 43560 - La Sénia, Tarragona, España</p><a href="https://maps.app.goo.gl/HhFXGJ2Zgy5gaYFdA">Enlace a Google Maps</a> <br>'
      )
      .openPopup();

    // Cleanup on unmount
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: "500px", width: "100%" }}></div>;
}
