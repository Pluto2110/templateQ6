import React from 'react';

const Rating = ({ value = 0, max = 5 }) => (
  <div className="rating" aria-label={`Rating: ${value} out of ${max}`}>
    {Array.from({ length: max }).map((_, i) => (
      <span key={i} className={i < value ? 'star filled' : 'star'}>★</span>
    ))}
  </div>
);

export default Rating;
