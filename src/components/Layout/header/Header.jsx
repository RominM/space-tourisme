import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './../../../assets/shared/logo.svg';
import Hamburger from '../hamburger/Hamburger';
import './header.scss';
// import { useEffect } from 'react';

const Header = (props) => {
  const showTopNavMenu = props.showTopNavMenu;
  // const spaceData = props.data;
  // const destination = spaceData.destinations;

  // let nameId = useParams();

  // let nameArray = [];
  // useEffect(() => {
  //   destination.forEach((name) => {
  //     const names = name.name;
  //     nameArray.push(names);
  //   });
  // }, [destination, nameArray]);

  const showNav = {
    display: showTopNavMenu ? 'block' : 'none',
  };
  const showMenuIcon = {
    display: showTopNavMenu ? 'none' : 'block',
  };

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo space tourisme" width="48" height="48" />
      </Link>
      <Hamburger style={showMenuIcon} />
      <nav id="nav_container" style={showNav}>
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
    </header>
  );
};

export default Header;
