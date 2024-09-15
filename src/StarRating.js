// StarRating.js
import React from 'react';
import './StarRating.css'; // 必要に応じてスタイルを読み込む


const StarRating = ({ totalStars = 5, rating, onRatingChange }) => {
  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          className={`star ${index < rating ? 'filled' : ''}`}
          onClick={() => onRatingChange(index + 1)} // 評価が変更されたときに親に通知
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;