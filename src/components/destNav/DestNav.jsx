import React from 'react';
import { NavLink } from 'react-router-dom';
import './navDest.scss';

const DestNav = (props) => {
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
              {destination.name.toUpperCase()}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DestNav;
