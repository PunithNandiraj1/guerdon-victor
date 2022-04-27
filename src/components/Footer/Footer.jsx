import React from 'react';
import './Footer.css';
import { SiTelegram , SiYoutube , SiFacebook , SiDiscord , SiInstagram ,SiGitbook, SiTwitter} from 'react-icons/si';
import footerLogo from '../../images/footer-logo.png';
import PC from "../../images/icon_PC.svg";
import Mobile from "../../images/icon_Mobile.svg";
import VR from "../../images/icon_VR.svg";


const Footer = () => {
  return (
    <div className="footer-container">
        <img className = "footer-logo" src={footerLogo} alt="" />
        <div className="devices">
            <h5>Killing soon on -</h5>
            <img src={PC} alt="" />
            <img src={Mobile} alt="" />
            <img src={VR} alt="" />
        </div>
        <div className="social-media">
            <h5>Follow us -</h5>
            <SiTelegram style={{fontSize: "1.5em", paddingRight:"5px" }}/>
            <SiTwitter style={{fontSize: "1.5em", paddingRight:"5px" }}/>
            <SiYoutube style={{fontSize: "1.5em", paddingRight:"5px" }}/>
            <SiFacebook style={{fontSize: "1.5em", paddingRight:"5px" }}/>
            <SiDiscord style={{fontSize: "1.5em", paddingRight:"5px" }}/>
            <SiInstagram style={{fontSize: "1.5em", paddingRight:"5px" }}/>
            <SiGitbook style={{fontSize: "1.5em", paddingRight:"5px" }}/>
        </div>
    </div>
  )
}

export default Footer