export default function StarRating({ rating = 0, count = 0 }) {
    const percentage = (rating / 5) * 100;
  
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <div
          style={{
            position: "relative",
            display: "inline-block",
            fontSize: "20px",
            lineHeight: 1
          }}
        >
          {/* Empty stars */}
          <div style={{ color: "#ddd" }}>★★★★★</div>
  
          {/* Filled stars */}
          <div
            style={{
              color: "gold",
              position: "absolute",
              top: 0,
              left: 0,
              overflow: "hidden",
              whiteSpace: "nowrap",
              width: `${percentage}%`
            }}
          >
            ★★★★★
          </div>
        </div>
  
        <span style={{ fontSize: "14px" }}>
          {rating.toFixed(1)} ({count})
        </span>
      </div>
    );
  }