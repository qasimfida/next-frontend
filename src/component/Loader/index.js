import React from 'react';
import { Spinner } from 'react-bootstrap';
function Loader() {
  return (
    <div className="loader">
      <Spinner animation="grow" variant="warning" />
    </div>
  );
}

export default Loader;
