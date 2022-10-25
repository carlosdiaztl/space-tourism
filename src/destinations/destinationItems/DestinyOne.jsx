import React from "react";
import logoMoon from "../../assets/destination/image-moon.webp";

const DestinyOne = () => {
  return (
    <>
      <h2 className="destination__h2">MOON</h2>
      <p className="destination__parrafo">
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>

      <div className="destination__final">
        <h3 className="destination__h3">AVG.DISTANCE</h3>
        <h3 className="destination__h3">EST.TRAVEL TIME</h3>
      </div>
      <div className="destination__numbers">
        <p className="destination__p">3 DAYS</p>
        <p className="destination__p">384.400 KM</p>
      </div>
    </>
  );
};

export default DestinyOne;
