import React from 'react';
import './hamburger.scss';
const Hamburger = (props) => {
  const showMenuIcon = props.style;

  return (
    <div className="hamburger-menu" style={showMenuIcon}>
      <div className="bar-top"></div>
      <div className="bar-middle"></div>
      <div className="bar-bottom"></div>
    </div>
  );
};

export default Hamburger;
