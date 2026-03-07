import { useState } from "react";

export default function MicrowavePhotos({ microwave }) {
  const basePhotos = microwave.photos || [];
  const userPhotos = microwave.userPhotos || [];

  const photos = [...basePhotos, ...userPhotos];

  const [index, setIndex] = useState(0);

  if (photos.length === 0) {
    return (
      <div>
        <h3>Photos</h3>
        <p>No photos yet.</p>

        <button style={{ marginTop: "8px" }}>
          Upload Photo
        </button>
      </div>
    );
  }

  function nextPhoto() {
    setIndex((prev) => (prev + 1) % photos.length);
  }

  function prevPhoto() {
    setIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }

  return (
    <div style={{ marginTop: "16px" }}>
      <h3>Photos</h3>

      {/* Main Photo */}
      <div style={{ position: "relative" }}>
        <img
          src={photos[index]}
          alt={`Photo of ${microwave.name}`}
          style={{
            width: "100%",
            borderRadius: "8px",
            maxHeight: "260px",
            objectFit: "cover"
          }}
        />

        {photos.length > 1 && (
          <>
            <button
              onClick={prevPhoto}
              style={{
                position: "absolute",
                top: "50%",
                left: "5px",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.5)",
                color: "white",
                border: "none",
                padding: "6px 10px",
                cursor: "pointer"
              }}
            >
              ◀
            </button>

            <button
              onClick={nextPhoto}
              style={{
                position: "absolute",
                top: "50%",
                right: "5px",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.5)",
                color: "white",
                border: "none",
                padding: "6px 10px",
                cursor: "pointer"
              }}
            >
              ▶
            </button>
          </>
        )}
      </div>

      {/* Photo counter */}
      {photos.length > 1 && (
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "14px" }}>
          {index + 1} / {photos.length}
        </p>
      )}

      {/* Thumbnail Strip */}
      <div
        style={{
          display: "flex",
          gap: "6px",
          marginTop: "8px",
          overflowX: "auto"
        }}
      >
        {photos.map((photo, i) => (
          <img
            key={i}
            src={photo}
            alt="thumbnail"
            onClick={() => setIndex(i)}
            style={{
              width: "70px",
              height: "55px",
              objectFit: "cover",
              borderRadius: "4px",
              cursor: "pointer",
              border: i === index ? "2px solid #007bff" : "2px solid transparent"
            }}
          />
        ))}
      </div>

      {/* Upload placeholder */}
      <button
        style={{
          marginTop: "10px",
          padding: "6px 10px",
          cursor: "pointer"
        }}
      >
        Upload Photo
      </button>
    </div>
  );
}