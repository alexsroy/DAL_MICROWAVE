import { useState } from "react";
import MapView from "../components/map/MapView";
import DesktopSidePanel from "../components/layout/DesktopSidePanel";
import microwaves from "../data/microwaves";

export default function MapPage() {
  const [selectedMicrowave, setSelectedMicrowave] = useState(null);

  return (
    <>
      <MapView
        microwaves={microwaves}
        onSelectMicrowave={setSelectedMicrowave}
      />

      <DesktopSidePanel
        microwave={selectedMicrowave}
        onClose={() => setSelectedMicrowave(null)}
      />
    </>
  );
}


