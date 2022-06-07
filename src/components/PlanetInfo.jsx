import React from 'react';
import data from './../services/data/data.json';

const PlanetInfo = (props) => {
  const destinations = data.destinations;

  return (
    <div>
      <h1>{destinations[0].name}</h1>
      <p>{props.description}</p>
      <div>
        <span>AVG. DISTANCE</span>
        <span>{props.distance}</span>
      </div>
      <div>
        <span>Est. travel time</span>
        <span>{props.travel}</span>
      </div>
    </div>
  );
};

export default PlanetInfo;
