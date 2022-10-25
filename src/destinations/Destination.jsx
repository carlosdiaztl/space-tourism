import React from "react";
import { NavLink } from "react-router-dom";
import "./destination.scss";
import DestinyOne from "./destinationItems/DestinyOne";
import DestinyTwo from "./destinationItems/DestinyTwo";
import DestinyThree from "./destinationItems/DestinyThree";
import DestinyFour from "./destinationItems/DestinyFour";
import { useState } from "react";
import logoMoon from '../assets/destination/image-moon.webp';
import logoMars from '../assets/destination/image-mars.webp';
import Europa from '../assets/destination/image-europa.webp';
import Titan from '../assets/destination/image-titan.webp';


const Destination = () => {
  const firstPlanet = <DestinyOne/>
  const [planets , setPlanets] = useState(firstPlanet);
  
const firstImagePlante = logoMoon;
  const [imagePlanet, setImagePlanet] = useState(firstImagePlante)

  const changesPlanets = (p) =>{
    if(p==='moon'){
      setPlanets(<DestinyOne/>)
      setImagePlanet(logoMoon)
    }
    if(p==='mars'){
      setPlanets(<DestinyTwo/>)
      setImagePlanet(logoMars)
    }
    if(p==='europa'){
      setPlanets(<DestinyThree/>)
      setImagePlanet(Europa)
    }
    if(p==='titan'){
      setPlanets(<DestinyFour/>)
      setImagePlanet(Titan)
    }
  }
  return (
    <main className="destination">
      
      <div className="destination__second">
        <h1 className="destination__h1"><span>01 </span>PICK YOUR DESTINATION</h1>
        <figure><img src={imagePlanet} alt="Logo Moon" /></figure>
      </div>

      <article className="destination__third">
        <div className="destination__fourth">

          <div className="destination__list">
            <ul className="destination__ul">
              <li><button className="destination__nav" onClick={()=>{changesPlanets('moon')}}> MOON</button></li>
              <li><button className="destination__nav" onClick={()=>{changesPlanets('mars')}}> MARS</button></li>
              <li><button className="destination__nav" onClick={()=>{changesPlanets('europa')}}> EUROPA</button></li>
              <li><button className="destination__nav" onClick={()=>{changesPlanets('titan')}}> TITAN</button></li>
            </ul>
          </div>

          {planets}
        </div>
      </article>
    </main>
  );
};

export default Destination;
