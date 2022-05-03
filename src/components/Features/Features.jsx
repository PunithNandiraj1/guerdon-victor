import React from "react";
import "./Features.css";
import frame from "../../images/Features_Frame.png";
import gamemode from "../../images/Features/Game-Modes.png";
import marketplace from "../../images/Features/Marketplace.png";
import Staking from "../../images/Features/Staking.png";
import victor from "../../images/Features/Victor-Wheel.png";
import energy from "../../images/Features/Energy-Potion.png";
import graphics from "../../images/Features/High-Graphics.png";




const Features = () => {
  return (
    <div className="feature-container" id='features'>
      <div className="feature-item-flex">
      <div className="feature-item">
        
          <img  className = "frame" src={frame} alt="" />
        
        <div className="feature-item-content">
        <h1>Game modes</h1>
          <p>
          Kill one or kill them all. A bloodbath awaits you. Choose between PvP, PvE, Team battles, and All-out tournament modes.
          </p>
          <img src={gamemode} style={{marginTop: "-1rem"}} alt="" />
          </div>
      </div>
      <div className="feature-item">
        
          <img className = "frame" src={frame} alt="" />
        
        <div className="feature-item-content">
        <h1>MarketPlace</h1>
          <p>
            Built for an all-out war. Spend your $VICT token to buy, sell and
            rent out Guerdon Victor NFTs. Spend your $VICT coins on Energy
            Potions, Victors &amp; Weapon Skins, and other items.
          </p>
          <img src={marketplace} alt="" />
          </div>
      </div>
      <div className="feature-item">
        
          <img className = "frame" src={frame} alt="" />
        
        <div className="feature-item-content">
        <h1>Staking</h1>
          <p>
          The most heated and awaited part about owning $VICT Tokens. Stake your $VICT tokens to earn more rewards!.
          </p>
          <img src={Staking} style={{marginTop: "-1rem"}} alt="" />
          </div>
      </div>
      </div>

      <div className="feature-item-section">

      <div className="feature-item-flex">
      <div className="feature-item">
        
          <img className = "frame" src={frame} alt="" />
        
        <div className="feature-item-content">
        <h1>VICTOR WHEEL</h1>
          <p>
          Both tokens can be used to spin the victor wheel, it will give players a chance of winning various prizes such as weapons, skins, $VICT tokens, extra fights, etc.
          </p>
          <img src={victor} style={{marginTop: "-0.5rem"}} alt="" />
          </div>
      </div>
      <div className="feature-item">
        
          <img className = "frame" src={frame} alt="" />
        
        <div className="feature-item-content">
        <h1>ENERGY POTION</h1>
          <p>
          The 'Vitamin E' elixir will be an in-game utility that players may take to boost their health by a certain percentage for a single fight.
          </p>
          <img src={energy} style={{marginTop: "-1rem"}} alt="" />
          </div>
      </div>
      <div className="feature-item">
        
          <img className = "frame" src={frame} alt="" />
        
        <div className="feature-item-content">
        <h1>HIGH-END GRAPHICS</h1>
          <p>
          The characters and game graphics quality is far better than any other blockchain game.
          </p>
          <img src={graphics} style={{marginTop: "-1rem"}} alt="" />
          </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Features;




