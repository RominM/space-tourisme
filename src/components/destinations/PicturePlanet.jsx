import React from 'react';
import TitlePage from '../TitlePage';

const PicturePlanet = (props) => {
  const destinations = props.destinations;
  const image = destinations.images.png;

  const number = '01';
  const title = 'PICK YOUR DESTINATION';

  return (
    <>
      <TitlePage number={number} title={title} />
      <img
        src={image}
        alt={destinations.name + ' pic'}
        width={445}
        height={445}
      />
    </>
  );
};

export default PicturePlanet;
