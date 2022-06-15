import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import SPACE_DATA from '../../services/data/data.json';
import TechInfo from '../../components/techInfo/TechInfo';
import TechNav from '../../components/techNav/TechNav';
import TitlePage from '../../components/titlePage/TitlePage';
import Picture from '../../components/picture/Picture';
import './tech-aside.scss';
import './technology.scss';
import './../main.scss';

const Technology = () => {
  const tech = SPACE_DATA.technology;
  const paramTech = useParams().name;

  const currentTech = tech.find((technology) => technology.name === paramTech);

  const number = '03';
  const title = 'Space launch 101';

  return (
    <HelmetProvider>
      <Helmet>
        <title>Space Tourisme - Technology</title>
      </Helmet>
      <main className="technology main-page">
        <TitlePage number={number} title={title.toLocaleUpperCase()} />
        <div className="slider">
          <TechInfo currentData={currentTech} />
          <div className="tech-aside">
            <Picture currentData={currentTech} />
          </div>
        </div>
        <TechNav tech={tech} />
      </main>
    </HelmetProvider>
  );
};

export default Technology;
