import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  // const showTopNavMenu = props.showTopNavMenu;

  // const showNav = {
  //   display: showTopNavMenu ? 'block' : 'none',
  // };
  // const showMenuIcon = {
  //   display: showTopNavMenu ? 'none' : 'block',
  // };

  return (
    <nav id="nav_container">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            <span className="header-nmb">00</span>&nbsp;
            <span className="header-title">HOME</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/destination/Moon'}
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            <span className="header-nmb">01</span>&nbsp;
            <span className="header-title">DESTINATION</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/crew/Douglas Hurley'}
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            <span className="header-nmb">02</span>&nbsp;
            <span className="header-title">CREW</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/technology/Launch vehicle'}
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            <span className="header-nmb">03</span>&nbsp;
            <span className="header-title">TECHNOLOGY</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
