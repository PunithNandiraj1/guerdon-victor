import React from 'react';
import './Partners.css';
import alpha from '../../images/alpha.png';
import wsr from '../../images/wspr.png';

const Partners = () => {
  return (
    <div className="partner-container">
        <img src={alpha} alt="" />
        <img src={wsr} alt="" />
    </div>
  )
}

export default Partners