import React from 'react';
import Descript from '../descript/Discript';
import './planetInfo.scss';
const DestInfo = (props) => {
  const destinations = props.currentDest;
  console.log(props);
  return (
    <div className="planet-info">
      <Descript destinations={destinations} />
      <div className="info-travel">
        <div>
          <span className="font-a">AVG. DISTANCE</span>
          <span className="font-b">{destinations.distance}</span>
        </div>
        <div>
          <span className="font-a">Est. travel time</span>
          <span className="font-b">{destinations.travel}</span>
        </div>
      </div>
    </div>
  );
};

export default DestInfo;
