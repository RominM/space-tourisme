import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './../../assets/shared/logo.svg';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo space" width="65" height="65" />
      </Link>
      <nav>
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
              to="/crew/Douglas Hurley"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <span className="header-nmb">02</span>&nbsp;
              <span className="header-title">CREW</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology/Launch vehicle"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <span className="header-nmb">03</span>&nbsp;
              <span className="header-title">TECHNOLOGY</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
