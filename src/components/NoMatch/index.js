import React from 'react';
import { Navigate } from 'react-router-dom';

const NoMatch = () => (
  <div>
    <Navigate to="/" replace={true} />
  </div>
);

export default NoMatch;