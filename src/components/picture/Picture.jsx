import React from 'react';

const Picture = (props) => {
  const currentData = props.currentData;
  const picFormat = currentData.images;

  return (
    <>
      <img
        src={picFormat.png ? picFormat.png : picFormat.portrait}
        alt={currentData.name + ' pic'}
        width={445}
        height={445}
      />
    </>
  );
};

export default Picture;
