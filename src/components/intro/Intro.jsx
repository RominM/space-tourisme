import React from 'react';

const Intro = () => {
  const H1 = 'Space';
  const H5 = 'So, you want to travel to';

  return (
    <div className="intro">
      <h5>{H5.toLocaleUpperCase()}</h5>
      <br />
      <h1>{H1.toLocaleUpperCase()}</h1>
      <br />
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
  );
};

export default Intro;
