import React from 'react';
import './Arenas.css';
import Cave from "../../images/Arena/Cave.png";
import Dungeon from "../../images/Arena/Dungeon.png";
import Hell from "../../images/Arena/Hell.png";
import Snow from "../../images/Arena/Snow.png";
import Temple from "../../images/Arena/Temple.png";
import Slider from "react-slick";



const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 2,
  arrows: false ,
  focusOnSelect: true,
  speed: 500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        className: "center",
        centerMode: true,
        infinite: true,
        
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        className: "center",
        centerMode: true,
        centerPadding: "30px",
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        className: "center",
        centerMode: true,
        centerPadding: "30px",
        width: "325px"
      }
    }
  ]
};

const Arenas = () => {
  
    
  
  return (
   <div className="arenas-container">
     <div className="arenas-content">
       <h3> Arena NFTs </h3>
       {/* <div>
       <slider {...config}>
         {data.map((x,i) => {
           return (
           <li  className='image-container'>
              <img src="{x.img}" alt="" />
              <h3>{x.title}</h3>
           </li>
           )
         })}
       </slider>
       </div> */}

<Slider {...settings}>
          <div className='arenas'>
            <img src={Cave}/>
            <h2> Dark Cave </h2>
          </div>
          <div className='arenas'>
          <img src={Dungeon}/>
            <h2> Ancient Dungeon </h2>
          </div>
          <div className='arenas'>
          <img src={Hell}/>
            <h2> Burning Hell </h2>
          </div>
          <div className='arenas'>
          <img src={Snow}/>
            <h2> Freezing Snowland </h2>
          </div>
          <div className='arenas'>
          <img src={Temple}/>
            <h2>Japanese Temple</h2>
          </div>
        </Slider>

   </div>
   </div> 
  )

}

export default Arenas