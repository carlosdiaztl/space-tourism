import React from "react";
import { NavLink } from "react-router-dom";
import "./destination.scss";

const Destination = () => {
  
  return (
    <main className="destination">
      
      <div className="destination__second">
        <h1 className="destination__h1">PICK YOUR DESTINATION</h1>
        <figure>{/* <img src="" alt="" /> */}</figure>
      </div>

      <article className="destination__third">
        <div className="destination__fourth">

          <div className="destination__list">
            <ul className="destination__ul">
              <li><button className="destination__nav"> MOON</button></li>
              <li><button> MARS</button></li>
              <li><button> EUROPA</button></li>
              <li><button> TITAN</button></li>
            </ul>
          </div>

          <h2 className="destination__h2">MOON</h2>
          <p className="destination__parrafo">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>

          <div className="destination__final">
            <h3 className="destination__h3">AVG.DISTANCE</h3>
            <h3 className="destination__h3">EST.TRAVEL TIME</h3>
          </div>
          <div className="destination__numbers">
            <p className="destination__p">3 DAYS</p>
            <p className="destination__p">384.400 KM</p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Destination;
