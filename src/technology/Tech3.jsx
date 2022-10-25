import React from 'react'
import imgtech3 from '../assets/technology/image-spaceport-landscape.jpg'


const Tech3 = () => {
  return (
    <main className="tech"> 
    <section> <h2> 03 SPACE LAUNCH 101</h2></section> 
    
    <div className="tech_div"> 
    <section> <h4>THE TERMINOLOGY… </h4>
    <h1>SPACE CAPSULE </h1>
    <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
    </section>
    <figure>
     <img src={imgtech3} alt="cohete"/>
    </figure>
    </div>
  
  
   
   </main>
  )
}

export default Tech3