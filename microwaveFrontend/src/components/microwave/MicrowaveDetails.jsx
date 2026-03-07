import MicrowaveInfo from "./MicrowaveInfo";
import MicrowavePhotos from "./MicrowavePhotos";
import ReviewList from "../reviews/ReviewList";
import ReviewForm from "../reviews/ReviewForm";
import useReviews from "../../hooks/useReviews";

export default function MicrowaveDetails({ microwave }) {
  const reviews = useReviews(microwave.id);

  return (
    <div>
      <MicrowaveInfo microwave={microwave} reviews={reviews} />

      <MicrowavePhotos microwave={microwave} />

      <h3>Reviews</h3>

      <ReviewList reviews={reviews.reviews} />

      <ReviewForm submitReview={reviews.submitReview} />
    </div>
  );
}