import React from "react";
import "./Features.css";
import frame from "../../images/Arena_Frame.png";
import marketplace from "../../images/icon_VR.svg";

const Features = () => {
  return (
    <div className="feature-container">
      <div className="feature-bg">
        <div className="feature-item">
          
          <h1>MarketPlace</h1>
          <p>
            Built for an all-out war. Spend your $VICT token to buy, sell and
            rent out Guerdon Victor NFTs. Spend your $VICT coins on Energy
            Potions, Victors &amp; Weapon Skins, and other items.
          </p>
          <img src={marketplace} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;


const Feature_content = () => {
    return(
        <>
        
        </>
    )
}

