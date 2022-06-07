import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Destination = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Destination</title>
      </Helmet>
      <main className="destination">Destination</main>
    </HelmetProvider>
  );
};

export default Destination;
