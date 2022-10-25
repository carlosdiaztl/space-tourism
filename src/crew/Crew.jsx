import React from "react";
import { useState } from "react";
import "../crew/style.scss";
import imgCrew1 from "../assets/crew/image-douglas-hurley.png";
import imgCrew2 from "../assets/crew/image-mark-shuttleworth.png";
import imgCrew3 from "../assets/crew/image-victor-glover.png";
import imgCrew4 from "../assets/crew/image-anousheh-ansari.png";

const Crew = () => {
  const [img, setImg] = useState(imgCrew1);
  const crew1 = (
    <>
      <p className="crew__commander">COMMANDER</p>
      <h2 className="crew__h2">DOUGLAS HURLEY</h2>
      <p className="crew__parrafo">
        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
        and former NASA astronaut. He launched into space for the third time as
        commander of Crew Dragon Demo-2.
      </p>
    </>
  );
  const crew2 = (
    <>
      <p className="crew__commander">Mission Specialist</p>
      <h2 className="crew__h2">MARK SHUTTLEWORTH</h2>
      <p className="crew__parrafo">
        Mark Richard Shuttleworth is the founder and CEO of Canonical, the
        company behind the Linux-based Ubuntu operating system. Shuttleworth
        became the first South African to travel to space as a space tourist.
      </p>
    </>
  );
  const crew3 = (
    <>
      <p className="crew__commander">PILOT</p>
      <h2 className="crew__h2">Victor Glover</h2>
      <p className="crew__parrafo">
        Pilot on the first operational flight of the SpaceX Crew Dragon to the
        International Space Station. Glover is a commander in the U.S. Navy
        where he pilots an F/A-18.He was a crew member of Expedition 64, and
        served as a station systems flight engineer.
      </p>
    </>
  );
  const crew4 = (
    <>
      <p className="crew__commander">Flight Engineer</p>
      <h2 className="crew__h2">Anousheh Ansari</h2>
      <p className="crew__parrafo">
        Anousheh Ansari is an Iranian American engineer and co-founder of Prodea
        Systems. Ansari was the fourth self-funded space tourist, the first
        self-funded woman to fly to the ISS, and the first Iranian in space.
      </p>
    </>
  );

  const [info, setInfo] = useState(crew1);
  const changeInfo = (i) => {
    if (i === "crew1") {
      setImg(imgCrew1);
      setInfo(crew1);
    }
    if (i === "crew2") {
      setImg(imgCrew2);
      setInfo(crew2);
    }
    if (i === "crew3") {
      setImg(imgCrew3);
      setInfo(crew3);
    }
    if (i === "crew4") {
      setImg(imgCrew4);
      setInfo(crew4);
    }
  };

  return (
    <>
      <main className="crew">
        <div className="crew__second">
          <figure>
            <img src={img} alt="" />
          </figure>
        </div>

        <article className="crew__third">
          <div className="crew__fourth">
            <h1 className="crew__h1">
              <p className="crew__commander">02</p>MEET YOUR CREW
            </h1>
            {info}
            <div className="crew__list">
              <ul className="crew__ul">
                <li>
                  <button
                    onClick={() => {
                      changeInfo("crew1");
                    }}
                    className="crew__nav1"
                  >
                    {" "}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      changeInfo("crew2");
                    }}
                    className="crew__nav"
                  >
                    {" "}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      changeInfo("crew3");
                    }}
                    className="crew__nav"
                  >
                    {" "}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      changeInfo("crew4");
                    }}
                    className="crew__nav"
                  >
                    {" "}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default Crew;
