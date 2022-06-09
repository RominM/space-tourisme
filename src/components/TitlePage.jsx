import React from 'react';

const TitlePage = (props) => {
  return (
    <div className="destination-title">
      <span className="destination_head--nmb">{props.number}</span>
      <span className="destination_head--title">{props.title}</span>
    </div>
  );
};

export default TitlePage;
