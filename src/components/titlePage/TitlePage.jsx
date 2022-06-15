import React from 'react';
import './title-page.scss';

const TitlePage = (props) => {
  return (
    <div className="title-page">
      <span className="title-page--nmb">{props.number}</span>
      <span className="title-page--title">{props.title}</span>
    </div>
  );
};

export default TitlePage;
