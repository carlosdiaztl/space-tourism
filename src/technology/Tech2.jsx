import React from 'react'
import imgtech2 from '../assets/technology/image-space-capsule-landscape.jpg'


const Tech2 = () => {
  return (
    <main className="tech"> 
    <section> <h2> 03 SPACE LAUNCH 101</h2></section> 
    
    <div className="tech_div"> 
    <section> <h4>THE TERMINOLOGY… </h4>
    <h1>SPACEPORT </h1>
    <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
    </section>
    <figure>
     <img src={imgtech2} alt="cohete"/>
    </figure>
    </div>
  
  
   
   </main>
  )
}

export default Tech2