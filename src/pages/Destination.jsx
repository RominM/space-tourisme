import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import DestiImage from '../components/DestiImage';
import NavDestination from '../components/NavDestination';
import PlanetInfo from '../components/PlanetInfo';
import SPACE_DATA from './../services/data/data.json';

const Destination = () => {
  const destinations = SPACE_DATA.destinations;
  const paramDestinaton = useParams().name;

  const currentDestination = destinations.find(
    (destination) => destination.name === paramDestinaton
  );
  console.log('param in URL >> ', paramDestinaton);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Destination</title>
      </Helmet>
      <main className="destination">
        <div className="destination_head">
          <DestiImage destinations={currentDestination} />
        </div>
        <div className="destination-aside">
          <NavDestination destinations={destinations} />
          <PlanetInfo destinations={currentDestination} />
        </div>
      </main>
    </HelmetProvider>
  );
};

export default Destination;
