import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import NavDestination from '../components/NavDestination';
import PlanetInfo from '../components/PlanetInfo';

const Destination = (props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Destination</title>
      </Helmet>
      <main className="destination">
        <div>
          <span>01</span>
          <span>PICK YOUR DESTINATION</span>
          <img src={props.img} alt={props.name + ' pic'} />
        </div>  
        <NavDestination />
        <PlanetInfo />
      </main>
    </HelmetProvider>
  );
};

export default Destination;
