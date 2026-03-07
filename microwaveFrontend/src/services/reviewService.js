const STORAGE_KEY = "DAL_MICROWAVE_REVIEWS";

export function getReviews() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function getReviewsForMicrowave(microwaveId) {
  return getReviews().filter((r) => r.microwaveId === microwaveId);
}

export function addReview(review) {
  const reviews = getReviews();
  reviews.push(review);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
}