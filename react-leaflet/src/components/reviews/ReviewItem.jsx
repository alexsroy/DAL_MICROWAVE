export default function ReviewItem({ review }) {
    const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
  
    const date = new Date(review.timestamp).toLocaleDateString();
  
    return (
      <div style={{ borderBottom: "1px solid #ddd", padding: "6px 0" }}>
        <div style={{ fontSize: "18px", color: "gold" }}>{stars}</div>
  
        <strong>{review.name}</strong> • {date}
  
        <p>{review.text}</p>
      </div>
    );
  }