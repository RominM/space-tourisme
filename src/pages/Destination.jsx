import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Picture from '../components/destinations/Picture';
import NavDestination from '../components/destinations/NavDestination';
import PlanetInfo from '../components/destinations/PlanetInfo';
import SPACE_DATA from './../services/data/data.json';
import TitlePage from '../components/TitlePage';

const Destination = () => {
  const destinations = SPACE_DATA.destinations;
  const paramDestinaton = useParams().name;

  const currentDestination = destinations.find(
    (destination) => destination.name === paramDestinaton
  );

  const number = '01';
  const title = 'Pick your destination';

  return (
    <HelmetProvider>
      <Helmet>
        <title>Destination</title>
      </Helmet>
      <main className="destination main-page">
        <div className="destination_head">
          <TitlePage number={number} title={title.toLocaleUpperCase()} />
          <Picture currentData={currentDestination} />
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
