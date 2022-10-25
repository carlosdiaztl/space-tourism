import React from 'react'

const DestinyFour = () => {
    const mapArray= {planeta:'TITAN',
    texto:'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    days:'7 years', 
    km:'1.6 BIL. km'}
  return (
    
    <>
    <h2 className="destination__h2">{mapArray.planeta}</h2>
          <p className="destination__parrafo">{mapArray.texto}</p>

          <div className="destination__final">
            <h3 className="destination__h3">AVG.DISTANCE</h3>
            <h3 className="destination__h3">EST.TRAVEL TIME</h3>
          </div>
          <div className="destination__numbers">
            <p className="destination__p">{mapArray.days}</p>
            <p className="destination__p">{mapArray.km}</p>
          </div>
          </>
  )
}

export default DestinyFour