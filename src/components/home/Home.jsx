import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logonav from "../../assets/shared/logo.svg";
import fondo1 from "../../assets/home/background-home-desktop.jpg";
import fondo2 from "../../assets/destination/background-destination-desktop.jpg";
import fondo3 from "../../assets/crew/background-crew-desktop.jpg";
import fondo4 from "../../assets/technology/background-technology-desktop.jpg";
import "../home/style.scss";

const Home = () => {
  let initial = fondo1;
  const [fondo, setfondo] = useState(initial);
  const navigate = useNavigate();
  const changef = (po) => {
    if (po === "0") {
      console.log("0");
      setfondo(fondo1);
      navigate("home");
    }
    if (po === "1") {
      console.log("1");
      setfondo(fondo2);
      navigate("destination");
    }
    if (po === "2") {
      console.log("2");
      setfondo(fondo3);
      navigate("crew");
    }
    if (po === "3") {
      console.log("2");
      setfondo(fondo4);
      navigate("technology");
    }
  };
  return (
    <body className="body" style={{ backgroundImage: `url(${fondo})` }}>
      <nav className="navbar">
        <figure>
          <img src={logonav} />{" "}
        </figure>
        <hr />
        <section>
          <ul>
            <li>
              <button
                onClick={() => {
                  changef("0");
                }}
              >
                00 Home{" "}
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  changef("1");
                }}
              >
                01 Destination{" "}
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  changef("2");
                }}
              >
                02 Crew
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  changef("3");
                }}
              >
                03 Technology{" "}
              </button>
            </li>
          </ul>
        </section>
      </nav>
      <Outlet />
    </body>
  );
};

export default Home;
