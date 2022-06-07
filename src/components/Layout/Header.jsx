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
              <strong>00</strong>&nbsp;
              <span>HOME</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destination"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <strong>01</strong>&nbsp;
              <span>DESTINATION</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/crew"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <strong>02</strong>&nbsp;
              <span>CREW</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <strong>03</strong>&nbsp;
              <span>TECHNOLOGY</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
