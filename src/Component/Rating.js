// src/components/Rating.js
import React, { useState } from 'react';

const Rating = ({ averageRating, ratingsCount, onRate }) => {
  const [userRating, setUserRating] = useState(0);

  const handleRating = (rating) => {
    setUserRating(rating);
    onRate(rating);
  };

  return (
    <div>
      <h4>Average Rating: {averageRating.toFixed(1)} ({ratingsCount} ratings)</h4>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{ cursor: 'pointer', fontSize: '24px', color: userRating >= star ? 'gold' : 'gray' }}
            onClick={() => handleRating(star)}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default Rating;
