import React from 'react';

const DestiImage = (props) => {
  const destinations = props;

  return (
    <>
      <span className="destination_head--nmb">01</span>
      <span className="destination_head--title">PICK YOUR DESTINATION</span>
      <img src="" alt={destinations.name} />
    </>
  );
};

export default DestiImage;
