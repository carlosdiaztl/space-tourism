import React from 'react'

const DestinyTwo = () => {
    const mapArray= {planeta:'Mars',
    texto:'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    days:'9 months', 
    km:'225 MIL. km'}
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

export default DestinyTwo