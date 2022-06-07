import React from 'react';

const PlanetInfo = (props) => {
  
  return (
    <div>
      <h1>{props.name}</h1>
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
