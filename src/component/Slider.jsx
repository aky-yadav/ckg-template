import React, { useState } from "react";
import Slide from "./Slide";



function Slider(){
    let sliderarray=[<Slide />,2,3,4,5];
    const [x , setX] = useState(0);
    const goleft = ()=>{
        x===0 ? setX(-100*(sliderarray.length-1)):setX(x + 100); 
    };
    const goRight = () =>{
        x=== -100*(sliderarray.length-1) ? setX(0) : setX(x - 100);
    }; 
    
    return (
        <div className="slider">
           {
               sliderarray.map((item,index)=>{
                   return(
                       <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                           {item}         
                       </div>
                   );
               })
           }
           <button id="goLeft" onClick={goleft}>
               <i className="fas fa-chevron-left"></i>
           </button>
           <button id="goRight" onClick={goRight}>
           <i className="fas fa-chevron-right"></i>
           </button>
        </div>
    )
}

export default Slider;