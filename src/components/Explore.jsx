import React from 'react';
import { NavLink } from 'react-router-dom';

const Explore = () => {
  return (
    <div className="explore_effect">
      <NavLink to="/destination" className="explore_effect--main">
        <span>EXPLORE</span>
      </NavLink>
      <div className="explore_effect--hover"></div>
    </div>
  );
};

export default Explore;
