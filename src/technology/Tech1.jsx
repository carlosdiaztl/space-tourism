import React from 'react'
import imgtech1 from '../assets/technology/image-launch-vehicle-landscape.jpg'
const Tech1 = () => {
  return (
    <main className="tech"> 
    <section> <h2> 03 SPACE LAUNCH 101</h2></section> 
    
    <div className="tech_div"> 
    <section> <h4>THE TERMINOLOGY… </h4>
    <h1>LAUNCH VEHICLE </h1>
    <p> A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
    </section>
    <figure>
     <img src={imgtech1} alt="vuelo"/>
    </figure>
    </div>
  
  
   
   </main>
  )
}

export default Tech1