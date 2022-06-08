import React from 'react';
import { NavLink } from 'react-router-dom';

const NavDestination = (props) => {
  const destinations = props.destinations;

  return (
    <nav className="nav-planet">
      <ul>
        {destinations.map((destination) => (
          <li key={destination.name}>
            <NavLink
              to={'/destination/' + destination.name}
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              {destination.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavDestination;
