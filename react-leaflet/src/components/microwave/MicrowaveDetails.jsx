import { useState } from "react";
import MicrowaveInfo from "./MicrowaveInfo";
import MicrowavePhotos from "./MicrowavePhotos";
import ReviewList from "../reviews/ReviewList";
import ReviewForm from "../reviews/ReviewForm";

export default function MicrowaveDetails({ microwave }) {
  const [refreshKey, setRefreshKey] = useState(0);

  function handleReviewAdded() {
    setRefreshKey((k) => k + 1);
  }

  return (
    <div>
      <MicrowaveInfo microwave={microwave} refreshKey={refreshKey} />

      <MicrowavePhotos microwave={microwave} />

      <h3>Reviews</h3>

      <ReviewList microwaveId={microwave.id} refreshKey={refreshKey} />

      <ReviewForm
        microwaveId={microwave.id}
        onReviewAdded={handleReviewAdded}
      />
    </div>
  );
}