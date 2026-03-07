import { useState } from "react";

export default function ReviewForm({ submitReview }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!rating) {
      alert("Please select a rating");
      return;
    }

    submitReview({
      name: name || "Anonymous",
      rating,
      text
    });

    setName("");
    setRating(0);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Leave a Review</h4>

      <input
        placeholder="Name"
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
              color: star <= rating ? "gold" : "#ccc"
            }}
          >
            ★
          </span>
        ))}
      </div>

      <textarea
        placeholder="Write a review"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br />

      <button type="submit">Submit Review</button>
    </form>
  );
}