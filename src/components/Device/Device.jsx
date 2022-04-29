import React from 'react';
import './Device.css';
import video from "../../videos/bg.mp4";
import AAA from "../../images/AAA.svg";
import Pc from "../../images/icon_PC.svg";
import Mobile from "../../images/icon_Mobile.svg";
import Vr from "../../images/icon_VR.svg";

const Device = () => {
  return (
      <>
        <div className="device-container">
        {/* <video autoPlay loop muted id="video">
          <source src={video} type="video/mp4"/>
        </video> */}
        <div className="content-device">
            <img className="aaa" src={AAA} alt="" />
            <div className="vertical-divider"></div>
            <div className="device-text">
              
            <h5> A unique skill-based Fighting Game with </h5>
            <h2> 2 Different Earning Models </h2>
            <div className='horizontal-line' />
            <h3>P2E(Play-to-Earn) | K2E(Kill-to-Earn) </h3>
            <div className='horizontal-line' />
            <div className="social-content">
                <h4> Killing soon on </h4>
                <img src={Pc} alt="" />
                <img src={Mobile} alt="" />
                <img src={Vr} alt="" />
            </div>

            </div>
            
           
        </div>
    </div>
      </>
  
  )
}

export default Device