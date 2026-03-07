import { useEffect, useState } from "react";
import {
  getReviewsForMicrowave,
  addReview
} from "../services/reviewService";

export default function useReviews(microwaveId) {
  const [reviews, setReviews] = useState([]);

  function loadReviews() {
    const data = getReviewsForMicrowave(microwaveId);
    setReviews(data);
  }

  useEffect(() => {
    loadReviews();
  }, [microwaveId]);

  function submitReview(reviewData) {
    const review = {
      ...reviewData,
      microwaveId,
      timestamp: Date.now()
    };

    addReview(review);
    loadReviews();
  }

  const average =
    reviews.length === 0
      ? 0
      : reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return {
    reviews,
    average,
    count: reviews.length,
    submitReview
  };
}