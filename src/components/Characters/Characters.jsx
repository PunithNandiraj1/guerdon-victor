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
import mazila from "../../images/Characters/Mazila.png";
import Slider from "react-slick";
import rockMobile from "../../images/Rock-mobile.png";

const Characters = () => {

    const settings = {
       
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        spacing:"20px",
        arrows: false
        
      };

  return (
      <>
     
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
                <div className="image-content">
                <img className="logo-gold" src={LogoGold} alt="" />
                        <h3> Victor NFTs</h3>
                        <p> Which one will you choose to take into battle?</p>
                </div>
                <ul>
                    <li><img src={v1} alt="" /></li>
                    <li><img src={v2} alt="" /></li>
                    <li><img src={v3} alt="" /></li>
                    <li><img src={v4} alt="" /></li>
                    <li><img src={v5} alt="" /></li>
                    <li><img src={v6} alt="" /></li>
                    <li><img src={v7} alt="" /></li>
                </ul>

                </div>
            </div>
            
        </div>
        <div className="character-root">
                <img src={rock} alt="" />
            </div>

        <div className="mobile-characters-container">
            <div className="mobile-heading">
                {/* <img src={Heading} alt="" /> */}
            </div>
            <div className="mobile-image-content">
            <img className="logo-gold" src={LogoGold} alt="" />
                        <h3> Victor NFTs</h3>
                        <p className='mobile-image-content-p'> Which one will you choose to take into battle?</p>
            <div className="slider">
            <Slider {...settings}>
          <div>
            <img src={v1} alt="" />
          </div>
          <div>
            <img src={v2} alt="" />
          </div>
          <div>
          <img src={v3} alt="" />
          </div>
          <div>
          <img src={v4} alt="" />
          </div>
          <div>
          <img src={v5} alt="" />
          </div>
          <div>
          <img src={v6} alt="" />
          </div>
          <div>
          <img src={v7} alt="" />
          </div>
          </Slider>
            </div>
            <div className="mobile-character-content">
                <div className="character-name">
                    <h2> Mazila </h2>
                    <div className="vl"></div>
                    <p className="character-p">A beast of unknown origin that lurks in mysterious shadowless valleys.</p>
                </div>
                <div className="character-image">
                    <img src={mazila} alt="" />
                </div>
            </div>
            <div className="rock-mobile">
                <img src={rockMobile} alt="" />
            </div>
           
            </div>

        </div>
        </>
    
  )
}

export default Characters