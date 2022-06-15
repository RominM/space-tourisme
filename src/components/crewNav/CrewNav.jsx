import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav-crew.scss';

const CrewNav = (props) => {
  const crewMembers = props.crew;

  return (
    <nav className="nav-crew">
      <ul>
        {crewMembers.map((crewMember) => (
          <li key={crewMember.name}>
            <NavLink
              to={'/crew/' + crewMember.name}
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CrewNav;
