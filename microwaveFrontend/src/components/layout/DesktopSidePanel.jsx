import MicrowaveDetails from "../microwave/MicrowaveDetails";

export default function DesktopSidePanel({ microwave, onClose }) {
  return (
    <div className={`side-panel ${microwave ? "open" : ""}`}>
      {microwave && (
        <>
          <button className="close-button" onClick={onClose}>
            ✕
          </button>

          <MicrowaveDetails microwave={microwave} />
        </>
      )}
    </div>
  );
}