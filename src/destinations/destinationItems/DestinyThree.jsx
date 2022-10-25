import React from 'react'

const DestinyThree = () => {
    const mapArray= {planeta:'EUROPA',
    texto:'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    days:'3 years', 
    km:'628 MIL. km'}
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

export default DestinyThree