import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Explore from '../components/explore/Explore';
import Intro from '../components/intro/Intro';

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Space Tourisme - Home</title>
      </Helmet>
      <main className="home">
        <Intro />
        <Explore />
      </main>
    </HelmetProvider>
  );
};

export default Home;
