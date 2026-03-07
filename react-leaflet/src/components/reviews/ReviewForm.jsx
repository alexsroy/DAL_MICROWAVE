import { useState } from "react";
import { addReview } from "../../services/reviewService";

export default function ReviewForm({ microwaveId, onReviewAdded }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!rating) {
      alert("Please select a rating.");
      return;
    }

    const review = {
      microwaveId,
      name: name || "Anonymous",
      rating,
      text,
      timestamp: Date.now()
    };

    addReview(review);

    setName("");
    setRating(0);
    setText("");

    onReviewAdded();
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "10px" }}>
      <h4>Leave a Review</h4>

      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div style={{ margin: "6px 0" }}>
        {[1,2,3,4,5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            style={{
              cursor: "pointer",
              fontSize: "22px",
              color: star <= rating ? "gold" : "lightgray"
            }}
          >
            ★
          </span>
        ))}
      </div>

      <textarea
        placeholder="Write something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br />

      <button type="submit">Submit Review</button>
    </form>
  );
}