import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Picture from '../components/Picture';
import NavTech from '../components/technology/NavTech';
import TechInfo from '../components/technology/TechInfo';
import TitlePage from '../components/TitlePage';
import SPACE_DATA from './../services/data/data.json';

const Technology = () => {
  const tech = SPACE_DATA.technology;
  const paramTech = useParams().name;

  const currentTech = tech.find((technology) => technology.name === paramTech);

  const number = '03';
  const title = 'Space launch 101';

  return (
    <HelmetProvider>
      <Helmet>
        <title>Technology</title>
      </Helmet>
      <main className="technology main-page">
        <TitlePage number={number} title={title.toLocaleUpperCase()} />
        <div className="slider">
          <TechInfo currentData={currentTech} />
          <div className="tech-aside">
            <Picture currentData={currentTech} />
          </div>
        </div>
        <NavTech tech={tech} />
      </main>
    </HelmetProvider>
  );
};

export default Technology;
