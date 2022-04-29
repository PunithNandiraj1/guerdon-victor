import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.svg";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const [click, setClick] = useState(false)
  
  
  const handleClick = () => setClick(!click)
  
  
  return (
    <div className="navbar">
      <div className="navbar-container">
        <img src={Logo} alt="Logo" className="logo" />
        <ul className={click ? 'nav active' : 'nav'}>
          
          <li className="nav-link"> <span className="vertical-line"></span> About GV</li>
          <li className="nav-link"> <span className="vertical-line"></span>Character NFTs</li>
        
          <li className="nav-link"> <span className="vertical-line"></span>Arena NFTs</li>
        
          <li className="nav-link"><span className="vertical-line"></span>Key Fetaures</li>
        
          <li className="nav-link"><span className="vertical-line"></span>GV Mechanics</li>
        
          <li className="nav-link"><span className="vertical-line"></span>Tokenomics</li>
        
          <li className="nav-link"><span className="vertical-line"></span>Roadmap</li>
        
          <li className="nav-link"><span className="vertical-line"></span>Teams &amp; Partners</li>
        
          <li className="nav-link"><span className="vertical-line"></span>Whitepaper <span className="vertical-line"></span></li>
        
        </ul>
        <div onClick={handleClick} className="hamburger">
                    {click ? (<AiOutlineClose className='icon' />) : (<AiOutlineMenu className='icon' />)}
                    
                </div>
      </div>
      </div>
    
  );
};

export default Navbar;
