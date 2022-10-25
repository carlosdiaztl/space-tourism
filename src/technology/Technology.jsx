import React, { useState } from "react";
import '../technology/style.scss'
import imgtech1 from '../assets/technology/image-launch-vehicle-landscape.jpg'
import Tech1 from "./Tech1";
import Tech2 from "./Tech2";
import Tech3 from "./Tech3";

const Technology = () => {
  const initial= <Tech1/>
  const [render, seTrender] = useState(initial)
  const changeRender=(r)=>{
    if (r==='1') {
      seTrender(<Tech1/>) 
    }
    if (r==='2') {
      seTrender(<Tech2/>)
      
    }
    if (r==='3') {
      seTrender(<Tech3/>)
    }
  }
  return (
    <>

 {render}

 
 <aside className="tech_aside" >
  <buttons className ="tech_aside_buttons" onClick={()=>{changeRender('1')}}> 1</buttons>
 <buttons className ="tech_aside_buttons" onClick={()=>{changeRender('2')}}> 2</buttons>
 <buttons className ="tech_aside_buttons" onClick={()=>{changeRender('3')}}> 3</buttons>
 </aside>
    </>
 )

};

export default Technology;
