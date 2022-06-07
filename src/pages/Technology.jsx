import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Technology = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Technology</title>
      </Helmet>
      <main className="technology">Technology</main>
    </HelmetProvider>
  );
};

export default Technology;
