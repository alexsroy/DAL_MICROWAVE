import { useEffect, useState } from "react";
import { getReviewsForMicrowave } from "../../services/reviewService";
import ReviewItem from "./ReviewItem";

export default function ReviewList({ microwaveId, refreshKey }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(getReviewsForMicrowave(microwaveId));
  }, [microwaveId, refreshKey]);

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