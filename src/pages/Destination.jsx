import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import PicturePlanet from '../components/destinations/PicturePlanet';
import NavDestination from '../components/destinations/NavDestination';
import PlanetInfo from '../components/destinations/PlanetInfo';
import SPACE_DATA from './../services/data/data.json';

const Destination = () => {
  const destinations = SPACE_DATA.destinations;
  const paramDestinaton = useParams().name;

  const currentDestination = destinations.find(
    (destination) => destination.name === paramDestinaton
  );

  return (
    <HelmetProvider>
      <Helmet>
        <title>Destination</title>
      </Helmet>
      <main className="destination">
        <div className="destination_head">
          <PicturePlanet destinations={currentDestination} />
        </div>
        <div className="destination_aside">
          <NavDestination destinations={destinations} />
          <PlanetInfo destinations={currentDestination} />
        </div>
      </main>
    </HelmetProvider>
  );
};

export default Destination;
