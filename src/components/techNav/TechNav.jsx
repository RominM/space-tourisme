import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav-tech.scss';

const TechNav = (props) => {
  const techs = props.tech;

  return (
    <nav className="nav-tech">
      <ul>
        {techs.map((tech, index) => (
          <li key={tech.name}>
            <NavLink
              to={'/technology/' + tech.name}
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              {index + 1}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TechNav;
