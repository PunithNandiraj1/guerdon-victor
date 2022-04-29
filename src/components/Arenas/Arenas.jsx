import React from 'react';
import './Arenas.css';
import Cave from "../../images/Arena/Cave.png";
import Dungeon from "../../images/Arena/Dungeon.png";
import Hell from "../../images/Arena/Hell.png";
import Snow from "../../images/Arena/Snow.png";
import Temple from "../../images/Arena/Temple.png";

const Arenas = () => {
  return (
   <div className="arenas-container">
       <h3> Arena NFTs </h3>
       <div className="arenas">
           <img src={Cave} alt="" />
           <img src={Dungeon} alt="" />
           <img src={Hell} alt="" />
           {/* <img src={Snow} alt="" />
           <img src={Temple} alt="" /> */}
       </div>
   </div> 
  )
}

export default Arenas