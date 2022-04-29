import React from 'react';
import './Characters.css';
import Heading from "../../images/Victor-Title.svg";
import Durab from "../../images/Characters/Durab.png";
import v1 from "../../images/Characters/V_01.png";
import v2 from "../../images/Characters/V_02.png";
import v3 from "../../images/Characters/V_03.png";
import v4 from "../../images/Characters/V_04.png";
import v5 from "../../images/Characters/V_05.png";
import v6 from "../../images/Characters/V_06.png";
import v7 from "../../images/Characters/V_07.png";
import LogoGold from "../../images/Logo_Shadow.png";
import rock from "../../images/Rock.png";

const Characters = () => {
  return (
    <div className="characters-container">
        <div className="heading">
            <img src={Heading} alt="" />
        </div>
        <div className="characters-flex">
            <div className="character-item">
                <img className = "durab" src={Durab} alt="" />
                <div className="mazila-content">
                    <h3> Mazila </h3>
                    <p> A beast of unknown origin that lurks in mysterious shadowless valleys.</p>
                </div>
            </div>
            <div className="characters-circle">
                <div className="two-characters">
                    <img className="v1" src={v1} alt="" />
                    <img className="v2" src={v2} alt="" />
                </div>
                <div className="two-text-characters">
                    <img className="v7" src={v7} alt="" />
                    <img className="logo-gold" src={LogoGold} alt="" />
                     
                    
                    <img className="v3" src={v3} alt="" />
                    </div>
                    <div className="image-content">
                        <h3> Victor NFTs</h3>
                        <p> Which one will you choose <br/>to take into battle?</p>
                        </div>
                    <div className="two-characters2">
                    <img className="v4" src={v4} alt="" />
                    <img className="v6" src={v6} alt="" />
                </div>
                <div className="one-character">
                    <img className="v5" src={v5} alt="" />
                </div>
                </div>
            </div>
            <div className="character-root">
                <img src={rock} alt="" />
            </div>
        </div>
    
  )
}

export default Characters