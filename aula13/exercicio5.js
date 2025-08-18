// 5. Object inside object
// Make an object 'movie' with 'title' and 'director'.
// Inside it, add 'review' with 'rating' and 'comment'.
// Print the rating and comment.

movie = {
    title: "Call me by your name",
    director: "Luca Guadagnino",
    review: {rating: 5, comment: "Great movie!"}
};

console.log("Rating:", movie.review.rating, "Comment:", movie.review.comment);