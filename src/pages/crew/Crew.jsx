import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import SPACE_DATA from 'services/data/data.json';
import CrewInfo from 'components/crewInfo/CrewInfo';
import CrewNav from 'components/crewNav/CrewNav';
import Picture from 'components/picture/Picture';
import TitlePage from 'components/titlePage/TitlePage';
import './../../components/slider/slider.scss';
import './crew.scss';
import './../main.scss';

const Crew = () => {
  const crew = SPACE_DATA.crew;
  const paramCrew = useParams().name;

  const currentCrew = crew.find((crew) => crew.name === paramCrew);

  const number = '02';
  const title = 'Meet your crew';

  return (
    <HelmetProvider>
      <Helmet>
        <title>Space Tourisme - Crew</title>
      </Helmet>
      <main className="crew main-page">
        <TitlePage number={number} title={title.toLocaleUpperCase()} />
        <div className="slider slider-bis">
          <CrewInfo currentData={currentCrew} />
          <div className="crew-aside">
            <Picture currentData={currentCrew} />
          </div>
        </div>
        <CrewNav crew={crew} />
      </main>
    </HelmetProvider>
  );
};

export default Crew;
