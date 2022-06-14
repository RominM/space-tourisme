import React from 'react';

const TechInfo = (props) => {
  const currentData = props.currentData;
  const name = currentData.name;
  const descript = currentData.description;

  return (
    <div className="tech-info">
      <span>THE TECHNOLOGY...</span>
      <h1>{name.toUpperCase()}</h1>
      <p>{descript}</p>
    </div>
  );
};

export default TechInfo;
