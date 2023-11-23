import React, { useState } from 'react';
const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState('');
    const [newRating, setNewRating] = useState(0);
    const handleReviewSubmit = () => {

        if (newReview.trim() !== '' && newRating > 0) {
            // Implement logic to submit the review and rating (e.g., send it to the server)
            // Update the reviews state with the new review and rating
            setReviews([...reviews, { review: newReview, rating: newRating }]);
            reviews.push({newReview,newRating});
            console.log(reviews);
            // Clear the newReview and newRating states
            setNewReview('');
            setNewRating(0);
        } else {
            // Display an error message or handle the case where both review and rating are required
            console.error('Both review and rating are required.');
        }
    };
    const calculateAverageRating = () => {
        if (reviews.length === 0) {
            return 0;
        }

        const totalRating = reviews.reduce((acc, item) => acc + item.rating, 0);
        return totalRating / reviews.length;
    }
    return (
        <div>
            <h1>Product Reviews</h1>
            {/* Average Rating */}
            <div>
                <strong>Average Rating: {calculateAverageRating().toFixed(1)} stars</strong>
            </div>
            <br />
            {/* Display existing reviews */}
            <ul>
                {reviews.map((item, index) => (
                    <li key={index}>
                        <div>
                            <strong>Rating: {item.rating} stars</strong>
                        </div>
                        <div>{item.review}</div>
                    </li>
                ))}
            </ul>
            
            {/* Form to submit a new review */}
            <textarea
                rows="4"
                cols="50"
                placeholder="Write your review..."
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
            ></textarea>
            <br />

            {/* Rating input */}
            <div>
                <label>Rating:</label>
                <select value={newRating} onChange={(e) => setNewRating(Number(e.target.value))}>
                    <option value={0}>Select a rating</option>
                    <option value={1}>1 star</option>
                    <option value={2}>2 stars</option>
                    <option value={3}>3 stars</option>
                    <option value={4}>4 stars</option>
                    <option value={5}>5 stars</option>
                </select>
            </div>
            <br />

            <button onClick={handleReviewSubmit}>Submit Review</button>
        </div>
    );
}

export default Review;