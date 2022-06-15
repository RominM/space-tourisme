import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Crew from '../pages/crew/Crew';
import Destination from '../pages/destination/Destination';
import Home from '../pages/home/Home';
import Technology from '../pages/technology/Technology';

const Routing = () => {
  //TODO try to put the useParams() here
  return (
    <Router>
      <Header />
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
