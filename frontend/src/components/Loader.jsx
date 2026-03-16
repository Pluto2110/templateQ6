import React from 'react';

const Loader = ({ label = 'Loading...' }) => (
  <div className="loader" role="status" aria-live="polite">
    <span className="spinner" />
    <span className="label">{label}</span>
  </div>
);

export default Loader;
