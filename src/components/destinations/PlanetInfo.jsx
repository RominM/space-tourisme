import React from 'react';
import Descript from '../Discript';

const PlanetInfo = (props) => {
  const destinations = props.destinations;
  const H1 = destinations.name.toUpperCase();
  return (
    <div className="planet-info">
      <Descript destinations={destinations} />
      <div className="info-travel">
        <div>
          <span className="font-a">AVG. DISTANCE</span>
          <span className="font-b">{destinations.distance}</span>
        </div>
        <div>
          <span className="font-a">Est. travel time</span>
          <span className="font-b">{destinations.travel}</span>
        </div>
      </div>
    </div>
  );
};

export default PlanetInfo;
