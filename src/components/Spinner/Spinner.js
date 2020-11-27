import React from 'react';

const Spinner = () => (
  <div
    className={`d-flex justify-content-center align-items-center h-100 py-5`}
  >
    <div className="spinner-grow spinner-border p-3" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export default Spinner;
