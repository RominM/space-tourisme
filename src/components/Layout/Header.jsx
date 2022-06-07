import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/shared/logo.svg';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo space" width="65" height="65" />
      <nav>
        <ul>
          <li>
            <Link to="/">
              <span>00</span>
              <span>HOME</span>
            </Link>
          </li>
          <li>
            <Link to="/destination">
              <span>01</span>
              <span>DESTINATION</span>
            </Link>
          </li>
          <li>
            <Link to="/crew">
              <span>02</span>
              <span>CREW</span>
            </Link>
          </li>
          <li>
            <Link to="/technology">
              <span>03</span>
              <span>TECHNOLOGY</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
