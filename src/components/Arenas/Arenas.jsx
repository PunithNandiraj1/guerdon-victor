import React from 'react';
import './Arenas.css';
import Cave from "../../images/Arena/Cave.jpg";
import Dungeon from "../../images/Arena/Dungeon.jpg";
import Hell from "../../images/Arena/Hell.jpg";
import Snow from "../../images/Arena/Snow.jpg";
import Temple from "../../images/Arena/Temple.jpg";

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