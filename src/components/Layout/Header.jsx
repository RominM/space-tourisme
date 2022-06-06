import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/shared/logo.svg';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo space" />
      <nav>
        <ul>
          <li>
            <Link to="/">
              <span>00</span>
              <span>HOME</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>01</span>
              <span>DESTINATION</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>02</span>
              <span>CREAW</span>
            </Link>
          </li>
          <li>
            <Link to="/">
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
