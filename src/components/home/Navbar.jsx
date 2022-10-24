import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logonav from "../../assets/shared/logo.svg";
import Home from "./Home";

const Navbar = () => {
  const [first, setfirst] = useState()

  return (
   
    <nav className="nav">
      <figure>
        {" "}
        <img src={logonav} />{" "}
      </figure>
      <section>
        <ul>
          <li>
            <NavLink to={'crew'}>Home

            </NavLink>
          </li>
        </ul>
      </section>
    </nav>
    
  );
};

export default Navbar;
