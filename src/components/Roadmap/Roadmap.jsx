import React from "react";
import "./Roadmap.css";
import q1 from "../../images/Roadmap icons/6.svg";
import q2 from "../../images/Roadmap icons/2.svg";
import q3 from "../../images/Roadmap icons/3.svg";
import q4 from "../../images/Roadmap icons/4.svg";
const Roadmap = () => {
  return (
    <>
  
    <div className="roadmap">
      <div className="roadmap-container">
        <div className="roadmap-heading">
          <h3> Roadmap </h3>
        </div>
        <div className="roadmap-2022">
          <div className="q1-2022">
            <img src={q1} alt="" />
            <div className="q1-content">
              <p> &gt; Formation of Team </p>
              <p> &gt; Brainstorming the idea </p>
              <p> &gt; Project goes live </p>
              <p> &gt; GV Teaser </p>
              
            </div>
          </div>
          <div className="q2-2022">
            <img src={q2} alt="" />
            <div className="q1-content">
              <p> &gt; GV Prototype Launch </p>
              <p> &gt; INO: Victors &amp; Arena NFTs Mint </p>
              <p> &gt; IGO: Buy $VICT Token </p>
              
            </div>
          </div>
          <div className="q3-2022">
            <img src={q3} alt="" />
            <div className="q1-content">
              <p>BETA version release:</p>
               <p> Release the beta version of Q4- Guerdon Victor, version 1.0 2022 for both smartphones and PC.</p>
            </div>
          </div>
          <div className="q4-2022">
            <img src={q4} alt="" />
            <div className="q1-content">
            <p>Version 1.0 Final release: </p>
            <p>The beta version will be terminated and Version 1.0 will be released.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="horizontal-roadmap-line"></div>
      <div className="roadmap-container">
        <div className="roadmap-heading">
          <h3>
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          </h3>
        </div>
        <div className="roadmap-2022">
          <div className="q1-2022">
            <img src={q1} alt="" />
            <div className="q1-content">
            <p>Version 1.0 - VR</p>
            <p>Release of Guerdon Victor Virtual Reality (VR) version</p>
            </div>
          </div>
          <div className="q2-2022">
            <img src={q2} alt="" />
            <div className="q1-content">
             <p>New Gameplay Mode</p>
<p>Team Fighting mode will go live, make a team with your friend or unknown player and fight against the opponent team in Team v/s Team mode.</p>
            </div>
          </div>
          <div className="q3-2022">
            <img src={q3} alt="" />
            <div className="q1-content">
              <p> &gt;  New Victors NFTs mint </p>
              <p> &gt;  Wild Pet NFTs mint </p>
              <p> &gt;  New Arena NFTs mint </p>
        
            </div>
          </div>
          <div className="q4-2022">
            <img src={q4} alt="" />
            <div className="q1-content">
              <p> Version 2.0 Release: </p>
<p> Release of Guerdon Victor version 2.0 with new upgrades and features. </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mobile-roadmap">
      <div className="mobile-roadmap-container">
        <div className="mobile-roadmap-heading">
        <h3> Roadmap </h3>
        </div>
        <div className="mobile-roadmap-flex">
          <div className="mobile-left">
          <div className="mobile-q1-2022">
            <img src={q4} alt="" />
            <div className="mobile-content">
            <p> &gt; Formation of Team </p>
              <p> &gt; Brainstorming the idea </p>
              <p> &gt; Project goes live </p>
              <p> &gt; GV Teaser </p>
            </div>
          </div>
          <div className="mobile-q3-2022">
            <img src={q4} alt="" />
            <div className="mobile-content">
            <p> &gt; GV Prototype Launch </p>
              <p> &gt; INO: Victors &amp; Arena NFTs Mint </p>
              <p> &gt; IGO: Buy $VICT Token </p>
              
            </div>
          </div>
          <div className="mobile-q1-2023">
            <img src={q4} alt="" />
            <div className="mobile-content">
            <p>BETA version release:</p>
               <p> Release the beta version of Q4- Guerdon Victor, version 1.0 2022 for both smartphones and PC.</p>
              
            </div>
          </div>
          <div className="mobile-q3-2023">
            <img src={q4} alt="" />
            <div className="mobile-content">
              <p> Version 2.0 Release: </p>
<p> Release of Guerdon Victor version 2.0 with new upgrades and features. </p>
              
            </div>
          </div>
          

          </div>
          <div className="mobile-vertical-line"></div>
          <div className="right">
          <div className="mobile-q2-2022">
            <img src={q4} alt="" />
            <div className="mobile-content">
            <p>Version 1.0 Final release: </p>
            <p>The beta version will be terminated and Version 1.0 will be released.</p>
            </div>
          </div>
          <div className="mobile-q4-2022">
            <img src={q4} alt="" />
            <div className="mobile-content">
            <p>New Gameplay Mode</p>
<p>Team Fighting mode will go live, make a team with your friend or unknown player and fight against the opponent team in Team v/s Team mode.</p>
              
            </div>
          </div>
          <div className="mobile-q2-2023">
            <img src={q4} alt="" />
            <div className="mobile-content">
            <p> &gt;  New Victors NFTs mint </p>
              <p> &gt;  Wild Pet NFTs mint </p>
              <p> &gt;  New Arena NFTs mint </p>
              
            </div>
          </div>
          <div className="mobile-q4-2023">
            <img src={q4} alt="" />
            <div className="mobile-content">
            <p> Version 2.0 Release: </p>
<p> Release of Guerdon Victor version 2.0 with new upgrades and features. </p>
              
            </div>
          </div>
          

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Roadmap;
