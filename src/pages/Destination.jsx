import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import NavDestination from '../components/NavDestination';
import PlanetInfo from '../components/PlanetInfo';
// import spaceData from './../services/data/data.json';

const Destination = (spaceData) => {
  console.log(spaceData);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Destination</title>
      </Helmet>
      <main className="destination">
        <div className="destination_head">
          <span className="destination_head--nmb">01</span>
          <span className="destination_head--title">PICK YOUR DESTINATION</span>
          {/* <img
            src={destinations[0].images.png}
            alt={destinations[0].name + ' pic'}
          /> */}
        </div>
        <div className="destination-aside">
          <NavDestination />
          <PlanetInfo />
        </div>
      </main>
    </HelmetProvider>
  );
};

export default Destination;
