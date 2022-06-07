import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from 'react-router-dom';
import Header from '../components/Layout/Header';
import Crew from '../pages/Crew';
import Destination from '../pages/Destination';
import Home from '../pages/Home';
import Technology from '../pages/Technology';

// import spaceData from './../services/data/data.json';

const Routing = () => {
  let { currentPlanet = 'Moon' } = useParams();

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/destination/:planet"
          // element={<Destination spaceData={spaceData} />}
        >
          <Route path=":currentPlanet" element={<Destination />} />
        </Route>
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  );
};

export default Routing;
