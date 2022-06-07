import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Crew = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Crew</title>
      </Helmet>
      <main className="crew">Crew</main>
    </HelmetProvider>
  );
};

export default Crew;
