import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Picture from '../components/destinations/Picture';
import TitlePage from '../components/TitlePage';
import SPACE_DATA from './../services/data/data.json';

const Crew = () => {
  const crew = SPACE_DATA.crew;
  const paramCrew = useParams().name;

  const currentCrew = crew.find((crew) => crew.name === paramCrew);

  const number = '02';
  const title = 'Meet your crew';

  return (
    <HelmetProvider>
      <Helmet>
        <title>Crew</title>
      </Helmet>
      <main className="crew main-page">
        <div className="crew-head">
          <TitlePage number={number} title={title.toLocaleUpperCase()} />
        </div>
        <div className="crew-aside">
          <Picture currentData={currentCrew} />
        </div>
      </main>
    </HelmetProvider>
  );
};

export default Crew;
