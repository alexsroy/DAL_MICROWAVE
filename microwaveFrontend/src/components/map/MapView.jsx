import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import useLocalStorage from "../../hooks/useLocalStorage";
import useGeolocation from "../../hooks/useGeolocation";

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function MapView({ microwaves, onSelectMicrowave }) {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const userMarkerRef = useRef(null);

  const [userPosition, setUserPosition] = useLocalStorage("USER_MARKER", {
    latitude: 44.6376,
    longitude: -63.5917,
  });

  const location = useGeolocation();

  // Initialize map
  useEffect(() => {
    console.log("Init the map");
    if (mapInstance.current) return;

    mapInstance.current = L.map(mapRef.current).setView(
      [userPosition.latitude, userPosition.longitude],
      16
    );

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(mapInstance.current);
  }, []);

  // Add microwave markers
  useEffect(() => {
    if (!mapInstance.current) return;
    console.log(microwaves);
    console.log("those are the microwaves");
    microwaves.forEach((microwave) => {
      const marker = L.marker([microwave.latitude, microwave.longitude])
        .addTo(mapInstance.current)
        .bindPopup(`<b>${microwave.name}</b>`);

      marker.on("click", () => {
        onSelectMicrowave(microwave);
      });
    });
  }, [microwaves, onSelectMicrowave]);

  // User location marker
  useEffect(() => {
    if (!location?.latitude || !mapInstance.current) return;

    setUserPosition({
      latitude: location.latitude,
      longitude: location.longitude,
    });

    if (userMarkerRef.current) {
      mapInstance.current.removeLayer(userMarkerRef.current);
    }

    userMarkerRef.current = L.marker([
      location.latitude,
      location.longitude,
    ])
      .addTo(mapInstance.current)
      .bindPopup("You are here");

    const el = userMarkerRef.current.getElement();
    if (el) {
      el.style.filter = "hue-rotate(120deg)";
    }

    mapInstance.current.setView([location.latitude, location.longitude]);
  }, [location]);

  return <div ref={mapRef} className="map-container"></div>;
}