import React from "react";
import "./Mechanics.css";
import vict from "../../images/mechanics-img1.png";
import blood from "../../images/Blood-Token.png";

const Mechanics = () => {
  return (
    <div className="mechanics-container" id='mechanics'>
      <div className="game-content">
        <h2>Game Mechanics </h2>
        <p>
          Bring your Victors into battle and use their lethal weapons and
          superpowers to defeat your opponent and go for the kill. A duelist
          fantasy that allows you to immerse yourself in a unique KILL-TO-EARN
          mechanism. Use your abilities to slash out at your opponents and steal
          their $VICT tokens.
        </p>
      </div>
      <div className="game-content-flex">
        <div className="token-flex">
          <img src={vict} alt="" />
          <div className="token-content">
            <h2>$VICT Token</h2>
            <div className="hr-line"></div>
            <p>
              It will serve as the governance token and will facilitate all the
              transactions and rewards that the game will be based upon.
            </p>
          </div>
        </div>
        <div className="token-flex">
          <img src={blood} alt="" />
          <div className="token-content">
            <h2>$Blood Token</h2>
            <div className="hr-line"></div>
            <p>
              It will serve as the governance token and will facilitate all the
              transactions and rewards that the game will be based upon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mechanics;
