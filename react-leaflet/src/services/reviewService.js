export async function getReviews(microwaveId) {
    return fetch(`/api/reviews/${microwaveId}`)
 }
 
 export async function addReview(review) {
    return fetch(`/api/reviews`, {
       method: "POST",
       body: JSON.stringify(review)
    })
 }