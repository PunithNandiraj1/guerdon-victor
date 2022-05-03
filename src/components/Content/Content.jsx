import React from "react";
import './Content.css';
import frame from "../../images/Arena_Frame.png";

const Content = () => {
  return (
      <>
     

    <div className="content-container" id='about'>
        <div className="content">
      <div className="content-text">
        <p>
          Bringing you the first-ever PvP short-period lethal fighting game
          filled with elements of early arcade gaming on the blockchain gaming
          universe.
        </p>{" "}
        <br />
        <p>
          Cut down enemies, drink magical potions, launch deadly attacks at your
          opponents and use your skills to do whatever it takes to survive and.
          Your lives are not the only thing on the line here...
        </p>
      </div>
      <div className="content-image">
          <img src={frame} alt="" />
      </div>
      </div>
    </div>
    </>
    
  );
};

export default Content;
