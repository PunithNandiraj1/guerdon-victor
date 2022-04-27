import React from 'react';
import './Team.css';
import shahid from "../../images/team_avatars/shahid.svg";
import suhail from "../../images/team_avatars/suhail.svg";
import raunak from "../../images/team_avatars/raunak.svg";
import punith from "../../images/team_avatars/punith.svg";
import yuvna from "../../images/team_avatars/yuvna.svg";
import nikhil from "../../images/team_avatars/nikhil.svg";
import reddy from "../../images/team_avatars/reddy.svg";
import william from "../../images/team_avatars/william.svg";


const Team = () => {
  return (
    <div className="team-container">
        <h1> TEAM &amp; PARTNERS</h1>
        <div className="team-content">
            <div className="team-item">
                <img src={shahid} alt="" />
                <img src={suhail} alt="" />
            </div>
            <div className="team-item">
                <img src={raunak} alt="" />
                <img src={punith} alt="" />
            </div>
            
        </div>
        <div className="team-content">
            <div className="team-item">
                <img src={yuvna} alt="" />
                <img src={nikhil} alt="" />
            </div>
            <div className="team-item">
                <img src={reddy} alt="" />
                <img src={william} alt="" />
            </div>
            
        </div>

    </div>
  )
}

export default Team