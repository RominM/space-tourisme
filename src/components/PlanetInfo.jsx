import React, { useState } from 'react';

const PlanetInfo = (props) => {
  const destinations = props.destinations;
  console.log(destinations);
  return (
    <div>
      <h1>{destinations.name}</h1>
      <p>{destinations.description}</p>
      <div>
        <span>AVG. DISTANCE</span>
        <span>{destinations.distance}</span>
      </div>
      <div>
        <span>Est. travel time</span>
        <span>{destinations.travel}</span>
      </div>
    </div>
  );
};

export default PlanetInfo;
