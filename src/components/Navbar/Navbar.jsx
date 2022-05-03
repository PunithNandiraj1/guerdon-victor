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
          
          <li className="nav-link" > <a href='#about'> <span className="vertical-line"></span> About GV </a></li>
          <li className="nav-link"> <a href='#characters'> <a href='#characters-mobile'> <span className="vertical-line"></span>Character NFTs </a> </a></li>
        
          <li className="nav-link"> <a href='#arena'> <span className="vertical-line"></span>Arena NFTs </a></li>
        
          <li className="nav-link"> <a href='#features'><span className="vertical-line"></span>Key Fetaures </a></li>
        
          <li className="nav-link"> <a href='#mechanics'><span className="vertical-line"></span>GV Mechanics </a></li>
        
          <li className="nav-link"> <a href='#tokenomics'><span className="vertical-line"></span>Tokenomics </a></li>
        
          <li className="nav-link"> <a href='#roadmap'> <a href='#roadmap-mobile'> <span className="vertical-line"></span>Roadmap </a> </a></li>
        
          <li className="nav-link"> <a href='#teams'><span className="vertical-line"></span>Teams &amp; Partners </a></li>
        
          <li className="nav-link"> <a href='#whitepaper'><span className="vertical-line"></span>Whitepaper </a> <span className="vertical-line"></span></li>
        
        </ul>
        <div onClick={handleClick} className="hamburger">
                    {click ? (<AiOutlineClose className='icon' />) : (<AiOutlineMenu className='icon' />)}
                    
                </div>
      </div>
      </div>
    
  );
};

export default Navbar;
