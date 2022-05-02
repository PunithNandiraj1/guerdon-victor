import React , {useState} from 'react';
import './Arenas.css';
import Cave from "../../images/Arena/Cave.png";
import Dungeon from "../../images/Arena/Dungeon.png";
import Hell from "../../images/Arena/Hell.png";
import Snow from "../../images/Arena/Snow.png";
import Temple from "../../images/Arena/Temple.png";
import Slider from "react-slick";
import data from './data.js';




const Arenas = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    arrows: false ,
    focusOnSelect: true,
    speed: 500,
    initialSlide: 2,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
          centerPadding: "0",
          
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
  return (
    <div className="arenas-container">
      <div className="arenas-content">
        <h3> Arena NFTs </h3>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {data.map((x,i) => (
            
            <div key={i} className='imageIndex ? "change activeSlide" : "change"'>
                        <img src={x.img}/>
                         <h2 className='arena-name'>{x.title} </h2>
                         
                       </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Arenas



 

