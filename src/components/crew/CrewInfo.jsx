import React from 'react';

const CrewInfo = (props) => {
  const currentData = props.currentData;
  const role = currentData.role;
  const name = currentData.name;
  const bio = currentData.bio;

  console.log();
  return (
    <div className="crew-info">
      <h2>{role.toUpperCase()}</h2>
      <h1>{name.toUpperCase()}</h1>
      <p>{bio}</p>
    </div>
  );
};

export default CrewInfo;
