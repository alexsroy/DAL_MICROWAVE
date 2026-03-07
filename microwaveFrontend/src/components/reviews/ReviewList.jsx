import ReviewItem from "./ReviewItem";

export default function ReviewList({ reviews }) {
  if (reviews.length === 0) {
    return <p>No reviews yet.</p>;
  }

  return (
    <div>
      {reviews.map((r, i) => (
        <ReviewItem key={i} review={r} />
      ))}
    </div>
  );
}