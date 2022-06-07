import React from 'react';
import data from './../services/data/data.json';
import { NavLink, useParams } from 'react-router-dom';

const NavDestination = () => {
  const destinations = data.destinations;
  let { planet } = useParams;

  return (
    <nav className="nav-planet">
      {planet}
      <ul>
        {destinations.map((destination) => (
          <li key={destination.name}>
            <NavLink to={'/destination/' + destination.name}>
              {destination.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavDestination;
