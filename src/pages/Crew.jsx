import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import CrewInfo from '../components/crew/CrewInfo';
import NavCrew from '../components/crew/NavCrew';
import Picture from '../components/Picture';
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
        <TitlePage number={number} title={title.toLocaleUpperCase()} />
        <div className="slider">
          <CrewInfo currentData={currentCrew} />
          <div className="crew-aside">
            <Picture currentData={currentCrew} />
          </div>
        </div>
        <NavCrew crew={crew} />
      </main>
    </HelmetProvider>
  );
};

export default Crew;
