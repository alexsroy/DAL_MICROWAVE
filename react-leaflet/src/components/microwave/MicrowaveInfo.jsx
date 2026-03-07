import { useEffect, useState } from "react";
import { getReviewsForMicrowave } from "../../services/reviewService";
import StarRating from "../reviews/StarRating";

export default function MicrowaveInfo({ microwave, refreshKey }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(getReviewsForMicrowave(microwave.id));
  }, [microwave.id, refreshKey]);

  const avg =
    reviews.length === 0
      ? 0
      : reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <div>
      <h2>{microwave.name}</h2>

      <StarRating rating={avg} count={reviews.length} />

      <p>{microwave.description}</p>
    </div>
  );
}