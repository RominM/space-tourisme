import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import SPACE_DATA from 'services/data/data.json';
import DestNav from 'components/destNav/DestNav';
import DestInfo from 'components/destInfo/DestInfo';
import TitlePage from 'components/titlePage/TitlePage';
import Picture from 'components/picture/Picture';
import './destination.scss';
import './../main.scss';

const Destination = () => {
  const destinations = SPACE_DATA.destinations;
  const paramDestinaton = useParams().name;
  // console.log(paramDestinaton);

  const currentDest = destinations.find(
    (destination) => destination.name === paramDestinaton
  );

  const number = '01';
  const title = 'Pick your destination';

  return (
    <HelmetProvider>
      <Helmet>
        <title>Space Tourisme - Destination</title>
      </Helmet>
      <main className="destination main-page">
        <TitlePage number={number} title={title.toLocaleUpperCase()} />
        <div className="slider">
          <Picture currentData={currentDest} />
          <div className="destination_aside">
            <DestNav destinations={destinations} />
            <DestInfo currentDest={currentDest} />
          </div>
        </div>
      </main>
    </HelmetProvider>
  );
};

export default Destination;
