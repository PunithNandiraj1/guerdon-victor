import React from "react";
import "./Mechanics.css";
import vict from "../../images/icon_PC.svg";

const Mechanics = () => {
  return (
    <div className="mechanics-container">
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
            <h5>
              It will serve as the governance token and will facilitate all the
              transactions and rewards that the game will be based upon.
            </h5>
          </div>
        </div>
        <div className="token-flex">
          <img src={vict} alt="" />
          <div className="token-content">
            <h2>$Blood Token</h2>
            <div className="hr-line"></div>
            <h5>
              It will serve as the governance token and will facilitate all the
              transactions and rewards that the game will be based upon.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mechanics;
