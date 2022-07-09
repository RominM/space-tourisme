import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './hamburger.scss';
const Hamburger = (props) => {
  const showMenuIcon = props.style;
  const [toggle, setToggle] = useState(false);

  const handleMenu = () => {
    setToggle(!toggle);
  };

  const closeMenu = () => {
    const menu = document.querySelector('#nav_resp');
    menu.style.display = 'none';
    setToggle(!toggle);
  };

  return (
    <div>
      <div className="hamburger-menu" style={showMenuIcon} onClick={handleMenu}>
        <div className={toggle ? 'toggle-top' : 'bar-top'}></div>
        <div className={toggle ? 'toggle-middle' : 'bar-middle'}></div>
        <div className={toggle ? 'toggle-bottom' : 'bar-bottom'}></div>
      </div>
      {toggle && (
        <nav id="nav_resp">
          <ul>
            <li onClick={() => closeMenu()}>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                <span className="header-nmb">00</span>&nbsp;
                <span className="header-title">HOME</span>
              </NavLink>
            </li>
            <li onClick={() => closeMenu()}>
              <NavLink
                to={'/destination/Moon'}
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                <span className="header-nmb">01</span>&nbsp;
                <span className="header-title">DESTINATION</span>
              </NavLink>
            </li>
            <li onClick={() => closeMenu()}>
              <NavLink
                to={'/crew/Douglas Hurley'}
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                <span className="header-nmb">02</span>&nbsp;
                <span className="header-title">CREW</span>
              </NavLink>
            </li>
            <li onClick={() => closeMenu()}>
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
      )}
    </div>
  );
};

export default Hamburger;
