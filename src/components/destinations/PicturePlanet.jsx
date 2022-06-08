import React from 'react';
import moon from './../../assets/destination/image-moon.png';

const PicturePlanet = (props) => {
  const destinations = props.destinations;
  const image = destinations.images;

  return (
    <>
      <div className="destination-title">
        <span className="destination_head--nmb">01</span>
        <span className="destination_head--title">PICK YOUR DESTINATION</span>
      </div>
      <img
        src={moon}
        alt={destinations.name + ' pic'}
        width={445}
        height={445}
      />
    </>
  );
};

export default PicturePlanet;
