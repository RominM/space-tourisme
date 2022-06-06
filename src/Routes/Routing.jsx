import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Crew from '../pages/Crew';
import Destination from '../pages/Destination';
import Home from '../pages/Home';
import Technology from '../pages/Technology';

const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  );
};

export default Routing;
