import { useState } from "react";
import MapView from "../components/map/MapView";
import microwaves from "../data/microwaves";

export default function MapPage() {
  console.log("those are the microwaves");
  console.log(microwaves);

  const [selectedMicrowave, setSelectedMicrowave] = useState(null);
  return (
    <>
      <MapView
        microwaves={microwaves}
        onSelectMicrowave={setSelectedMicrowave}
      />

      {selectedMicrowave && (
        <div className="info-panel">
          <h2>{selectedMicrowave.name}</h2>
          <p>{selectedMicrowave.description}</p>
          <button onClick={() => setSelectedMicrowave(null)}>
            Close
          </button>
        </div>
      )}
    </>
  );
}


