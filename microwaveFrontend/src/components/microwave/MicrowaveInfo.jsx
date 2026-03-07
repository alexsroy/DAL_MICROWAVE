import StarRating from "../reviews/StarRating";

export default function MicrowaveInfo({ microwave, reviews }) {
  return (
    <div>
      <h2>{microwave.name}</h2>

      <StarRating
        rating={reviews.average}
        count={reviews.count}
      />

      <p>{microwave.description}</p>
    </div>
  );
}