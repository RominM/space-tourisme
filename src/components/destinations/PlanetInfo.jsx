import React from 'react';

const PlanetInfo = (props) => {
  const destinations = props.destinations;
  const H1 = destinations.name.toUpperCase();
  return (
    <div className="planet-info">
      <h1>{H1}</h1>
      <p>{destinations.description}</p>
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
