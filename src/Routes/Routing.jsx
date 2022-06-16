import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/* Pages & Components */
import Header from '../components/Layout/header/Header';
import Crew from '../pages/crew/Crew';
import Destination from '../pages/destination/Destination';
import Home from '../pages/home/Home';
import Technology from '../pages/technology/Technology';

const Routing = () => {
  //TODO try to put the useParams() here

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const responsive = {
    showTopNavMenu: windowWidth > 1023,
  };

  return (
    <Router>
      <Header showTopNavMenu={responsive.showTopNavMenu} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination/:name" element={<Destination />} />
        <Route path="/crew/:name" element={<Crew />} />
        <Route path="/technology/:name" element={<Technology />} />
      </Routes>
    </Router>
  );
};

export default Routing;
