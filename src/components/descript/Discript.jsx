import React from 'react';

const Descript = (props) => {
  const destinations = props.destinations;
  const H1 = destinations.name.toUpperCase();

  return (
    <div>
      <h1>{H1}</h1>
      <p>{destinations.description}</p>
    </div>
  );
};

export default Descript;
